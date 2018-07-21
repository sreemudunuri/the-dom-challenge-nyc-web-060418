let timerElement = document.querySelector('#counter')
let pauseButton = document.querySelector('#pause')
let addButton = document.getElementById('+')
let minusButton = document.getElementById('-')
let likeButton = document.getElementById('<3')
let addCommentButton = document.getElementById('submit')
var timeBoolean = true
let counter = 0

let likeHistory = {

}

add()
minus()
like()
addComments()
pause()


//starts the time at start
let startTimer = (function() {setInterval(timer, 1000)
})()
// callback function for startTimer
function timer(){
  if (timeBoolean === true) {
    addCounter()
  }
}

//pause and unpauses the counter, also able and disable buttons
function pause() {
  pauseButton.addEventListener("click", function() {
    if (timeBoolean === true) {
      timeBoolean = false
      clearInterval(startTimer)
      diableButtons()
    } else if (timeBoolean === false){
      timeBoolean = true
      ableButtons()
    }
  })
}


// when + button clicks adds the counter
function add(){
  addButton.addEventListener("click", function() {
    addCounter()
  })
}
//when - button clicks minus the counter
function minus(){
  minusButton.addEventListener("click", function() {
    if (counter > 0) {
      minusCounter()
    }
  })
}



function like(){


  likeButton.addEventListener('click', function(){
    /// work on this

    let likeList = document.getElementById('list')
    let comment = document.createElement('li')

    if (!!likeHistory[counter] === false) {
      likeHistory[counter] = 1
      comment.innerHTML = `${counter} : ${likeHistory[counter]}`
      likeList.appendChild(comment)
    } else {
      likeHistory[counter] += 1
      console.log(`${likeHistory[counter]}`)
      let allLikes = document.querySelectorAll('#list li')
      lastLike = allLikes[allLikes.length - 1]
      lastLike.innerHTML = `${counter} : ${likeHistory[counter]}`
    }
  })


}


function addComments() {

  addCommentButton.addEventListener('click', function(event) {
    event.preventDefault()

    let body = document.querySelector('body')
    let createComment = document.createElement('li')

    let commentInput = document.querySelector('form input').value

    createComment.innerHTML = commentInput

    body.appendChild(createComment)

  })
}

// adds the counter
function addCounter() {
  counter++
  timerElement.innerHTML = counter
}
// minus the counter
function minusCounter() {
  counter--
  timerElement.innerHTML = counter
}

// diable buttons
function diableButtons() {
  addButton.disabled = true
  minusButton.disabled = true
  likeButton.disabled = true
}
//turn buttons on
function ableButtons() {
  addButton.disabled = false
  minusButton.disabled = false
  likeButton.disabled = false
}
