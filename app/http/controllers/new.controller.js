const { createLinkForFiles, createUrlImage } = require("../../modules/functions")
const fs = require("fs")
const path = require("path")

class NewController {

   async uploadImage(req,res,next) {
        try {
            const url = req.file.path.replace(/[\\\\]/gm, "/")
            res.status(200).json({
                status:200,
                message:"آپلود انجام شد",
                success:true,
                data:url
            })
        } catch (error) {
            next(error)
        }
    }

   async deleteImage(req,res,next){
       try {      
           const {urlImage} = req.body;    
           const baseUrl = createUrlImage(req);
           const imageUrl = urlImage.replace(/[\/\/]/gm,"\\") 
           const fullUrl = baseUrl+imageUrl;
            fs.unlinkSync(fullUrl) 
           return res.status(200).json({
               status:200,
               success:true,
           })  
           
       } catch (error) {
           next(error)
       }
   }
}

module.exports = {
    NewController : new NewController()
}