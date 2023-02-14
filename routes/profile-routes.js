import express from "express";
const router = express.Router();
import { ensureAuthenticated } from "../middleware/auth-middleware";
import {validationRules, validate }  from "../validations/update-user-validator";
import { getOne, updateOne } from "../controllers/profile-controller";


router.get("/profile", ensureAuthenticated, async (req, res) => {    
    /*  #swagger.tags = ['Profile']
        #swagger.security = [{
        "Authorization": []
        }]
    */   
    await getOne(req, res);
});


router.put("/profile", ensureAuthenticated, validationRules(), validate, async (req, res) => {   
    /*  #swagger.tags = ['Profile']
        #swagger.security = [{
        "Authorization": []
        }]
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/UpdateUserModel" }
    } */   
    
    await updateOne(req, res);
});

export default router;