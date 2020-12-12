const express = require("express");
const app = express();

app.use(express.static("public"));

// home Route:
app.get("/home", (request, response, next) =>
  response.sendFile(__dirname + "/views/home.html")
);

// about route:
app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/about.html")
);

// about works:
app.get("/works", (request, response, next) =>
  response.sendFile(__dirname + "/views/works.html")
);

// about photos:
app.get("/photos", (request, response, next) =>
  response.sendFile(__dirname + "/views/photos.html")
);

app.listen(3000, () => console.log("My first app listening on port 3000! "));

