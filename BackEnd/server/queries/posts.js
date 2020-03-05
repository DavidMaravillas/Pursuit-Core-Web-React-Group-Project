const db = require("../db/index")



const getAllPosts = async (req, res, next) => {
    try{

        let posts = await db.any("SELECT * FROM posts") 
        res.status(200).json({
            status: "Success",
            message: "got all posts",
            body: posts,

         })

    }catch(error){
        res.status(404).json({
            status: "Failed",
            message: error
         })
        
    }
}

module.exports = { getAllPosts }