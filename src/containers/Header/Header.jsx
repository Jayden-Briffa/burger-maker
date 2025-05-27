import './Header.styles.css';
import html2canvas from 'html2canvas';
import { useBurgerLayers } from '../../hooks/useBurgerLayers';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router'
import { useCallback } from 'react';

const Header = () => { 

    const { burgerRef } = useBurgerLayers();
    const location = useLocation();

    const handleDownloadImage = async () => {

        burgerRef.current.classList.remove('framed')

        const canvas = await html2canvas(burgerRef.current);

        burgerRef.current.classList.add('framed')

        const data = canvas.toDataURL('image/png');
        const link = document.createElement('a');

        if (data.length === 6){
            console.error("Screenshot failed")
        }

        if (typeof link.download === 'string') {
            link.href = data;
            link.download = 'YourBurger.png';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(data);
        }
    };

    const checkIfActive = useCallback((path) => location.pathname === path ? "active" : "", [location.pathname])

    const linkClasses = 'rounded-sm py-1 px-4 no-grow'
    
    return (
        <header className="grid grid-cols-3 justify-around text-center m-0">

            <nav className='flex justify-center gap-2'>
                <Link to="/" className={`my-auto ${checkIfActive('/')}`}><button className={linkClasses} >Burger maker</button></Link>
                <Link to="/credits" className={`my-auto ${checkIfActive('/credits')}`}><button className={linkClasses} >Credits</button></Link>
                <Link to="/guide" className={`my-auto ${checkIfActive('/guide')}`}><button className={linkClasses} >Guide</button></Link>
            </nav>

            <h1 className='my-auto'>Burger Maker</h1>

            <div className='flex justify-center'>
               <button type="button" className='my-auto py-2 px-4 rounded-2xl' onClick={handleDownloadImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                    </svg>
                </button> 
            </div>
            
        </header>
    )
}

export default Header;