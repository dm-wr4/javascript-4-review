console.log('I am working')

const board = []

function play(clickedId) {
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)

    if(playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }
    console.log(board)
    
}

const tLeft = board[0]
const tMiddle = board[1]
const tRight = board [2]
const mLeft = board [3]
const mMiddle = board [4]
const mRight = board [5]
const bLeft = board [6]
const bMiddle = board [7]
const bRight = board [8]

if(tLeft !== undefined && tLeft === tMiddle && tLeft === tRight){
    alert ('Winner')
    return
} 

if(tLeft !== undefined && tLeft === mLeft && tLeft === bLeft){
    alert ('Winner')
    return  
} 

if(tLeft !== undefined && tLeft === mMiddle && tLeft === bRight){
    alert ('Winner')
    return
} 

if(tMiddle !== undefined && tMiddle === mMiddle && tMiddle === bMiddle){
    alert ('Winner')
    return
} 

if(tRight !== undefined && tRight === mRight && tRight === bRight){
    alert ('Winner')
    return
} 

if(tRight !== undefined && tRight === mMiddle && tRight === bLeft){
    alert ('Winner')
    return
} 

if(mLeft !== undefined && mLeft === mMiddle && mLeft === mRight){
    alert ('Winner')
    return
} 

if(bLeft !== undefined && bLeft === bMiddle && bLeft === bRight){
    alert ('Winner')
    return
} 
 let boardFull = true
 for (let i = 0; i<=8; i++){
     if (board[i] === undefined){
         boardFull = false
     }
 }
 if(boardFull === true){
     alert('Cats Game')
 }
