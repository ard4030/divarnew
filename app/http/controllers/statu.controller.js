const { StatuModel } = require("../../models/statu");

class StatuController {
   async getAllStatus(req,res,next){
       try {
        const result = await StatuModel.find({})
        res.status(200).json({
            status:200,
            message:"اطلاعات دریافت شد",
            success:true,
            data:result
        })
       } catch (error) {
           next(error)
       }
    }

/*     async getCityById(req,res,next){
        try {
         const {parentID} = req.body
         const result = await CategoryModel.findOne({_id:parentID})
         console.log(result)
         
        } catch (error) {
            next(error)
        }
     } */

    async createStatu(req,res,next){
        try {
            const {title} = req.body;
            let result = await StatuModel.create({title})
            if(!result) throw {status:400,message:"افزودن وضعیت به مشکل مواجه شد"}
            return res.status(200).json({
                status:200,
                success:true,
                message:"وضعیت  با موفقیت ایجاد شد"
            })  
        } catch (error) {
            next(error)
        }
    }


}

module.exports = {
    StatuController : new StatuController()
}