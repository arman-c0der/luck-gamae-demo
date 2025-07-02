const p1BtnElm=document.querySelector('.p1Btn')
const p2BtnElm=document.querySelector('.p2Btn')
const p1ScoreElm =document.querySelector('.p1')
const p2ScoreElm =document.querySelector('.p2')
const winPlayerElm=document.querySelector('.winner')
const winScoreElm=document.querySelector('.lucky-number span')
const formElm = document.querySelector('form')
const inputElm =document.querySelector('#luck-input')
const resetBtn = document.querySelector('#resetBtn')

let p1Score = 0
let p2Score = 0
let p1Turn =true
let p2Turn =false
let winningScore = 5
 let gameOver = false

winScoreElm.textContent = winningScore
p1BtnElm.addEventListener('click',(evt)=>{
  if(p1Turn){
    p1Score++
    p1ScoreElm.textContent=p1Score
    identifyWinner()
    identifyWinningState()
    p1Turn = false
    p2Turn =true
    p1BtnElm.setAttribute('disabled','disabled')
    p2BtnElm.removeAttribute('disabled')
  }
  if(gameOver){
    disableBtnInput()
  }
 
})

p2BtnElm.addEventListener('click',(evt)=>{
  if(p2Turn){
    p2Score++
    p2ScoreElm.textContent=p2Score
    identifyWinner()
    identifyWinningState()
    p2Turn= false
    p1Turn = true
    p2BtnElm.setAttribute('disabled','disabled')
    p1BtnElm.removeAttribute('disabled')
  }
   if(gameOver){
    disableBtnInput()
  }
})

function identifyWinningState(){
  if(p1Score === winningScore || p2Score === winningScore){
    gameOver = true
  }
}
function identifyWinner(){
  if(p1Score === winningScore ){
    winner='p1'
     winPlayerElm.textContent ="player-1 is winnier"
  }

   if(p2Score === winningScore ){
    winner='p2'
     winPlayerElm.textContent ="player-2 is winnier"
  }
}
function disableBtnInput(){
  p1BtnElm.setAttribute('disabled','disabled')
  p2BtnElm.setAttribute('disabled','disabled')
}
function validateInput(elmValue){
  if(elmValue.trim() == " " || Number(elmValue) !== Number(elmValue) || Number(elmValue)<=0){
 alert('please enter a valid number')
  }
}
function resetInput(){
 p1Score = 0
 p2Score = 0
 p1Turn =true
 p2Turn =true
 winningScore = 5
 gameOver = false
 p1ScoreElm.textContent=p1Score
 p2ScoreElm.textContent=p2Score
 winPlayerElm.textContent=''
 p1BtnElm.removeAttribute('disabled')
 p2BtnElm.removeAttribute('disabled')

}
formElm.addEventListener('submit',(evt)=>{
  evt.preventDefault()
  validateInput(inputElm.value)
   resetInput()
  
  const value = inputElm.value
 console.log(value)
  winScoreElm.textContent = value
  inputElm.value = ''
  
  

})

resetBtn.addEventListener('click',(evt)=>{
  resetInput()
})
function randomizeStartPlayer(){
  const players=['p1','p2']
  const index =Math.floor( Math.random() * players.length)
  const player=players[index]
  return player
}
function setInitialPlayerTurnValue(){
  const player = randomizeStartPlayer()
  if(player === 'p1'){
    p1Turn = true
    p2BtnElm.setAttribute('disabled','disabled')
    p1BtnElm.removeAttribute('disabled')
  }else{
  p2Turn = true
    p1BtnElm.setAttribute('disabled','disabled')
    p2BtnElm.removeAttribute('disabled')
  }
}
setInitialPlayerTurnValue()

 

