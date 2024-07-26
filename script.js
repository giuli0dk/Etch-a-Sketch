document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.containerGrid');
    container.style.border = '5px solid red';
    container.style.display = "grid";
    container.style.width = "100vw"; // Full viewport width
    container.style.height = "100vh"; // Full viewport height

    // Call the grid function to create the grid after DOM is loaded
    grid();
    // Call popUp to add the button
    popUp(); 
});

const container = document.querySelector(".containerGrid");

function grid() {
    const defaultSize = 16;
    createGrid(defaultSize);

    // Add event listeners after the grid is created
    setTimeout(() => {
        let gridCells = document.querySelectorAll(".col-grid");
        gridCells.forEach(cell => {
            cell.addEventListener("mouseover", (event) => {
                event.target.style.background = "#fff";
            });
        });
    }, 2000);
}

function createGrid(size) {
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let cellElement = document.createElement("div");
        cellElement.className = "col-grid";
        container.appendChild(cellElement);
    }
}

// Function to take user input to create a new grid
function popUp() {
    const btn = document.createElement("button");
    btn.className = "btn";
    const container = document.querySelector('.containerGrid');
    document.body.insertBefore(btn, container);
    btn.textContent = "Square Number!";

    btn.addEventListener("click", () => {
        let squareNumber = prompt("Select a number of squares per side for the new grid: max-100!");

        if (squareNumber <= 100 && squareNumber >= 16) {
            container.innerHTML = '';
            createGrid(squareNumber);
        } else {
            alert("Select a number of squares per side for the new grid: max-100!");
        }

        // Add event listeners after the grid is created
    setTimeout(() => {
        let gridCells = document.querySelectorAll(".col-grid");
        gridCells.forEach(cell => {
            cell.addEventListener("mouseover", (event) => {
                event.target.style.background = "#fff";
            });
        });
    }, 2000);
    
    });
}