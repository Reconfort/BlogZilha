import express  from "express";
// const {} = require("../middleware/auth-middleware");
import {validationRules, validate }  from "../validations/comment-validator";
import { addOne, removeOne } from "../controllers/comments-controller";
const router = express.Router();


router.post("/comments", validationRules(), validate, async (req, res) => {    
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/CommentModel" }
    } */  
    await addOne(req, res);
});


router.delete("/comments/:id", async (req, res) => {    
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    */  
    await removeOne(req, res);
});

export default router;