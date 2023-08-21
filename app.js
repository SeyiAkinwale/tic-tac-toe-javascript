const gameboard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info')
const startCells = 
[
  "", "", "", "", "", "", "", "", "",
]

function createBoard() 
{
  startCells.forEach((_cell, index) => 
    {
    const cellElement = document.createElement('div')
    cellElement.classList.add('square')
    cellElement.id = index
    gameboard.append(cellElement)
    })
}

createBoard()