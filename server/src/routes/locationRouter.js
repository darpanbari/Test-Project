import express from "express";
import {registerLoactionController, getAllLocationsController} from "../controllers/locationController.js";

//router object
const router = express.Router();

//REGISTER Location
router.post('/register-location', registerLoactionController);

//Get location
router.get('/all-locations', getAllLocationsController);


export default router;