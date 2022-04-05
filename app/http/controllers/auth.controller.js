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
    saveNumber(req,res,next){
        try {
            console.log(req.body)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    AuthController : new AuthController()
}