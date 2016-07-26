function UserService (SERVER, $http, $cookies) {

  this.signup = signup;
  this.login  = login;
  this.headers = headers;
  this.getUser = getUser;

  function signup (user) {
    return $http.post(SERVER.URL + 'signup', user);
  }

  function login (user) {
    return $http.post(SERVER.URL + 'login', user);
  }

  function headers () {
    let authToken = $cookies.get('access_token');
    return { headers: { 'Access-Token': authToken }};
  }

  function getUser () {
    return $cookies.get('username');
  }

}

UserService.$inject = ['SERVER', '$http', '$cookies'];
export { UserService };