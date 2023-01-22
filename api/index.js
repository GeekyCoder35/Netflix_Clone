const express = require("express")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//routes
const authRoute = require("./routes/Auth");
const userRoute = require("./routes/Users");
const movieRoute = require("./routes/Movies");
const listRoute = require("./routes/Lists");


dotenv.config();

//to get rid-off a warning msg
mongoose.set('strictQuery', false);

mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log("DB connected"))
.catch(console.log((err)=> console.log(err+"Sorry! something went wrong")));

//to allow mongoose to accept json requests
app.use(express.json());

//all routes
app.use("/api/auth/", authRoute);
app.use("/api/users/", userRoute);
app.use("/api/movies/", movieRoute);
app.use("/api/lists/", listRoute);


app.listen(8000, ()=>{
    console.log("BACKEND IS UP AND RUNNING");
})  