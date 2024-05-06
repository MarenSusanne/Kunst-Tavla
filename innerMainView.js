//updateInnerMainView()
function updateInnerMainView() {
    document.getElementById("appingtonTheSecond").innerHTML =/*HTML*/`
    <div id="appingtonTheInnerMain">
        <div class="item innerAir" id="auctions">
            <h1 class="stopPadding">Auksjoner</h1>

            <div class="nickBottom">
            </div>
            <div id="newAuctionContainer">
            ${printAuctions()}
            </div>
        </div>
        <div class="item innerAir" id="news">
            <h1 class="stopPadding">Nyheter</h1>
            <div id="newsOverflow">${printNews()}</div>
        </div>
        <div class="item innerAir" id="welcome">
            <div>
                <div class="toTheLeft">
                    <h1 class="stopPadding slenderTexted">Velkommen til oss!</h1>
                </div>
                <div class="tentativeSubtitle fixing toTheLeft">Oppdag kunstnerne i samfunnet ditt</div>
            </div>
            <p class="fixing spreadOut">Vi heter Fiklebusk AS. Dette er nettsiden
            for samfunnet vårt og kunstnerne våre i den, slik at kan
            vi knytte dem bedre sammen og gjør transaksjoner
            mer tilgjengelig innen salg og kjennskap.</p>
        </div>
    </div>
    `
}

function printNews() {
    let print = "";
    for (let i = 0; i < model.data.newsObjekts.length; i++) {
        print += `
            <div class="newsContainer">
                <div class="innerMainNewsTitle">${model.data.newsObjekts[i].newsTitle}</div>
                <div class="newsDateStyle"><b>Tid:</b>  ${model.data.newsObjekts[i].newsDate}</div>
                <div class="newsLocationStyle"><b>Sted:</b>  ${model.data.newsObjekts[i].newsLocation}</div>
            </div>
        `;
    }
    return print;
}

function printAuctions() {
    let print = "";
    for (let i = model.data.auctionObjects.length - 1; i >= model.data.auctionObjects.length - 5; i--) {
        print += `
            <div class="frontAuctionContainer">
                <div class="mainPageAuctionTitleStyle">${model.data.auctionObjects[i].aboutPictureText}</div>
                <div>${calculateTimeRemaining(model.data.auctionObjects[i].auctionEndTime)}</div>
            </div>
        `;
    }
    return print;
}