import dotenv from "dotenv";

import cors from 'cors';
import express, { urlencoded, json } from 'express';
import { middleware as paginate } from 'express-paginate';
import passport from 'passport';
import mongoose, { connect } from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger_output.json';
import passportMiddleware from "./middleware/passport-middleware";

dotenv.config();

const app = express();
import router from './routes/index';

app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(passport.initialize());
passportMiddleware(passport);

app.use(paginate(process.env.LIMIT, process.env.MAX_LIMIT));
app.use(router);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

mongoose.set('strictQuery', false);

const runApp = async () => {
    try {
        await connect(process.env.MONGO_DB, {
            // useFindAndModify: false,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        });
        console.log(`Successfully connected to database ${process.env.MONGO_DB}`);
        app.listen(process.env.PORT, () => {
            console.log(`Server started successfully on PORT ${process.env.PORT}`);
        })
    } catch (err) {
        console.log(err);
        runApp();
    }
};

runApp();