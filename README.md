**README.md**

# Exam Invigilator Booking System

The Exam Invigilator Booking System is a web application designed to streamline the process of scheduling and managing exam invigilators for lecturers. This system allows lecturers to input exam details, automatically assign available invigilators, and send email notifications to the assigned invigilators.

## Features

- Add exam details including date, time, venue, lecturer information, and number of invigilators needed.
- Automatic invigilator allocation based on availability.
- Email notifications to invigilators upon successful booking.
- Secure deletion of exam records using a secret code.
- Real-time synchronization of data using Firebase Firestore.
- Responsive user interface for easy access on different devices.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript 
- **Backend**: Firebase , Firebase Firestore
- **Email Service**: MailJS
- **Hosting**: Firebase Hosting

## Installation

1. Clone the repository:
   ```
   [git clone https://github.com/your_username/exam-invigilator-booking-system.git](https://github.com/ViGiE149/invigilator-booking-system)
   ```

2. Install dependencies:
   ```
   cd exam-invigilator-booking-system
   ```

3. Set up Firebase:
   - Create a Firebase project and set up Firestore database.
   - Replace Firebase configuration details in the code.

4. Deploy the application:
   ```
   firebase deploy
   ```

## Usage

1. Access the application through the provided URL after deployment.
2. Enter exam details and submit the form.
3. The system will automatically assign available invigilators and send email notifications.
4. To delete an exam record, enter the subject code and secret code correctly.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Create a new pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

For any inquiries or support, please contact [vgwala149@gmail.com](mailto:vgwala149@gmail.com).

---

Feel free to customize this README file according to your project's specifics.
