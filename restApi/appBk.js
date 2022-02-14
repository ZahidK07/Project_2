let express = require ('express');
let app = express();
let port = 8210;

//get request
app.get('/', (req,rest)=>{
    rest.send('Welcome to express')
})

app.get('/city',(req,res)=>{
    res.send('This is from city')
})

app.get('/proteins',(req,res)=>{
    res.send(proteins)
})
app.get('/performance',(req,res)=>{
    res.send(performance)
})

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`)
})

const proteins=[   
        {
            "id": 1,
            "category": "Shop",
            "category_id": "Whey Protein",
            "name": "GoldWhey",
            "brand": "Optimum Nutriton",
            "weight": "4.2 lbs",
            "price": "5800 Rs",
            "rating":"4.2"
        },
]  

 performance = [   
        {
            "id": 1,
            "category": "Shop",
            "category_id": "Pre-Workout",
            "name": "C4 RIPPED",
            "brand": "Cellucor",
            "size": "30 Servings",
            "price": "Rs 2,967.37",
            "rating":"4.2"
        },
    ]

        


