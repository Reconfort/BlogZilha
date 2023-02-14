import express from "express";
import { validationRules, validate} from "../validations/user-validator";
import { login, register, verify, forgotPassword, resetPassword, changePassword } from "../controllers/auth-controller";
import { ensureAuthenticated } from "../middleware/auth-middleware";
import { validationRules as passwordValidationRules, validate as passwordValidate } from "../validations/change-password-validator";

const router = express.Router();

router.post('/login', async (req, res) => {
    /*  #swagger.tags = ['Auth']
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/LoginModel" }
    } */
    await login(req.body, res);
});

router.post('/register', validationRules(), validate, async (req, res) => {
    /*  #swagger.tags = ['Auth']
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/RegisterModel" }
    } */

    await register(req.body, "user", res);
});

router.post('/verify', async (req, res) => {
    /*  #swagger.tags = ['Auth']
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/VerifyEmailModel" }
    } */
    await verify(req.body, res);
});

router.post('/forgotPassword', async (req, res) => {
    /*  #swagger.tags = ['Auth']
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/ForgotPassWordModel" }
    } */
    await forgotPassword(req.body, res);
});

router.post('/resetPassword', passwordValidationRules(), passwordValidate, async (req, res) => {
    /*  #swagger.tags = ['Auth']
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/ResetPasswordModel" }
    } */
    await resetPassword(req.body, res);
});

router.post("/changePassword", ensureAuthenticated, passwordValidationRules(), passwordValidate, async (req, res) => {   
    /*  #swagger.tags = ['Auth']
        #swagger.security = [{
        "Authorization": []
        }]
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/ChangePasswordModel" }
    } */   
    
    await changePassword(req, res);
});

export default router;