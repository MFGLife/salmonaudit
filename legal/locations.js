
let locations = [ 
    { 
      name: "The Layne Project",  
      lat: 38.8857904534, 
      lng: -94.8184621779, 
      involvedInClassAction: true, 
      docket: "25CV325 #6",
      evidence: {
        testimony: [
          { title: "Deposition - Trina Nudson", url: "#" },
          { title: "Undercover Interview with Layne Project", url: "https://drive.google.com/file/d/1Mv5rFDGoUOqBDUvf4wAgZHOYbNb4qYuA/view?usp=drive_link" },
          { title: "Victim Statement - A. Johnson", url: "#" },
          { title: "Victim Statement - M. Salmon", url: "#" },
          { title: "Victim Statement - C. Fisk", url: "#" },
          { title: "Victim Statement - Redacted", url: "#" },
          { title: "Victim Statement - Redacted", url: "#" }
        ],
        financial: [
          { title: "Billing Records - The Layne Project", url: "#" },
          { title: "Invoice Analysis - 2023-2024", url: "#" },
          { title: "Audit Report - Hope House", url: "#" }
        ],
        emails: [
          { title: "Email Thread - Court Coordinator", url: "#" },
          { title: "Internal Communications - Heritage", url: "#" },
          { title: "Client Correspondence - 2025", url: "#" }
        ],
        documents: [
          { title: "Class Action Filing - 25CV325", url: "https://drive.google.com/file/d/1N_Z8_L2I9nTq1kuYdGKBELCFR6m4wqeD/view?usp=drive_link" },
          { title: "Service Contracts - All Locations", url: "#" }
        ]
      }
    }, 
    { 
      name: "Heritage United Methodist Church", 
      lat: 38.8955359230, 
      lng: -94.7246447280, 
      involvedInClassAction: false, 
      docket: "25CV325 #6",
      evidence: {
        testimony: [
          { title: "Witness Statement - M. Brown", url: "#" }
        ],
        financial: [
          { title: "Expense Report - Heritage", url: "#" }
        ],
        emails: [],
        documents: [
          { title: "Legal Agreement - Heritage", url: "#" }
        ]
      }
    },
    { 
        name: "Christ Connect Church", 
        lat: 38.90005341227,
        lng: -94.7623538318, 
        involvedInClassAction: true, 
        docket: "25CV325 #6",
        evidence: {
          testimony: [
            { title: "Witness Statement - M. Salmon", url: "#" }
          ],
          financial: [
          ],
          emails: [],
          documents: [
            { title: "Legal Agreement - M. Salmon", url: "#" }
          ]
        }
      },
    { 
        name: "Midtown Psychological Services, Inc", 
        lat: 38.9951214716,
        lng: -94.5935323607, 
        involvedInClassAction: true, 
        docket: "25CV325 #6",
        evidence: {
          testimony: [
            { title: "Witness Statement - Sadie Billings", url: "#" },
            { title: "Witness Statement - Amir R", url: "#" },
            { title: "Witness Statement - Alaya Strong", url: "#" },
            { title: "Witness Statement - Ashley Thompson", url: "#" },
            { title: "Witness Statement - Jeremy Tucker", url: "#" }
          ],
          financial: [
            { title: "Expense Report - Sadie Billings", url: "#" }
          ],
          emails: [],
          documents: [
            { title: "Legal Agreement - Sadie Billings", url: "#" }
          ]
        }
      }
  ];




// Initialize map
const map = L.map('leafletMap').setView([38.8857, -94.8184], 12); 


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
  attribution: '&copy; OpenStreetMap contributors' 
}).addTo(map); 

const caseIcon = L.icon({ 
  iconUrl: '../pics/lumie.png', 
  iconSize: [30, 30], 
  iconAnchor: [15, 30], 
  popupAnchor: [0, -30] 
}); 

const defaultIcon = L.icon({ 
  iconUrl: '../pics/lumies.png', 
  iconSize: [24, 24], 
  iconAnchor: [12, 24], 
  popupAnchor: [0, -24] 
});

