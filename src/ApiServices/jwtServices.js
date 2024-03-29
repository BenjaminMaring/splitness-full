const jwtProp = 'splitjwt';

export const setJwt = token => {
  localStorage.setItem(jwtProp, `Bearer ${token}`);
}

export const getJwt = () => {
  const jwt =  localStorage.getItem(jwtProp);
  return jwt;
}

export const clearJwt = () => {
  localStorage.removeItem(jwtProp);
}

export const decodeJwt = (jwt) => {
  const splitJwt = jwt.split('.');

  const decodedPayload = JSON.parse(atob(splitJwt[1]));

  return decodedPayload;
}