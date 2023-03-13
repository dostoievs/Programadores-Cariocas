import React, { useState } from "react";
import{Link} from 'react-router-dom'
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiAtSign, FiLogIn, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.module.css";
import logoHan from '../assets/logo.jpg'
const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? <img src={logoHan}></img> : <img src={logoHan}></img>}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}><Link to='/'>Home</Link></MenuItem>
              <MenuItem icon={<FaList />}><Link to='/cardapio'>Cardápio</Link></MenuItem>
              <MenuItem icon={<FaRegHeart />}><Link to='/sobre'>Sobre</Link></MenuItem>
              <MenuItem icon={<RiPencilLine />}><Link to='/autores'>Autores</Link></MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiAtSign/>}><Link to='cadastro'></Link>Cadastre-se</MenuItem>
              <MenuItem icon={<FiLogIn/>}><Link to='login'>Login</Link></MenuItem>
              <MenuItem icon={<FiLogOut />}><Link>LogOut</Link></MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </div>
  );
};

export default Header;