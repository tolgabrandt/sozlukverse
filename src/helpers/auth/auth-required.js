export function authRequired(isAuthenticated, user, guest) {
  if (!isAuthenticated) return guest;
  return user;
}


