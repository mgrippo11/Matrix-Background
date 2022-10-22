const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const WIDTH = canvas.width = window.innerWidth;
const HEIGTH = canvas.height = window.innerHeight;
const TEXT_HEIGHT = 20;

// Reset
ctx.fillStyle = "balck";
ctx.fillRect(0, 0, WIDTH, HEIGTH);

// Init
const tColumns = Math.floor(WIDTH / TEXT_HEIGHT) + 1;
const columns = [];
for (let i = 0; i < tColumns; i++) {
  columns.push({
    y: 0,
    oldY: 0,
    char: "",
    oldChar: "",
  });
}
// const columns = Array(tColumns).fill(0);

const generateCharacter = () => {
  const characterIndex = Math.random() * 128;
  const character = String.fromCharCode(characterIndex);
  return character;
};

const matrix = () => {
  ctx.fillStyle = "#0001";
  ctx.fillRect(0, 0, WIDTH, HEIGTH);

  ctx.font = "10pt EnterCommand";

  columns.forEach(({ y }, index) => {
    const text = generateCharacter();
    const x = index * TEXT_HEIGHT;

    ctx.fillStyle = "#0f0";
    ctx.fillText(text, x, y);

    const maxHeigth = 100 + Math.random() * 10000;
    columns[index].oldChar = columns[index].char;
    columns[index].oldY = columns[index].y;
    if (y > maxHeigth) {
      columns[index].y = 0;
      columns[index].char = text;
    } else {
      columns[index].y = y + TEXT_HEIGHT;
      columns[index].char = text;
    }
  });
};

setInterval(matrix, 50);
