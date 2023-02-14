import express from "express";
const router =  express.Router();
import path from "path";
import multer from "multer";
import { ensureAuthenticated, ensureAuthorized } from "../middleware/auth-middleware";
import {validationRules, validate} from "../validations/story-validator";
import { addOne, removeOne, updateOne, getAll, getOne, getOneBySlug, getTopStories} from "../controllers/stories-controller";
const PATH = "../public/";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, PATH));
    },
    filename: (req, file, cb) => {
      const fileName = Date.now() + path.extname(file.originalname);
      req.body.imageUrl = fileName;
      cb(null, fileName);
    },
  });

  const upload = multer({
    storage: storage,
  });

router.get("/stories",  async (req, res) => {  
    // #swagger.tags = ['Posts']
    	  
    await getAll(req, res);
});

router.get("/stories/top",  async (req, res) => {  
  // #swagger.tags = ['Posts']
      
  await getTopStories(req, res);
});

router.post("/stories", 
  upload.any("files")
);

router.post("/stories",  async (req, res) => {    
    /*  #swagger.tags = ['Posts']
        #swagger.consumes = ['multipart/form-data']
        #swagger.security = [{
        "Authorization": []
        }]
        #swagger.parameters['file'] = {
            in: 'formData',
            required: true,
            type: 'file'
        }
      
    	#swagger.parameters['category'] = {
            in: 'formData',
            required: true,
            type: 'string',
      } 
      #swagger.parameters['title'] = {
            in: 'formData',
            required: true,
            type: 'string',
      } 
      #swagger.parameters['body'] = {
            in: 'formData',
            required: true,
            type: 'string',
      } 
    
    */ 
    
    await addOne(req, res);
});

router.put("/stories/:id", validationRules(), validate, async (req, res) => {    
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/StoryModel" }
    } */  
    await updateOne(req, res);
});

router.get("/stories/:id", async (req, res) => {  
    // #swagger.tags = ['Posts']  
    await getOne(req, res);
});

router.get("/stories/slug/:slug", async (req, res) => {  
  // #swagger.tags = ['Posts']  
  await getOneBySlug(req, res);
});


router.delete("/stories/:id", async (req, res) => {    
    /*  #swagger.tags = ['Posts']
        #swagger.security = [{
        "Authorization": []
        }]
    */  
    await removeOne(req, res);
});

export default router;