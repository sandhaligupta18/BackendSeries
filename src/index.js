import dotenv from "dotenv"
import connectDB from "./db/index.js";
 dotenv.config({
    path:'./env'
 })


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is runnening at port :${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION FAILED !!! ", err);
})










// ( async ()=>{
//     try {
//         mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("erroe",(error)=>{
//             console.log("ERROR", error)
//             throw error
//         })
//         app.listen(process.env.PORT ,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR" , error)
//         throw error
//     }
// })()