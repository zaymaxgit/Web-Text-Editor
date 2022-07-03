let optButton = document.querySelectorAll(".opt_button");
let addOptButton = document.querySelectorAll(".add_opt_button");
let fontName = document.getElementById("fontName");
let fontSize = document.getElementById("fontSize");
let textArea = document.getElementById("input_text");
let alignButton = document.querySelectorAll(".align");
let spacingButton = document.querySelectorAll(".spacing");
let formatButton = document.querySelectorAll(".format");
let scriptButton = document.querySelectorAll(".script");

const init = () => {
  marker(alignButton, true);
  marker(spacingButton, true);
  marker(formatButton, false);
  marker(scriptButton, true);
  const textEditor = (command, ui, value) => {
    document.execCommand(command, ui, value);
  };
  optButton.forEach((e) => {
    e.addEventListener("click", () => {
      textEditor(e.id, false, null);
    });
  });
  addOptButton.forEach((e) => {
    e.addEventListener("click", () => {
      textEditor(e.id, false, e.value);
    });
  });
  let fontList = [
    "Arial",
    "Verdana",
    "Roboto",
    "Times New Romans",
    "Georgia",
    "The Nautigal",
  ];
  fontList.map((value) => {
    let opt = document.createElement("option");
    opt.value = value;
    opt.innerHTML = value;
    fontName.appendChild(opt);
  });
  fontName.value = "Times New Romans";
  for (let i = 1; i <= 16; i++) {
    let opt = document.createElement("option");
    opt.value = i;
    opt.innerHTML = i;
    fontSize.appendChild(opt);
  }
  fontSize.value = 4;
};
const marker = (className, val) => {
  className.forEach((e) => {
    e.addEventListener("click", () => {
      if (val) {
        let active = false;
        if (e.classList.contains("active")) {
          active = true;
          e.classList.remove("active");
        }
        if (!active) {
          e.classList.add("active");
        }
      } else {
        e.classList.toggle("active");
      }
    });
  });
};

window.onload = init();
