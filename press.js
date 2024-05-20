const navBtn = document.getElementById("navBtn");
const navLinkGroup = document.getElementById("navLinkGroup");
navBtn.addEventListener("click", () => {
  if (navLinkGroup.style.display === "none") {
      navLinkGroup.style.display = "block"
  } else {
    navLinkGroup.style.display = "none";
  }
});

// const targets = [
//     { element: document.getElementById('counter1').getElementsByTagName('h2')[0], target: 5248 },
//     { element: document.getElementById('counter2').getElementsByTagName('h2')[0], target: 675 },
//     { element: document.getElementById('counter3').getElementsByTagName('h2')[0], target: 248 },
//     { element: document.getElementById('counter4').getElementsByTagName('h2')[0], target: 24 },
// ];

// function updateCounter(counter) {
//     let currentNumber = parseInt(counter.element.textContent);
//     if (currentNumber < counter.target) {
//         currentNumber++;
//         counter.element.textContent = currentNumber;
//     }
// }

// setInterval(function () {
//     targets.forEach(updateCounter);
// }, 100);

window.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0)
    const counter1 = document.getElementById("counter1")
    const counter2 = document.getElementById("counter2")
    const counter3 = document.getElementById("counter3")
    const counter4 = document.getElementById("counter4")

    const funFact = document.querySelector(".funfact")
    const roundUp = (num) => {
        const roundedNum = Math.round(num/100) * 100 + 100
        return roundedNum
    }
    let hasScrolledToFun = false;
    const topOfFunFact = funFact.getBoundingClientRect().top
    window.addEventListener("scroll", () => {
        if (roundUp(window.scrollY) === roundUp(topOfFunFact) && hasScrolledToFun === false) {
            hasScrolledToFun = true
            console.log("In fun fact")
        }
    })
})

window.addEventListener("DOMContentLoaded", ()=>{
    const counter1 = document.getElementById
})