let pen_color = '#000';
/* Grid and squres */
const gridContainer = document.querySelector(".gridContainer");
gridContainer.style.cssText = '';

const grid = document.createElement('div');
grid.classList.add('grid');
gridContainer.appendChild(grid);

function createSquares() {
    
    //let gridSize = prompt("Enter desired size ranging from 1x1 to 64x64");
    let gridSize = 16;
    // default if no value gridSize = 16    

    
    for (let i=1; i<=(gridSize**2); i++) {
        const squareGrid = document.createElement('div');
        squareGrid.style.cssText =  `height: ${200/gridSize}px; width:${200/gridSize}px; background-color: white`;
        squareGrid.classList.add(`squareGrid`);
        //squareGrid.textContent =`${squareCount}`;
        grid.appendChild(squareGrid);
    }
    
   
    
}


createSquares();

const squares = Array.from(document.querySelectorAll('.squareGrid'));
squares.forEach(function(square) {
    square.addEventListener('mouseover', function () {
        square.style.backgroundColor = pen_color;
        console.log('works');
    });
});
function randomColor () {
    value = Math.floor(Math.random()*16777215).toString(16);
    return `#${value}`
}

/* Create container and clear button feature */
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttonContainer');
document.body.insertBefore(buttonContainer, gridContainer);

// Random color button
const randomBtn = document.createElement('button');
randomBtn.classList.add('randomBTN');
randomBtn.textContent = 'Random';
randomBtn.addEventListener('click', function () {
    pen_color = randomColor();
    console.log(pen_color);
});
buttonContainer.appendChild(randomBtn);

//Set color button to black
const blackBtn = document.createElement('button');
blackBtn.classList.add('blackBTN');
blackBtn.textContent = 'Black';
blackBtn.addEventListener('click', function () {
    pen_color = '#000';
    console.log(pen_color);
});
buttonContainer.appendChild(blackBtn);

// Create clear button
const clearbutton = document.createElement('button');
clearbutton.classList.add('clearBTN');
clearbutton.textContent = 'Clear';
buttonContainer.appendChild(clearbutton);
clearbutton.addEventListener('click', clearBoard);
function clearBoard () {
    squares.forEach(function(square) {
        square.style.backgroundColor = 'white';
    });
};



// Other method to create square grid
 /*
    for (let i=1;i<=16;i++) {
        const rowDiv = document.createElement('div');
        //rowDiv.classList.add(`rowDiv${i}`);
        rowDiv.style.cssText = 'display: flex';
        rowDiv.classList.add('rowDiv');
        grid.appendChild(rowDiv);

        
        for (let j=1; j<=16; j++) {
        const squareGrid = document.createElement('div');
        squareGrid.style.cssText =  `height: ${gridArea/gridSize}; width:${gridArea/gridSize}px; background-color: white`;
        squareGrid.classList.add(`squareGrid`);
        //squareGrid.textContent =`${squareCount}`;
        rowDiv.appendChild(squareGrid);
        }
    }
    */
    