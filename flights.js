const boxes = document.querySelectorAll(".boxes")
const buttons = document.querySelectorAll(".purchase")
console.log(buttons)

boxes.forEach((box, idx) => {
    buttons[idx].addEventListener("click", e =>{
        if(boxes[idx].classList.contains("active")) boxes[idx].classList.remove("active")
            else {
                boxes.forEach(box => {
                    box.classList.remove("active")
                })
                boxes[idx].classList.add("active")
            }
    })
})