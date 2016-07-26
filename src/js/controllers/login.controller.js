function LoginController (UserService, $cookies, $state) {

  let vm = this;
  vm.loginUser = loginUser;

  function loginUser (user) {
    UserService.login(user).then( 
      // Successful Response
      res => {
        $cookies.put('access_token', res.data.access_token);
        $cookies.put('username', res.data.username);
        $state.go('root.home');
      }, 
      // Error Response (Client Error)
      error => {
        console.log(error.data.errors);
      }
    );
  }

}

LoginController.$inject = ['UserService', '$cookies', '$state'];
export { LoginController };