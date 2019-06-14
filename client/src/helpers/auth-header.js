export function authHeader() {
  // return authorization header with jwt token
  let token = JSON.parse(localStorage.getItem('user'));
  console.log(token)
  if (token) {
      return { 'Authorization': token };
  } else {
      return {};
  }
}
