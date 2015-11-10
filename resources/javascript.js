
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

var findBrowser = function() {
	console.log('what')
	var getBrowserProps = navigator.userAgent;
	document.getElementById('browser-props').innerHTML = getBrowserProps;
	$('head').append('<meta name="apple-itunes-app" content="app-id=960059100, app-argument=standapp://">');
};

findBrowser();



