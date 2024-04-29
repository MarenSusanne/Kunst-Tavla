function printAuctionsLibrary() {
  let print = ""

  for (let i = 0; i < model.data.auctionObjects.length; i++) {
    print += /*HTML*/`
    <div class="adminViewCheckpoint">
        <div>
            <img src="${model.data.auctionObjects[i].artId}" class="adminViewPicture"/>
            <div>
            <li>Selger: ${model.data.auctionObjects[i].seller}
            <li>Om Bildet: ${model.data.auctionObjects[i].aboutPictureText}
            <li>Kunstner: ${model.data.auctionObjects[i].artistName}
            <li>Pris: ${model.data.auctionObjects[i].price}
            </div>
            <button class="adminButtonDecline" onclick="declineInputAuction(${i})">Fjern</button>
        </div>
    </div>
    `
  }
  return print
}

  function editAuctions() {
  document.getElementById('appingtonTheSecond').innerHTML = /*HTML*/ `
    <div class="container_mainGallery">
        <div id="galleryTitle">
            <h2>Kontroler auksjonsobjekter</h2>
        </div>
        <div id="printGallery">
            ${printAuctionsLibrary()}
            </div>
    </div>
    `
}