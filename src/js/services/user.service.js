function UserService (SERVER, $http) {

  this.signup = signup;
  this.login  = login;

  function signup (user) {
    return $http.post(SERVER.URL + 'signup', user);
  }

  function login (user) {
    return $http.post(SERVER.URL + 'login', user);
  }

}

UserService.$inject = ['SERVER', '$http'];
export { UserService };