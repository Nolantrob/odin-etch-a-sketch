const etchContainer = document.querySelector('#etch-container');
const createGridButton = document.querySelector('.create-grid-button');
const clearGridButton = document.querySelector('.clear-grid-button');

// Stops the forbidden cursor behavior when dragging
document.addEventListener('dragstart', (event) => {
    event.preventDefault();
})

// By default, open a 100x100 grid
generateGrid(100);

function promptUserForInput() {
    gridCount = prompt('Enter desired grid size:');

    if (gridCount <= 0 || gridCount > 100 || String(gridCount).length <= 0 || isNaN(gridCount)) {
        alert('Invalid: Must be an integer greater than zero and less than 100')
        promptUserForInput();
        return;
    } else {
        generateGrid(gridCount);
    }
}

function deleteCurrentGrid() {
    etchContainer.innerHTML = '';
}

function clearAllGridSquares() {
    const allBoxes = document.querySelectorAll('.square-div');
    allBoxes.forEach(box => {
        box.classList.remove('colored-in');
    })
}

// All button click event listeners
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case 'delete-button':
                deleteCurrentGrid();
                break;
            case 'clear-button':
                clearAllGridSquares();
                break;
            case 'create-button':
                promptUserForInput();
                break;
            default:
                break;
        }
    })
})

// Generate a grid based on the user's input number.
// EXAMPLE: An input of 50 produces a 50x50 grid
function generateGrid(gridSideLength) {

    deleteCurrentGrid();

    for (let columns = 0; columns < gridSideLength; columns++) {

        for (let rows = 0; rows < gridSideLength; rows++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square-div');
            squareDiv.style.opacity = 1;

            squareDiv.addEventListener('contextmenu', (event) => {
                event.preventDefault();
              });

            squareDiv.addEventListener('mousedown', (event) => {
                if (event.buttons === 1) {
                    squareDiv.classList.add('colored-in');
                } else {
                    return;
                }
            })
            squareDiv.addEventListener('mouseover', (event) => {
                if (event.buttons === 1) {

                    if (squareDiv.style.opacity <= 0){
                        squareDiv.style.opacity = 0;
                        return;
                    } else {
                        squareDiv.style.opacity -= 0.2;
                    }
            

                } else if (event.buttons === 2) {
                    // squareDiv.classList.remove('colored-in');
                    if (squareDiv.style.opacity <= 1){
                        return;
                    } else {
                        squareDiv.style.opacity += 0.2;
                        console.log(squareDiv.style.opacity);
                    }

                }
            })

            etchContainer.appendChild(squareDiv);

        }

    }

    // Magic number helping guide line breaks \o/
    etchContainer.style.width = `${8 * gridSideLength}px`;

}

