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
            <div>${calculateTimeRemaining(model.data.auctionObjects[i].auctionEndTime)}</div>
          </div>
      </div>
      `
    }
    return print
        
}

function calculateTimeRemaining(auctionEndTime) {
    // Parse auctionEndTime to a JavaScript Date object
    const endTime = new Date(auctionEndTime);

    // Get the current time
    const currentTime = new Date();

    // Calculate the difference in milliseconds between current time and end time
    let timeDiff = endTime - currentTime;

    // Check if the auction has already ended
    if (timeDiff <= 0) {
        return "Auksjonen er ferdig";
    }

    // Convert time difference to days, hours, minutes, and seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    timeDiff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    timeDiff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(timeDiff / (1000 * 60));
    timeDiff -= minutes * (1000 * 60);

    const seconds = Math.floor(timeDiff / 1000);

    return `<i>${days}dag(er) ${hours}time(r) igjen</i>`;
}

function updateAuctionOnly(){
    
    document.getElementById('appingtonTheSecond').innerHTML =  /*HTML*/`
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