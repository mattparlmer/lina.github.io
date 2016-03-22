
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
	var getBrowserProps = navigator.userAgent;
	document.getElementById('browser-props').innerHTML = getBrowserProps;
	// $('head').append('<meta name="apple-itunes-app" content="app-id=960059100, app-argument=standapp://">');
};

findBrowser();

var getDeploymentCommand = function() {
  var deploymentCommand1 = "./tools/release-and-deploy-stand-api.py";

  var deploymentCommandArrayTest = [deploymentCommand1];
  var deploymentCommandArrayStaging = [deploymentCommand1];

  var deploymentCommandArrayProdApi = [deploymentCommand1];
  var deploymentCommandArrayProdWeb = [deploymentCommand1];
  var deploymentCommandArrayProdCron = [deploymentCommand1];


  var deploymentHistoryRecordStr = document.getElementById("deploy-command-input-field").value;

  var deploymentHistoryArr = deploymentHistoryRecordStr.split(',');

  var shaZipFileNameOriginal = deploymentHistoryArr[2];

  var shaZipFileNameUglified = shaZipFileNameOriginal.replace('original', 'uglified');

  // push zip file

  deploymentCommandArrayTest.push(shaZipFileNameOriginal);
  deploymentCommandArrayStaging.push(shaZipFileNameOriginal);

  deploymentCommandArrayProdApi.push(shaZipFileNameUglified);
  deploymentCommandArrayProdWeb.push(shaZipFileNameUglified);
  deploymentCommandArrayProdCron.push(shaZipFileNameUglified);

  // push server name

  deploymentCommandArrayTest.push("test");
  deploymentCommandArrayStaging.push("staging");

  deploymentCommandArrayProdApi.push("prod");
  deploymentCommandArrayProdWeb.push("prod");
  deploymentCommandArrayProdCron.push("prod");

  // push deployment verifier

  var deploymentVerifier = deploymentHistoryArr[3];

  deploymentCommandArrayTest.push(deploymentVerifier);
  deploymentCommandArrayStaging.push(deploymentVerifier);

  deploymentCommandArrayProdApi.push(deploymentVerifier);
  deploymentCommandArrayProdWeb.push(deploymentVerifier);
  deploymentCommandArrayProdCron.push(deploymentVerifier);

  // push layer name for prod

  deploymentCommandArrayProdApi.push("stand-api");
  deploymentCommandArrayProdWeb.push("stand-web");
  deploymentCommandArrayProdCron.push("stand-cron");

  // concat commands into strings


  var deploymentCommandStrTest = deploymentCommandArrayTest.join(" ");
  var deploymentCommandStrStaging = deploymentCommandArrayStaging.join(" ");

  var deploymentCommandStrProdApi = deploymentCommandArrayProdApi.join(" ");
  var deploymentCommandStrProdWeb = deploymentCommandArrayProdWeb.join(" ");
  var deploymentCommandStrProdCron = deploymentCommandArrayProdCron.join(" ");

  document.getElementById("deploy-command-text-test-server").innerHTML = deploymentCommandStrTest;

  document.getElementById("deploy-command-text-staging-server").innerHTML = deploymentCommandStrStaging;

  document.getElementById("deploy-command-text-prod-server-api").innerHTML = deploymentCommandStrProdApi;

  document.getElementById("deploy-command-text-prod-server-web").innerHTML = deploymentCommandStrProdWeb;

  document.getElementById("deploy-command-text-prod-server-cron").innerHTML = deploymentCommandStrProdCron;
}

console.log('getDeploymentCommand', getDeploymentCommand);