import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const CategorySchema = new Schema (
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        // createdBy: {
        //     type: Schema.Types.ObjectId,
        //     ref: "User",
        // },
        
    },
    { timestamps: true }
);

CategorySchema.plugin(uniqueValidator);
export default model("Category", CategorySchema);