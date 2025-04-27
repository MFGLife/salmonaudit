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







  



function openCrycella(){window.open("https://drive.google.com/drive/folders/1PGRGoEZuJ68PqOWcwW-naURZCVz2jNDE?usp=drive_link")}
function openJosh(){window.open("https://drive.google.com/drive/folders/1eOhAfstiootkx_MoDAgcd_BDj5JRgV0t?usp=drive_link")}
function openCarolyn(){window.open("https://drive.google.com/drive/folders/16pXT0g0sYMJxuvImpH5742ELnR155v-A?usp=drive_link")}
function openJozef(){window.open("https://drive.google.com/drive/folders/1crWPe_GyyCpp9OynIqCM5RAM0XyYRqro?usp=drive_link")}
function openCourt(){window.open("https://drive.google.com/drive/folders/10RRzhZymsQsJj_rxVtJFG9Bglilnct7K?usp=drive_link")}
function openStephanie(){window.open("https://drive.google.com/drive/folders/1KRERaiCbiEoB5ROfFVuz6w7Hzrt57FmJ?usp=drive_link")}
function openCarl(){window.open("https://drive.google.com/drive/folders/1dlzInEus0xOVVBFgPVEEEihi6F8uFvCy?usp=drive_link")}
function openAmanda(){window.open("https://drive.google.com/drive/folders/1VJnL__atUsMuGOMLl_oXbQz-T2aPqoLe?usp=drive_link")}


