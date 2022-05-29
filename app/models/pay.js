const mongoose = require("mongoose");
const { integer } = require("sharp/lib/is");

const PaySchema = new mongoose.Schema({
    title : {type : String,required : true},
    transId : {type:String},
    orderId : {type:String},
    mobile : {type:String , default:""},
    paystatus : {type:String,default:"1"},
    paydesk : {type:String,default:"پرداخت نشده"},
    card : {type:String , default:""},
    shaparak : {type : String , default:""},
    productId : {type:String},
    amount : {type:Number , default:0}
}, {
    timestamps : true
});
const PayModel = mongoose.model("payment", PaySchema);
module.exports = {
    PayModel
}