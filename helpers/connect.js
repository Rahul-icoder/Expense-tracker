const mongoose = require("mongoose");

const auth = "Auth";

mongoose
	.connect(process.env.MONGO_URI, {
		dbName: expense,
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() => {
		console.log("MongoDB connected");
	});

