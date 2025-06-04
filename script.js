const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");
const submitBtn = document.getElementById("submitBtn");

// Validation functions
function validateName() {
  const namePattern = /^[A-Za-z\s]+$/;
  const value = nameInput.value.trim();
  if (value === "") {
    nameError.textContent = "Please enter your name.";
    nameInput.classList.add("input-error");
    nameInput.classList.remove("input-valid");
    return false;
  } else if (!namePattern.test(value)) {
    nameError.textContent = "Only letters and spaces allowed.";
    nameInput.classList.add("input-error");
    nameInput.classList.remove("input-valid");
    return false;
  } else {
    nameError.textContent = "";
    nameInput.classList.remove("input-error");
    nameInput.classList.add("input-valid");
    return true;
  }
}

function validateEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const value = emailInput.value.trim();
  if (value === "") {
    emailError.textContent = "Please enter your email.";
    emailInput.classList.add("input-error");
    emailInput.classList.remove("input-valid");
    return false;
  } else if (!emailPattern.test(value)) {
    emailError.textContent = "Enter a valid email.";
    emailInput.classList.add("input-error");
    emailInput.classList.remove("input-valid");
    return false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("input-error");
    emailInput.classList.add("input-valid");
    return true;
  }
}

function validateMessage() {
  const value = messageInput.value.trim();
  if (value === "") {
    messageError.textContent = "Please enter your message.";
    messageInput.classList.add("input-error");
    messageInput.classList.remove("input-valid");
    return false;
  } else {
    messageError.textContent = "";
    messageInput.classList.remove("input-error");
    messageInput.classList.add("input-valid");
    return true;
  }
}

// Live validation for better UX
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
messageInput.addEventListener("input", validateMessage);

// On form submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  if (isNameValid && isEmailValid && isMessageValid) {
    successMessage.textContent = "Your message has been sent successfully!";
    successMessage.classList.add("show");

    setTimeout(() => {
      successMessage.classList.remove("show");
      successMessage.textContent = "";
    }, 3000);

    this.reset();
    nameInput.classList.remove("input-valid");
    emailInput.classList.remove("input-valid");
    messageInput.classList.remove("input-valid");
  }
});
