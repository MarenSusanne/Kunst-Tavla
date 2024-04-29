function updateAuctionOnly() {
    let print = "";
    for (let i = 0; i < model.data.auctionObjects.length; i++) {
        print += /*HTML*/ `
        <div class="container_innerGallery">
          <div>
              <img src="${model.data.auctionObjects[i].artId}" class="standardGalleryImageSize"/>
              <div>${model.data.auctionObjects[i].seller}</div>
              <div class="container_text">${model.data.auctionObjects[i].aboutPictureText}</div>
              <div>${model.data.categories[model.data.auctionObjects[i].category]}</div>
              <div>${model.data.auctionObjects[i].artistName}</div>
              <div>${model.data.auctionObjects[i].price}</div>
          </div>
      </div>
      `
    }
        
}

/*    
    let print = ""
  
    for (let i = 0; i < model.data.salesObjects.length; i++) {
      print += `
      <div class="container_innerGallery">
          <div>
              <img src="${model.data.salesObjects[i].artId}" class="standardGalleryImageSize"/>
              <div>${model.data.salesObjects[i].seller}</div>
              <div class="container_text">${model.data.salesObjects[i].aboutPictureText}</div>
              <div>${model.data.categories[model.data.salesObjects[i].category]}</div>
              <div>${model.data.salesObjects[i].artistName}</div>
              <div>${model.data.salesObjects[i].price}</div>
          </div>
      </div>
      `
    }
    return print
  }
  
    function updateBuyOnly() {
    document.getElementById('appingtonTheSecond').innerHTML =  `
      <div class="container_mainGallery">
          <div id="galleryTitle">
              <h2>Galleri</h2>
          </div>
          <div id="printGallery">
              ${printBuyView()}
              </div>
      </div>
      `
  } */