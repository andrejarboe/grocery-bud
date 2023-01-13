# React Grocery List

[![Live Site](https://img.shields.io/badge/view_live_site-1DA1F2?style=for-the-badge&logoColor=white)](https://grocery-bud.andrejarboe.com/)

A simple React.js application that allows users to add items to a list, edit items on the list, and remove items from the list. 

## Components
The application consists of three main components: 
- `App.js` - The root component of the application, it is responsible for managing the state of the application and handling the logic of adding, editing, and removing items from the list.
- `List.js` - A functional component that renders the items in the list and provides the user with the ability to edit and delete items.
- `Alert.js` - A functional component that displays alerts to the user based on the state of the application.

## State Management
The application uses React's `useState` and `useEffect` hooks to manage the state of the application. The main states are:
- `name` - The value of the text input field that is used to add new items to the list
- `list` - An array of objects representing the items in the list
- `isEditing` - A boolean value that indicates whether the user is currently editing an item or adding a new one
- `editID` - The ID of the item that is currently being edited
- `alert` - An object that holds the state of the alert that is displayed to the user

## Functionality
The application allows the user to:
- Add new items to the list by entering a value in the text input field and clicking the "submit" button.
- Edit items on the list by clicking the "edit" button next to the item. This will open the text input field with the item's value and change the "submit" button to "edit".
- Remove items from the list by clicking the "delete" button next to the item.
- Clear the entire list by clicking the "clear items" button.
- When the application is loaded, it will check the local storage for any previous list and will display it.
- When an item is added, removed or edited, the application will update the local storage with the new list.

## Additional Features
- The application also includes an alert feature that displays different messages to the user depending on the action performed (adding an item, editing an item, deleting an item, deleting the list).
- The alert feature is implemented using a separate component that receives props from the `App` component and renders them accordingly.
- The application uses icons from the react-icons library to enhance the UI.
