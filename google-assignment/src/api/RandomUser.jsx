import { get } from ".";

/**
 * Function to fetch/get list of universities
 */
export const getRandomUser = async () => {
  const res = await get(
   "https://randomuser.me/api/",
  );
  return res;
}