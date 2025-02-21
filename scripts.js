const etchContainer = document.querySelector('#etch-container');
const createGridButton = document.querySelector('.create-grid-button');
const clearGridButton = document.querySelector('.clear-grid-button');

let gridCount = 16;

// Combine all event listeners later
createGridButton.addEventListener('click', () => {
    gridCount = prompt('Enter desired grid size:');
    generateGrid();
})

clearGridButton.addEventListener('click', () => {
    const allBoxes = document.querySelectorAll('.square-div');
    allBoxes.forEach(box => {
        box.classList.remove('colored-in');
    })
})

document.querySelector('.delete-grid-button').addEventListener('click', () => {
    etchContainer.innerHTML = '';
})

// const buttons = document.querySelectorAll('button');
// buttons.forEach(button => {
//     button.addEventListener('click', () => {

//     })
// })


function generateGrid() {

    for (let i = 0; i < gridCount; i++) {

        for (let r = 0; r < gridCount; r++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square-div');

            squareDiv.addEventListener('mouseenter', () => {
                squareDiv.classList.add('colored-in');
            })
            etchContainer.appendChild(squareDiv);
        }

    }


}

generateGrid();

function deleteCurrentGrid() {
    etchContainer.innerHTML = '';
}