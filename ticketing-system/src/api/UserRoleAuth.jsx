import { get } from ".";

export const fetchUserRole = async (config) => {
    const res = await get(
     'http://127.0.0.1:8000/api/user',config
    );
    return res;
  }