import Burger from '../../Burger';
import BurgerLayerGenBtns from '../../../presentors/BurgerLayerGenBtns';
import DeliveryIcon from '../../../presentors/DeliveryIcon';
import Input from '../../../presentors/Input/Input';

const CreateBurgerPage = () => {

    return (
        <>
            <BurgerLayerGenBtns />

            <div className='flex justify-center'>
                <DeliveryIcon />
                <Burger />
            </div>
        </>
    )
}

export default CreateBurgerPage;