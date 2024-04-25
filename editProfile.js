function editProfile() {
    document.getElementById("appingtonTheSecond").innerHTML = /*HTML*/ `
  <div class="item" id="registerUser">
          <div class="bitOfAir">
          <input onchange="editInputName(this.value)" placeholder="Navn">
          </div>
          <div class="bitOfAir">
          <input onchange="editInputUserName(this.value)" placeholder="Brukernavn">
          </div>
          <div class="bitOfAir">
          <input onchange="editInputEmail(this.value)" placeholder="Epost">
          </div>
          <div class="bitOfAir">
            <input onchange="editInputPassword(this.value)" placeholder="Passord">
          </div>
          <div class="bitOfAir">
            <input onchange="editInputPicture(this.value)" placeholder="Bilde">
          </div>
          <div class="bitOfAir">
          <input onchange="editInputAbout(this.value)" placeholder="Om meg">
          </div>
          <div class="bitOfAir">Er du kunstner?  <input type="checkbox"></div>
        <div class="bitOfAir">
       <button>Godkjenn endringer</button>
    </div>
  `
}