
    
  document.getElementById('formDropdown').addEventListener('change', async function () {
    const selectedValue = this.value;
    const formContainer = document.getElementById('formContainer');

    if (!selectedValue) {
      formContainer.innerHTML = ''; // Clear if no selection
      return;
    }

    try {
      const response = await fetch(selectedValue);
      if (!response.ok) throw new Error('Form could not be loaded.');
      
      const formHTML = await response.text();
      formContainer.innerHTML = formHTML;

      // Optionally run scripts inside the loaded HTML (if any)
      const scripts = formContainer.querySelectorAll("script");
      scripts.forEach(script => {
        const newScript = document.createElement("script");
        newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
      });

    } catch (err) {
      formContainer.innerHTML = `<p class="text-red-500">Error loading form: ${err.message}</p>`;
    }
  });

      
    