import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
// import { IconContext } from 'react-icons';
import { Menu, X } from 'lucide-react';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <IconContext.Provider value={{ color: '#fff' }}> */}
        <div className='h-full w-fit m-5'>
          <Link to='#' className='menu-bars'>
            <Menu onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu ' : 'nav-menu active'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              <X color='white'/>
              </Link>
            </li>
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      {/* </IconContext.Provider> */}
    </>
  );
}

export default Sidebar;