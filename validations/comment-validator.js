import { check, validationResult } from "express-validator";

const validationRules = () => {
    return [
        check("body").trim().isLength({ min: 2,}).withMessage("Comment must be atleast 2 characters long")
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