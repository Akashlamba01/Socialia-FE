import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from "../utils";

const customFetch = async (url, { body, ...customConfig }) => {
  // const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

  const headers = {
    "content-type": "application/json",
    Accept: "application/json",
  };

  console.log(url);

  // if (token) {
  //   headers.Authorization = `Bearer ${token}`;
  // }

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);
    console.log(response);

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
    console.error("error");
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
