import React from 'react';
import './Main.css'
import Footer from "../Footer/Footer.jsx";
import Block_1 from "../block_1/Block_1.jsx";
import Block_2 from "../block_2/Block_2.jsx";
import Block_3 from "../block_3/Block_3.jsx";
import Block_4 from "../block_4/Block_4.jsx";
import Block_5 from "../block_5/Block_5.jsx";
const Main = () => {
  return (
    <div className={'container'}>
<Block_1 />
      <Block_2 />
      <Block_3 />
      <Block_4 />
      <Block_5 />
    </div>
  );
};

export default Main;
