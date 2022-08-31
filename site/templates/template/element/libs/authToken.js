/* eslint-disable no-unused-vars */

export const parseJwt = (token) => {};

export function checkTokenExpire(token) {}

export function setClearToken() {}

export function setToken(token) {}

export function setUserMe(userMe) {}

export function setAffiliateId(token) {}

export function setPixcelCode(code) {}

export function getAffiliateId(ctx = null) {}
export function getPixcelCode(ctx = null) {}
export function getToken(ctx = null) {}

export function getUserMe(ctx = null) {}

export function removeToken() {}

export function removeUserMe() {}

export const unixTime = () => {
  const ts = new Date();
  return ts.toDateString();
};
