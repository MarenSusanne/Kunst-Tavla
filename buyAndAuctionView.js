// updateBuyAndAuction()
function updateBuyAndAuction() {
    document.getElementById("appingtonTheSecond").innerHTML =/*HTML*/`
    <div class="toDelt">
        <div class="delt delt_1" onclick="changePage('buyOnly')">
            Kjøp
        </div>
        <div class="delt delt_2" onclick="changePage('auctionOnly')">Auksjon</div>
    </div>`;
}