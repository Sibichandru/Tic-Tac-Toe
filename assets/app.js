const playArea= document.querySelector("#playArea")
const infoDisplay = document.querySelector("#info")

const startCells =[
    "", "", "", "", "", "", "", "", "",
]

let go ="circle"
infoDisplay.textContent="Circle Goes First"





function createBoard(){
    startCells.forEach((_squares , index) =>{
        const cell = document.createElement('div')
        cell.classList.add('square')
        cell.id = index
        cell.addEventListener('click', addGo)
        playArea.append(cell)
    })
}
createBoard()

function addGo(e){
    // console.log(e.target);
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go ==="circle" ? "cross" : "circle"
    info.textContent = `Now ${go}'s Turn`
    e.target.removeEventListener("click" ,addGo)
    checkResult()   
}

function checkResult(){
    const allSquares = document.querySelectorAll(".square")
    // console.log(allSquares)
    const winningPatterns=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    winningPatterns.forEach(array =>{
        const circleWins = array.every(box =>
            allSquares[box].firstChild?.classList.contains('circle'))

            if(circleWins){
                infoDisplay.textContent = "circle Wins"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
        })

    winningPatterns.forEach(array =>{
        const crossWins = array.every(box =>
            allSquares[box].firstChild?.classList.contains('cross'))
    
            if(crossWins){
                infoDisplay.textContent = "cross Wins"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }    
    })

}