import Elysia, { t } from "elysia";
import Todo, { TodoSchema } from "./todo.model";

const todoApi = new Elysia({ prefix: "/todo" })
	.get("/", async () => {
		const todos = await Todo.find().lean().exec();
		return todos;
	})

	.post("/", async ({ body }) => {
		await Todo.create(body);
	}, {
		body: t.Pick(TodoSchema, ["title", "description"])
	})
;

export default todoApi;