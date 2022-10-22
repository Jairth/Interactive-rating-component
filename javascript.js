const submit = document.querySelector("#submit");
const wrapper = document.querySelector(".cards__wrapper");
const numbers = document.querySelectorAll(".span");
const select = document.getElementById("selected");

numbers.forEach((element) => {
  element.addEventListener("click", () => {
    select.innerText = `You selected ${element.innerText} out of 5`
    submit.addEventListener("click", () => {
      wrapper.style.transform = "rotateY(-180deg)";
    });
  });
});