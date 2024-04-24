
//adminCheckpoint
function acceptInput(index) {
  model.data.salesObjects.push(model.data.salesObjectsToCheck[index])
  updateAdminCheckpointView()
  declineInput()
}

function declineInput(index) {
    model.data.salesObjectsToCheck.splice(index);
    updateAdminCheckpointView()
}

//addSalesobjekt
function addNewItem() {
  model.data.salesObjectsToCheck.push(model.data.newInputSalesObjekt)
  addSaleObjekt()
}

function newInputSeller (inputValue){
  model.data.newInputSalesObjekt.seller = inputValue;
  addSaleObjekt()
}
function newInputArtId (inputValue){
  model.data.newInputSalesObjekt.artId = inputValue;
  addSaleObjekt()
}
function newInputAboutPictureText (inputValue){
  model.data.newInputSalesObjekt.aboutPictureText = inputValue;
  addSaleObjekt()
}
function newInputCategory (inputValue){
  model.data.newInputSalesObjekt.category = inputValue;
  addSaleObjekt()
}
function newInputArtistName (inputValue){
  model.data.newInputSalesObjekt.artistName = inputValue;
  addSaleObjekt()
}
function newInputPrice (inputValue){
  model.data.newInputSalesObjekt.price = inputValue;
  addSaleObjekt()
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
