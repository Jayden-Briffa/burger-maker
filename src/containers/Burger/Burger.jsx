import DraggableImage from "../DraggableImage/DraggableImage";
import { useBurgerLayers } from "../../hooks/useBurgerLayers";
import './Burger.styles.css';
const Burger = () => {

    const { layers, burgerRef } = useBurgerLayers();
    
    return (
        <>  
            <div ref={burgerRef} id="burger" className="framed">
                {layers.map((layer) => <DraggableImage src={layer.imgSrc} id={layer.id} idBase={layer.idBase} key={layer.id} />)}
            </div>
        </>
      
    )
}

export default Burger;