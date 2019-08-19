export const TETROMINOS = {
  0: { shape: [[0]], color: '0, 0, 0' },
  I: {
    shape: [[0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0]],
    color: '242, 127, 17',
  },
  J: { shape: [[0, 'J', 0], [0, 'J', 0], ['J', 'J', 0]], color: '161, 43, 13' },
  L: {
    shape: [[0, 'L', 0], [0, 'L', 0], [0, 'L', 'L']],
    color: '210, 134, 57',
  },
  O: { shape: [['O', 'O'], ['O', 'O']], color: '249, 246, 201' },
  S: { shape: [[0, 'S', 'S'], ['S', 'S', 0], [0, 0, 0]], color: '179, 192, 125' },
  t: {
    shape: [[0, 0, 0], ['t', 't', 't'], [0, 't', 0]],
    color: '235, 89, 3',
  },

  Z: { shape: [['Z', 'Z', 0], [0, 'Z', 'Z'], [0, 0, 0]], color: '120, 114, 16' },
  l: { shape: [[0, 'l', 0], [0, 'l', 0], [0, 'l', 0]], color: '141, 79, 12' },
  n: { shape: [[0, 0, 0], ['n', 'n', 'n'], ['n', 0, 'n']], color: '247, 164, 40'},
  p: { shape: [['p','p'], ['p', 0]], color: '166, 206, 57'},
  i: {shape: [['i', 0], ['i', 0]], color: '244, 219, 157'},
};

export const randomTetromino = () => {
  const tetrominos = 'IJLOStZlnpi';
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};