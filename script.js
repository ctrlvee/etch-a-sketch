/* Grid and squres */
const gridContainer = document.querySelector(".gridContainer");
gridContainer.style.cssText = 'display: block; background-color: grey';

function createSquares() {
    gridLength = prompt("Enter desired length");
    gridWidth = prompt("Enter desired width");

    // loop for width
    for (let i=1;i<=gridWidth;i++) {
        const rowDiv = document.createElement('div');
        //rowDiv.classList.add(`rowDiv${i}`);
        rowDiv.style.cssText = 'display: flex';
        gridContainer.appendChild(rowDiv);

        // loop for length
        for (let j=1; j<=gridLength; j++) {
        const squareGrid = document.createElement('div');
        squareGrid.style.cssText = 'height: 50px; width: 50px; background-color: white; border-style: dotted';
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
    });
});


/* Create container and clear button feature */
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttonContainer');
document.body.appendChild(buttonContainer);
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
