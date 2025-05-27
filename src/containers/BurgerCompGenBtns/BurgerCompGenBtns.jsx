import { memo } from 'react'
import BtnBurgerCompGen from "../../presentors/BtnBurgerCompGen/BtnBurgerCompGen";
import bunCrownSrc from "../../assets/burger/bun-crown.png";
import bunHeelSrc from "../../assets/burger/bun-heel.png";
import cheeseSrc from "../../assets/burger/cheese.png";
import lettuceSrc from "../../assets/burger/lettuce.png";
import pattySrc from "../../assets/burger/patty.png";
import tomatoSrc from "../../assets/burger/tomato.png";
import "./BurgerCompGenBtns.styles.css"

const BurgerCompGenBtns = () => {

    return (
        <div className="burger-comp-gen-btns flex justify-around" id="burger-layer-gen-btns">
            <BtnBurgerCompGen idBase="burger-crown" imgSrc={bunCrownSrc} imgAlt="bun-crown" />
            <BtnBurgerCompGen idBase="burger-heel" imgSrc={bunHeelSrc} imgAlt="bun-heel" />
            <BtnBurgerCompGen idBase="burger-cheese" imgSrc={cheeseSrc} imgAlt="cheese" />
            <BtnBurgerCompGen idBase="burger-lettuce" imgSrc={lettuceSrc} imgAlt="lettuce" />
            <BtnBurgerCompGen idBase="burger-patty" imgSrc={pattySrc} imgAlt="patty" />
            <BtnBurgerCompGen idBase="burger-tomato" imgSrc={tomatoSrc} imgAlt="tomato" />
        </div>
    )
}

export default memo(BurgerCompGenBtns);