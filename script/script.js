//scrip.js file

let exams = [];
let invigilators = [];

//invigilators that can be booked
// Define arrays to store exam and invigilator records


//invigilators that can be booked
letinvigilatorsInformation = [
   //{
  //   name: "John Doe",
  //   email: "john.doe@example.com",
  //   phoneNumber: "123-456-7890",
  // },
  // {
  //   name: "Jane Smith",
  //   email: "jane.smith@example.com",
  //   phoneNumber: "987-654-3210",
  // },
  // {
  //   name: "Michael Johnson",
  //   email: "michael.johnson@example.com",
  //   phoneNumber: "456-789-0123",
  // },
  // {
  //   name: "Emily Brown",
  //   email: "emily.brown@example.com",
  //   phoneNumber: "789-012-3456",
  // },
  // {
  //   name: "David Wilson",
  //   email: "david.wilson@example.com",
  //   phoneNumber: "321-654-9870",
  // },
  // {
  //   name: "Sarah Garcia",
  //   email: "sarah.garcia@example.com",
  //   phoneNumber: "654-321-0987",
  // },
  // {
  //   name: "Daniel Martinez",
  //   email: "daniel.martinez@example.com",
  //   phoneNumber: "012-345-6789",
// },
];

// Initial exam records
const initialExams = [
  {
    date: "2024-04-10",
    time: "09:00",
    endTime: "10:00",
    lectureName: "Mathematics",
    subjectCode: "MATH101",
    lecturerEmail: "math_teacher@example.com",
    invigilatorsNeeded: 2,
    venue: "Room 101",
    secretCode: "abc123",
  },
  {
    date: "2024-04-12",
    time: "14:00",
    endTime: "15:00",
    lectureName: "Physics",
    subjectCode: "PHY202",
    lecturerEmail: "physics_teacher@example.com",
    invigilatorsNeeded: 3,
    venue: "Room 201",
    secretCode: "def456",
  },
  {
    date: "2024-04-15",
    time: "10:30",
    endTime: "11:00",
    lectureName: "Chemistry",
    subjectCode: "CHEM303",
    lecturerEmail: "chemistry_teacher@example.com",
    invigilatorsNeeded: 2,
    venue: "Room 301",
    secretCode: "ghi789",
  },
  {
    date: "2024-04-18",
    time: "09:30",
    endTime: "10:30",
    lectureName: "Biology",
    subjectCode: "BIO404",
    lecturerEmail: "biology_teacher@example.com",
    invigilatorsNeeded: 2,
    venue: "Room 401",
    secretCode: "jkl012",
  },
  {
    date: "2024-04-20",
    time: "11:00",
    endTime: "13:00",
    lectureName: "English",
    subjectCode: "ENG505",
    lecturerEmail: "english_teacher@example.com",
    invigilatorsNeeded: 1,
    venue: "Room 501",
    secretCode: "mno345",
  },
  {
    date: "2024-04-22",
    time: "13:00",
    endTime: "14:00",
    lectureName: "History",
    subjectCode: "HIS606",
    lecturerEmail: "history_teacher@example.com",
    invigilatorsNeeded: 2,
    venue: "Room 601",
    secretCode: "pqr678",
  },
  {
    date: "2024-04-25",
    time: "10:00",
    endTime: "11:30",
    lectureName: "Geography",
    subjectCode: "GEO707",
    lecturerEmail: "geography_teacher@example.com",
    invigilatorsNeeded: 2,
    venue: "Room 701",
    secretCode: "stu901",
  },
];

