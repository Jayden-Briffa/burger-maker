import Burger from '../../Burger';
import BurgerCompGenBtns from '../../BurgerCompGenBtns';
import DeliveryIcon from '../../../presentors/DeliveryIcon';

const CreateBurgerPage = () => {
    return (
        <>
            <BurgerCompGenBtns />

            <div className='flex justify-center'>
                <DeliveryIcon />
                <Burger />
            </div>
        </>
    )
}

export default CreateBurgerPage;