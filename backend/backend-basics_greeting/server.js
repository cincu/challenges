import { createServer } from "node:http";

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.write("hallo welt");
  response.end();
});
