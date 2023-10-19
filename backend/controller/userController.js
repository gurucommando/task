const { postUser, postAddress, postNumber, pdfDownload } = require("../modal/signupModal");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// crete new user account
const postUsercontroller = async(req,res)=>{
    const {firstName,lastName}=req.body;
    const temp = {firstName,lastName}
    console.log(req.body,"temp") 
    const data =await postUser(temp);
    res.send(data)
}

// crete new user address
const postAdderssController = async(req,res)=>{
    const {address,uuid}=req.body;
    const objectId = new mongoose.Types.ObjectId(uuid);
    const temp = {
      address,
      uuid:objectId
    }
    console.log(req.body,"temp") 
    const data =await postAddress(temp);
    res.send(data)
}
 //  create new user number
const postNumberController = async (req, res) => {
    const { number, uuid } = req.body;
    const objectId = new mongoose.Types.ObjectId(uuid);
    const temp = {
      number,
      uuid: objectId,
    };
    const data = await postNumber(temp);
    res.send(data);
  };

  // get all user data  
  const getUsercontroller = async (req, res) => {
      const data = await pdfDownload();
     res.send({ data:data,message:"Success"});
    
  };

module.exports = {postUsercontroller,postAdderssController,postNumberController,getUsercontroller}