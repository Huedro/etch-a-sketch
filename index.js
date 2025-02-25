const container = document.querySelector("#container");

createGrid();

const divs = document.querySelectorAll(".grid-square")
divs.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "blue";
    })
})

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let gridDimension = prompt("Enter a number for grid dimension (max. 100)");
    if (gridDimension > 100) {
        gridDimension = 100;
    }
});

function createGrid(gridDimension = 16){
    let divNumber = gridDimension * gridDimension;
    let divMinSize = (100 / gridDimension) + "%";
    for (let i = 0; i < divNumber; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid-square");
        grid.style.minWidth = divMinSize;
        grid.style.minHeight = divMinSize;
        container.appendChild(grid);
    }
}

// Create ResetGrid function
// grid-square sizes (and number of grids/divs) are hard coded, need to have and initial value
// and change whenever the user clicks the button and enter a prompt. 