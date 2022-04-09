const { UserModel } = require("../../models/auth");
const { verifyJwtToken } = require("../../modules/functions");

const checkLogin = async (req,res,next) => {

    try {
        let authError = {status:401,message:"لطفا وارد شوید"}
        const authorization = req?.headers?.authorization;
        if(!authorization) throw authError;
        let token = authorization.split(" ")?.[1];
        if(!token) throw authError; 
        const result = verifyJwtToken(token);
        const {mobile} = result;
        const user = await UserModel.findOne({mobile})
        if(!user) throw authError;
        req.mobile = user;
        return(next())
    } catch (error) {
        next(error)
    }
}

module.exports = {
    checkLogin
}