import { memo } from 'react';
import { useCallback, useEffect, useState } from "react";
import findCenter from '../../utils/findCenter';
import './DraggableImage.styles.css'
import { useBurgerLayers } from '../../hooks/useBurgerLayers';

const DraggableImage = ({id, idBase, src}) => {

    const [bounding, setBounding] = useState(null);
    const [selected, setSelected] = useState(false);
    const {updateBounding, removeLayer, sortLayers, deliveryRef} = useBurgerLayers();

    const updateImagePosition = useCallback(() => {
        const imgElem = document.getElementById(id);
        const btnsElem = document.getElementById("burger-layer-gen-btns");
        
        const btnsBounding = btnsElem.getBoundingClientRect();

        if (bounding.left > 0){
            imgElem.style.left = bounding.left + "px";
        }
        
        if (bounding.top > btnsBounding.bottom){
            imgElem.style.top = bounding.top + "px";
        }

    }, [id, bounding])

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

    const handleKeydown = useCallback((event) => {
        if (event.key === "Backspace") {
            removeLayer(id);
        }
    }, [id, removeLayer]);

    const handleMouseMove = useCallback((event) => {
        if (selected){
            const left = bounding.left + event.movementX;
            const top = bounding.top + event.movementY;

            const newBounding = {...bounding, left, top}
            updateImageBounding(newBounding)
        }
    }, [bounding, selected, updateImageBounding])

    const selectImage = () => {
        if (!selected){
            const imgElem = document.getElementById(id);
            imgElem.classList.add("image-selected")
            setSelected(true)
        }
    
    }

    const releaseImage = useCallback(() => {
        if (selected){
              
            const imgElem = document.getElementById(id);
            setSelected(false);
            imgElem.classList.remove("image-selected")
            updateImageBounding();
            sortLayers();
        }
      
    }, [id, selected, sortLayers, updateImageBounding])

    // Apply and cleanup listeners to select, release, and move the image
    useEffect(() => {
        if (!selected) return;

        document.addEventListener("keydown", handleKeydown);
        document.addEventListener("mouseup", releaseImage)
        document.addEventListener("mousemove", handleMouseMove)

        // Cleanup
        return () => {
            document.removeEventListener("keydown", handleKeydown);
            document.removeEventListener("mouseup", releaseImage)
            document.removeEventListener("mousemove", handleMouseMove)
        };
    }, [selected, handleKeydown, releaseImage, handleMouseMove]);

    useEffect(() => {
        
        if (bounding){
            updateImagePosition()
        } else {
            const deliveryBounding = deliveryRef.current.getBoundingClientRect().toJSON();
            updateImageBounding({...bounding, left: deliveryBounding.left, top: deliveryBounding.top})
        }

    }, [bounding, deliveryRef, id, updateImageBounding, updateImagePosition])

    return <img className={`draggable-image ${idBase}`} src={src} onMouseDown={selectImage} id={id} draggable={false} />
}

export default memo(DraggableImage);