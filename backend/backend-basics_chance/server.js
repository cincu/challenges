import { createServer } from "node:http";
import Chance from "chance";

let chance = new Chance();
let name = chance.name();
let age = chance.age();
let profession = chance.profession();

export const server = createServer((request, response) => {
  if (request.url === "/chance") {
    response.statusCode = 200;
    response.end(
      `Hello my name is ${name}, i am ${age} years old, i work as a ${profession}`
    );
  }
});
