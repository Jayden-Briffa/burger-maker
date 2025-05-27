import { useState, useCallback, useRef } from "react";
import { BurgerLayersContext } from "../hooks/useBurgerLayers";

function BurgerLayersProvider({children}){

    const [layers, setLayers] = useState([])
    const [layersBounding, setLayersBounding] = useState({})
    const burgerRef = useRef(null);
    const deliveryRef = useRef(null);

    const sortLayers = useCallback(() => {

        // Sort layers by coords centerY, descending 
        const rankedLayers = [...layers].sort((a, b) => {
            const aBounding = layersBounding[a.id];
            const bBounding = layersBounding[b.id];

            if (aBounding === null || bBounding === null){
                return 0;
            }

            const aIsHigher = aBounding.centerY > bBounding.centerY
            if (aIsHigher){
                return -1;
            } else {
                return 1;
            }
        });

        // Give each layer an appropriate Z-Index for their rank
        const zIndexStart = 5
        for (let i = 0; i < rankedLayers.length; i++){
            const imgElem = document.getElementById(rankedLayers[i].id)
            const style = imgElem.style;
            style.zIndex = i + zIndexStart;
        }

    }, [layers, layersBounding])

    const addLayer = useCallback((idBase, imgSrc) => {

        let newNum = 0;
        if (layers.length > 0){
            const lastId = layers[layers.length - 1]?.id;
            const lastIdSplit = lastId.split("-");
            newNum = parseInt(lastIdSplit[lastIdSplit.length - 1]) + 1;
        }
        
        const id = idBase + "-" + newNum.toString()
        const newLayer = {id, idBase, imgSrc}
        let coords;

        setLayers((prev) => [...prev, newLayer])
        setLayersBounding((prev) => ({...prev, [id]: coords}))
    }, [setLayers, layers])

    const removeLayer = useCallback((id) => {
        setLayers((prev) => prev.filter((layer) => layer.id !== id))
        setLayersBounding((prev) => {
            let newLayersBounding = {...prev}; // Create a shallow copy of prev to avoid mutating prev
            delete newLayersBounding[id];

            return newLayersBounding;
        });
        
    }, [setLayers])

    const updateBounding = useCallback((id, newBounding) => {
        setLayersBounding(prev => ({...prev, [id]: newBounding}))
    }, [])

    return (
        <BurgerLayersContext.Provider value={{ layers, addLayer, removeLayer, updateBounding, sortLayers, burgerRef, deliveryRef }} >
            {children}
        </BurgerLayersContext.Provider>
    )
}

export default BurgerLayersProvider