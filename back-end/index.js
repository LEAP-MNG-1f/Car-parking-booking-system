import express from "express";
import cors from "cors";

const server = express();
const PORT = 8368;

server.use(cors());

server.get("/", (request, response) => {
  response.send(["bille", "dashka"]);
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} server ajillaj ehellee`);
});
