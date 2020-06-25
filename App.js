const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

require("./routes/userLocationRoutes")(app);

app.get("/", (req, res) => {
  let introPage =
    "<h1>Hello</h1>" +
    "<h2>Welcome to my Api</h2>" +
    "<p1>Apologies for the poor design. </p1>" +
    "<br>" +
    "<p1>The route to calculate users that are within the 50 mile radius is: http://localhost:5000/api/users/london</p1>" +
    "<br>" +
    "<br>" +
    "<p2>Below lists the dependencies I used for this project</p2>" +
    "<ul>" +
    "<li>express</li>" +
    "<li>axios</li>" +
    "<li>jest (For Testing)</li>" +
    "</ul>";

  res.send(introPage);
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
