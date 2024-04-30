//updateGalleryAndArchiveView()
function updateGalleryAndArchiveView() {
    document.getElementById("appingtonTheSecond").innerHTML =/*HTML*/`
    <div class="toDelt">
        <div class="delt delt_1" onclick="changePage('galleryOnly')">Galleri</div>
        <div class="delt delt_2" onclick="changePage('archiveOnly')">Arkiv</div>
    </div>`;
}