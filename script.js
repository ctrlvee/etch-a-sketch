const gridContainer = document.querySelector(".gridContainer");
gridContainer.style.cssText = 'display: block; background-color: grey';

function createSquares() {

    for (let i=1;i<=16;i++) {
       

        const rowDiv = document.createElement('div');
        //rowDiv.classList.add(`rowDiv${i}`);
        rowDiv.style.cssText = 'display: flex';
        gridContainer.appendChild(rowDiv);

        for (let j=1; j<=16; j++) {
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