// Initial invigilator records
const trackBookedInvigilators = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    bookedOnTheseDates: [
      "2024-04-10T09:00",
      "2024-04-12T14:00",
      "2024-04-15T10:30",
      "2024-04-18T09:30",
    ],
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "987-654-3210",
    bookedOnTheseDates: [
      "2024-04-10T09:00",
      "2024-04-15T10:30",
      "2024-04-20T11:00",
      "2024-04-22T13:00",
    ],
  },
  {
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    phoneNumber: "456-789-0123",
    bookedOnTheseDates: [
      "2024-04-12T14:00",
      "2024-04-15T10:30",
      "2024-04-18T09:30",
      "2024-04-20T11:00",
      "2024-04-25T10:00",
    ],
  },
  {
    name: "Emily Brown",
    email: "emily.brown@example.com",
    phoneNumber: "789-012-3456",
    bookedOnTheseDates: [
      "2024-04-10T09:00",
      "2024-04-12T14:00",
      "2024-04-15T10:30",
      "2024-04-18T09:30",
      "2024-04-22T13:00",
      "2024-04-25T10:00",
    ],
  },
  {
    name: "David Wilson",
    email: "david.wilson@example.com",
    phoneNumber: "321-654-9870",
    bookedOnTheseDates: [
      "2024-04-15T10:30",
      "2024-04-18T09:30",
      "2024-04-20T11:00",
      "2024-04-22T13:00",
      "2024-04-25T10:00",
    ],
  },
  {
    name: "Sarah Garcia",
    email: "sarah.garcia@example.com",
    phoneNumber: "654-321-0987",
    bookedOnTheseDates: [
      "2024-04-18T09:30",
      "2024-04-20T11:00",
      "2024-04-22T13:00",
      "2024-04-25T10:00",
    ],
  },
  {
    name: "Daniel Martinez",
    email: "daniel.martinez@example.com",
    phoneNumber: "012-345-6789",
    bookedOnTheseDates: [
      "2024-04-20T11:00",
      "2024-04-22T13:00",
      "2024-04-25T10:00",
    ],
  },
];

// Merge initial records with existing records
exams = initialExams;
invigilators = trackBookedInvigilators;

