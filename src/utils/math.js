import mathjs from 'mathjs';

const random = (min = 0, max = 1) => Math.floor(Math.random() * (max - min) + min);

const matrixDerivative = A => {
  let derivedMatrix = [];
  for (let i = 0; i < A.length; i++) {
    derivedMatrix[i] = [];
    for (let j = 0; j < A[i].length; j++) {
      derivedMatrix[i][j] = derivative(A[i][j]).toString();
    }
  }
  return derivedMatrix;
};

// TODO: calculate derivative
const derivative = f => mathjs.derivative(f, 't');

const factorial = num => {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

export {
  random,
  matrixDerivative,
  derivative,
  factorial
};