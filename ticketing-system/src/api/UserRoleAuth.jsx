import { get } from ".";

export const fetchUserRole = async (config) => {
    const res = await get(
     'https://ticker-heroku.herokuapp.com/api/user',config
    );
    return res;
  }