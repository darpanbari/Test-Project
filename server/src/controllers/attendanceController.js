import userModel from "../models/userModel.js";
import attendanceModel from "../models/attendanceModel.js";
import mongoose from "mongoose";

export const addAttendanceController = async (req, res) => {
  try {
    const { userId, date, status } = req.body;
    const attendance = new attendanceModel({
      userId,
      date,
      status,
      employeeId: req.user._id,
      locationId: req.user.locationId,
    });
    const result = await attendance.save();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to add attendance" });
  }
};

export const getAttendanceController = async (req, res) => {
  try {
    const fromDate = new Date(req.params.fromDate);
    const toDate = new Date(req.params.toDate);
    const locationId = new mongoose.Types.ObjectId(req.params.locationId);

    const users = await attendanceModel.aggregate([
      {
        $match: {
          locationId: locationId,
        },
      },
      
      {
        $sort: {
          userId: 1,
          date: 1,
        },
      },
     
      {
        $lookup: {
          from: "attendance",
          localField: "_id",
          foreignField: "employeeId",
          pipeline: [
            {
              $match: {
                date: {
                  $gte: fromDate,
                  $lte: toDate
                }
              }
            }
          ],
          as: "attendance"
        }
      },
       {
          $group: {
            _id: "$userId",
            userFullName: {
              $first: "$userFullName",
            },
            Department: {
              $first: "$Department",
            },
            Designation: {
              $first: "$Designation",
            },
            employeeId: {
              $first: "$employeeId",
            },
            Location: {
              $first: "$Location",
            },
            locationId: {
              $first: "$locationId",
            },
            userAttendance: {
              $push: {
                date: {$dateToString: {
                  format: "%d/%m/%Y",
                  date: "$Date"
                }},
                createdAs: "$createdAs",
              },
            },
          },
        },
      
    ]);
    console.log(users);
    console.log('fromDate:', fromDate)
   
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
