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
  <button onclick="updateAdminCheckpointView()">Kontrollpunkt</button>
  <button onclick="">rediger profil</button>
  <div>
  Admin knapper: 
  <button onclick="editUsers()">Endre brukere</button>
  <button onclick="editBuyNow()">Endre til salg</button>
  <button onclick="editAuctions()">Endre auksjoner</button>
  </div>
  </div>
  
  
  </div>
  `
}

