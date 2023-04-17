
const inputField = document.querySelector("#card-number");
      inputField.addEventListener("keyup", () => {
        if (inputField.value.length == 4)
          inputField.value = inputField.value + " ";
        if (inputField.value.length == 9)
          inputField.value = inputField.value + " ";
          if (inputField.value.length == 14)
          inputField.value = inputField.value + " ";
          if (inputField.value.length == 19)
          document.getElementById("date").focus();
      });
      inputField.addEventListener("keydown", (event) => {
        if (event.key === "Backspace") {
          if (inputField.value.length == 9 || inputField.value.length == 5) {
            event.preventDefault();
            inputField.value = inputField.value.slice(0, -1);
          }
        }
      });
      const dateField = document.querySelector("#date");
      dateField.addEventListener("keyup", () => {
        if (dateField.value.length == 2)
          dateField.value = dateField.value + "/";
        if (dateField.value.length == 5)
          document.getElementById("cvv").focus();
      });
      const cvvField = document.querySelector("#cvv");
      cvvField.addEventListener("keyup", () => {
        if (cvvField.value.length == 3)
          document.getElementById("card-holder").focus();
      });

      
      