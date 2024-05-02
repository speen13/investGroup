import React from 'react';
import  './Block_3.css'
import imgS from '../../../public/Frame 11322371.png'
import imgR from '../../../public/slovemo.png'
import icon from '../../../public/cartoon.png'

const arr = []
const Block_3 = () => {
  return (
    <div className={'money'}>
      <h2>Переваги</h2>
      <button className={'money_click'}>Вкластися</button>
      <div className={'money_stay'}>

        <img className={'cart_img'} src={imgS}/>
        <img className={'cart_img'} src={imgR}/>
        <img  className={'cart_img'}src={icon}/>
      </div>
    </div>
  );
};

export default Block_3;
