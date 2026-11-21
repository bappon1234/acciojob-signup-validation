const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailFeedback = document.getElementById("email-feedback");
const passwordFeedback = document.getElementById("password-feedback");
const successMsg = document.getElementById("success-msg");

successMsg.classList.add("hidden");

let isEmailValid = false;
let isPasswordValid = false;

emailInput.addEventListener("input", function () {
  const val = emailInput.value.trim();
  isEmailValid = val.length > 3 && val.includes("@") && val.includes(".");
});


emailInput.addEventListener("blur", function () {
  if (isEmailValid) {
    emailFeedback.classList.add("hidden");
  } else {
    emailFeedback.classList.remove("hidden");
  }
});


passwordInput.addEventListener("input", function () {
  const val = passwordInput.value;
  if (val.length >= 8) {
    isPasswordValid = true;
    passwordFeedback.classList.add("hidden");
  } else {
    isPasswordValid = false;
    passwordFeedback.classList.remove("hidden");
  }
});


form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailVal = emailInput.value.trim();
  isEmailValid = emailVal.length > 3 && emailVal.includes("@") && emailVal.includes(".");

  const passVal = passwordInput.value;
  isPasswordValid = passVal.length >= 8;

  emailFeedback.classList.toggle("hidden", isEmailValid);
  passwordFeedback.classList.toggle("hidden", isPasswordValid);

  if (!isEmailValid || !isPasswordValid) {
    successMsg.classList.add("hidden");
    return;
  }


  successMsg.textContent = "All set to go";
  successMsg.classList.remove("hidden");

  requestAnimationFrame(function () {
    setTimeout(function () {
      const confirmed = window.confirm("Are you sure you want to submit the form?");

      if (confirmed) {
        alert("Successful signup!");
      } else {
        form.reset();
        isEmailValid = false;
        isPasswordValid = false;
        emailFeedback.classList.remove("hidden");
        passwordFeedback.classList.remove("hidden");
        successMsg.classList.add("hidden");
      }
    }, 50);
  });
});
