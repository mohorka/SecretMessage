import mongoose from 'mongoose'

async function dbConnect(){
    //check if connection already exists
    //readyState>=1
    if(mongoose.connection.readyState >= 1){
        return
    }

    return mongoose.connect(process.env.MONGODB_URI,{
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    },(err) => {
        if(err) throw err
        console.log('connected to db')
    })
}

export default dbConnect