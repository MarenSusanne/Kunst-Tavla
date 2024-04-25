
//adminCheckpoint
function acceptInput(index) {
  model.data.salesObjects.push(model.data.salesObjectsToCheck[index])
  updateAdminCheckpointView()
  declineInput()
}

function declineInput(index) {
  model.data.salesObjectsToCheck.splice(index, 1);
  updateAdminCheckpointView()
}

//addSalesobjekt
function addNewItem() {
  model.data.salesObjectsToCheck.push(model.data.newInputSalesObjekt)
  addSaleObjekt()
}

function newInputSeller(inputValue) {
  model.data.newInputSalesObjekt.seller = inputValue;
  addSaleObjekt()
}
function newInputArtId(inputValue) {
  model.data.newInputSalesObjekt.artId = inputValue;
  addSaleObjekt()
}
function newInputAboutPictureText(inputValue) {
  model.data.newInputSalesObjekt.aboutPictureText = inputValue;
  addSaleObjekt()
}
function newInputCategory(inputValue) {
  model.data.newInputSalesObjekt.category = inputValue;
  addSaleObjekt()
}
function newInputArtistName(inputValue) {
  model.data.newInputSalesObjekt.artistName = inputValue;
  addSaleObjekt()
}
function newInputPrice(inputValue) {
  model.data.newInputSalesObjekt.price = inputValue;
  addSaleObjekt()
}

//registrationAndLogInView
function addNewUser(index) {
  model.data.users.push(model.inputs.registerUser[index]);
  updateRegistrationAndLogInView()
}
function newInputFullName(inputValue) {
  model.inputs.registerUser.fullName = inputValue;
  updateRegistrationAndLogInView()
  console.log(inputValue)
}
function newInputUserName(inputValue) {
  model.inputs.registerUser.userName = inputValue;
  updateRegistrationAndLogInView()
}
function newInputEmail(inputValue) {
  model.inputs.registerUser.email = inputValue;
  updateRegistrationAndLogInView()
}
function newInputPassword(inputValue) {
  model.inputs.registerUser.password = inputValue;
  updateRegistrationAndLogInView()
}
function newInputProfilePicture(inputValue) {
  model.inputs.registerUser.profilePicture = inputValue;
  updateRegistrationAndLogInView()
}
function newInputArtist(inputValue) {
  model.inputs.registerUser.artist = inputValue;
  updateRegistrationAndLogInView()
}



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
