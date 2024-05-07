
//adminCheckpoint

function giveIdToArtwork() {
  let highestNum = 0;

  for (let i = 0; i < model.data.salesObjects.length; i++) {
    let currentArtPiece = model.data.salesObjects[i]
    if (currentArtPiece.id > highestNum) highestNum = currentArtPiece.id
  }
  return highestNum + 1
}

function acceptInputForSale(index) {
  model.data.salesObjectsToCheck[index].id = giveIdToArtwork()
  model.data.salesObjects.push(model.data.salesObjectsToCheck[index]);
  updateAdminCheckpointView();
  declineInputForSale();
}

function declineInputForSale(index) {
  model.data.salesObjectsToCheck.splice(index, 1);
  updateAdminCheckpointView();
}

function declineInputUser(index) {
  model.data.users.splice(index, 1);
  editUsers();
}

function declineInputBuy(index) {
  model.data.salesObjects.splice(index, 1);
  editBuyNow();
}

function declineInputAuction(index) {
  model.data.auctionObjects.splice(index, 1);
  editAuctions();
}

//addSalesobjekt
function addNewItem() {
  model.data.newInputSalesObjekt.category = model.inputs.chosenCategory;
  model.data.salesObjectsToCheck.push(model.data.newInputSalesObjekt);
  model.inputs.chosenCategory = null;
  changePage('profile');
}

function newInputSeller(inputValue) {
  model.data.newInputSalesObjekt.seller = inputValue;
  addSaleObjekt();
}
function newInputArtId(inputValue) {
  model.data.newInputSalesObjekt.artId = inputValue;
  addSaleObjekt();
}
function newInputAboutPictureText(inputValue) {
  model.data.newInputSalesObjekt.aboutPictureText = inputValue;
  addSaleObjekt();
}
function newInputCategory(inputValue) {
  model.data.newInputSalesObjekt.category = inputValue;
  addSaleObjekt();
}
function newInputArtistName(inputValue) {
  model.data.newInputSalesObjekt.artistName = inputValue;
  addSaleObjekt();
}
function newInputPrice(inputValue) {
  model.data.newInputSalesObjekt.price = inputValue;
  addSaleObjekt();
}
function newInputCountdownDate(inputValue) {
  model.data.newInputSalesObjekt.inputtedDate = inputValue;
  console.log(inputValue)
  addSaleObjekt();
}

function splitSalesObject() {
  if (document.getElementById('chooseYourInputCategory').value == 0) {
    document.getElementById("theNameOfSeller").disabled = false;
    document.getElementById("artPictureLink").disabled = false;
    document.getElementById("artPictureAltText").disabled = false;
    document.getElementById("chooseYourCategory").disabled = false;
    document.getElementById("theNameOfArtist").disabled = false;
    document.getElementById("putInYourPrice").disabled = false;
    document.getElementById("putInYourDate").disabled = false;
  } else if (document.getElementById('chooseYourInputCategory').value == 1) {
    document.getElementById("theNameOfSeller").disabled = false;
    document.getElementById("artPictureLink").disabled = false;
    document.getElementById("artPictureAltText").disabled = false;
    document.getElementById("chooseYourCategory").disabled = false;
    document.getElementById("theNameOfArtist").disabled = false;
    document.getElementById("putInYourPrice").disabled = false;
    document.getElementById("putInYourDate").disabled = true;
  } else if (document.getElementById('chooseYourInputCategory').value == 2) {
    document.getElementById("theNameOfSeller").disabled = false;
    document.getElementById("artPictureLink").disabled = false;
    document.getElementById("artPictureAltText").disabled = false;
    document.getElementById("chooseYourCategory").disabled = false;
    document.getElementById("theNameOfArtist").disabled = false;
    document.getElementById("putInYourPrice").disabled = true;
    document.getElementById("putInYourDate").disabled = true;
  } else {
    //document.querySelectorAll('#allInputs input')
    document.getElementById("theNameOfSeller").disabled = true;
    document.getElementById("artPictureLink").disabled = true;
    document.getElementById("artPictureAltText").disabled = true;
    document.getElementById("chooseYourCategory").disabled = true;
    document.getElementById("theNameOfArtist").disabled = true;
    document.getElementById("putInYourPrice").disabled = true;
    document.getElementById("putInYourDate").disabled = true;
  }
}
//registrationAndLogInView
function addNewUser() {
  model.data.users.push(model.inputs.registerUser);
  updateView();
}
function newInputFullName(inputValue) {
  model.inputs.registerUser.fullNameInput = inputValue;
  updateView();
}
function newInputUserName(inputValue) {
  model.inputs.registerUser.userNameInput = inputValue;
  updateView();
}
function newInputEmail(inputValue) {
  model.inputs.registerUser.email = inputValue;
  updateView();
}
function newInputPassword(inputValue) {
  model.inputs.registerUser.passwordInput = inputValue;
  updateView();
}
function newInputProfilePicture(inputValue) {
  model.inputs.registerUser.profilePicture = inputValue;
  updateView();
}
function newInputArtist(inputValue) {
  model.inputs.registerUser.artist = inputValue;
  updateView();
}

function clearInputs() {
  model.inputs.registerUser.fullNameInput = '';
  model.inputs.registerUser.email = '';
  model.inputs.registerUser.passwordInput = '';
  model.inputs.registerUser.profilePicture = '';
  model.inputs.registerUser.userNameInput = '';
}

//buyView
function chooseCategory(filter) {
  model.inputs.chosenCategory = filter;
  updateView();
  console.log(filter);
}


function changePage(page) {
  model.app.page = page;
  updateView();
}

function countDownSystem() {

}

function changeArtwork(artworkId, artworkSalesType) {
  model.inputs.chosenArtworkSalesType = artworkSalesType
  model.inputs.chosenArtwork = artworkId
  changePage('singleArtwork');
}



/*// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);







/*function addNewSalesObject(){
  let short = model.data.newInputSalesObjekt

model.data.salesObjectsToCheck = {
  seller: short.seller,
  artid: short.artId,
  aboutPictureText: short.aboutPictureText,
  category: short.category,
  artistName: short.artistName,
  price: short.price
}
}*/
