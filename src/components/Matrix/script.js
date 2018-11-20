import { random } from '../../utils/math';

let A = [];

const init = (degree, m) => {
  for (let i = 0; i <= degree; i++) {
    A.push([]);
    for (let j = 0; j < m; j++) {
      A[i].push([]);
      for (let k = 0; k < m; k++) {
        let r = random(0, 10);
        A[i][j].push(r);
      }
    }
  }
  console.log('A', A);
};

export {
  init
};