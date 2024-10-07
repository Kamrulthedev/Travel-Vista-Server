/* eslint-disable no-useless-escape */
export const validateEmail = function (email: string) {
  const res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return res.test(email);
};

export const USER_ROLE = {
  user: 'user',
  admin: 'admin',
} as const;
