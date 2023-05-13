import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import cors from "cors";
import userRoutes from "./src/routes/userRouter.js"
import locationRoutes from "./src/routes/locationRouter.js"
import bodyParser from "body-parser";
import attendenceRoutes from "./src/routes/attendanceRouter.js"

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/user", userRoutes);
app.use("/location", locationRoutes);
app.use("/attendance", attendenceRoutes)


//PORT
const PORT = 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${PORT}`
  );
});

