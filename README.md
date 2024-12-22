
# Stock Management System & Trivia Game

## Overview
This project includes two key components:
1. A **Stock Management System** for a salad/veggie vendor.
2. A **Trivia Game** with a series of questions and a scoring system.

Both components are integrated into a React application and use a mock database for data management.

---

## Order of Operations



### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/ohadtaizi/helfy.git
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## How to Use

### Stock Management System
Navigate to the following pages to interact with the system:

#### 1. **Products Page (`/products`)**
   - Displays a list of all products (veggies and salads).
   - **Features**:
     - Shows a "Loading..." message while data is being fetched.
     - Salads display a hover effect showing their ingredients.
     - Products in stock have a green border; those out of stock have a red border.
     - Veggies have a button to toggle stock status, which affects dependent salads.

   - **Steps to Verify**:
     1. Open `/products`.
     2. Verify the loading message appears briefly.
     3. Hover over salads to see their ingredients.
     4. Toggle stock status for veggies and ensure dependent salads are also affected.

#### 2. **Pagination**
   - Products are displayed in pages, 10 items per page.
   - Navigate between pages using the pagination controls.

   - **Steps to Verify**:
     1. Scroll to the bottom of the page.
     2. Click "Next" and "Previous" to navigate between pages.

#### 3. **Search Filter**
   - Use the search bar to filter products by name in real-time.

   - **Steps to Verify**:
     1. Enter a product name or partial name in the search bar.
     2. Confirm that the displayed list updates dynamically.

#### 4. **Create Ingredient Page (`/create-ingredient`)**
   - A form to create new ingredients.

   - **Steps to Verify**:
     1. Open `/create-ingredient`.
     2. Fill out the form and submit.
     3. Verify the ingredient is added to the product list.

#### 5. **Create Salad Page (`/create-salad`)**
   - A form to create a new salad with selected ingredients.

   - **Steps to Verify**:
     1. Open `/create-salad`.
     2. Select ingredients, name the salad, and submit.
     3. Verify the salad appears in the product list.

---

### Trivia Game (`/trivia`)
- A simple trivia game with one question displayed at a time.

#### Features:
1. Displays a "Loading..." message while fetching questions.
2. Allows the user to select an answer and submit it.
3. Displays the score after the game ends.
4. Includes responsive design for mobile compatibility.

#### Steps to Verify:
1. Open `/trivia`.
2. Answer all questions one by one.
3. Verify the final score is displayed correctly.

---

## Summary of Tasks

### Task 1: Stock Management System
1. Implemented a loading message while data is fetched.
2. Added a hover effect to salads to display ingredients.
3. Added green/red borders for in-stock/out-of-stock products.
4. Implemented a stock toggle for veggies and dependent salads.
5. Added client-side pagination for the product list.
6. Created `/create-ingredient` for adding new ingredients.
7. Created `/create-salad` for creating new salads.
8. Ensured stock dependency handling for veggies and salads.
9. Added a real-time search filter for products.

### Task 2: Trivia Game
1. Developed a trivia game using the provided `Trivia.tsx` file.
2. Added a loading mechanism while fetching questions.
3. Styled the game for a clean and responsive user experience.

---

## Testing the Application
1. Start the development server:
   ```bash
   npm start
   ```
2. Navigate to the following URLs in your browser:
   - `/products`
   - `/create-ingredient`
   - `/create-salad`
   - `/trivia`
3. Verify all functionalities work as described.

---

## Additional Notes
This application is fully responsive and has been styled to match the provided reference designs. If you encounter any issues, please ensure dependencies are installed correctly and refer to the task requirements for clarification.

# Task 1: Stock Management System
Backstory:
You are building a simple stock management system for a salad/veggie vendor. The system uses a mock database to return a set of products and their properties. The vendor offers two types of products:

Salads - Made up of various veggies.
Veggies - Basic vegetable products.
Requirements:


1. Add a simple "Loading..." message that appears while the data is being fetched.
Hover Effect on Salads:

2. In Products.tsx, add a hover effect on products of type "salad" that displays the list of ingredients for that salad.
Stock Status Indicator:

3. Products that are in stock should have a green border.
Products that are out of stock should have a red border.
Veggie Stock Toggle:

4. Add a button next to each veggie product that allows toggling the stock status.
When clicked, it should set the veggie (and all salads that use it) as out of stock.
Clicking again should restore the product(s) to stock.

NOTE *: implement your solution in Server.ts file (feel free to add functions if needed)


Client-Side Pagination:

5. Implement pagination that displays only 10 products per page.
Create Ingredient Page:

6. Implement a page at /create-ingredient with a simple form to create new ingredients.
Create Salad Page:

7. Implement a page at /create-salad with a simple form to create a new salad made of different ingredients.
Stock Dependency Handling:

8. If a product (e.g., a veggie) is marked as out of stock, mark all salads that depend on it as out of stock as well.
Search Filter:

9. Implement the <SearchFilter /> component where users can filter products by name in real-time.

Styling:
see the reference pictures directory that came with the task
Ensure that the app is fully responsive and looks good on mobile devices.

# Task 2: Trivia Game
Backstory:
We are building a simple trivia game, where users are asked a series of questions. The user sees one question at a time with multiple answer choices. At the end, the user's score is displayed.

Requirements:
Implement the trivia game within the same project as the stock management system.

Starting Point:

Use the Trivia.tsx file as a starting point for the trivia game component.
Loading Mechanism:

Use the same loading mechanism from Task 1 to load questions and answers.
* Styling:
Feel free to style this app as you see fit, including adding any components or stylesheets to enhance the user experience.
Good luck with your tasks! Let us know if you have any questions.