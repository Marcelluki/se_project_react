const baseUrl = "http://localhost:3001";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export const getClothingItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
  }).then(checkResponse);
};

export const addItem = ({ name, weather, imageUrl }) => {
  return fetch(`${baseUrl}/items`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  }).then(checkResponse);
};

export const removeItem = ({ _id }) => {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then(checkResponse);
};
