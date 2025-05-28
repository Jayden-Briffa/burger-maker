import { memo, useCallback } from 'react';
import { useBurgerLayers } from "../../hooks/useBurgerLayers"
import "./BtnBurgerLayerGen.styles.css"

const BtnBurgerLayerGen = ({idBase, imgSrc, imgAlt}) => {

    const { addLayer } = useBurgerLayers();
    const handleClick = useCallback(() => addLayer(idBase, imgSrc), [addLayer, idBase, imgSrc]);

    return <button type="button" className="btn-burger-comp-gen rounded-none grow" onClick={handleClick}><img src={imgSrc} alt={imgAlt} className="m-auto" /></button>
}

export default memo(BtnBurgerLayerGen);