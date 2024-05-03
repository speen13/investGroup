import React, {useState} from 'react';
import './Block_4.css'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Block_4 = () => {

  const [invest, setInvest] = useState(0)

  const changeInvest = (e) => {
    setInvest(e.target.value)
  }

  return (
    <div className={'cont_calc'}>
      <div className={'invest'}>
        <p style={{color:'white'}}>Виплати від інвестицій</p>
        <p className={'math'}>100 000</p>
        <div >
          <span style={{marginLeft:20, marginTop:20, color:'white'}}>Нарахуємо бонусів <br/> за весь період</span>
          <span style={{fontSize:36, color:'#21A038', fontWeight:600, marginRight:20, marginTop:20}}>12 879</span>
        </div>
        <button>Розпочати інвестувати</button>
      </div>

      <div className={'calc'}>
        {/*<RangeSlider/>*/}
        {/*<RangeSlider />*/}

        <div className={'invest_1'}>
          <p className={'sum_1'}>Сумма інвестицій </p>
          <p className={'sum'}>{invest}</p>

          <input className={'calc_invest'} type={'range'} min={5000} max={50000} step={1} value={invest}
                 onChange={changeInvest}/>
          <div className={'number'} >
            <span>5000</span>
            <span>20 000 </span>
            <span>35 000</span>
            <span>50 000</span>
          </div>
        </div>
        <div className={'invest_2'}>
          <p style={{float: 'left', marginLeft: 40}}>Сумма прибутку</p>
          <p >{invest * 7.5}</p>
          <input className={'calc_invest'} type={'range'} min={5000} max={50000}  value={invest}
                 onChange={changeInvest}/>
          <div className={'number'} >
            <span>37 500</span>
            <span>150 00 </span>
            <span>255 00</span>
            <span>3 7 000</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Block_4;
