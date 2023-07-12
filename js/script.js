const numbers = ["C", "<", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "0", "00", ".", "="];
const wrapper = document.getElementsByClassName("wrapper")[0];

function handleButton(event) {
  const output = document.getElementById("output");
  const btn = event.target.innerText;

  if (btn === "C") {
    output.innerText = "0";
  } else if (btn === "=") {
    try {
      output.innerText = eval(output.innerText);
    } catch (error) {
      output.innerText = "Error";
    }
  } else if (btn === "<") {
    output.innerHTML = output.innerHTML.slice(0, -1);
    output.innerHTML == "" ? (output.innerHTML = 0) : "";
  } else {
    if (output.innerText === "0") {
      output.innerText = btn;
    } else {
      output.innerText += btn;
    }
  }
}

numbers.map((item) => {
  wrapper.innerHTML += `<button class="button" data-value="${item}" onClick="handleButton(event)">${item}</button>`;
});
