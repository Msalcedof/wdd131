// Select input field, button, and list elements
const input = document.querySelector("#favchap");
const button = document.querySelector("#button");
const list = document.querySelector("#chapterList");

// Add event listener for "Add Chapter" button
button.addEventListener('click', function () {
    const chapterText = input.value.trim();  // Get input value and trim any extra spaces

    // Check if input is not empty
    if (chapterText !== '') {
        // 1. Create <li> element to hold the chapter
        const li = document.createElement("li");

        // 2. Set the textContent of <li> to the chapter name
        li.textContent = chapterText;

        // 3. Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";  // Set button text to a delete icon

        // 4. Append delete button to the <li>
        li.append(deleteButton);

        // 5. Append the <li> element to the list
        list.append(li);

        // 6. Add event listener for delete button to remove the chapter
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);  // Remove the <li> when delete button is clicked

            // Focus the input field after deletion
            input.focus();
        });

        // 7. Clear the input field after adding the chapter
        input.value = '';

        // 8. Focus back to the input field for the user to add another chapter
        input.focus();
    } else {
        // If input is empty, focus on the input field and do nothing
        input.focus();
    }
});

