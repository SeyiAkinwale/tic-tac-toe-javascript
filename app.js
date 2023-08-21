const gameboard = document.querySelector('#gameboard')

const infoDisplay = document.querySelector('#info')

const startCells = [
  "", "", "", "", "", "", "", "", "",
]

function createBoard() {
  startCells.forEach((cell:string, index:number) => {
    const cellEleement document.createEleemnt('div')
    cellEleement.classList.add('square')
  })
}