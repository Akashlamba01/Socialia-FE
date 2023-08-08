export * from "./constents";

export const setItemInLocalStorage = (key, value) => {
  if (!key || !value) {
    return console.error("can not store in local storage!");
  }
  // console.log(typeof value);
  const sotreValue = typeof value === String ? JSON.stringify(value) : value;
  return localStorage.setItem(key, sotreValue);
};

export const getItemInLocalStorage = (key) => {
  if (!key) {
    return console.error("con not get LS!");
  }
  return localStorage.getItem(key);
};

export const removeItemInLocalStorage = (key) => {
  if (!key) {
    return console.error("con not remove LS!");
  }
  return localStorage.removeItem(key);
};

export const getFormBody = (params) => {
  let formBody = [];

  for (let key in params) {
    let encodedKey = encodeURIComponent(key); // 'user name' => 'user%20name
    let encodedValue = encodeURIComponent(params[key]); // 'akash 123' => 'akash%2020123'

    // console.log(encodedValue);
    formBody.push(encodedKey + "=" + encodedValue);
  }

  return formBody.join("&"); // 'username=akash&password=123123'
};
