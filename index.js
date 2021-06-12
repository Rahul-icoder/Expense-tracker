const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("./helpers/connect");
const auth = require("./routes/auth_routes");
const transaction = require("./routes/transaction");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require('path')
require('dotenv').config();


const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(
	cors({
		credentials: true,
		origin: ["http://localhost:3000"],
	})
);
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use("/auth", auth);
app.use('/api',transaction)
app.use(async (req, res, next) => {
	next(createError.NotFound());
});

app.use((err, req, res, next) => {
	res.status = req.status || 500;
	res.send({
		error: {
			status: err.status || 500,
			message: err.message,
		},
	});
});

app.listen(port, () => {
	console.log(`listing at port ${port}`);
});
