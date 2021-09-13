import { PlainObject } from 'types';
export const getParams = <T extends PlainObject = any>() => {
  const searchStr = window.location.search;
  const searchParams = new URLSearchParams(searchStr);
  return Object.fromEntries(searchParams.entries()) as unknown as T;
};
