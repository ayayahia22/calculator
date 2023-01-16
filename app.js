let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByTagName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.value = "";
        break;

      case "←":
        display.value = display.value.slice(0, -1);
        break;

      case "=":
        try {
          display.value = eval(display.value);
        } catch {
          "error", Error;
        }
        break;

      default:
        if(display.value.length < 10){
            display.value += e.target.innerText;
            break;
        }
        break;
    }
  });
});
