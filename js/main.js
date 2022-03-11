/*----- app's state (variables) -----*/
let clicked, counter, loseCounter

clicked = false
counter = 0
loseCounter = 0



/*----- cached element references -----*/
const squareDiv = document.querySelector(".square")
const blockEl = document.querySelector(".block")
const boardEl = document.querySelector(".board")
const bannerEl = document.querySelector(".banner")




/*----- event listeners -----*/
//event listener for a click on any of the blocks
boardEl.addEventListener('click', showColor)



/*----- functions -----*/
//function that will remove the hidden class and reveal the color of the block  and match them.
function showColor (e){
    if (e.target.classList.contains("block")){
        e.target.id = ""
        if (!clicked) {
            clicked = e.target.classList[2]
        } else {
            if(e.target.classList[2] === clicked) {
                counter += 1     
            } else {
                const pairs = document.querySelectorAll(`.${clicked}`)
                pairs[0].id = "hidden"
                pairs[1].id = "hidden"

                e.target.id = "hidden"
                loseCounter += 1
            }
            clicked = false
        }
    } // win/loss conditions saying if you reach 5 mistakes the h1 above will display "You lose!"
    if (counter === 8){
        bannerEl.textContent = "YOU WIN!"
        boardEl.removeEventListener('click', showColor)
    } else if(loseCounter === 5) {
        bannerEl.textContent = "YOU LOSE!"
        boardEl.removeEventListener('click', showColor)
    }
}










