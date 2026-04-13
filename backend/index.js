import express from "express";
import cors from "cors"

const app = express();

app.use(cors())

app.get('/',(req,res) => {
    console.log("Entered");
    res.send("bol lodu");
}
)
app.listen(8000, ()=> {
    console.log("application success");
})

