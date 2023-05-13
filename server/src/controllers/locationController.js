import locationModel from "../models/locationModel.js";

// register location
export const registerLoactionController = async (req, res) => {
    try {
      const { locationName, locationCode } = req.body;
  
      const location = new locationModel({
        locationName,
        locationCode,
      });
  
      await location.save();
  
      res.status(201).json({
        status: 'success',
        message: 'Location registered successfully',
        data: {
          location,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'error',
        message: err.message,
      });
    }
  };

// get locations
  export const getAllLocationsController = async (req, res) => {
    try {
      const locations = await locationModel.find({});
  
      res.status(200).json({
        status: 'success',
        message: 'Locations retrieved successfully',
        data: locations
      });
    } catch (err) {
      res.status(400).json({
        status: 'error',
        message: err.message,
      });
    }
  };