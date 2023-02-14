import { check, validationResult } from "express-validator";

const validationRules = () => {
    return [
        check("newPassword").trim().isLength({ min: 6, max: 16 }).withMessage("Password must be between 6 and 16 characters")
    ]
};

const validate =(req, res, next) => {
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        return next();
    }
    const resultErrors = [];
    errors.array().map((err) => resultErrors.push({[err.param]: err.mss}));
    resultErrors.push({message: "Action unsuccessful"});
    resultErrors.push({success: false});
    const errorObject = Object.assign({}, ...resultErrors);
    return res.status(422).json(errorObject);
};

export {
    validationRules,
    validate
};