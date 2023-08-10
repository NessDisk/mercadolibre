const express = require('express');
const app = express();
const PORT = process.env.PORT || 3100  ;
const axios = require('axios');
const cors = require('cors');


app.use(express.json(), cors({ origin: ['http://localhost:3000', "https://servermercadolibre-6jcu.vercel.app/"] }));
// Get roter mercadoLibre
app.get('/api/search', async (req, res) => {
  
 
  const response = await axios.get('https://api.mercadolibre.com/sites/MLA/search?q=:'+req.query.query);
 

  const product = response.data;
    const query = req.query.query;



  console.log(product);
  res.json(product);
});

//details

app.get('/api/items', async (req, res) => {
  
 
  const response = await axios.get('https://api.mercadolibre.com/items/'+req.query.id);
  const descriptionjson = await axios.get('https://api.mercadolibre.com/items/'+req.query.id+'/description');

  const product = response.data;
  const description = descriptionjson.data;
    const query = req.query.id;
  const data = { message: query };

  const finalData = {
    "author": {
    "name": "Nestor",
    "lastname": "Solera"
    },
    "item": {
    "id": product.id,
    "title": product.title,
    "price": {
    "currency": product.currency_id,
    "amount": product.price,
    "decimals": product.base_price,
    },
    "picture": product["pictures"][0]["url"],
    "condition": product["condition"],
    "free_shipping":  product["shipping"]["free_shipping"],
    "sold_quantity": product["sold_quantity"],
    "description": description["plain_text"],
    "attributes":product["attributes"],
    }
    }


  console.log(finalData);
  res.json(finalData);
});



app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});