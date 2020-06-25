const { isUserInLondonRaduis } = require("../helper");
const { fetchAllUsersData } = require("../http");

module.exports = (app) => {
  app.get("/api/users/london", async (req, res) => {
    return fetchAllUsersData()
      .then(({ data }) => {
        let londonUsers = [];
        data.forEach(
          ({
            latitude,
            longitude,
            first_name,
            last_name,
            email,
            id,
            ip_address,
          }) => {
            if (isUserInLondonRaduis(latitude, longitude)) {
              const user = {
                Id: id,

                "First Name": first_name,
                "Last Name": last_name,
                Email: email,
                "IP Address": ip_address,
              };
              londonUsers.push(user);
            }
          }
        );

        res.send(londonUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
