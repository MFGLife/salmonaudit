
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });

    // FAQ toggle functionality
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('i');
        
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
      });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
          }
        }
      });
    });

    // Tab functionality for ideology section
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Update active tab button
        tabButtons.forEach(btn => {
          btn.classList.remove('bg-primary-100', 'text-primary-700');
          btn.classList.add('text-secondary-600', 'hover:text-primary-700', 'hover:bg-primary-50');
        });
        button.classList.add('bg-primary-100', 'text-primary-700');
        button.classList.remove('text-secondary-600', 'hover:text-primary-700', 'hover:bg-primary-50');
        
        // Show selected tab content
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
      });
    });

    // Tooltip functionality
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
      tooltip.addEventListener('mouseenter', function() {
        const tooltipText = this.querySelector('.tooltip-text');
        tooltipText.style.visibility = 'visible';
        tooltipText.style.opacity = '1';
      });
      tooltip.addEventListener('mouseleave', function() {
        const tooltipText = this.querySelector('.tooltip-text');
        tooltipText.style.visibility = 'hidden';
        tooltipText.style.opacity = '0';
      });
    });

    // Animation for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.classList.add('shadow-lg');
      });
      card.addEventListener('mouseleave', function() {
        this.classList.remove('shadow-lg');
      });
    });



    function downloadFile(fileName) {
    // Update path if needed, e.g., 'data/' + fileName + '.json'
    fetch(`${fileName}.json`)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to fetch ${fileName}: ${response.statusText}`);
        return response.text();
      })
      .then(data => {
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${fileName}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      })
      .catch(err => console.error(err));
  }

  document.getElementById('download-micheal').addEventListener('click', e => {
    e.preventDefault();
    downloadFile('Micheal');
  });

  const chatBot = document.getElementById('chatBot');
  const toggleChatBot = document.getElementById('toggleChatBot');
  const chatContent = document.getElementById('chatContent');



    toggleChatBot.addEventListener('click', () => {
          const icon = toggleChatBot.querySelector('i');

    if (chatBot.classList.contains('h-[10vh]')) {
      // Expand to full height
      chatBot.classList.remove('h-[10vh]');
      chatBot.classList.remove('bottom-20');
      chatBot.classList.add('h-full');
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
    } else {
      // Collapse to smaller size
      chatBot.classList.remove('h-full');
      chatBot.classList.add('h-[10vh]');
      chatBot.classList.add('bottom-20');
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
    }
  });

  
    // Sample legal document data
    const motionData = [];

    // Initialize the page
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('totalDocuments').textContent = motionData.length;
        
        // Focus search input on Ctrl+/
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === '/') {
                e.preventDefault();
                document.getElementById('userInput').focus();
            }
        });
    });

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

    // Perform search function
    function performSearch() {
        const keyword = document.getElementById('userInput').value.trim().toLowerCase();
        const resultsContainer = document.getElementById('searchResults');
        // Clear previous results
        resultsContainer.innerHTML = '';
        document.getElementById('resultCount').textContent = '0';
        
        if (!keyword) {
            // Show initial state if search is empty
            resultsContainer.innerHTML = `
                <div id="initialState" class="bg-white rounded-xl shadow-sm overflow-hidden fade-in">
                    <div class="p-8 text-center">
                        <div class="mx-auto w-24 h-24 text-gray-300 mb-4">
                            <i class="fas fa-search fa-3x"></i>
                        </div>
                        <h3 class="text-lg font-medium text-gray-700 mb-2">Did Micheal serve you?</h3>
                        <p class="text-gray-500 max-w-md mx-auto">
                            Enter your name, case number, legal term, or document reference to begin searching our compliance database.
                        </p>
                        <div class="mt-6 flex justify-center gap-3">
                            <div class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                Try: "24SN-DR00104"
                            </div>
                            <div class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                Try: "motion to dismiss"
                            </div>
                        </div>
                    </div>
                </div>
            `;
                            document.getElementById('pathway').style.display = 'block';
              return;
        }
    document.getElementById('pathway').style.display = 'none';

        // Filter documents that match the search
        const searchResults = motionData.filter(motion => {
            return (
                motion.id.toLowerCase().includes(keyword) ||
                motion.title.toLowerCase().includes(keyword) ||
                motion.content.toLowerCase().includes(keyword)
            );
        });
        
        document.getElementById('resultCount').textContent = searchResults.length;
        
        if (searchResults.length === 0) {
            // Show no results state
            resultsContainer.innerHTML = `
                <div class="bg-white rounded-xl shadow-sm overflow-hidden fade-in">
                    <div class="p-8 text-center">
                        <div class="mx-auto w-24 h-24 text-gray-300 mb-4">
                            <i class="fas fa-search-minus fa-3x"></i>
                        </div>
                        <h3 class="text-lg font-medium text-gray-700 mb-2">No results found</h3>
                        <p class="text-gray-500 max-w-md mx-auto">
                            Your search for "${keyword}" did not match any documents in our database. Try different keywords or case numbers.
                        </p>
                    </div>
                </div>
            `;
            return;
        }
        
        // Display search results
        searchResults.forEach((motion, index) => {
            // Find matching lines in content
            const contentLines = motion.content.split('\n');
                        // ...inside performSearch, where you build the card...

            const matchingLines = contentLines
                .map((line, i) => ({ line, number: i + 1 }))
                .filter(item => item.line.toLowerCase().includes(keyword))
                .slice(0, 3); // Show max 3 matching lines

            const matchingLine = matchingLines[0]?.line || '';
            const safeLine = encodeURIComponent(matchingLine);
            const safeTitle = encodeURIComponent(motion.title);


            // Highlight keyword in title
            const safeKeyword = escapeRegExp(keyword);
            const highlightStyle = "background-color:#ffe082;font-weight:bold;border-radius:3px;padding:0 2px;display:inline;";
            const highlightedTitle = motion.title.replace(
                new RegExp(`(${safeKeyword})`, 'gi'), 
                `<span style="${highlightStyle}">$1</span>`
            );
            
            const deniedStatuses = ['Denied', 'OverRuled'];

            // Create status badge
            let statusBadge = '';
            if (motion.status === 'Granted') {
                statusBadge = 'bg-green-100 text-green-800';
            } else if (deniedStatuses.includes(motion.status)) {
                statusBadge = 'bg-red-100 text-red-800';
            } else {
                statusBadge = 'bg-blue-100 text-blue-800';
            }
            
            // Create document card
            const card = document.createElement('div');
            card.className = 'bg-white rounded-xl shadow-sm overflow-hidden fade-in';
            card.style.animationDelay = `${index * 0.05}s`;
            card.innerHTML = `
    <div class="document-card p-6 hover:bg-gray-50 cursor-pointer">
        <div class="flex items-start justify-between mb-2">
            <div>
                <h3 class="text-lg font-medium text-gray-900 mb-1">${highlightedTitle}</h3>
                <div class="flex items-center space-x-3 text-sm mb-3">
                    <span class="text-gray-500">${motion.id}</span>
                    <span class="text-gray-300">•</span>
                    <span class="text-gray-500">${motion.date}</span>
                    <span class="text-gray-300">•</span>
                    <span class="px-2 py-0.5 rounded-full text-xs font-medium ${statusBadge}">
                        ${motion.status}
                    </span>
                </div>
            </div>
            <span class="text-xs text-gray-400">${motion.type}</span>
        </div>
        
        ${matchingLines.length > 0 ? `
        <div class="bg-gray-50 p-3 rounded-lg border border-gray-200 text-sm">
            <div class="text-xs text-gray-500 mb-1">Matching content:</div>
            ${matchingLines.map(item => {
                const highlightedLine = item.line.replace(
                    new RegExp(`(${keyword})`, 'gi'), 
                    `<span style="${highlightStyle}">$1</span>`
                );
                return `
                    <div class="mb-1">
                        <span class="text-gray-400 text-xs">Line ${item.number}:</span>
                        <span class="text-gray-800">${highlightedLine}</span>
                    </div>
                `;
            }).join('')}
        </div>
        ` : ''}
    </div>
`;
            
  card.querySelector('.document-card').addEventListener('click', () => {
    showDocumentDetails(decodeURIComponent(safeTitle));
});
            resultsContainer.appendChild(card);
        });

    }
    
    
    function showDocumentDetails(docTitle) {
    // Find the document whose title matches exactly
    const doc = motionData.find(m => m.title === docTitle);
    if (!doc) {
        alert('Document not found.');
        return;
    }
    renderDocumentCard(doc);
}
    
    // Helper to render the document card
    function renderDocumentCard(doc) {
        const statusBadge =
            doc.status === 'Granted'
                ? 'bg-green-100 text-green-800'
                : ['Denied', 'OverRuled'].includes(doc.status)
                ? 'bg-red-100 text-red-800'
                : 'bg-blue-100 text-blue-800';
    
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl shadow-lg overflow-hidden fade-in my-8 mx-auto max-w-2xl border border-gray-200';
        card.innerHTML = `
            <div class="document-card p-8">
                <div class="flex items-start justify-between mb-4">
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900 mb-2">${doc.title}</h2>
                        <div class="flex items-center space-x-3 text-sm mb-2">
                            <span class="text-gray-500">${doc.id}</span>
                            <span class="text-gray-300">•</span>
                            <span class="text-gray-500">${doc.date}</span>
                            <span class="text-gray-300">•</span>
                            <span class="px-2 py-0.5 rounded-full text-xs font-medium ${statusBadge}">
                                ${doc.status}
                            </span>
                        </div>
                    </div>
                    <span class="text-xs text-gray-400">${doc.type}</span>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm mb-4">
                    <pre style="white-space: pre-wrap;" class="text-gray-800">${doc.content}</pre>
                </div>
                <button onclick="clearDocumentDetails()" class="mt-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded transition">Close</button>
            </div>
        `;
    
        // Replace the search results with the document card
        const resultsContainer = document.getElementById('searchResults');
        resultsContainer.innerHTML = '';
        resultsContainer.appendChild(card);
    }
    
    // Helper to restore search results view
    function clearDocumentDetails() {
        performSearch();
    }
        
    

      clearButton.addEventListener('click', () => {
    document.getElementById('userInput').value = '';
        document.getElementById('userInput').innerHTML = '';
        performSearch();
  });

    
function showSection(sectionId) {
    const sections = [ 'glossaryS']; // List of all section IDs

    // Loop through all sections and hide them
    sections.forEach(id => {
      const section = document.getElementById(id);
      section.style.position = 'absolute';
      section.style.opacity = '0';
      section.style.height = '0';
      section.style.overflow = 'hidden';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.position = 'relative';
    selectedSection.style.opacity = '1';
    selectedSection.style.height = '95vh';
    selectedSection.style.overflow = 'visible';
  }


  showSection('glossaryS');

  const toggleDropdown = document.getElementById('toggleDropdown');
  const dropdownContent = document.getElementById('dropdownContent');

  // Add a click event listener to the button
  toggleDropdown.addEventListener('click', () => {
    dropdownContent.classList.toggle('hidden'); // Toggle the 'hidden' class
        toggleDropdown.classList.toggle('hidden'); // Toggle the 'hidden' class
  });
