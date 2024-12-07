import express from "express";

const server = express();
const PORT = 8368;

server.get("/", (request, response) => {
  response.send("hello");
});

server.listen(PORT, () => {
  console.log(`hhtp:/localhost:${PORT} server ajillaj ehellee`);
});
