import React, {useState} from 'react';
import './Footer.css'
import logo from '../../../public/Logo 3.png'
import Button from "../button/Button.jsx";
const Footer = () => {
  const [iks, setIks] = useState(true)

  const handleClick = () => {
    setIks((e) => !e)

  }

  return (
    <div className={'footer'}>
      <img className={'logo'} src={logo}/>
      <div className={'links'}>
        <a>Про нас</a>
        <a>Переваги</a>
        <a>Калькулятор прибутку</a>
        <Button text={'Розрахувати прибуток'}/>

      </div>
      <div className={'burger'} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={iks ? 'mob_menu_1' : 'mob_menu'} >
        <a>Про нас</a>
        <a>Переваги</a>
        <a>Калькулятор прибутку</a>
      </div>
    </div>
  );
};

export default Footer;
