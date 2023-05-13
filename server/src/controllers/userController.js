import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken"
import bcryptjs from "bcrypt";

export const registerController = async (req, res) => {
    try {
      const { firstName, surname, email, username,department, designation, locationId, userId , password} = req.body;
     
      //check user
      const exisitingUser = await userModel.findOne({ email });
      //exisiting user
      if (exisitingUser) {
        return res.status(200).send({
          success: false,
          message: "Already Register please login",
        });
      }
      //register user
      const hashedPassword = await bcryptjs.hash(password,10);

      // const hashedPassword = await hashPassword(password);
      //save
      const user = new userModel({firstName, surname, email, username, department, designation, locationId, userId , password: hashedPassword}) //creating object
      const saveData = user.save(); //save data in db
  
      res.status(201).send({
        success: true,
        message: "User Register Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Errro in Registeration",
        error,
      });
    }
  };


//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    //validation
    if (!username || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid username or password",
      });
    }
    //check user
    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "username is not registerd",
      });
    }
    const match = await bcryptjs.compare(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {expiresIn: "7d",});

    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        firstName: user.firstName,
        surname: user.surname,
        username: user.username,
        _id: user._id,
        email: user.email,
        userId: user._id,
        locationId: user.locationId
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//get all user
export const getUserController = async (req, res)=>{
  try{
    const data = await userModel.find({})
    res.status(200).send({
      success: true,
      data: data,
      message: "All User List"
    })
  }
  catch(error){
    res.status(400).send({
      success: false,
      error
    }
    )
  }
}

