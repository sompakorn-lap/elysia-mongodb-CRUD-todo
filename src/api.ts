import Elysia from "elysia";
import todoApi from "./features/todo/todo.api";

const api = new Elysia({ prefix: "/api" })
	.use(todoApi)
;

export default api;