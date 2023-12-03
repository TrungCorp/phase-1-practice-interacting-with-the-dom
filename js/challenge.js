//VARIABLES===========================================//
const counter = document.querySelector('#counter')
const counterContainer = document.querySelector('#counter')

//=========BUTTONS================//
const minusButton = document.querySelector('#minus')
const plusButton = document.querySelector('#plus')
const heartButton = document.querySelector('#heart')
const pauseButton = document.querySelector('#pause')
const submitButton = document.querySelector('#comment-form')
//===============================//
const inputResult = document.querySelector('#comment-input')
const likedArray = []
const list = document.querySelector('#list')
const likes = document.querySelector('.likes')
const form = document.querySelector('#comment-form')
let listNum = 0
const commentList = document.querySelector('#list')
//const commentListStyle = document.querySelector('.comments')

const userInput = document.getElementById('#comment-input')
//=================================================//
function startTimer() {
    counter.textContent = parseInt(counter.innerHTML) + 1
}

function likedSearch(array, counterNum) {
    let toggle = array.find(element => element.name === counterNum)
    return toggle

}
document.addEventListener('DOMContentLoaded', function () {
    let interval = setInterval(startTimer, 1000)
    let buttonValue = pauseButton.innerHTML
    //===============PAUSE_BUTTON================//
    pauseButton.addEventListener('click', function () {
        if (buttonValue === ' pause ') {
            pauseButton.textContent = ' resume '
            clearInterval(interval)
            console.log(buttonValue)
            buttonValue = ' resume '
            plusButton.disabled = true
            minusButton.disabled = true
            submitButton.disabled = true
            heartButton.disabled = true

        }

        else {
            interval = setInterval(startTimer, 1000)
            pauseButton.textContent = ' pause '
            console.log('resume')
            buttonValue = ' pause '
            counter.textContent = 0
            plusButton.disabled = false
            minusButton.disabled = false
            submitButton.disabled = false
            heartButton.disabled = false
        }

    })

    //===========HEART_BUTTON========//
    heartButton.addEventListener('click', function () {
        const appen = document.createElement('li')
        //likedSearch(likedArray,counter) 

        let toggle = likedArray.find(element => element.name === parseInt(counter.textContent))
        let parseNum = parseInt(counter.textContent)
        let indexValue = likedArray.findIndex(ele => ele.name === toggle)
        //let indexValuenum = parseInt(indexValue,10)
        if (toggle === undefined) {
            const newObj = { name: parseInt(counter.textContent), index: listNum, counter: 1 }
            listNum += 1
            likedArray.push(newObj)
            appen.id = parseInt(counter.textContent)
            appen.textContent = `${parseNum} has been liked ${parseInt(newObj.counter)} times`
            likes.appendChild(appen)
            console.log(likedArray)
            console.log(appen.id)
            //console.log(likedArray[])
        }
        else {
            //likedArray[indexValue].name = likedArray[indexValue].name +1
            // console.log('else return value'+likedArray[].name)
            const itemChange = document.getElementById(parseInt(counter.textContent))
            likedArray[itemChange.id].counter++
            itemChange.textContent = `${parseNum} has been liked ${parseInt(likedArray[itemChange.id].counter)} times`

        }


    })

    //===========PLUS_BUTTON=======//
    plusButton.addEventListener('click', function () {
        counter.textContent = parseInt(counter.textContent) + 1
    })

    //===========MINUS_BUTTON=======//
    minusButton.addEventListener('click', function () {
        counter.textContent = parseInt(counter.textContent) - 1
    })

    //============SUBMIT_BUTTON============//
    submitButton.addEventListener('submit', function (event) {
        event.preventDefault()
        
        const userInput = document.getElementById('comment-input').value
        const newItem = document.createElement('li')
        newItem.textContent = userInput
        if(newItem.textContent !== '')
        {
            commentList.appendChild(newItem)
        }
        
        
    })

})



