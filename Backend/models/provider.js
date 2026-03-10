const mongoose = require("mongoose")

const ProviderSchema = new mongoose.Schema({

name:{
type:String,
required:true
},

userId:{
type:String,
required:true
},

serviceId:{
type:String,
default:""
},

location:{
type:String,
default:""
},

phone:{
type:String,
default:""
}

})

module.exports = mongoose.model("Provider",ProviderSchema)