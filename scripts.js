const etchContainer = document.querySelector('#etch-container');
const createGridButton = document.querySelector('.create-grid-button');
const clearGridButton = document.querySelector('.clear-grid-button');

// By default, open a 100x100 grid
generateGrid(100);

function promptUserForInput() {
    gridCount = prompt('Enter desired grid size:');
    generateGrid(gridCount);
}

function deleteCurrentGrid() {
    etchContainer.innerHTML = '';
}

// All button click event listeners
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case 'delete-button':
                etchContainer.innerHTML = '';
                break;
            case 'clear-button':
                const allBoxes = document.querySelectorAll('.square-div');
                allBoxes.forEach(box => {
                    box.classList.remove('colored-in');
                })
                break;
            case 'create-button':
                gridCount = prompt('Enter desired grid size:');
                generateGrid(gridCount);
                break;
            default:
                break;
        }
    })
})

// Generate a grid based on the user's input number.
// EXAMPLE: An input of 50 produces a 50x50 grid
function generateGrid(gridSideLength) {
    if (gridSideLength > 100){
        alert('Maximum Allowable Size 100')
        return;
    }

    deleteCurrentGrid();

    // let gridLineBreakHandler = document.createElement('style');
    let gridLineBreakHandler = document.querySelector('.grid-line-break-handler');

    gridLineBreakHandler.textContent = `
        .square-div:nth-child(${gridSideLength}n + 1) {
            width: 100%;
            border: 0;
            height: 0;
        }`

    for (let columns = 0; columns < gridSideLength; columns++) {

        for (let rows = 0; rows < gridSideLength; rows++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square-div');

            squareDiv.addEventListener('mouseover', (event) => {
                // Stops crash if both keys are held down
                if(event.ctrlKey === true && event.altKey === true){
                    return;
                }
                if (event.ctrlKey === true) {
                    squareDiv.classList.add('colored-in');
                }
                if (event.altKey === true) {
                    squareDiv.classList.remove('colored-in');
                }
            })

            etchContainer.appendChild(squareDiv);
        }

    }


}
