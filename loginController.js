
function login() {
  let userId = findUser();
  if (userId == null) {
    model.inputs.loginView.errorMessage = 'Feil brukernavn eller passord';
    changePage('registrationAndLogIn')
  }
  else {
    model.app.page = 'main';
    model.app.user = userId;
    model.inputs.loginView.errorMessage = null;
    changePage('main');
  }
  model.inputs.loginView.userName = null;
  model.inputs.loginView.password = null;
  document.getElementById("registreringOgProfil").innerHTML = /*HTML*/`
    <div>
      <div class="tmtm-R" onclick="changePage('profile')">Profil</div>
      <button onclick="logOut()">Logg ut</button>
    </div>
    `;
}

function findUser() {
  for (let user of model.data.users) {
    if (user.passwordInput == model.inputs.loginView.password
      && user.userNameInput == model.inputs.loginView.userName) {
      return user.userNameInput;
    }
  }

}

function logInInputUsername(inputValue) {
  model.inputs.loginView.userName = inputValue;
}

function logInInputPassword(inputValue) {
  model.inputs.loginView.password = inputValue;
}

function showCurrentUser() {
  for (let i = 0; i < model.data.users.length; i++) {
    if (model.app.user == model.data.users[i].userName) {

    }

  }
}

function logOut() {
  model.app.user = null;
  document.getElementById("registreringOgProfil").innerHTML = /*HTML*/`
  <div class="tmtm-R" onclick="changePage('registrationAndLogIn')">Registrering/Profil</div>
    `;
}


/*function login() {
  let userId = findUser();
  const login = model.inputs.login;
  if (userId == null) {
      login.errorMessage = 'Feil brukernavn og/eller passord';
  } else {
      model.app.page = 'main';
      model.app.user = userId;
      login.errorMessage = null;
      login.userId = null;
      login.password = null;
  }
  updateView();
}

function findUser() {
  for (let user of model.data.users) {
      if (user.id == model.inputs.login.userId
          && user.password == model.inputs.login.password) {
          return user.id;
      }
  }
  return null;
}*/