import express  from "express";
import { ensureAuthenticated, ensureAuthorized } from "../middleware/auth-middleware";
import {validationRules, validate} from "../validations/category-validator";
import { addOne, removeOne, updateOne, getAll, getOne } from "../controllers/categories-controller";
const router = express.Router();


router.get("/categories", async (req, res) => {  
    // #swagger.tags = ['Posts']
    	  
    await getAll(req, res);
});

router.post("/categories",  validationRules(), validate, async (req, res) => {    
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/CategoryModel" }
    } */  
    await addOne(req, res);
});

router.put("/categories/:id", validationRules(), validate, async (req, res) => {    
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/CategoryModel" }
    } */  
    await updateOne(req, res);
});

router.get("/categories/:id", async (req, res) => {  
    // #swagger.tags = ['Posts']  
    await getOne(req, res);
});

router.delete("/categories/:id", async (req, res) => {    
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    */  
    await removeOne(req, res);
});

export default router;