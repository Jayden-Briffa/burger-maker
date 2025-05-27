import { memo } from 'react';
import { useBurgerLayers } from "../../hooks/useBurgerLayers"
import "./BtnBurgerCompGen.styles.css"

const BtnBurgerCompGen = ({idBase, imgSrc, imgAlt}) => {

    const { addLayer } = useBurgerLayers();

    return <button type="button" className="btn-burger-comp-gen rounded-none grow" onClick={() => addLayer(idBase, imgSrc)}><img src={imgSrc} alt={imgAlt} className="m-auto" /></button>
}

export default memo(BtnBurgerCompGen);