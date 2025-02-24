const container = document.querySelector("#container");
const DIV_NUMBER = 256;

for (let i = 0; i < DIV_NUMBER; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid-square");
    container.appendChild(grid);
}


