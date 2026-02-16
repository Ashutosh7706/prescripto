import mongoose from "mongoose";

const connectDB = async () => {
mongoose.connection.on('connected',()=>{
    console.log("Databse Connected")
})
const uri = `${process.env.MONGODB_URI}/prescripto`;
const encodedUri = uri.replace(/:\/\/(.*?):(.*?)@/,(m,u,p)=>`://${u}:${encodeURIComponent(p)}@`)
await mongoose.connect(encodedUri);

}
export default connectDB