// Create markers
const markers = [];
locations.forEach(loc => { 
  const icon = loc.involvedInClassAction ? caseIcon : defaultIcon; 
  const marker = L.marker([loc.lat, loc.lng], { icon }).addTo(map); 

  // Generate evidence list dynamically
  const generateEvidenceList = (evidenceType, items) => {
    if (!items || items.length === 0) return '';
    return `
      <strong>${evidenceType}:</strong>
      <ul style="list-style: none; padding-left: 0; margin-bottom: 10px;">
        ${items.map(item => `<li><a href="${item.url}" target="_blank" style="color: blue; text-decoration: underline;">${item.title}</a></li>`).join('')}
      </ul>
    `;
  };

  // Enhanced popup content with evidence details
  const popupContent = ` 
    <strong>${loc.name}</strong><br/> 
    ${loc.involvedInClassAction  
      ? `<span style="color: red; font-weight: bold;">⚖️ Class Action Docket: ${loc.docket}</span><br/>
         <div style="max-height: 200px; overflow-y: auto; padding-right: 10px;">
           ${generateEvidenceList('👤 Testimonies', loc.evidence.testimony)}
           ${generateEvidenceList('💰 Financial Records', loc.evidence.financial)}
           ${generateEvidenceList('✉️ Emails', loc.evidence.emails)}
           ${generateEvidenceList('📄 Legal Documents', loc.evidence.documents)}
         </div>`
      : 'Not named in class action'} 
  `; 

  marker.bindPopup(popupContent);
});

// Function to handle viewing evidence
function viewEvidence(locationName) {
  const loc = locations.find(l => l.name === locationName);
  if (!loc) return;

  // Display evidence details in a modal or a dedicated section
  alert(`Viewing evidence for ${locationName}:\n\n` +
    `👤 Testimonies: ${loc.evidence.testimony.map(e => e.title).join(', ')}\n` +
    `💰 Financial Records: ${loc.evidence.financial.map(e => e.title).join(', ')}\n` +
    `✉️ Emails: ${loc.evidence.emails.map(e => e.title).join(', ')}\n` +
    `📄 Legal Documents: ${loc.evidence.documents.map(e => e.title).join(', ')}`);
}

// Toggle evidence links visibility
function toggleEvidenceLinks(type) {
  const linksElement = document.getElementById(`${type}-links`);
  
  // Close all other open links
  document.querySelectorAll('.evidence-links').forEach(el => {
    if (el.id !== `${type}-links`) {
      el.style.display = 'none';
    }
  });
  
  if (linksElement.style.display === 'flex') {
    linksElement.style.display = 'none';
  } else {
    linksElement.style.display = 'flex';
  }
}

// Show evidence modal
function showEvidence(title, url) {
  const modal = document.getElementById('evidenceModal');
  const titleEl = document.getElementById('evidenceTitle');
  const frame = document.getElementById('evidenceFrame');
  
  titleEl.textContent = title;
  frame.src = url;
  modal.style.display = 'flex';
}

// Close evidence modal
function closeEvidence() {
  const modal = document.getElementById('evidenceModal');
  modal.style.display = 'none';
}



// Search functionality
function searchEvidence() {
  const searchInput = document.getElementById('evidenceSearch').value.toLowerCase();
  
  if (!searchInput.trim()) {
    alert('Please enter a search term');
    return;
  }

  let matchCount = 0;
  
  // Reset all markers
  markers.forEach(marker => {
    marker.setOpacity(0.4);
  });
  
  locations.forEach((loc, index) => {
    if (loc.name.toLowerCase().includes(searchInput) || 
        (loc.docket && loc.docket.toLowerCase().includes(searchInput))) {
      markers[index].setOpacity(1);
      matchCount += loc.evidence.testimony.length + 
                   loc.evidence.financial.length + 
                   loc.evidence.emails.length + 
                   loc.evidence.documents.length;
    }
  });
  
  // Update counter
  document.querySelector('.evidence-counter').innerHTML = 
    `Found <strong>${matchCount}</strong> pieces of evidence matching "<strong>${searchInput}</strong>"`;
}