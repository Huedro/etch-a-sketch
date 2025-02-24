const container = document.querySelector("#container");
const DIV_NUMBER = 256;

for (let i = 0; i < DIV_NUMBER; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid-square");
    container.appendChild(grid);
}

const divs = document.querySelectorAll(".grid-square")
divs.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "blue";
    })
})
