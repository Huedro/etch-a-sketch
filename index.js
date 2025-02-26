const container = document.querySelector("#container");
let divs = document.querySelectorAll(".grid-square");
let actualOpacity = 0;

newGrid();

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let gridDimension = prompt("Enter a number for grid dimension (max. 100)");
    if (gridDimension > 100) {
        gridDimension = 100;
    }
    removeGrid();
    newGrid(gridDimension);
});

function newGrid(gridDimension = 16){    
    let divNumber = gridDimension * gridDimension;
    let divMinSize = (100 / gridDimension) + "%";
    actualOpacity = 0;
    for (let i = 0; i < divNumber; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid-square");
        grid.style.minWidth = divMinSize;
        grid.style.minHeight = divMinSize;
        container.appendChild(grid);
    }
    divs = document.querySelectorAll(".grid-square");
    addPainterAttribute();
}

function removeGrid() {
    divs.forEach((div) => {
        div.remove();
    })
}

function addPainterAttribute() {
    divs.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            const color = randomRGB(); 
            div.style.backgroundColor = color;       
            div.style.opacity = riseOpacity(actualOpacity);
        });
    });
}

function riseOpacity(opacity) {
    if (opacity < 1) {
        return actualOpacity += 0.10;
    }
    return actualOpacity;
}

function randomColorNum() {
    return Math.floor(Math.random() * 256);
}

function randomRGB() {
    return `rgb(${randomColorNum()},${randomColorNum()},${randomColorNum()})`;
}