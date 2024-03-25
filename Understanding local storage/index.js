function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get user input values
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Store data in local storage with specific keys
  localStorage.setItem("Username", username);
  localStorage.setItem("Email", email);
  localStorage.setItem("Phone", phone);

}

// Add event listener to the form for submit event
document
  .getElementById("bookingForm")
  .addEventListener("submit", handleFormSubmit);
