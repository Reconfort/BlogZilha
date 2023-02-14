import express from "express";
const router =  express.Router();
import { ensureAuthenticated, ensureAuthorized } from "../middleware/auth-middleware";
import {validationRules, validate} from "../validations/video-validator";
import { addOne, removeOne, updateOne, getAll, getOne, getTopVideos } from "../controllers/videos-controller";

router.get("/videos", async (req, res) => {  
    // #swagger.tags = ['Posts']
    	  
    await getAll(req, res);
});

router.get("/videos/top",  async (req, res) => {  
    // #swagger.tags = ['Posts']
        
    await getTopVideos(req, res);
  });

router.post("/videos", validationRules(), validate, async (req, res) => {    
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/VideoModel" }
    } */  
    await addOne(req, res);
});

router.put("/videos/:id", validationRules(), validate, async (req, res) => {    
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/VideoModel" }
    } */  
    await updateOne(req, res);
});

router.get("/videos/:id", async (req, res) => {  
    // #swagger.tags = ['Posts']  
    await getOne(req, res);
});

router.delete("/videos/:id", async (req, res) => {    
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    */  
    await removeOne(req, res);
});

export default router;