const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress")

let buttonClicks = 0;

btnNext.addEventListener('click', function(){
    if(buttonClicks > 2) {
        buttonClicks = 2;
    }else{
        buttonClicks++;
        update();
    }
})

btnPrev.addEventListener('click', function() {
    if(buttonClicks < 1) {
        buttonClicks = 1
    }else{
        buttonClicks--;
        update();
    }
})


function update() {
    circles.forEach((circle, idx) =>{
        if(buttonClicks+1 > idx) {
            circle.classList.add("active");
        }else if(buttonClicks-1 < idx) {
            circle.classList.remove("active");
        }
    })
    progress.style.width = `${buttonClicks * 33.333}%`;
    console.log(buttonClicks);

    if(buttonClicks >= 1 && buttonClicks < 3) {
        btnNext.disabled = false;
        btnPrev.disabled = false;
    }else if(buttonClicks < 1) {
        btnPrev.disabled = true;
        btnNext.disabled = false;
    }else if(buttonClicks === 3) {
        btnNext.disabled = true;
    }
}

