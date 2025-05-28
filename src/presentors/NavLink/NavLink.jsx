import { memo } from 'react';
import { Link } from 'react-router-dom'

const NavLink = ({ path, checkIfActive, children }) => {

    const linkClasses = 'rounded-sm py-1 px-4 no-grow';
    
    return (
        <>
            <Link to={path} className={`my-auto ${checkIfActive(path)}`}><button className={linkClasses} >{children}</button></Link>
        </>
    )
}

export default memo(NavLink);