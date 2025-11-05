import express from 'express';
import path from 'path'
import {ENV} from './lib/env.js'


const app = express();
const __dirname = path.resolve()

console.log(ENV.PORT);
console.log(ENV.DB_URL);


app.get("/",(req,res) => {
  res.status(200).json({msg:"Success From Bad Habit"})
})

app.get("/Home",(req,res) => {
  res.status(200).json({msg:"Hello How Are You"})
})

if(ENV.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname,"../frontend/dist")));

  app.get("/{*any}",(req,res) => {
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
  })
}


app.listen(ENV.PORT,() => {
  console.log(`Server is running on port ${ENV.PORT}`)
})