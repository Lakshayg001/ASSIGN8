document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  clearErrors();

  // Get form values
  var firstName = document.getElementById("firstName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
  var phoneNumber = document.getElementById("phoneNumber").value.trim();
  var password = document.getElementById("password").value;
  var termsChecked = document.getElementById("terms").checked;

  // Validate inputs
  var isValid = true;

  if (firstName === "") {
    displayError("firstNameError", "First name cannot be empty");
    isValid = false;
  }

  if (lastName === "") {
    displayError("lastNameError", "Last name cannot be empty");
    isValid = false;
  }

  if (!/^\d{10}$/.test(phoneNumber)) {
    displayError("phoneNumberError", "Please enter a valid phone number");
    isValid = false;
  }

  if (password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password)) {
    displayError(
      "passwordError",
      "Password must be at least 8 characters long and contain at least one numeric value and one uppercase letter"
    );
    isValid = false;
  }

  if (!termsChecked) {
    displayError("termsError", "Please agree to the Terms and Conditions");
    isValid = false;
  }

  if (isValid) {
    // Form is valid, submit or do further processing
    console.log("Form submitted successfully");
    alert("Form submitted successfully");
  }
});

function displayError(elementId, errorMessage) {
  var errorElement = document.getElementById(elementId);
  errorElement.innerText = errorMessage;
}

function clearErrors() {
  var errorElements = document.getElementsByClassName("error");
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].innerText = "";
  }
}
