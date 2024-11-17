import { Elysia } from "elysia";
import connectDatabase from "./libs/mongoose/connectDatabase";

connectDatabase();

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .listen(3000)
;

console.log(`running at ${app.server?.hostname}:${app.server?.port}`);
