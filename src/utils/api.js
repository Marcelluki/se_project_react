const baseUrl = "http://localhost:3001";

export const getClothingItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
