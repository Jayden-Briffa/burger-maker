import DraggableImage from "../DraggableImage/DraggableImage";
import { useBurgerLayers } from "../../hooks/useBurgerLayers";
import { useSettings } from "../../hooks/useSettings";
import './Burger.styles.css';
import Input from "../../presentors/Input/Input";
import { useMemo } from "react";

const Burger = () => {

    const { layers, burgerRef } = useBurgerLayers();
    const {frameDarkness, setFrameDarkness} = useSettings();
    const controlData = useMemo(() => [ frameDarkness, setFrameDarkness ], [frameDarkness, setFrameDarkness]);
    
    return (
        <div className="flex flex-col gap-2">
            <div ref={burgerRef} id="burger" style={{border: `1px solid rgba(0, 0, 0, ${frameDarkness / 100})`}}>
                {layers.map((layer) => <DraggableImage src={layer.imgSrc} id={layer.id} idBase={layer.idBase} key={layer.id} />)}
            </div>

            <div className='flex flex-col'>
                <Input type="range" min="0" max="100" className="my-auto" controlData={controlData} />
            </div>
        </div>

    )
}

export default Burger;