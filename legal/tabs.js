


  function showSection(sectionId) {
    const sections = ['projectsS', 'calendarS', 'justiceS', 'glossaryS']; // List of all section IDs

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

