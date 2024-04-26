const mongoose = require('mongoose');
const productSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Enter"]
        },
        quantity:{
            type:Number,  
            required:[true,0]
        },
        pricing:{
            type:Number,  
            required:true,
        },
        image:{
            type:String,
            required:false,
        }
    },
    {
        timestamps:true
    }
)

const Product=mongoose.model('Product',productSchema);
module.exports=Product;