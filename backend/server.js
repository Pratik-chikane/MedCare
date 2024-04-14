const server = require("./app");
const routes = require("./routes/routes");

server.use("/api/v1", routes.router);

server.listen(process.env.BACKEND_PORT, () => {
  console.log("Server started");
});
