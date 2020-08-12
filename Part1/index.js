console.log('I am working')

const board = []

function play(clickedId) {
  const playerSpan = document.getElementById('player')
  const clickedElement = document.getElementById(clickedId)

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O'
    clickedElement.innerText = 'X'
    board[clickedId] = 'X'
  } else {
    playerSpan.innerText = 'X'
    clickedElement.innerText = 'O'
    board[clickedId] = 'O'
  }

  const tLeft = board[0]
  const tMiddle = board[1]
  const tRight = board[2]
  const mLeft = board[3]
  const mMiddle = board[4]
  const mRight = board[5]
  const bLeft = board[6]
  const bMiddle = board[7]
  const bRight = board[8]

  if (tLeft !== undefined && tLeft === tMiddle && tLeft === tRight) {
    alert(`${tLeft} is the winner!`)
    resetGame()
    return
  }

  if (tLeft !== undefined && tLeft === mLeft && tLeft === bLeft) {
    alert(`${tLeft} is the winner!`)
    resetGame()
    return
  }

  if (tLeft !== undefined && tLeft === mMiddle && tLeft === bRight) {
    alert(`${tLeft} is the winner!`)
    resetGame()
    return
  }

  if (tMiddle !== undefined && tMiddle === mMiddle && tMiddle === bMiddle) {
    alert(`${tMiddle} is the winner!`)
    resetGame()
    return
  }

  if (tRight !== undefined && tRight === mRight && tRight === bRight) {
    alert(`${tRight} is the winner!`)
    resetGame()
    return
  }

  if (tRight !== undefined && tRight === mMiddle && tRight === bLeft) {
    alert(`${tRight} is the winner!`)
    resetGame()
    return
  }

  if (mLeft !== undefined && mLeft === mMiddle && mLeft === mRight) {
    alert(`${mLeft} is the winner!`)
    resetGame()
    return
  }

  if (bLeft !== undefined && bLeft === bMiddle && bLeft === bRight) {
    alert(`${bLeft} is the winner!`)
    resetGame()
    return
  }

  let boardFull = true

  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false
    }
  }

  if (boardFull === true) {
    alert('Cats Game')
    resetGame()
  }
}

function resetGame() {
  board.splice(0)

  const squares = document.getElementsByTagName('td')

  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = ''
  }

  const playerSpan = document.getElementById('player')

  playerSpan.innerText = 'X'
}
