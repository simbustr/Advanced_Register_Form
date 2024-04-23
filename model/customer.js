const mongoose = require('mongoose')
const schema = mongoose.Schema


const customerSchema = new schema({

    id:{
        type:Number,
        require:true
    },
    Full_Name: {
        type: String,
        
    },
    Password: {
        type: String,
        
    },
    Subscribe_Newsletter: {
        type: Boolean,
        default: false
    },
    Gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    Age: {
        type: Number,
        min: 0
    },
    Email: {
        type: String,
        
        unique: true
    },
    Date_of_Birth: {
        type: Date
    },
     Preferred_Meeting_Time: {
        type: String // Storing as string for simplicity
    },
    
    // Profile_Picture: {
    //     type: String // Assuming you store file paths or URLs
    // },
   
    // Website: {
    //     type: String
    // },
    // Favorite_Color: {
    //     type: String
    // },
    // Skill_Level: {
    //     type: Number,
    //     min: 1,
    //     max: 10
    // },
    // Bio: {
    //     type: String
    // },
    // Country: {
    //     type: String
    // },
    // Phone_Number: {
    //     type: String
    // },
    // Preferred_Meeting_DateTime: {
    //     type: Date
    // }

})    


module.exports = mongoose.model("Customer",customerSchema)