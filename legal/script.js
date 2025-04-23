document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {                     
    document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });
  
  var listView = document.querySelector('.list-view');
  var gridView = document.querySelector('.grid-view');
  var projectsList = document.querySelector('.project-boxes');
  
  listView.addEventListener('click', function () {
    gridView.classList.remove('active');
    listView.classList.add('active');
    projectsList.classList.remove('jsGridView');
    projectsList.classList.add('jsListView');
  });
  
  gridView.addEventListener('click', function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    projectsList.classList.remove('jsListView');
    projectsList.classList.add('jsGridView');
  });

});




function setCalendarWidth() {
  const screenWidth = window.innerWidth;
  const calendar = document.getElementById('calendarS');
  let width;

  if (screenWidth < 400) {
    width = '320px';
  } else if (screenWidth < 600) {
    width = '400px';
  } else if (screenWidth < 800) {
    width = '600px';
  } else if (screenWidth < 1000) {
    width = '750px';
  } else if (screenWidth < 1200) {
    width = '900px';
  } else {
    width = '1050px';
  }

  calendar.style.width = width;
}

function setJusticeSectionWidth() {
  const screenWidth = window.innerWidth;
  const leafletMap = document.getElementById('leafletMap');
  if (!leafletMap) return;
  
  let width;

  if (screenWidth < 400) {
    width = '320px';
  } else if (screenWidth < 600) {
    width = '400px';
  } else if (screenWidth < 800) {
    width = '600px';
  } else if (screenWidth < 1000) {
    width = '750px';
  } else if (screenWidth < 1200) {
    width = '900px';
  } else {
    width = '1050px';
  }

  leafletMap.style.width = width;
  
  // If you're using Leaflet.js
  if (window.map && typeof window.map.invalidateSize === 'function') {
    window.map.invalidateSize();
  }
}

// Initialize functions
setCalendarWidth();
setJusticeSectionWidth();

// Handle window resize
window.addEventListener('resize', function() {
  setCalendarWidth();
  setJusticeSectionWidth();
});

// Refresh on window focus - this helps when returning to the tab
window.addEventListener('focus', function() {
  setJusticeSectionWidth();
  
  // Short delay to ensure map is ready
  setTimeout(function() {
    if (window.map && typeof window.map.invalidateSize === 'function') {
      window.map.invalidateSize();
    }
  }, 100);
});

// Also trigger a refresh after the page has fully loaded
window.addEventListener('load', function() {
  setJusticeSectionWidth();
  
  // Multiple attempts with increasing delays to catch late-initializing maps
  setTimeout(setJusticeSectionWidth, 100);
  setTimeout(setJusticeSectionWidth, 500);
  setTimeout(setJusticeSectionWidth, 1000);
});
  



function openCrycella(){window.open("https://drive.google.com/drive/folders/1PGRGoEZuJ68PqOWcwW-naURZCVz2jNDE?usp=drive_link")}
function openJosh(){window.open("https://drive.google.com/drive/folders/1eOhAfstiootkx_MoDAgcd_BDj5JRgV0t?usp=drive_link")}
function openCarolyn(){window.open("https://drive.google.com/drive/folders/16pXT0g0sYMJxuvImpH5742ELnR155v-A?usp=drive_link")}
function openJozef(){window.open("https://drive.google.com/drive/folders/1crWPe_GyyCpp9OynIqCM5RAM0XyYRqro?usp=drive_link")}
function openCourt(){window.open("https://drive.google.com/drive/folders/10RRzhZymsQsJj_rxVtJFG9Bglilnct7K?usp=drive_link")}
function openStephanie(){window.open("https://drive.google.com/drive/folders/1KRERaiCbiEoB5ROfFVuz6w7Hzrt57FmJ?usp=drive_link")}
function openCarl(){window.open("https://drive.google.com/drive/folders/1dlzInEus0xOVVBFgPVEEEihi6F8uFvCy?usp=drive_link")}
function openAmanda(){window.open("https://drive.google.com/drive/folders/1VJnL__atUsMuGOMLl_oXbQz-T2aPqoLe?usp=drive_link")}


