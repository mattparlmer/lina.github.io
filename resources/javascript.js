
$(document).ready(function() {
  /* Add code from the next steps here */
  $("#copyright").click(function(){ 
    $(this).css('color','purple'); 
  });

});

// Your Javascript will go here!

function replaceName() {
  var myNewName = window.prompt('Pick a new name!');
  document.getElementById('user-name').innerHTML = myNewName;
}

// document.onclick = replaceName;

