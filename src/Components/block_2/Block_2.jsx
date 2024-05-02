import React from 'react';
import './Block_2.css'
import img from '../../../public/img.png'
import img1 from '../../../public/img1.png'
import img2 from '../../../public/img2.png'

const Block_2 = () => {
  return (
    <div className={'main_cont'}>
      <h2>Про нас</h2>
      <div className={'main_block'}>
        <div className={'main_block_1'}>
          <div className={'main_block_text'}> <h4>Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя</h4>
          Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя,
            коли невідомий друкар взяв шрифтову гранку
            та склав на ній підбірку зразків шрифтів.
            "Риба" не тільки успішно пережила п'ять століть,
            але й прижилася в електронному верстуванні, залишаючись по суті незмінною.
          </div>
          <div className={'main_block_img'}>
            <img src={img} />
          </div>
        </div>
        <div className={'main_block_2'}>
          <div className={'main_block_text'}>
            <h4>Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя</h4>
            Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя,
            коли невідомий друкар взяв шрифтову гранку
            та склав на ній підбірку зразків шрифтів.
            "Риба" не тільки успішно пережила п'ять століть,
            але й прижилася в електронному верстуванні, залишаючись по суті незмінною.
          </div>
          <div className={'main_block_img'}>
            <img src={img1} />
          </div>
        </div>
        <div className={'main_block_3'}>
          <div className={'main_block_3_img'}>
            <img src={img2} />
          </div>
          <div className={'main_block_3_text'}><h4>Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя</h4>
           <p> Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя,
             коли невідомий друкар взяв шрифтову гранку
             та склав на ній підбірку зразків шрифтів.
             "Риба" не тільки успішно пережила п'ять століть,
             але й прижилася в електронному верстуванні, залишаючись по суті незмінною.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Block_2;
