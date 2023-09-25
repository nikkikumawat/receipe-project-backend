import express from "express"
import cors from "cors"
import connection from "./db/connection.js"
import categoryImage from "./module/categorySchema.js";
import reciepe from "./module/schema.js";

const app = express();

app.use(express.json())


app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:3000' }))             

app.get('/', async (req, res) => {
        
})


app.get('/getAllcatagory', async(req, res)=>{
    let allCategory = await categoryImage.find({})
    console.log("heeeeeelo")
    console.log(allCategory)
    res.send({status: 200, message: "getting all category.", allCategory: allCategory})

})

connection
    .then(() => {
        app.listen(8000, () => {
            console.log('server started')
        })
    })