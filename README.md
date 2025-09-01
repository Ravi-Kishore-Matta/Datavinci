#Task 2 ...... Answer....
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>Nested Checkbox</title>
   <style>
       body {
           font-family: Arial, sans-serif;
           padding: 20px;
       }
       .category {
           margin-top: 10px;
       }
       .items {
           margin-left: 20px;
       }
       label {
           display: block;
           cursor: pointer;
       }
   </style>
</head>
<body>
   <h2>Nested Checkbox</h2>

   <label>
       <input type="checkbox" id="selectAll">
       Select All
   </label>

   <div class="category">
       <label>
           <input type="checkbox" class="category-checkbox" data-category="fruits">
           Fruits
       </label>
       <div class="items">
           <label><input type="checkbox" class="fruit"> Apple</label>
           <label><input type="checkbox" class="fruit"> Banana</label>
           <label><input type="checkbox" class="fruit"> Orange</label>
       </div>
   </div>

   <div class="category">
       <label>
           <input type="checkbox" class="category-checkbox" data-category="vegetables">
           Vegetables
       </label>
       <div class="items">
           <label><input type="checkbox" class="vegetable"> Carrot</label>
           <label><input type="checkbox" class="vegetable"> Broccoli</label>
           <label><input type="checkbox" class="vegetable"> Potato</label>
       </div>
   </div>

   <script>
       const selectAll = document.getElementById("selectAll");
       const categoryCheckboxes = document.querySelectorAll(".category-checkbox");
       const fruits = document.querySelectorAll(".fruit");
       const vegetables = document.querySelectorAll(".vegetable");

       // --- UPDATED: Select All logic
       selectAll.addEventListener("change", (e) => {
           const checked = e.target.checked;
           [...categoryCheckboxes, ...fruits, ...vegetables].forEach(cb => cb.checked = checked);
       });

       // --- UPDATED: Category checkbox logic
       categoryCheckboxes.forEach(cb => {
           cb.addEventListener("change", () => {
               const category = cb.dataset.category;
               const items = category === "fruits" ? fruits : vegetables;
               items.forEach(i => i.checked = cb.checked); // <-- UPDATED: check/uncheck child items
               updateSelectAll();
           });
       });

       // --- UPDATED: Child checkboxes logic
       [...fruits, ...vegetables].forEach(cb => {
           cb.addEventListener("change", () => {
               updateCategory("fruits", fruits);
               updateCategory("vegetables", vegetables);
               updateSelectAll();
           });
       });

       function updateCategory(category, items) {
           const categoryBox = document.querySelector(`.category-checkbox[data-category="${category}"]`);
           categoryBox.checked = [...items].every(i => i.checked);
       }

       function updateSelectAll() {
           selectAll.checked =
               [...fruits].every(f => f.checked) &&
               [...vegetables].every(v => v.checked);
       }
   </script>
</body>
</html>



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
