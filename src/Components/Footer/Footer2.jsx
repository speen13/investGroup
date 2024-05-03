import React from 'react';
import './Footer.css'
import logo from "../../../public/Logo 3.png";
import Button from "../button/Button.jsx";

const Footer2 = () => {

  return (
    <div className={'footer'}>
      <img className={'logo'} src={logo}/>
      <div className={'links'}>
        <a>Про нас</a>
        <a>Переваги</a>
        <a>Калькулятор прибутку</a>
        <Button text={'Розрахувати прибуток'}/>

      </div>


    </div>
  );
};

export default Footer2;
