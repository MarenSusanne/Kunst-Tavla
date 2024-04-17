//updateGalleryAndArchiveView()
function updateGalleryAndArchiveView() {
    document.getElementById("appingtonTheSecond").innerHTML =/*HTML*/`
    <div class="toDelt">
        <div class="delt delt_1" onclick="updateGalleryView()">Galleri</div>
        <div class="delt delt_2" onclick="updateArchiveView()">Arkiv</div>
    </div>`;
}