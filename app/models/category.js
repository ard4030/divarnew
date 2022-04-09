const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    title : {type : String,required : true},
    parent : {type : String,default:"0" },
}, {
    timestamps : true
});
const CategoryModel = mongoose.model("category", CategorySchema);
module.exports = {
    CategoryModel
}