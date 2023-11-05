# Firebase Contact App

Firebase Contact App is a React application that allows users to manage contacts. It integrates Firebase for real-time cloud storage and authentication, utilizes Tailwind CSS for styling, and incorporates various libraries like Formik, Yup, React Icons, and Toast for enhanced user experience.

[Visit](https://www.google.com/)

## Features

- **CRUD Operations:** Add, delete, and update contacts with name and email information.
- **Firebase Integration:** Utilizes Firebase Cloud Firestore as the backend database for storing contacts.
- **Tailwind CSS:** Styled using Tailwind CSS for responsive and modern UI.
- **Form Validation:** Implements form validation using Yup and Formik for data accuracy.
- **Loading Feedback:** Provides loading feedback during add, delete, and update operations using Toast.
- **Modal UI:** Features a modal for adding new contacts, enhancing the user interface and experience.
- **CSS Animations:** Utilizes CSS animations for smooth modal open/close transitions.
- **Responsive Design:** Ensures the application is responsive and accessible on various devices.

## Technologies Used

- React
- Firebase (Firestore for database)
- Tailwind CSS
- Formik
- Yup
- React Icons
- Toast

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up Firebase:
    - Create a project on Firebase Console (https://console.firebase.google.com/).
    - Obtain Firebase configuration and add it to your project.
    - Enable Firestore database and set up rules as per your requirements.
4. Start the development server: `npm run start`

## Folder Structure

- `src/`
  - `components/`: React components for the application.
  - `config/firebase.js`: Firebase configuration file.(It is in gitignore so create it yourself and in firebase.js paste the code you get from firebase cloud during setup )
  - `hooks/`: A useState() file which is used multiple times.
 
  
## Usage

1. Access the application through the browser.
2. Use the modal to add new contacts by providing a name and email.
3. Contacts can be updated or deleted using corresponding actions.
4. Enjoy the seamless user experience and responsive design.


