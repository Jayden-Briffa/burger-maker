import './Header.styles.css';
import html2canvas from 'html2canvas';
import { useBurgerLayers } from '../../hooks/useBurgerLayers';
import NavLink from '../../presentors/NavLink';
import { useLocation } from 'react-router'
import { useCallback } from 'react';

const Header = () => { 

    const { burgerRef } = useBurgerLayers();

    const location = useLocation();

    const handleDownloadImage = async () => {

        if (location.pathname !== "/") return;

        const canvas = await html2canvas(burgerRef.current);

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
    
    return (
        <header className="grid grid-cols-3 justify-around text-center m-0">

            <nav className='flex justify-center gap-2'>
                <NavLink path="/" checkIfActive={checkIfActive} >Burger maker</NavLink>
                <NavLink path="/credits" checkIfActive={checkIfActive} >Credits</NavLink>
                <NavLink path="/guide" checkIfActive={checkIfActive} >Guide</NavLink>
            </nav>

            <h1 className='my-auto'>Burger Maker</h1>

            <div className='flex justify-center gap-3'>

                <button type="button" className={`my-auto py-2 px-4 rounded-2xl ${ !checkIfActive('/') ? "not-allowed" : ""}`} onClick={handleDownloadImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={`bi bi-download`} viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                    </svg>
                </button> 
                
            </div>
            
        </header>
    )
}

export default Header;