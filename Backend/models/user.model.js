import { Schema, model } from "mongoose";

const userSchma = new Schema({
  
    name: {
        type: String,
        required: true,
        trim: true
    },
    mobile:{
        type: Number,
        trim: true,
        maxlenght:10
    },
    profilePic:{
        type:String,
        default:'http://res.cloudinary.com/dqjmbn0dy/image/upload/v1735545701/user.png.png',
    } ,
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    validateUser:{
        type:Boolean,
        default:false
    },
    courses:[
        {
            type:Schema.Types.ObjectId,
            ref:'course'
        }
    ],
    my_assignments:{
          courseId:{
             type:Schema.Types.ObjectId,
             ref:'course'
          },
          assignmentId:{
            type:Schema.Types.ObjectId,
            ref:'assignment'
          },
          isSubmitted:{
            type:Boolean,
            default:false
          }
    },
    isBan:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

const user  = model('user',userSchma);
export default user
