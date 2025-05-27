import './App.css';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Burger from './containers/Burger/Burger';
import BurgerCompGenBtns from './containers/BurgerCompGenBtns/BurgerCompGenBtns';
import BurgerLayersProvider from './context/BurgerLayersContext';
import DeliveryIcon from './presentors/DeliveryIcon/DeliveryIcon';

function App() {
  return (
    <BurgerLayersProvider>
      <Header />

      <main>
        <BurgerCompGenBtns />

        <div className='flex justify-center'>
          <DeliveryIcon />
          <Burger />
        </div>

      </main>

      <Footer />
    </BurgerLayersProvider>
  )
}

export default App
