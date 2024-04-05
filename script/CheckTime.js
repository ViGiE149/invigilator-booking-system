function addExam(event) {
  event.preventDefault();
  const date = document.getElementById('date').value;
  const startTime = document.getElementById('time').value;
  const endTime = document.getElementById('endTime').value;
  const lectureName = document.getElementById('lectureName').value;
  const subjectCode = document.getElementById('subjectCode').value;
  const lecturerEmail = document.getElementById('lecturerEmail').value;
  const invigilatorsNeeded = parseInt(document.getElementById('invigilatorsNeeded').value);
  const venue = document.getElementById('venue').value;
  
  // Get the current date and time
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString('en-US', { hour12: false });

  // Check if the date is in the past
  if (date < currentDate.toISOString().split('T')[0]) {
    alert('Cannot book exams for past dates.');
    return;
  }

  // Check if the time is in the past
  if (date === currentDate.toISOString().split('T')[0] && startTime < currentTime) {
    alert('Cannot book exams for past times.');
    return;
  }

  // Check if end time is before start time
  if (endTime <= startTime) {
    alert('End time must be after start time.');
    return;
  }

  // Filter already booked invigilators
  const alreadyBookedInvigilators = invigilators.filter(invigilator =>
    invigilator.bookedOnTheseDates.includes(`${date}T${startTime}`)
  );

  // Filter invigilatorsInformation to exclude those already booked
  const availableInvigilators = invigilatorsInformation.filter(invigilator =>
    !alreadyBookedInvigilators.some(booked => booked.name === invigilator.name)
  );

  // Check for conflicts (double booking)
  const conflict = exams.find(exam =>
    exam.date === date && exam.venue === venue &&
    ((exam.time >= startTime && exam.time < endTime) || (exam.endTime > startTime && exam.endTime <= endTime))
  );

  if (conflict) {
    alert('Another exam is already scheduled for the same date and time range at this venue.');
    return;
  }

  if (availableInvigilators.length >= invigilatorsNeeded) {
    // Book invigilators
    const bookedInvigilators = availableInvigilators.slice(0, invigilatorsNeeded);
    const bookedInvigilatorNames = bookedInvigilators.map(invigilator => invigilator.name);
    // Update exam record with booked invigilators
    exams.push({ date, startTime, endTime, lectureName, subjectCode, lecturerEmail, invigilatorsNeeded, venue, invigilators: bookedInvigilatorNames });

    // Display success message
    alert(`${invigilatorsNeeded} invigilator(s) booked successfully for ${lectureName} on ${date} from ${startTime} to ${endTime}.`);

    // Display booked invigilators' information
    alert("Invigilators Booked:\n" + bookedInvigilators.map(invigilator => `Name: ${invigilator.name}\nEmail: ${invigilator.email}\nPhone: ${invigilator.phoneNumber}`).join('\n\n'));
  } else {
    // Handle insufficient invigilators
    alert('Insufficient invigilators available for the specified date and time.');
    console.log('Insufficient invigilators available for the specified date and time.');
  }

  // Display the updated exam records
  displayExams();

  // Reset the form
  event.target.reset();
}
