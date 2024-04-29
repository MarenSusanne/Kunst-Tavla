function printCheckpointView() {
  let print = ""

  for (let i = 0; i < model.data.salesObjectsToCheck.length; i++) {
    print += /*HTML*/`
    <div class="adminViewCheckpoint">
        <div>
            <img src="${model.data.salesObjectsToCheck[i].artId}" class="adminViewPicture"/>
            <div>
            <li>Selger: ${model.data.salesObjectsToCheck[i].seller}
            <li>Om Bildet: ${model.data.salesObjectsToCheck[i].aboutPictureText}
            <li>Kunstner: ${model.data.salesObjectsToCheck[i].artistName}
            <li>Pris: ${model.data.salesObjectsToCheck[i].price}
            </div>
            <button class="adminButtonAccept" onclick="acceptInputForSale(${i})">Aksepter</button>
            <button class="adminButtonDecline" onclick="declineInputForSale(${i})">Avslå</button>
        </div>
    </div>
    `
  }
  return print
}

  function updateAdminCheckpointView() {
  document.getElementById('appingtonTheSecond').innerHTML = /*HTML*/ `
    <div class="container_mainGallery">
        <div id="galleryTitle">
            <h2>Til Godkjenning</h2>
        </div>
        <div id="printGallery">
            ${printCheckpointView()}
            </div>
    </div>
    `
}



/*div tid igjen 
div nåværende bud: 5000
div minste nye bud: 5500
inputfelt _______

button Gi bud


list tidligere bud: */