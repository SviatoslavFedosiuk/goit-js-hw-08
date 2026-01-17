// 1
const inputColorsRef = document.querySelectorAll('input[name="color"');
inputColorsRef.forEach((item) => {
  if (item.checked) {
    document.body.style.backgroundColor = item.value;
  }
  item.addEventListener("change", (event) => {
    const color = event.currentTarget.value;
    document.body.style.backgroundColor = color;
  });
});

// 2
const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
inputRef.addEventListener("input", (event) => {
  const value = event.currentTarget.value;
  console.log(value);
  outputRef.textContent = value;
  if (value.length === 0) {
    outputRef.textContent = "Незнайомець";
  }
});
const validationRef = document.querySelector("#validation-input");
validationRef.addEventListener("blur", () => {
  const finishLength = Number(validationRef.dataset.length);
  const startLength = validationRef.value.length;
  validationRef.computedStyleMap.border = "3px solid black";
  if (startLength === finishLength) {
    validationRef.style.borderColor = "darkgreen";
  } else {
    validationRef.style.borderColor = "red";
  }
});

// 3

const sliderRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");
sliderRef.addEventListener("input", () => {
  spanRef.style.fontSize = sliderRef.value + "px";
  console.log(`Range value - ${sliderRef.value}`);
  console.log(`Font size - ${sliderRef.value}px`);
});
