const { ProductModel } = require("../../models/product");

class ProductController {
        getAllProduct(req,res,next){
           try {
            /* const {title,category,statu,city,type,offset} = req.body; */
            
           } catch (error) {
               next(error)
           }
        }

        async createProduct(req,res,next){
            try {
                const {title,category,city,price,typee,statu,mobile,description,images,timee,id} = req.body;
                const result = await ProductModel.create({
                    title,category,city,price,typee,statu,mobile,description,images,timee,userCradit:id
                })
                if(!result) throw "مشکل در ایجاد آگهی . لطفا مجدد تلاش نمایید";
                return res.status(200).json({
                    status:200,
                    success:true,
                    message:"آگهی شما با موفقیت ثبت شد"
                })
            } catch (error) {
                next(error)
            }
        }

        async getProduct(req,res,next){
            try {
                const {title,category,statu,city,typee,offset} = req.body;
                const result = await ProductModel.find({
                    title: {'$regex': title},
                    category: {'$regex': category},
                    statu: {'$regex': statu},
                    city: {'$regex': city},
                    typee: {'$regex': typee},
                    offset: {'$regex': offset},
                }).skip(offset).limit(12);
                return res.status(200).json({
                   
                   result
                })

            } catch (error) {
                next(error)
            }
        }
}

module.exports = {
    ProductController : new ProductController()
}