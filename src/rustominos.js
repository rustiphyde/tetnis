export const RUSTOMINOS = {
  0: { shape: [[0]], color: "0, 0, 0" },
  I: {
    shape: [[0, "I", 0, 0], [0, "I", 0, 0], [0, "I", 0, 0], [0, "I", 0, 0]],
    color: "133, 32, 6"
  },
  J: {
    shape: [[0, "J", 0], [0, "J", 0], ["J", "J", 0]],
    color: "242, 127, 17"
  },
  L: {
    shape: [[0, "L", 0], [0, "L", 0], [0, "L", "L"]],
    color: "141, 79, 12"
  },
  O: {
    shape: [["O", "O"], ["O", "O"]],
    color: "179, 192, 125"
  },
  S: {
    shape: [[0, "S", "S"], ["S", "S", 0], [0, 0, 0]],
    color: "253, 220, 84"
  },
  T: {
    shape: [[0, 0, 0], ["T", "T", "T"], [0, "T", 0]],
    color: "246, 250, 235"
  },
  Z: {
    shape: [["Z", "Z", 0], [0, "Z", "Z"], [0, 0, 0]],
    color: "251, 171, 105"
  },
  H: {
    shape: [["H", 0, "H"], ["H", "H", "H"], ["H", 0, "H"]],
    color: "222, 173, 120"
  },
  K: {
    shape: [["K", 0, "K"], ["K", "K", 0], ["K", 0, "K"]],
  color: "139, 148, 124"
  }
};

export const randomRustomino = () => {
  const rustominos = "IJLOSTZHK";
  const randRustomino =
    rustominos[Math.floor(Math.random() * rustominos.length)];
  return RUSTOMINOS[randRustomino];
};
