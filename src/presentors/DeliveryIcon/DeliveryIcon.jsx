
import { memo } from 'react';
import deliverySrc from '../../assets/delivery.png';
import { useBurgerLayers } from '../../hooks/useBurgerLayers';
import './DeliveryIcon.styles.css';

const DeliveryIcon = () => {

    const { deliveryRef } = useBurgerLayers();

    return (
        <>
            <img ref={deliveryRef} src={deliverySrc} id="delivery-icon" />
        </>
    )
}

export default memo(DeliveryIcon);