import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile: {
        type: String, //Cloudinary URL ayega
        required: true
    },
    thumbnail: {
        type: String, //Cloudinary URL ayega
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    duration: {
        type: Number, // cloudinary se ayega 
        required: true
    },
    views: {
        type: Number,
        default: 0, 
    },
    isPublished: {
        type: Boolean,
        default: true, 
    },
    publisher: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{
    timestamps: true
})
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema)