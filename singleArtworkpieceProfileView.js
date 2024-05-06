function findArtworkBuy() {
    return model.data.salesObjects.find((o) => o.id == model.inputs.chosenArtwork)
}
function findArtworkAuction() {
    return model.data.auctionObjects.find((o) => o.id == model.inputs.chosenArtwork)
}
function findArtworkGallery() {
    return model.data.artObject.find((o) => o.id == model.inputs.chosenArtwork)
}

function findArtwork() {
    if (model.inputs.chosenArtworkSalesType == 'buy') {
        return findArtworkBuy()
    } else if (model.inputs.chosenArtworkSalesType == 'auction') {
        return findArtworkAuction()
    } else if (model.inputs.chosenArtworkSalesType == 'gallery') {
        return findArtworkGallery()
    }
}

function updateSingleArtworkpieceProfileView() {
    let currentArtwork = findArtwork()
    document.getElementById("appingtonTheSecond").innerHTML = /*HTML*/`
    <div class="artworkProfile_Container">
        <div class="item section_1">
            <div class="singleImageStyling">
                <img src="${currentArtwork.artId}" id="singleImage">
            </div>
        </div>
        
        <div class="section_2"></div>

        <div class="item section_3">
            <div class="s3_a"></div>
            <div class="s3_b"></div>
            <div class="s3_c"></div>
            <div class="item s3_d">Kjøp og auksjon!</div>
            <div class="s3_e"></div>
            <div class="item s3_f">${calculateTimeRemaining(currentArtwork.auctionEndTime)}</div>
            <div class="s3_g"></div>
            <div class="item s3_h">
                <div class="nowBid">Nåværende Bud:</div>
            </div>
            <div class="item s3_i">
                <div class="nowBid">${currentArtwork.activeBid},-</div>
            </div>
        </div>

        <div class="item section_4">Legg nytt bud</div>
        <div class="item section_5">Bekreft</div>
        <div class="item section_6">
            <input class="sect6MinorMargin" placeholder="${currentArtwork.activeBid + 500 + ',-'}">
        </div>

        <div class="item section_7">
            <div class="s7_d">
                ${currentArtwork.bidders}
                ${currentArtwork.previousBids},-
            </div>
            <div>
               <i> Minste bud: ${currentArtwork.activeBid + 500 + ',-'}</i>
            </div>
        </div>
        <div class="section_8"></div>
        <div class="item section_9">
            Coming soon...
        </div>

        <div class="section_10"></div>
        
        <div class="section_11"></div>
        <div class="item section_12">
            <p class="s12_head">${currentArtwork.aboutPictureText}</p>
            <p class="s12_p">
                ${currentArtwork.aboutPictureDescription}
            </p>
        </div>
        <div class="section_13"></div>

        <div class="section_14"></div>
    </div>
    `;
}