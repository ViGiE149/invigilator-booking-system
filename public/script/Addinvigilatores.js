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





  })
  .catch((error) => {
    console.error("Error adding invigilator: ", error);
    // Optionally, you can display an error message or perform other actions here
  });
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
