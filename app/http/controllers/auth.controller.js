

const { UserModel } = require("../../models/auth");
const { tokenGenerator } = require("../../modules/functions");
const { sendingSms } = require("../../modules/sendSms")

class AuthController {
    smsSending(req,res,next){
            
            
           try {
            console.log(req.body)
          /* const rndCode = Math.floor(11111 + Math.random()*(99999 + 1 - 11111))
          const resultSms = sendingSms(req.body,rndCode);
          if(resultSms.success == false) throw {status:400,message:"خطا در ارسال اس ام اس"}  
          return res.status(200).json({
              status:200,
              success:true,
              message:"پیامک با موفقیت ارسال شد",
              code :rndCode
          }) */
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
                console.log(token)
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

            return res.status(200).json({
                status:200,
                success:true,
                message : "شما با موفقیت وارد شدید!",
                token1 
            })
            
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    AuthController : new AuthController()
}