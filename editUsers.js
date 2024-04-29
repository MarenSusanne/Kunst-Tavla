function printUsers() {
    let print = ""

    for (let i = 1; i < model.data.users.length; i++) {
        print += /*HTML*/`
        <div class="adminViewCheckpoint">
            <div>
            <img src="${model.data.users[i].profilePicture}" class=""/>
            <div>
                <li>Navn: ${model.data.users[i].fullNameInput}
                <li>: ${model.data.users[i].userNameInput}
                <button class="adminButtonDecline" onclick="declineInputUser(${i})">Fjern</button>
            </div>
        </div>
        `
      }
      return print
    }

    function editUsers() {
        document.getElementById('appingtonTheSecond').innerHTML = /*HTML*/ `
          <div class="container_mainGallery">
              <div id="">
                  <h2>Fjern bruker</h2>
              </div>
              <div id="printGallery">
                  ${printUsers()}
                  </div>
          </div>
          `
      }