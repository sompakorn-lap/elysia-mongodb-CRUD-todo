import { connect } from "mongoose";

async function connectDatabase() {
	try {
		await connect(process.env.MONGODB_URI as string);
		console.log("connect database successfully");
	}
	catch (err) { console.error(err); }
}

export default connectDatabase;