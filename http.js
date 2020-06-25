const axios = require("axios");

const fetchAllUsersData = async () => {
  return axios
    .get("https://bpdts-test-app.herokuapp.com/users")
    .catch((errorMessage) => console.log(errorMessage))
    .then((response) => {
      return response;
    });
};

exports.fetchAllUsersData = fetchAllUsersData;
