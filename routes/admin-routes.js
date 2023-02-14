import express from "express"
const router = express.Router();
import {ensureAuthenticated , ensureAuthorized} from "../middleware/auth-middleware";
import { register } from "../controllers/admin-controller";
import { getAll, getOne} from "../controllers/admin-controller"


router.get("/users",  async(req, res) => {
    /*
        #swagger.tags = ['Admin']
        #swagger.security = [{
            "Authorization": []
        }]
    */
    await getAll(req, res);
});

router.get("/users/:id",  async(req, res) => {

    /*
        #swagger.tags = ['Admin']
        #swagger.security = [{
            "Authorization": []
        }]
    */
    await getOne(req, res);
});

router.get("/seed", async(req, res) => { 
        //#swagger.tags = ['Admin'] 
    const admin = {
        name: "Administrator",
        email: "admin@markscodingspot.com",
        password: "Password123#"
    };

    await register(admin, "admin", res);
});

module.exports = router;