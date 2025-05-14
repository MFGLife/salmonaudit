
const chatWindow2 = document.getElementById('chatWindow');

function copyDataschool() {
    const textToCopy = chatWindow2.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}


// Restore timestamps in the chat window
function pushDataschool() {
    chatWindow2.innerHTML = ''; // Clear the chat window
  // Always ensure it's shown
    chatContent.classList.remove('hidden');
    chatContent.classList.add('block');
    chatWindow2.innerHTML = `
<button onclick="copyDataschool()" class="text-gray-800 text-base sm:text-lg rounded bg-gradient-to-br from-white via-primary-50 to-primary-100 p-2 border-l-8 border-secondary-600 hover:border-blue-600 transition duration-300 overflow-hidden">
Copy to Clipboard
</button>
 `;}