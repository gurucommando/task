const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;
 
// create new user schema
const addUser = mongoose.Schema(
  {
    firstName: { type: String },
    lastname: { type: String },
  },
  { timestamps: true, strict: false }
);

// create address  schema
const addAddress = mongoose.Schema(
  {
    address: { type: String },
    uuid: { type: ObjectId },
  },
  { timestamps: true, strict: false }
);

// create number schema
const addNumber = mongoose.Schema(
  {
    number: { type: String },
    uuid: { type: ObjectId },
  },
  { timestamps: true, strict: false }
);

const userTable = mongoose.model("users", addUser); // connect to user table
const numberTable = mongoose.model("numbertable", addNumber); // connect to number table
const addressTable = mongoose.model("addresstable", addAddress); // connect to address table

// create user
const postUser = async (req) => {
  try {
    const dt = await userTable.create(req); 
    return { dt: dt, status: 200, message: "success" };
  } catch (error) {
    return { status: 400, message: error.message };
  }
};

// create address
const postAddress = async (req) => {
  try {
    const dt = await addressTable.create(req); 
    return { dt: dt, status: 200, message: "success" };
  } catch (error) {
    return { status: 400, message: error.message };
  }
};

 // create number 
const postNumber = async (req) => {
    console.log(req,"post")
  try {
    const dt = await numberTable.create(req); 
    return { dt: dt, status: 200, message: "success" };
  } catch (error) {
    return { status: 400, message: error.message };
  }
};

// get all user data
const pdfDownload = async (req, res) => {
  try {
    const data = await userTable.aggregate([
      {
        $lookup: {
          from: "numbertables",
          localField: '_id',
          foreignField: 'uuid',
          as: 'number'
        },
      },
      {
        $lookup: {
          from: "addresstables",
          localField: "_id",
          foreignField: "uuid",
          as: "address"
        },
      },
      {
        $unwind: "$address"
      },
      {
        $unwind: "$number"
      },
      {
        $project: {
          firstName: 1,
          lastName: 1,
          address: 1,
          number: 1,
        },
      },
    ]).exec();
  
    return { data, message: 'Success' };
  } catch (error) {
    return { status :404, message:error}
  }
  };
  
module.exports = { postUser, pdfDownload,postAddress,postNumber};
