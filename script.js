// JavaScript animation for images
const images = document.querySelectorAll(".images");
images.forEach(image => {

    image.addEventListener("mouseover", () => {

        image.style.transform = "scale(1.2)";
        image.style.transition = "transform 0.3s ease";
    });


    image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)";

    });
});


// Get the modal and the buttons that open and close it
const modal = document.getElementById('modal');
const editProfileButton = document.getElementById('editProfileButton');
const closeModal = document.getElementById('closeModal');
const saveProfileButton = document.getElementById('saveProfileButton');

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModalFunc() {
  modal.style.display = 'none';
}

// Function to handle saving changes in the modal (you can add your logic here)
function saveProfileChanges() {
  // In a real application, you would handle saving changes to the backend here
  closeModalFunc();
}

// Event listeners for button clicks
editProfileButton.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalFunc);
saveProfileButton.addEventListener('click', saveProfileChanges);

