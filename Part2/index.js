console.log('The house always wins!')

const setId = document.getElementById('idInput')

const setColor = document.getElementById('colorInput')

// console.log(setId)
// console.log(setColor)

function setCard() {
  const card = document.getElementById(setId.value)

  console.log(setId.value)
  console.log(card)
  // console.log(card) didn't see the console log?
  card.style.color = setColor.value
}
