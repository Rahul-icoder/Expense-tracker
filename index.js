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

// if(process.env.NODE_ENV === "production"){
// 	console.log(process.env.NODE_ENV)
// 	app.use(express.static('/client/build'))
// }

app.use("/auth", auth);
app.use('/api',transaction)

app.use(express.static(path.join(__dirname, './client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build'))
})

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
