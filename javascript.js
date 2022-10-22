const submit = document.querySelector("#submit");
const wrapper = document.querySelector(".cards__wrapper");
const numbers = document.querySelectorAll(".span");
const select = document.getElementById("selected");
const uno = document.querySelector("#uno")
const dos = document.querySelector("#dos")
const tres = document.querySelector("#tres")
const cuatro = document.querySelector("#cuatro")
const cinco = document.querySelector("#cinco")

submit.addEventListener("click", () => {
  wrapper.style.transform = "rotateY(-180deg)";
});

numbers.forEach((num) => {
  num.addEventListener("click", function click() {
    num.setAttribute("style", "background : hsl(217, 12%, 63%); color: white");
  });
});


function scaner () {
  let num = uno.value
  // let num2 = String(dos.value)
  // let num3 = String(tres.value)
  // let num4 = String(cuatro.value)
  // let num5 = String(cinco.value)

  if (num == 1) {
    select.innerText = `You selected ${num} out of 5`
  }
}

uno.addEventListener('click', scaner)
