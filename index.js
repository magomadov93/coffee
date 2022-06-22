const mongoose = require("mongoose");
const express = require("express");


const app = express();


app.use(express.json());
app.use(require("./routes/coffees.route.js"))

mongoose.connect("mongodb+srv://into:code@cluster0.rrbtn.mongodb.net/coffee")
.then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch((e) => console.log(`Ошибка: ${error}`))


app.listen(4000, () => {
    console.log(`server started http://localhost:4000`)
})
