function Validate(input) {
  let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let email = document.getElementById("email");
  let error = document.getElementById("error");
  if (input.value.match(format) === null) {
    email.classList.add("red-box");
    error.style.display = "initial";
    return false;
  } else {
    return true;
  }
}
