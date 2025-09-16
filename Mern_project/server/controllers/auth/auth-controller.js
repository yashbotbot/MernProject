const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require ("../../models/user" )



//register
  const registerUser = async(req ,res)=>{
  console.log(req.body);
    
  const {userName,email,password}=req.body;

  try{

    const checkUser = await User.findOne({email});

    if(checkUser) return res.json({success : false  , message : 'User already register this email! please try register with another email'});


    const hashPassword = await bcrypt.hash(password,12);
    const newUser= new User({
        userName,email,password:hashPassword
    })

    await newUser.save()


    res.status(200).json({
        success:true,
        message:"Registrated Successfull"
    })

  }
  catch(e){
    console.log(e);
    res.status(500).json({
        success:false,
        message:'Some error occur'
    })
  }



};




//login

const login =async(req,res)=>{

   const {email,password}=req.body;

  
      try{

      }
  catch(e){
    console.log(e);
    res.status(500).json({
        success:false,
        message:'Some error occur'
    })
  }z
};



//logout





//auth middleware



module.exports = {registerUser};