// Function to add a new exam
async function addExam(event) {
  event.preventDefault();
  const date = document.getElementById("date").value;
  const endTime = document.getElementById("endTime").value;
  const time = document.getElementById("time").value;
  const lectureName = document.getElementById("lectureName").value;
  const subjectCode = document.getElementById("subjectCode").value;
  const lecturerEmail = document.getElementById("lecturerEmail").value;
  const invigilatorsNeeded = parseInt(
    document.getElementById("invigilatorsNeeded").value
  );
  const venue = document.getElementById("venue").value;
  const secretCode = document.getElementById("secretCode").value;

  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString("en-US", {
    hour12: false,
  });

  // Check if the date is in the past
  if (date < currentDate.toISOString().split("T")[0]) {
    alert("Cannot book exams for past dates.");
    return;
  }

  // Check if the time is in the past
  if (
    date === currentDate.toISOString().split("T")[0] &&
    startTime < currentTime
  ) {
    alert("Cannot book exams for past times.");
    return;
  }

  // Check if end time is before start time
  if (endTime <= time) {
    alert("End time must be after start time.");
    return;
  }

  
  // Filter already booked invigilators
  // const alreadyBookedInvigilators = invigilators.filter((invigilator) =>
  //   invigilator.bookedOnTheseDates.includes(`${date}T${time}`)
  // );

  const alreadyBookedInvigilators = invigilators.filter((invigilator) =>
  invigilator.bookedOnTheseDates && invigilator.bookedOnTheseDates.includes(`${date}T${time}`)
);


  // Filter invigilatorsInformation to exclude those already booked
  const availableInvigilators = invigilatorsInformation.filter(
    (invigilator) =>
      !alreadyBookedInvigilators.some(
        (booked) => booked.name === invigilator.name
      )
  );

  if (availableInvigilators.length < invigilatorsNeeded) {
    alert("Insufficient available invigilators.");
    return;
  }


  // Check for conflicts (double booking)
  const conflict = exams.find(
    (exam) => exam.date === date && exam.time === time && exam.venue === venue
  );

  if (conflict) {
    alert(
      "Another exam is already scheduled for the same date and time on this venue " +
        venue
    );
    console.log(
      "Another exam is already scheduled for the same date and time on this venue " +
        venue
    );
    return;
  }


//   const availableInvigilatorss = invigilatorsInformation.filter((invigilator) =>
//   invigilators.every((bookedInvigilator) => bookedInvigilator.email !== invigilator.email)
// );

  if (availableInvigilators.length >= invigilatorsNeeded) {
    // Book invigilators

const shuffledInvigilators = availableInvigilators.sort(() => Math.random() - 0.5);

// Select invigilators needed randomly
const bookedInvigilators = shuffledInvigilators.slice(0, invigilatorsNeeded);
    ///
    const bookedInvigilatorNames = bookedInvigilators.map(
      (invigilator) => invigilator.name
    );
    // Update exam record with booked invigilators
    exams.push({
      date,
      time,
      lectureName,
      subjectCode,
      secretCode,
      lecturerEmail,
      invigilatorsNeeded,
      venue,
      invigilators: bookedInvigilatorNames,
    });


    // Your existing code for collecting exam data...

  // Add the new exam data to Firestore
  try {
    const docRef = await  firebase.firestore().collection("exams").add({
      date: date,
      time: time,
      endTime: endTime,
      lectureName: lectureName,
      subjectCode: subjectCode,
      lecturerEmail: lecturerEmail,
      invigilatorsNeeded: invigilatorsNeeded,
      venue: venue,
      secretCode: secretCode,
      invigilators: bookedInvigilators.map(invigilator => ({
        name: invigilator.name,
        email: invigilator.email,
        phoneNumber: invigilator.phoneNumber
      })),
    });
    console.log("Document written with ID: ", docRef.id);

    bookedInvigilators.forEach(async (invigilator) => {
      try {
        const invigilatorRef = firebase.firestore().collection("itrackBookedInvigilators").doc(invigilator.email);
        await invigilatorRef.update({
          bookedOnTheseDates: firebase.firestore.FieldValue.arrayUnion(`${date}T${time}`)
        });
        console.log("Invigilator data updated for ", invigilator.name);
      } catch (error) {
        console.error("Error updating invigilator data: ", error);
      }
    });


  //sent email to lacture
  console.log("Booked Invigilators:", bookedInvigilators);
  const bookedInvigilatorDetails = bookedInvigilators.map(invigilator => ({
    name: invigilator.name,
    email: invigilator.email,
    phoneNumber: invigilator.phoneNumber
  }));
  
 
  let invigilatorDetailsString = bookedInvigilatorDetails.map(invigilator =>
    `Name: ${invigilator.name}, Email: ${invigilator.email}, Phone: ${invigilator.phoneNumber}`
  ).join("\n");

  console.log(invigilatorDetailsString);
  const lecturerTemplateParams = {
    invigilatorName: lecturerEmail,
    mail_to:lecturerEmail,
    lectureName: lectureName,
    date: date,
    time: time,
    venue: venue,
    invigilators : invigilatorDetailsString,
    subjectCode: subjectCode,
    subject: "Invigilator Booking Details",
    message: "Invigilators have been booked for your exam.",
  };
  console.log("Lecturer Template Params:", lecturerTemplateParams);
  emailjs.send(
    "service_iht2ej9", // Replace with your service ID
    "template_5a19fbh", // Replace with your template ID
    lecturerTemplateParams,
    "sdec_-eHbbd95KUHJ" // Replace with your user ID
  )
  .then(
    (result) => {
      console.log(result.text, "1");
    },
    (error) => {
      console.log(error.text);
    }
  );
  

  //sent email to invilators
    bookedInvigilators.forEach(async (invigilator) => {
     // Send email to booked invigilators
     const templateParams = {
      invigilatorName:invigilator.name,
      mail_to:invigilator.email,
      time:time,
      date:date,
      venue:venue,
      lectureName:lectureName,
      lecturerEmail:lecturerEmail,
      subjectCode:subjectCode,
      invigilators : invigilatorDetailsString,
      subject: "invigilaor booking",
      message: "you have been booked to invigilate",
    };
    
    // Send email using EmailJS
    emailjs.send(
      "service_iht2ej9", // Replace with your service ID
      "template_5a19fbh", // Replace with your template ID
      templateParams,
      "sdec_-eHbbd95KUHJ" // Replace with your user ID
    )
    .then(
      (result) => {
   
        console.log(result.text,"2");
  
      },
      (error) => {
  
        console.log(error.text);
      }
    );

  });


    // Display success message
    alert(`${invigilatorsNeeded} invigilator(s) booked successfully for ${lectureName} on ${date} at ${time}.`);

    // Display booked invigilators' information
    alert("Invigilators Booked:\n" +
      bookedInvigilators.map((invigilator) =>
        `Name: ${invigilator.name}\nEmail: ${invigilator.email}\nPhone: ${invigilator.phoneNumber}`
      ).join("\n\n"));
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Error occurred while booking invigilators. Please try again later.");
  }

    // Display success message
    alert(
      `${invigilatorsNeeded} invigilator(s) booked successfully for ${lectureName} on ${date} at ${time}.`
    );

    // Display booked invigilators' information
    alert(
      "Invigilators Booked:\n" +
        bookedInvigilators
          .map(
            (invigilator) =>
              `Name: ${invigilator.name}\nEmail: ${invigilator.email}\nPhone: ${invigilator.phoneNumber}`
          )
          .join("\n\n")
    );
  } else {
    // Handle insufficient invigilators
    alert(
      "Insufficient invigilators available for the specified date and time."
    );
    console.log(
      "Insufficient invigilators available for the specified date and time."
    );
  }

  // Display the updated exam records
  displayExams();

  // Reset the form
  event.target.reset();
}


