const { TypeModel } = require("../../models/typeProd");


class TypeProdController {
   async getAllTypes(req,res,next){
       try {
        const result = await TypeModel.find({})
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

    async createType(req,res,next){
        try {
            const {title} = req.body;
            let result = await TypeModel.create({title})
            if(!result) throw {status:400,message:"افزودن نوع به مشکل مواجه شد"}
            return res.status(200).json({
                status:200,
                success:true,
                message:"نوع  با موفقیت ایجاد شد"
            })  
        } catch (error) {
            next(error)
        }
    }


}

module.exports = {
    TypeProdController : new TypeProdController()
}