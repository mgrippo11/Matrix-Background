const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const WIDTH = canvas.width = innerWidth;
const HEIGTH = canvas.height = innerHeight;
const TEXT_HEIGHT = 20;

const generateCharacter = () => {
  const characterIndex = Math.random() * 128;
  return String.fromCharCode(characterIndex);
};

// Init
const tColumns = Math.floor(WIDTH / TEXT_HEIGHT) + 1;
const columns = [];
for (let i = 0; i < tColumns; i++) {
  const size = Math.floor(Math.random() * 8) + 10;
  const letters = Array.from(Array(size)).map(char => generateCharacter());
  const initialY = Math.floor(Math.random() * 500);
  columns.push({
    y: initialY,
    letters,
    speed: 20
  });
}

// Reset
ctx.fillStyle = "balck";
ctx.fillRect(0, 0, WIDTH, HEIGTH);

ctx.font = "10pt EnterCommand";

const getColor = (index, array) => {
  const size = array.length;
  const COLORS = [
    "#0f01",
    "#0f02",
    "#0f05",
    "#0f0f",
    "#fff",
  ];
  const last = index === size - 1;
  const first = index === 0;
  const second = index === 1;
  const third = index === 2;

  return last
    ? COLORS[4]
    : first
      ? COLORS[0]
      : second
        ? COLORS[1]
        : third
          ? COLORS[2]
          : COLORS[3];
};

const matrix = () => {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, WIDTH, HEIGTH);

  columns.forEach((data, x) => {
    data.letters.forEach((letter, index, array) => {
      ctx.fillStyle = getColor(index, array);
      ctx.fillText(letter, x * TEXT_HEIGHT, data.y + index * TEXT_HEIGHT);
    });
  });
};

matrix();