// Function to display exam records
// Function to display exam records from Firestore
async function displayExams(subjectCode, secretCode) {
  const examRecords = document.getElementById("examRecords");
  examRecords.innerHTML = "";

  try {
    const snapshot = await firebase.firestore().collection("exams").get();
    snapshot.forEach((doc) => {
      const exam = doc.data();
      const examDiv = document.createElement("div");
      examDiv.classList.add("exam-card");
      examDiv.innerHTML = `<p><strong>Date:</strong> ${exam.date},<br> <strong>Time:</strong> ${exam.time} <br> <strong>Lecture Name:</strong> ${exam.lectureName}, <br> <strong>Subject Code:</strong> ${exam.subjectCode}, <br> <strong>Lecturer Email:</strong> ${exam.lecturerEmail}, <strong>Invigilators Needed:</strong> ${exam.invigilatorsNeeded}, <strong>Venue:</strong> ${exam.venue}</p>`;
      if (exam.invigilators) {
        examDiv.innerHTML += `<p><strong>Booked Invigilators:</strong> ${exam.invigilators.map((invigilator) => invigilator.name).join(", ")}</p>`;
      } else {
        examDiv.innerHTML += `<p><strong>No Invigilators Booked</strong></p>`;
      }
      
      // Adding delete button
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", async () => {
        const secretCodeInput = prompt("Enter Secret Code:");
        const subjectCodeInput = prompt("Enter Subject Code:");
        
        // Check if entered codes match with the exam record
        try {
          // Query Firestore to find the document with matching subjectCode and secretCode
          const querySnapshot = await firebase.firestore().collection("exams")
            .where("subjectCode", "==", subjectCodeInput)
            .where("secretCode", "==", secretCodeInput)
            .get();
      
          // Check if any matching document is found
          if (!querySnapshot.empty) {
            // Delete the document(s)
            const batch = firebase.firestore().batch();
            querySnapshot.forEach((doc) => {
              batch.delete(doc.ref);
            });
      
            // Commit the batch operation
            await batch.commit();
            exams = exams.filter((exam) => !(exam.subjectCode === subjectCodeInput  && exam.secretCode === secretCodeInput));
            displayExams();
            console.log("Document(s) successfully deleted!");
            return true; // Deletion successful
          } else {
            alert("invalid subject code and secret code");
            console.log("No document found with the provided subject code and secret code.");
            return false; // No matching document found
          }
        } catch (error) {
          console.error("Error deleting document: ", error);
          throw new Error("Error deleting exam. Please try again later.");
        }
      });

      examDiv.appendChild(deleteButton);
      examRecords.appendChild(examDiv);
    });
  } catch (error) {
    console.error("Error fetching exams: ", error);
    alert("Error fetching exams. Please try again later.");
  }
}


// Call the function to display exams from Firestore when the document has loaded
document.addEventListener("DOMContentLoaded", () => {
  displayExams();
  displayInvigilators();
});

// Function to display invigilator records
// Function to display invigilator records from Firestore
// Function to display invigilator records from Firestore
async function displayInvigilators() {
  const invigilatorRecords = document.getElementById("invigilatorRecords");
  invigilatorRecords.innerHTML = "";

  try {
    const snapshot = await firebase.firestore().collection("invigilatorInfomation").get();
    invigilatorsInformation = snapshot.docs.map(doc => doc.data()); // Assign an array of invigilator objects
    invigilators = invigilatorsInformation; // Update invigilators array
    invigilators.forEach((invigilator) => {
      const invigilatorDiv = document.createElement("div");
      invigilatorDiv.innerHTML = `<p><strong>Invigilator:</strong> 
        Name: ${invigilator.name}<br>
        Email: ${invigilator.email}<br>
        Phone: ${invigilator.phoneNumber}</p>`;
      invigilatorRecords.appendChild(invigilatorDiv);
    });
  } catch (error) {
    console.error("Error fetching invigilators: ", error);
    alert("Error fetching invigilators. Please try again later.");
  }
}



//////////



// Event listener for submitting the exam form
document.getElementById("examForm").addEventListener("submit", addExam);

// Display initial records
displayExams();
displayInvigilators();
