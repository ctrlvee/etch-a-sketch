/* Grid and squres */
const gridContainer = document.querySelector(".gridContainer");
gridContainer.style.cssText = '';

const grid = document.createElement('div');
grid.classList.add('grid');
gridContainer.appendChild(grid);

function createSquares() {
    let gridSize = prompt("Enter desired size ranging from 2x2 to 64x64");
    if (gridSize === null) {
         gridSize = 16;
    }
    console.log(gridSize);

    
    for (let i=1;i<=16;i++) {
        const rowDiv = document.createElement('div');
        //rowDiv.classList.add(`rowDiv${i}`);
        rowDiv.style.cssText = 'display: flex';
        rowDiv.classList.add('rowDiv');
        grid.appendChild(rowDiv);

        
        for (let j=1; j<=16; j++) {
        const squareGrid = document.createElement('div');
        squareGrid.style.cssText = 'height: 10px; width: 10px;  background-color: white';
        squareGrid.classList.add(`squareGrid`);
        //squareGrid.textContent =`${squareCount}`;
        rowDiv.appendChild(squareGrid);
        }
    }
}


createSquares();

const squares = Array.from(document.querySelectorAll('.squareGrid'));
squares.forEach(function(square) {
    square.addEventListener('mouseover', function () {
        square.style.backgroundColor = 'black';
        console.log('works');
    });
});


/* Create container and clear button feature */
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttonContainer');
document.body.insertBefore(buttonContainer, gridContainer);
// Create clear button
const clearbutton = document.createElement('button');
clearbutton.classList.add('clearBTN');
clearbutton.textContent = 'Clear';
clearbutton.style.cssText = 'height: 100px; width: 50px';
buttonContainer.appendChild(clearbutton);
clearbutton.addEventListener('click', clearBoard);
function clearBoard () {
    squares.forEach(function(square) {
        square.style.backgroundColor = 'white';
    });
};
