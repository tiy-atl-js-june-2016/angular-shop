function RegisterController (UserService, $cookies) {

  let vm = this;
  vm.createUser = createUser;

  function createUser (user) {
    UserService.signup(user).then( res => {
      console.log(res);
    });
  }

}

RegisterController.$inject = ['UserService', '$cookies'];
export { RegisterController };