var express = require("express")
var cors = require("cors")
var cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require("mongoose");

require('dotenv').config()


const connectDB = async () => {
    try {

        // mongodb local server
        // await mongoose.connect(process.env.MONGODB_LOCAL_SERVER)
        

        // mondb atlas cloud sever
        await mongoose.connect(process.env.MONGO_URI)

        console.log("✅ MongoDB Connected Successfully!");
        
    } catch (error) {
        console.log("❌ MONGODB connectin Failed", error);
        process.exit(1);
        
    }

}

connectDB();




var app = express();
// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory (optional, default is './views')
app.set('.//../views', path.join(__dirname, './/../views'));

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));



app.use(cors())
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


var indexRouter = require('./routes/index');
var productRouter = require('./models/product');



// router setup
app.use('/', indexRouter);
app.use('/product', productRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


module.exports = app;





