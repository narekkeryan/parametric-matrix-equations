import React from 'react';
import Equation from './Equation';
import { init } from './script';
import './style.scss';

init(4, 3);

const Matrix = (props) => (
  <div className="">
    <div className="equation">
      <Equation degree={4} />
    </div>
  </div>
);

export default Matrix;