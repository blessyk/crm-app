const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
{
  name:{
    type:String,
    required:true
  },

  email:{
    type:String,
    required:true
  },

  phone:{
    type:String
  },

  company:{
    type:String
  },

  status:{
    type:String,
    enum:["Lead","Customer"],
    default:"Lead"
  }
},
{
  timestamps:true
}
);

module.exports = mongoose.model("Customer", customerSchema);