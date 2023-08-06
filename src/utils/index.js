export * from "./constents";

export const getFormBody = (params) => {
  let formBody = [];
  console.log(params);

  for (let key in params) {
    let encodedKey = encodeURIComponent(key); // 'user name' => 'user%20name
    let encodedValue = encodeURIComponent(params[key]); // 'akash 123' => 'akash%2020123'
    // console.log(encodedValue);

    formBody.push(encodedKey + "=" + encodedValue);
  }

  return formBody.join("&"); // 'username=akash&password=123123'
};
