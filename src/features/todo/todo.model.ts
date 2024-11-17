import { v4 } from "uuid";
import { t } from "elysia";
import { model, Schema } from "mongoose";

export const TodoSchema = t.Object({
	todoId: t.String(),
	title: t.String(),
	description: t.Optional(t.String()),
});

export type TodoType = typeof TodoSchema.static;

const Todo = model<TodoType>("todo", new Schema({
	todoId: {
		type: String,
		default: () => v4()
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		default: ""
	}
}));

export default Todo;