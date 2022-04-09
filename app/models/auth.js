const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : {type : String},
    birs : {type:String},
    city : {type:String},
    address : {type:String},
    mobile : {type : String, required : true, unique : true},
    roles : {type : [String], default : ["USER"]},
    profile_image : {type : String, required : false},
    token : {type : String, default : ""},
    bookmarks : {type : [String], default : []},
}, {
    timestamps : true
});
const UserModel = mongoose.model("user", UserSchema);
module.exports = {
    UserModel
}