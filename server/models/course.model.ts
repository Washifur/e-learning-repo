import mongoose, {Document,Model,Schema} from "mongoose";
import { IUser } from "./user.model";
interface Review extends Document{
    user: IUser;
    rating: number;
    comment: String;
    commentReplies: Comment[];
}
interface Comment extends Document{
    user: IUser;
    question: String;
    questionReplies?: Comment[];
}
interface Link extends Document{
    title: string;
    url: string;
}
interface CourseData extends Document{
    title: string;
    description: string;
    videoUrl: string;
    videoThumbnail: object;
    videoSection: string;
    videoLength: number;
    videoPlayer: string;
    links: Link[];
    suggestion: string;
    questions: Comment[];


}

interface Course extends Document{
    name: string;
    description: string;
    price: number;
    estimatePrice: number;
    thumbnail: object;
    tags: object;
    level: string;
    demoUrl: string;
    benefits: {title:string}[];
    prerequisites: {title: string}[];
    reviews: Review[];
    courseData: CourseData[];
    ratings?: number;
    purchased?: number;
}

const reviewSchema= new Schema<Review>({
    user: Object,
    rating: {
        type: Number,
        default: 0,

    },
    comment: String,
    commentReplies: [Object],

});
const linkSchema = new Schema<Link>({
    title:String,
    url: String,
});
const commentSchema = new Schema<Comment>({
    user: Object,
    question: String,
    questionReplies: [Object],

});
const courseDataSchema = new Schema<CourseData>({
    title: String,
    description: String,
    videoUrl: String,
    videoSection: String,
    videoLength: Number,
    videoPlayer: String,
    links: [linkSchema],
    suggestion: String,
    questions: [commentSchema],
})

const courseSchema = new Schema<Course>({
    name:{
        type: String,
        required:true,
    },
    description:{
        type:String,
        required:true,

    },
    price:{
        type:Number,
        required:true,

    },
    estimatePrice:{
        type:Number,
    },
    thumbnail:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        },
    
    },

    tags:{
        type: String,
        required:true,

    },

    level:{
        type: String,
        required:true,
    },
    demoUrl:{
        type: String,
        required:true,
    },
    benefits:[{title:String}],
    prerequisites:[{title:String}],
    reviews:[reviewSchema],
    courseData:[courseDataSchema],
    ratings:{
        type: Number,
        default: 0,
    },
    purchased:{
        type: Number,
        default:0,
    }}, {timestamps: true}
);

const CourseModel: Model<Course> = mongoose.model("Course", courseSchema);

export default CourseModel;




