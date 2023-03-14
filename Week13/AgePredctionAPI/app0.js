const express = require('express')
const app = express()
const port = 3000

app.use(express.json());


app.get('/api/age/:name', (req, res) => {
    let name = req.params.name;

    let anio = getRandomIntInclusive(1, 99);
    if(name != undefined){
        res.send({
            "name": name,
            "age": anio,
            "days": anio %4 == 0 ? anio *366 : anio *365
        });
    }else{
        res.send({
            "error": "Missing parameter 'name' was expected."
        });
    }
})

app.get('/api/age', (req, res) => {
    let r = {
        error: "Missing parameter 'name' was expecteds."
    }

    res.json(r);
})



const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

app.listen(port, () => {
  console.log(`Running app listening on port ${port}`)
})