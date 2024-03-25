// function handleFormSubmit(event) {
//     event.preventDefault();
  
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
    
//     const userDetails = {
//       username: username,
//       email: email,
//       phone: phone,
//     };
  
//     const userDetailsJSON = JSON.stringify(userDetails);
  
//     localStorage.setItem("User Details", userDetailsJSON);
  
//   }

// function handleFormSubmit(event) {
//     event.preventDefault();
  
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
  
//     // Retrieve existing user data from local storage or initialize an empty array
//     // const users = JSON.parse(localStorage.getItem("users")) || [];
  
//     // Add new user to the array
//     const newUser = {
//       username: username,
//       email: email,
//       phone: phone,
//     };
//     // users.push(newUser);
  
//     // Save the updated user data to local storage
//     localStorage.setItem("user", JSON.stringify(newUser));
  
//     // Display the updated user list
//     displayUsers(users);
  
//     // Clear the form inputs
//     // document.getElementById('username').value = '';
//     // document.getElementById('email').value = '';
//     // document.getElementById('phone').value = '';
//   }
  
//   // Function to display users in the unordered list
//   function displayUsers(users) {
//     const userList = document.getElementById('userList');
  
//     // Clear existing list items
//     // while (userList.firstChild) {
//     //   userList.removeChild(userList.firstChild);
//     // }
  
//     // Create and append list items for each user
//     users.forEach((user) => {
//       const listItem = document.createElement('li');
//       listItem.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
//       userList.appendChild(listItem);
//     });
//   }
  
//   // Display existing users when the page loads
// //   document.addEventListener('DOMContentLoaded', () => {
// //     if (typeof Storage !== 'undefined') {
// //       const users = JSON.parse(localStorage.getItem('users')) || [];
// //       displayUsers(users);
// //     }
// //   });

function handleFormSubmit(event) {
      event.preventDefault();
    
      const username = event.target.username.value
      const email = event.target.email.value;
      const phone = event.target.phone.value;
      
      const userDetails = {
        username: username,
        email: email,
        phone: phone,
      };
    
      // const userDetailsJSON = JSON.stringify(userDetails);
    
      localStorage.setItem(userDetails.email, JSON.stringify(userDetails)); 

      showUserOnScreen(userDetails);
    
    }

    function showUserOnScreen(userDetails){
        
        const parentElem = document.getElementById("userList");
        parentElem.innerHTML = parentElem.innerHTML + `<li>${userDetails.username} - ${userDetails.email} - ${userDetails.phone}</li>`;

    }