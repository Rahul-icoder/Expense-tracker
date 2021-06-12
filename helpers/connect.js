const mongoose = require("mongoose");

const auth = "Auth";

mongoose
	.connect(process.env.MONGO_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() => {
		console.log("MongoDB connected");
	});

