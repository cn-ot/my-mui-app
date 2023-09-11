const auth = {
  isAuthenticated() {
    if (sessionStorage.getItem('jwt'))
      return JSON.parse(sessionStorage.getItem('jwt'))
    else
      return false
  },
  authenticate(jwt, cb) {
    //cb == callback
    sessionStorage.setItem('jwt', JSON.stringify(jwt))
    cb()
  },
  signout(cb) {
    //cb == callback
    sessionStorage.removeItem('jwt')
    cb()
    //optional
    document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  }
}

export default auth
