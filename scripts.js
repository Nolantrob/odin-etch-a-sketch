const etchContainer = document.querySelector('#etch-container');
const createGridButton = document.querySelector('.create-grid-button');
const clearGridButton = document.querySelector('.clear-grid-button');

generateGrid(100);


document.querySelector('.delete-grid-button').addEventListener('click', () => {
    etchContainer.innerHTML = '';
})

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
                deleteCurrentGrid();
                generateGrid(gridCount);
                break;
            default:
                break;
        }
    })
})


function generateGrid(gridSideLength) {

    for (let i = 0; i < gridSideLength; i++) {

        for (let r = 0; r < gridSideLength; r++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square-div');


            squareDiv.addEventListener('mouseover', (event) => {
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

function deleteCurrentGrid() {
    etchContainer.innerHTML = '';
}