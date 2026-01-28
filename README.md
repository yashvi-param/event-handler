<img width="1768" height="829" alt="Screenshot 2026-01-28 163846" src="https://github.com/user-attachments/assets/cb5355ef-8f9e-4851-8a19-f171e2647f16" />
🍔 Fast Food Ordering App (React)

A simple Fast Food Ordering / Listing App built with React and Bootstrap.
Users can view fast food items, see details in a modal, and simulate ordering by increasing attendee/order count.

🚀 Features

📋 Display fast food items list

👀 View food details in a modal

➕ Register / Order food items

🗑️ Delete food items

🎨 Responsive UI using Bootstrap

⚛️ Built with React Hooks (useState)

🛠️ Technologies Used

React JS

Bootstrap 5

CSS

JavaScript (ES6)

📁 Project Structure
src/
│
├── Components/
│   ├── Header.jsx
│   ├── EventList.jsx
│   ├── EventModal.jsx
│
├── FastFoodData.js
├── App.jsx
├── App.css
└── main.jsx

📦 Fast Food Data

Fast food items are stored in FastFoodData.js and imported into App.jsx.

import { FastFoodData } from '../FastFoodData';


Each food item includes:

Title

Category

Price

Location

Status

Attendees (orders)

⚙️ App Logic Overview

useState manages food items and modal state

handleRegister() increases order count

handleDelete() removes a food item

Modal opens when user clicks View

▶️ How to Run the Project

Clone the repository

git clone <your-repo-link>


Install dependencies

npm install


Start the development server

npm run dev


Open in browser:

http://localhost:5173

📸 UI Preview

Header with app title

Cards listing fast food items

Modal for details and actions

🔮 Future Improvements

🛒 Add cart functionality

⭐ Add ratings & reviews

🔍 Search & filter food items

💾 Backend integration (Node + MongoDB)

👩‍💻 Author

Yashvi
Learning Full Stack Development 🚀
