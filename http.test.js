const { fetchAllUsersData } = require("./http");

test("Data returned from server should be a list of users ", () => {
  fetchAllUsersData().then((usersRetrieved) => {
    let users = usersRetrieved[2];
    let userModel = {
      id: 1,
      first_name: "Merry",
      last_name: "Poppins",
      email: "mpoppins0@squidoo.com",
      ip_address: ".57.232.111",
      latitude: 34.003135,
      longitude: -117.7228641,
    };

    expect(users).toMatchObject(userModel);
  });
});
