import { Elysia } from "elysia";
import connectDatabase from "./libs/mongoose/connectDatabase";
import api from "./api";

connectDatabase();

const app = new Elysia()
  .use(api)
  .get("/", () => "Hello Elysia")
  .listen(3000)
;

console.log(`running at ${app.server?.hostname}:${app.server?.port}`);
