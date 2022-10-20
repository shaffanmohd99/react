import { destroy, edit } from "."

export const destroyUser = async (userID,config) => {
    const res = await destroy(
      `https://ticker-heroku.herokuapp.com/api/admin/user/${userID}`,config
    );
    return res;
  }
  
  export const editUser = async (userID,values,config) => {
    const res = await edit(
      `https://ticker-heroku.herokuapp.com/api/admin/user/${userID}`,values,config
    );
    return res;
  }