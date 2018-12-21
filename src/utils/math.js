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

const matrixMultiply = (a, b) => {
  let product = [];
  // TODO: check if a can be multiplied by b
  for (let i = 0; i < a.length; i++) {
    product.push([]);
    for (let j = 0; j < b[0].length; j++) {
      product[i][j] = `(${a[i][j]}) * (${b[i][j]})`;
    }
  }
  return product;
  // return mathjs.multiply(a, b); 
};

export {
  random,
  matrixDerivative,
  derivative,
  factorial,
  matrixMultiply
};