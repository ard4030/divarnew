const axios = require('axios');
const { default: mongoose } = require('mongoose');
const qs = require('qs');
const { PayModel } = require('../../models/pay');
const {ProductModel} = require('../../models/product')

class PayController {

    async payProduct(req,res,next){
        try {
            const {mobile,title,_id} = req.body; 

            const orderId = Date.now();
            const amount = "1000";

            var data = qs.stringify({
                'api_key': 'd167de99-cc29-4fdf-8955-830cf5ca67bd',
                'amount': amount,
                'order_id': orderId,
                'customer_phone': mobile,
                'custom_json_fields': `{ "productName":${title} , "id":${_id} }`,
                'callback_uri': 'https://novin-code.ir/payok' 
            });

             var config = {
                method: 'post',
                url: 'https://nextpay.org/nx/gateway/token',
                data : data
            };   

           await axios(config)
                .then(async function (response) {
                // console.log(JSON.stringify(response.data));
                if(response.data.code === -1) {
                    const result = await PayModel.create({
                        title:title,
                        transId:response.data.trans_id,
                        orderId:orderId,
                        mobile:mobile,
                        paydesk:"در انتظار پرداخت",
                        productId : _id
                    })
                    if(!result) throw {status:400,message:"خطا"}
                   return res.status(200).json({
                       status:200,
                       success:true,
                       data:response.data.trans_id
                   })
                }
                })
                .catch(function (error) {
                    return res.status(200).json({
                        status:200,
                        success:false,
                        message:error
                    })
                });
                

        } catch (error) {
            next(error)
        }
    }

    async payVerify(req,res,next){
        try {
            const {amount,trans_id} = req.body;
            var data = qs.stringify({
                'api_key': 'd167de99-cc29-4fdf-8955-830cf5ca67bd',
                'amount': amount,
                'trans_id': trans_id
            });

            var config = {
                method: 'post',
                url: 'https://nextpay.org/nx/gateway/verify',
                data : data
            };

          await axios(config)
                .then(async function (response) {       
                    if(response.data.code == 0){                 
                        const result = await PayModel.updateOne({transId : trans_id},{
                            $set : {
                                card : response.data.card_holder,
                                payMob : response.data.customer_phone,
                                shaparak : response.data.Shaparak_Ref_Id,
                                paystatus : "2",
                                paydesk : "پرداخت شده",
                                amount:amount
                                }
                            });          
                        if(!result) throw {status:400,message:"خطا"} 
                        const result1 = await PayModel.findOne({transId : trans_id})
                         await ProductModel.updateOne({_id : result1.productId} , {$set : {status:"7"}})
                        return res.status(200).json({
                            status:200,
                            success:true,
                            data:response.data
                        })
            
                    }else{
                        await PayModel.updateOne({transId : trans_id},{
                            $set : {
                                paystatus : "3",
                                paydesk : "ناموفق"
                                }
                            }); 
                        return res.status(200).json({
                            status:400,
                            success:false,
                            message:"خطا"
                        })
                    }
                })
                

        } catch (error) {
            next(error)
        }
    }

    async getPays(req,res,next){
        try {
            const {mobile} = req.body;
            const result = await PayModel.find({mobile})
            if(!result) throw {status:400,message:"خطا در دریافت"}
            return res.status(200).json({
                status:200,
                success:true,
                data:result
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    PayController : new PayController()
}