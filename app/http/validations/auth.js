
const {body} = require("express-validator");  

function numberValidator(){

     return [
         body("mobile").custom((value, {req,res}) => {
             if(req.body.mobile){
                const usernameRegex = /09(0[0-9]|1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/gi
                if(usernameRegex.test(req.body.mobile)){
                    return true
                }
                  throw "شماره موبایل صحیح نیست"  
            }else{
                throw "شماره موبایل نمیتواند خالی باشد"
            }
        }) 
    ] 
}

module.exports = {
    numberValidator
}