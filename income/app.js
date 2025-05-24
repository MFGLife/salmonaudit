// app.js


fetch('https://mfglife.github.io/messages/ledger.json')
  .then(res => res.json())
  .then(data => {
    // Use your data here
  });


const form = document.getElementById('hashForm');
const ledger = document.getElementById('ledger');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const docHash = document.getElementById('docHash').value;
  const metadata = document.getElementById('metadata').value;
  const timestamp = new Date().toISOString();

  // Simulate a GitHub commit URL (replace with your real repo logic)
  const fakeCommitUrl = `https://github.com/SalmonAudit/info/commit/${docHash.substring(0, 7)}`;

  const entry = document.createElement('li');
  entry.className = "bg-gray-50 p-3 rounded border";
  entry.innerHTML = `
    <div><strong>Hash:</strong> ${docHash}</div>
    <div><strong>Metadata:</strong> ${metadata}</div>
    <div><strong>Timestamp:</strong> ${timestamp}</div>
    <div><a href="${fakeCommitUrl}" class="text-blue-600 underline" target="_blank">View GitHub Validation</a></div>
  `;
  ledger.prepend(entry);

  form.reset();
});
