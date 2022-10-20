import { destroy, edit } from "."

export const destroyUser = async (userID,config) => {
    const res = await destroy(
      `http://127.0.0.1:8000/api/admin/user/${userID}`,config
    );
    return res;
  }
  
  export const editUser = async (userID,values,config) => {
    const res = await edit(
      `http://127.0.0.1:8000/api/admin/user/${userID}`,values,config
    );
    return res;
  }