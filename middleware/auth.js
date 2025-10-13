export const protect = (req,res,next)=>{
    try{
        const authToken = req.headers.authorization
    console.log(authToken)
    if(!authToken){
        res.status(400).send({msg:'Token not found'})
    }else{
        next()
    }
}catch(error){
    res.status(500).send({mgs:"Server error"})
}
}

export const adminOnly = (req,res,next)=>{
    if(req.user.role != "Admin"){
        res.status(403).send({msg:"You are not admin"})
    }

     next()
}