function printBuyLibrary() {
  let print = ""

  for (let i = 0; i < model.data.salesObjects.length; i++) {
    print += /*HTML*/`
    <div class="adminViewCheckpoint">
        <div>
            <img src="${model.data.salesObjects[i].artId}" class="standardGalleryImageSize"/>
            <div>
            <li>Selger: ${model.data.salesObjects[i].seller}
            <li>Om Bildet: ${model.data.salesObjects[i].aboutPictureText}
            <li>Kunstner: ${model.data.salesObjects[i].artistName}
            <li>Pris: ${model.data.salesObjects[i].price}
            </div>
            <button class="adminButtonDecline" onclick="declineInputBuy(${i})">fjern</button>
        </div>
    </div>
    `
  }
  return print
}

  function editBuyNow() {
  document.getElementById('appingtonTheSecond').innerHTML = /*HTML*/ `
    <div class="container_mainGallery">
        <div id="galleryTitle">
            <h2>Kontroler objekter til salgs</h2>
        </div>
        <div id="printGallery">
            ${printBuyLibrary()}
            </div>
    </div>
    `
}