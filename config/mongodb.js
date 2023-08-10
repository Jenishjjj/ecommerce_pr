const mongoose=require('mongoose');

const url = "mongodb+srv://jikadarajenish:jenish1234@cluster0.rleihl5.mongodb.net/ecom";

const db={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,db)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

module.exports=db;