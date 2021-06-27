const gridContainer = document.querySelector(".gridContainer");
gridContainer.style.cssText = 'display: block; background-color: grey';


for (let i=1;i<=16;i++) {
    let squareCount = 0;

    const rowDiv = document.createElement('div');
    rowDiv.classList.add(`rowDiv${i}`);
    rowDiv.style.cssText = 'display: flex';
    gridContainer.appendChild(rowDiv);

    for (let j=1; j<=16; j++) {
    squareCount += 1
    const squareGrid = document.createElement('div');
    squareGrid.style.cssText = 'height: 50px; width: 50px; background-color: blue; border-style: dotted;';
    squareGrid.classList.add(`square${squareCount}`);
    squareGrid.textContent =`square${squareCount}`;
    rowDiv.appendChild(squareGrid);
    }
}

