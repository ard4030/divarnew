const path = require("path")
const jwt = require("jsonwebtoken");
const fs = require("fs")

function tokenGenerator(payload){
    const token = jwt.sign(payload,process.env.SECRET_KEY,{expiresIn : "3 days"})
    return token;
}

function verifyJwtToken(token){
    const result = jwt.verify(token,process.env.SECRET_KEY)
    if(!result?.mobile) throw {status:401,message:"لطفا وارد شوید"}
    return result
}

function createUploadPath(mobile) {
    const userUploadId = mobile+""
    const uploadPath = path.join(__dirname,"..","..","public","imagUpload",userUploadId);
    fs.mkdirSync(uploadPath,{recursive:true});
    return path.join("public","imagUpload",userUploadId)
}

function createLinkForFiles(fileAddress, req){
    return fileAddress? (req.protocol + "://" + req.get("host")+ "/" + (fileAddress.replace(/[\\\\]/gm, "/"))) : undefined
}

function createUrlImage(req) {
     const publicUrl = path.join(__dirname,"..","..") + "\\" 
     return publicUrl; 
}


module.exports = {
    tokenGenerator,
    verifyJwtToken,
    createUploadPath,
    createLinkForFiles,
    createUrlImage
}