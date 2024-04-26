
function login() {
  let userId = findUser();
  if (userId == null) {
    model.inputs.loginView.errorMessage = 'Feil brukernavn eller passord';
    updateRegistrationAndLogInView()
  }
  else {
    model.app.page = 'main';
    model.app.user = userId;
    model.inputs.loginView.errorMessage = null;
    updateInnerMainView();
  }
  model.inputs.loginView.userName = null;
  model.inputs.loginView.password = null;
  document.getElementById("registreringOgProfil").innerHTML = `
    <div class="tmtm-R" onclick="userProfileView()">Profil</div>
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