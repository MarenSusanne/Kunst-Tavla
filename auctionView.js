function printAuctionView() {
    let print = "";
    for (let i = 0; i < model.data.auctionObjects.length; i++) {
        print += /*HTML*/ `
        <div class="container_innerBuyGallery">
        <img src="${model.data.auctionObjects[i].artId}" class="standardBuyImageSize"/>
            <div class="innerInfo">
            <h3 class="container_text">${model.data.auctionObjects[i].aboutPictureText}</h3>
            <div>Selger: ${model.data.auctionObjects[i].seller}</div>
            <div>${model.data.categories[model.data.auctionObjects[i].category]}</div>
            <div>Kunstner: ${model.data.auctionObjects[i].artistName}</div>
            <div>${model.data.auctionObjects[i].activeBid},-</div>
          </div>
      </div>
      `
    }
    return print
        
}

function updateAuctionOnly(){
    document.getElementById('appingtonTheSecond').innerHTML =  `
      <div class="container_mainGallery">
          <div id="galleryTitle">
              <h2>Galleri</h2>
          </div>
          <div id="printBuyGallery">
              ${printAuctionView()}
              </div>
      </div>
      `
}