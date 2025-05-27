import { memo } from 'react';
import { useBurgerLayers } from "../../hooks/useBurgerLayers"
import "./BtnBurgerLayerGen.styles.css"

const BtnBurgerLayerGen = ({idBase, imgSrc, imgAlt}) => {

    const { addLayer } = useBurgerLayers();

    return <button type="button" className="btn-burger-comp-gen rounded-none grow" onClick={() => addLayer(idBase, imgSrc)}><img src={imgSrc} alt={imgAlt} className="m-auto" /></button>
}

export default memo(BtnBurgerLayerGen);