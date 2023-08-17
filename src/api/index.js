import { API_URLS, LOCALSTORAGE_TOKEN_KEY, getFormBody } from "../utils";

const customFetch = async (url, { body, ...customConfig }) => {
  const token = window.localStorage.getItem("access_token");

  const headers = {
    "content-type": "application/x-www-form-urlencoded",
    // Accept: "application/json",
  };

  console.log(url);

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = getFormBody(body);
    console.log(config.body);
  }

  try {
    const response = await fetch(url, config);
    // console.log(response);

    const data = await response.json();
    console.log(data);

    if (data.success) {
      return {
        data: data,
        success: true,
      };
    }

    throw new Error(data.message);
  } catch (error) {
    // console.error("error");
    return {
      message: error.message,
      success: false,
    };
  }
};

// export const getPosts = (page = 1, limit = 5) => {
//   return customFetch(API_URLS.posts(page, limit), {
//     method: 'GET',
//   });
// };

export const login = (email, password) => {
  return customFetch(API_URLS.login, {
    method: "POST",
    body: { email, password },
  });
};

export const getUser = () => {
  return customFetch(API_URLS.getUser, {
    method: "GET",
  });
};

export const logout = () => {
  return customFetch(API_URLS.logout, {
    method: "GET",
  });
};

export const signup = (email, password, confirmPassword, fullName, city) => {
  return customFetch(API_URLS.signup, {
    method: "POST",
    body: { email, password, confirmPassword, fullName, city },
  });
};

export const sendOtp = (email) => {
  return customFetch(API_URLS.sendOtp, {
    body: { email },
  });
};

export const otpVerify = (email, OTP) => {
  return customFetch(API_URLS.otpVerify, {
    method: "POST",
    body: { email, OTP },
  });
};

export const forgetPassword = (email, password, confirmPassword) => {
  return customFetch(API_URLS.forgetPassword, {
    method: "POST",
    body: { email, confirmPassword, password },
  });
};

export const sendMsg = (msg, phone) => {
  return customFetch(API_URLS.sendMsg, {
    method: "POST",
    body: { msg, phone },
  });
};
