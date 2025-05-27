import { memo } from 'react';
import { useCallback, useEffect, useState } from "react";
import findCenter from '../../utils/findCenter';
import './DraggableImage.styles.css'
import { useBurgerLayers } from '../../hooks/useBurgerLayers';

const DraggableImage = ({id, idBase, src}) => {

    const [bounding, setBounding] = useState(null);
    const [selected, setSelected] = useState(false);
    const {updateBounding, removeLayer, sortLayers, deliveryRef} = useBurgerLayers();

    const handleKeydown = useCallback((event) => {
        if (event.key === "Backspace") {
            removeLayer(id);
        }
    }, [id, removeLayer]);

    useEffect(() => {
        if (!selected) return;

        document.addEventListener("keydown", handleKeydown);

        // Cleanup
        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, [selected, handleKeydown]);

    const updateImageBounding = useCallback((customBounding) => {

        let currBounding;
        if (customBounding) {
            currBounding = customBounding;
        } else {
            const imgElem = document.getElementById(id);
            currBounding = customBounding ?? imgElem.getBoundingClientRect().toJSON();
        }

        const centerX = findCenter(currBounding, "x");
        const centerY = findCenter(currBounding, "y");

        const newBounding = {...currBounding, centerX, centerY};
        setBounding(newBounding)
        updateBounding(id, newBounding)
    }, [id, updateBounding])

    const updateImagePosition = useCallback(() => {
        const imgElem = document.getElementById(id);
        imgElem.style.left = bounding.left + "px";
        imgElem.style.top = bounding.top + "px";
    }, [id, bounding])

    useEffect(() => {
        
        if (bounding){
            updateImagePosition()
        } else {
            const deliveryBounding = deliveryRef.current.getBoundingClientRect().toJSON();
            updateImageBounding({...bounding, left: deliveryBounding.left, top: deliveryBounding.top})
        }

    }, [bounding, deliveryRef, id, updateImageBounding, updateImagePosition])

    const handleMouseMove = (event) => {
        if (selected){
            const left = bounding.left + event.movementX;
            const top = bounding.top + event.movementY;

            const newBounding = {...bounding, left, top}
            updateImageBounding(newBounding)
        }
    }

    const selectImage = () => {
        const imgElem = document.getElementById(id);
        imgElem.classList.add("image-selected")
        setSelected(true)
    }

    const releaseImage = () => {
        const imgElem = document.getElementById(id);
        setSelected(false);
        imgElem.classList.remove("image-selected")
        updateImageBounding();
        sortLayers();
    }

    return <img className={`draggable-image ${idBase}`} src={src} onMouseMove={handleMouseMove} onMouseDown={selectImage} onMouseUp={() => selected ? releaseImage() : ""} onMouseOut={() => selected ? releaseImage() : ""} id={id} draggable={false} />
}

export default memo(DraggableImage);