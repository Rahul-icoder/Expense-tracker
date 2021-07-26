const mongoose = require("mongoose");

const auth = "Auth";
// process.env.MONGO_URI
mongoose
	.connect('mongodb://localhost:27017', {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() => {
		console.log("MongoDB connected");
	});

