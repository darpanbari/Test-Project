import express from "express";
import {getAttendanceController, addAttendanceController} from "../controllers/attendanceController.js";

//router object
const router = express.Router();

router.post('/add-attendance', addAttendanceController);

router.get('/monthly-attendance/:fromDate/:toDate/:locationId', getAttendanceController);

export default router;