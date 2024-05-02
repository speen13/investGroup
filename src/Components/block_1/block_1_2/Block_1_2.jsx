import React from 'react';
import './Block_1_2.css'
import icon from '../../../../public/icon.png'
import cartoon from '../../../../public/3d-cartoon-portrait-person-practicing-law-related-profession 1.png'
import FormControll from "../../formControll/FormControll.jsx";

const Block_1_2 = () => {
  return (
    <div className={'cont_block'}>
      <div className={'block_1_2'}>
        <div className={'block_left_1'}>
          <h1>Інвестувати <img className={'icon'} src={icon} /> <br/> проще, ніж здається!</h1>
          <div className={'paragraph'}>Кожен клієнт має доступ до нової інвестиційної
            платформи з можливістю отримання доходу.
            Будь ласка, пройдіть просту реєстрацію на сайті,
            а також ознайомтеся з інформацією нижче, щоб дізнатися,
            як підвищити свій дохід лише за кілька кроків!</div>
        </div>
        <div className={'block_left_2'}>
          <h2>75+ <p>Клієнтів</p></h2>
          <h2>4.9 <p>Рейтинг довіри</p></h2>
          <h2>100 <p>Інвестицій</p></h2>
        </div>
      </div>

      <div className={'cont_block_2'}>
        <div className={'block_1_3'}>
          <div className={'block_1_3_1'}>

            <img className={'cartoon'} src={cartoon}/>
            <FormControll />
          </div>
        </div>
      </div>


    </div>
  );
};

export default Block_1_2;
