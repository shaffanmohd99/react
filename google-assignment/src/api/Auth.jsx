import users from "../db/users";

export const loginAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      token:"11231213123123123",
      user:{
        name: 'Test Admin',
        email: 'admin@email.com',
        roles: 'admin'

      }
    }), 500);
  });
} 