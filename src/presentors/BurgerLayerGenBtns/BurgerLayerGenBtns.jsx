import { memo } from 'react'
import BtnBurgerLayerGen from "../BtnBurgerLayerGen";
import bunCrownSrc from "../../assets/burger/bun-crown.png";
import bunHeelSrc from "../../assets/burger/bun-heel.png";
import cheeseSrc from "../../assets/burger/cheese.png";
import lettuceSrc from "../../assets/burger/lettuce.png";
import pattySrc from "../../assets/burger/patty.png";
import tomatoSrc from "../../assets/burger/tomato.png";

const BurgerLayerGenBtns = () => {

    return (
        <div className="burger-comp-gen-btns flex justify-around" id="burger-layer-gen-btns">
            <BtnBurgerLayerGen idBase="burger-crown" imgSrc={bunCrownSrc} imgAlt="bun-crown" />
            <BtnBurgerLayerGen idBase="burger-heel" imgSrc={bunHeelSrc} imgAlt="bun-heel" />
            <BtnBurgerLayerGen idBase="burger-cheese" imgSrc={cheeseSrc} imgAlt="cheese" />
            <BtnBurgerLayerGen idBase="burger-lettuce" imgSrc={lettuceSrc} imgAlt="lettuce" />
            <BtnBurgerLayerGen idBase="burger-patty" imgSrc={pattySrc} imgAlt="patty" />
            <BtnBurgerLayerGen idBase="burger-tomato" imgSrc={tomatoSrc} imgAlt="tomato" />
        </div>
    )
}

export default memo(BurgerLayerGenBtns);