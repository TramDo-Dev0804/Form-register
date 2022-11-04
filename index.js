"use strict";

document.getElementById("button").addEventListener("click", toggleError);
const errMessages = document.querySelectorAll("#error");

function toggleError() {
  // Show error message
  errMessages.forEach((el) => {
    el.classList.toggle("hidden");
  });

  // Highlight input and label with red
  const allBorders = document.querySelectorAll(".border-gray-200");
  const allTexts = document.querySelectorAll(".text-gray-500");
  allBorders.forEach((el) => {
    el.classList.toggle("border-red-600");
  });
  allTexts.forEach((el) => {
    el.classList.toggle("text-red-600");
  });
}
window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');
          img.onload = () => {
              URL.revokeObjectURL(img.src);  // no longer needed, free memory
          }

          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
  });
});