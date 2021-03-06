

const { UserModel } = require("../../models/auth");
const { ProductModel } = require("../../models/product");
const { tokenGenerator } = require("../../modules/functions");
const { sendingSms } = require("../../modules/sendSms")

class AuthController {
    smsSending(req,res,next){

           try {
          const rndCode = Math.floor(11111 + Math.random()*(99999 + 1 - 11111))
          const resultSms = sendingSms(req.body,rndCode);
          if(resultSms.success == false) throw {status:400,message:"خطا در ارسال اس ام اس"}  
          return res.status(200).json({
              status:200,
              success:true,
              message:"پیامک با موفقیت ارسال شد",
              code :rndCode
          }) 
        } catch (error) {
            next(error)
        }  
    }

    async saveBookmark(req,res,next){
        try {
            const {productId,userId} = req.body;
            /*  await UserModel.updateOne({_id:userId},{$push :{bookmarks:productId}}*/
            const result = await UserModel.findOne({_id:userId})
            if(!result) throw {status:400,message:"خطا در دریافت"}
            const isBookmark = result.bookmarks.includes(productId)
            return res.status(200).json({
                status:200,
                success:true,
                data : isBookmark
            })
            
        } catch (error) {
            next(error)
        }
    }

    async toggleBookmark(req,res,next){
        try {
            const {productId,userId} = req.body;
            const result = await UserModel.findOne({_id:userId});
            if(!result) throw {status:400,message:"خطا در دریافت"}
            const isBookmark = result.bookmarks.includes(productId);
            if(isBookmark){
                await UserModel.updateOne({_id:userId},{$pull :{bookmarks:productId}})
            }else{
                await UserModel.updateOne({_id:userId},{$push :{bookmarks:productId}})
            } 

            return res.status(200).json({
                status:200,
                success:true
            })



        } catch (error) {
            next(error)
        }
    }

   async saveNumber(req,res,next){
        try {
            const {mobile} = req.body;
            const result = await UserModel.findOne({mobile});
            let token1 = "";
            if(!result){
                await UserModel.create({mobile})
                const token = tokenGenerator({mobile});
                const result = await UserModel.findOne({mobile});
                result.token = token;
                token1 = token;
                await result.save()
            }else{
                const token = tokenGenerator({mobile});
                result.token = token;
                await result.save()
                token1 = token;
            } 
            const result1 = await UserModel.findOne({mobile});
            
            return res.status(200).json({
                status:200,
                success:true,
                message : "شما با موفقیت وارد شدید!",
                data : result1 
            })
            
        } catch (error) {
            next(error)
        }
    }

    checkLog(req,res,next){
        try {
            res.status(200).json({
                status:200,
                success:true,
                message:"با موفقیت وارد شدید",
                data:req.mobile
            })
        } catch (error) {
            next(error)
        }
    }

    async getUserProfile(req,res,next){
        try {
            const {mobile} = req.body;
            const result = await UserModel.findOne({mobile})
            if(!result) throw "عملیات با خطا مواجه شد";
            res.status(200).json({
                status:200,
                success:true,
                data:result
            })
        } catch (error) {
            next(error)
        }
    }

    async updateProfile(req,res,next){
        try {
            const{name,birs,city,address,mobile} = req.body;
            const result = await UserModel.updateOne({mobile},{$set : {name,birs,city,address}})
            if(!result) throw "آپدیت با مشکل مواجه شد"
            return res.status(200).json({
                status:200,
                success:true
            })
        } catch (error) {
            next(error)
        }
    }
    
    async getBookmarks(req,res,next){
        try {
            const result = await UserModel.findOne({_id:req.mobile._id})
            if(!result) throw {status:400,message:"خطا در انجام عملیات"}
            const result2 = await ProductModel.find({_id:{$in:result.bookmarks}})
            if(!result) throw {status:400,message:"خطا در انجام عملیات"}
            return res.status(200).json({
                status:200,
                success:true,
                data:result2
            })
            
            
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    AuthController : new AuthController()
}