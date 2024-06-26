// Function to add an invigilator to Firestore
async function addInvigilator(name, email, phoneNumber) {
  // Access the Firestore collection for invigilators
  const invigilatorsCollection = await firebase.firestore().collection('invigilatorInfomation');

  // Add the invigilator data to Firestore
  invigilatorsCollection.add({
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    bookedOnTheseDates:[]
  })
  .then(async (docRef) => {
    console.log("Invigilator added with ID: ", docRef.id);
    // Optionally, you can display a success message or perform other actions here


    const tracDateskinvigilatorsCollection = firebase.firestore().collection('trackBookedInvigilators');

    // Add the invigilator data to Firestore
    tracDateskinvigilatorsCollection.doc(email).set({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      bookedOnTheseDates:[]
    });
// After successfully adding invigilator, display success message for 1 second (1000 milliseconds)
displaySuccessMessage("Invigilator added successfully!", 1500);





  })
  .catch((error) => {
    console.error("Error adding invigilator: ", error);
    // Optionally, you can display an error message or perform other actions here
  });
}

// Function to display success message for a specified duration
function displaySuccessMessage(message, duration) {
  const successMessage = document.getElementById("successMessage");
  successMessage.textContent = message; // Set the text content of the message
  successMessage.style.display = "block"; // Display the message
  
  // Set a timer to hide the message after the specified duration
  setTimeout(function() {
    successMessage.style.display = "none"; // Hide the message by changing its CSS display property
  }, duration);
}


// Event listener for submitting the invigilator form
document.getElementById('invigilatorForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phoneNumber').value;

  // Add the invigilator to Firestore
  addInvigilator(name, email, phoneNumber);

  // Reset the form
  event.target.reset();
});
