import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const StorySchema = new Schema (
    {
        // category: {
        //     type: Schema.Types.ObjectId,
        //     ref: "Category",
        // },
        category: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        body: {
            type: String,
            required: true,
        },
        viewsCount: {
            type: Number,
            default: 0,
        },
        comments: [{
            type: Schema.Types.ObjectId,
            ref: "Comment",
        }],
        // createdBy: {
        //     type: Schema.Types.ObjectId,
        //     ref: "User",
        // },
        
    },
    { timestamps: true }
);

StorySchema.plugin(uniqueValidator);
export default model("Story", StorySchema);