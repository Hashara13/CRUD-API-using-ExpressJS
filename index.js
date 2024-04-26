const express = require('express');
const mongoose = require('mongoose');
const Product=require('./modules/product')
const app = express();
app.use(express.json())
app.get('/', (req, res) => {
  res.send(' CRUD app!'); // Assuming you want to send this response
});

app.get('/one', (req, res) => {
  res.send(' CRUD app! one'); // Assuming you want to send this response
});

// get all models from DB
app.get('/products', async(req, res) => {
  try{
    const products=await Product.find({})
    res.status(200).json(products);

  }catch(error){
    console.log(error.message);
    res.status(500).json({message:error.message})
  }
  });

  // get speciific models from DB
  app.get('/products/:id', async(req, res) => {
    try{
      const {id}=req.params;
      const product=await Product.findById(id)
      res.status(200).json(product);
  
    }catch(error){
      console.log(error.message);
      res.status(500).json({message:error.message})
    }
    });

// post models to DB
app.post('/product',async(req,res)=>{
  try{
    const product=await Product.create(req.body)
    res.status(200).json(product);

  }catch(error){
    console.log(error.message);
    res.status(500).json({message:error.message})
  }
  

})

// update
app.put('/products/:id', async(req, res) => {
  try{
    const {id}=req.params;
    const product=await Product.findByIdAndUpdate(id,res.body);
    if(!product){
      return res.status(404).json({message:'cant find '})
    }
    const newid=await Product.findById(id);
    res.status(200).json(product);
    
    

  }catch(error){
    console.log(error.message);
    res.status(500).json({message:error.message})
  }
  });

  // remove speciific models from DB
  app.delete('/products/:id', async(req, res) => {
    try{
      const {id}=req.params;
      const product=await Product.findByIdAndDelete(id)
      if(!product){
        return res.status(404).json({message:'cant find '})
      }
       res.status(200).json(product);
      
      
    }catch(error){

      res.status(500).json({message:error.message})
    }
    });

mongoose.connect('mongodb+srv://admin:1234@cluster01.tdwelf7.mongodb.net/myAPI?retryWrites=true&w=majority&appName=Cluster01')
.then(()=>{
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  console.log('connected');
}).catch(()=>{
  console.log('error');
})