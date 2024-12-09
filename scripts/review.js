// Set the Last Modified Date dynamically
document.addEventListener("DOMContentLoaded", () => {
    const lastModifiedElement = document.getElementById("last-modified");
    const lastModifiedDate = document.lastModified;

    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modification: ${lastModifiedDate}`;
    }
});