const http = require("http");
const app = require("./backend/routes/app");

const port = process.env.PORT || 3000;

app.set("port", port);

const server = http.createServer(app);

server.listen(port);
