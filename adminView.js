//updateAdminView()
function updateAdminView() {
  document.getElementById("appingtonTheSecond").innerHTML =/*HTML*/`
  <div id="appingtonTheInnerMain">
 <div><img src="${model.data.users[0].profilePicture}" class="standardGalleryImageSize"/></div>
  <div>(om tekst)
      Jobb(tittel):
      Sted:
      interesser(?):

  </div>
  <div>(kontakt info)
    Mail: 
    Tlf:
  </div>
  <div>(admin funkjsoner)
    <button onclick="changePage('adminCheckpoint')">Kontrollpunkt</button>
    <button onclick="changePage('editProfile')">Rediger profil</button>
    <div>
      Admin knapper: 
      <button onclick="changePage('editUsers')">Endre brukere</button>
      <button onclick="changePage('editBuyNow')">Endre til salg</button>
      <button onclick="changePage('editAuctions')">Endre auksjoner</button>
    </div>
  </div>
  
  
  </div>
  `
}



