import './App.css';
import Header from './containers/Header';
import Footer from './containers/Footer';
import BurgerLayersProvider from './context/BurgerLayersContext';
import { Route, Routes } from 'react-router-dom';
import CreateBurgerPage from './containers/(pages)/CreateBurgerPage';
import CreditsPage from './containers/(pages)/CreditsPage';
import GuidePage from './containers/(pages)/GuidePage';
import SettingsProvider from './context/SettingsProvider';

function App() {
  return (
    <BurgerLayersProvider>
      <SettingsProvider>

        <Header />

          <main>

              <Routes>
                <Route exact path="/" element={<CreateBurgerPage />} />
                <Route exact path="/credits" element={<CreditsPage />} />
                <Route exact path="/guide" element={<GuidePage />} />
              </Routes>

          </main>

          <Footer />

      </SettingsProvider>
    </BurgerLayersProvider>
  )
}

export default App
