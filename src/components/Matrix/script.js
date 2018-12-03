import mathjs from 'mathjs';
import { random, matrixDerivative, factorial } from '../../utils/math';

let A = [];
let M = 2;
let H = 1;

const init = (degree, m, h) => {
  M = m;
  H = h;
  /* for (let i = 0; i <= degree; i++) {
    A.push([]);
    for (let j = 0; j < m; j++) {
      A[i].push([]);
      for (let k = 0; k < m; k++) {
        let r = random(0, 10);
        A[i][j].push(r);
      }
    }
  } */
  // TODO: change hardcode
  A = [
    [
      ['t^2 + 2*t + 4', '2*t^2 - t + 1'],
      ['4*t^2 - 12', '- 4*t + 4']
    ],
    [
      ['2*t^2 + 4*t', '3*t^2 - 5*t + 2'],
      ['t^2 + 2*t + 4', '4*t^2 - 4*t + 8']
    ],
    [
      ['3*t + 6', '2*t^2 - 1'],
      ['6*t^2 - 2*t - 3', '-t^2 - 5*t + 4']
    ],
    [
      ['-t^2 - 4*t', '5*t^2 + 12'],
      ['3*t^2 - 3*t + 2', '-t^2 + 8']
    ],
    [
      ['3*t^2 - 6', '-4*t^2 - 2*t + 16'],
      ['t^2 - 4', '-2*t^2 + 3*t ']
    ]
  ];
  console.log('A:', A);
  console.log('M:', M);
  console.log('H:', H);
  /* let t = 1;
  for (let i = 0; i <= 4; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        A[i][j][k] = eval(A[i][j][k]);
      }
    }
  }
  console.log('t:', t);
  console.log('A:', A); */

  console.log(factorial(5));

  // TODO: get derivatives, make dynamic
  let epsilon = false, K = 1; // TODO: fact check possible values of K
  while (!epsilon) {
    // get derivatives for each matrix
    for (let i = 0; i < A.length; i++) {
      console.log(A[i]);
      console.log(matrixDerivative(A[i]));
      // Math.pow(H, K) * matrixDerivative(A[i]) / factorial(K);
    }
    epsilon = true;
  }
};

export {
  init
};