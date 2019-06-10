function myFunction() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn1')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
     if(!event.target.matches('.dropbtn3')) {
      var dropdowns = document.getElementsByClassName("dropdown-content3");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    if (!event.target.matches('.dropbtn4')) {
      var dropdowns = document.getElementsByClassName("dropdown-content4");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
  
 

  function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
  }
  



  const inputField = document.querySelector('.search-field input');
const resultBox = document.querySelector('.result-box');

inputField.addEventListener('focus', function () {
  resultBox.classList.add('show');
});

inputField.addEventListener('blur', function (e) {
  resultBox.classList.remove('show');
});

resultBox.addEventListener('mousedown', function (e) {
  e.preventDefault();
});

