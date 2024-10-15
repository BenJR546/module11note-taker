# Express.js Note Taker

## Description

The **Note Taker** is a simple web application that allows users to write, save and delete notes. It uses an Express.js backend to handle data storage and retrieval, with notes being stored on a JSON file on the server. This application provides an efficient way to organize your thoughts and keep track of tasks or ideas.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Screenshots](#screenshots)
-   [Deployment](#deployment)
-   [License](#license)
-   [Contributing](#contributing)
-   [Questions](#questions)

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/BenJR546/module11note-taker
```

2. Navigate to the project directory:

```bash
cd module11note-taker/Develop/
```

3. Install the dependencies:

```bash
npm install
```

## Usage

To run the application, execute the following command:

```bash
npm start
```

This will start the server and make it available at `http://localhost:3000`.

# Accessing the application

1. Open your web browser and navigate to `http://localhost:3000`.
2. You will see the landing page with a "Get Started" button. Click this button to go to the notes page.
3. Notes Page Features:
    - **Existing Features:**
        - Existing Notes are listed in the left hand column.
        - Click on a note to view its contents in the right hand column.
        - When Viewing a Note, a "New Note" button appears in the navigation bar.
    - **Creating a New Note:**
        - Click the "New Note" button to clear the input fields.
        - Enter a note title and the note's text in the right hand column.
        - As you type, the "Save Note" and "Clear Form" buttons will appear in the navigation bar.
        - Click the "Save Note" button to save the note. It will appear in the left hand column.
        - The "Save Note" and "Clear Form" buttons will disappear after saving.
    - **Deleting a Note:**
        - Click the Trash Csn icon next to a note in the list to delete it.
        - The note will be removed from the list and the JSON database.

## Screenshots

![screenshot1](screenshots\note-taker-screenshot1.png)
![screenshot2](screenshots\note-taker-screenshot2.png)
![screenshot3](screenshots\note-taker-screenshot3.png)
![screenshot4](screenshots\note-taker-screenshot4.png)

## Deployment

This application is deployed on Render and can be accessed [here](https://module11note-taker-2.onrender.com)

## License

This project is unlicensed. Please feel free to pull the code, and use it however you see fit!

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

## Questions

If you have any questions or need further assistance, please don't hesitate to reach out. You can either reach out to me by [email](mailto:benjrice546@gmail.com) or on [GitHub](https://github.com/BenJR546).
