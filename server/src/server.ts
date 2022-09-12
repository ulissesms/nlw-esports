import express from 'express';

const app = express();

interface Ads{
  id: string;
  name: string;
}

app.get('/ads', (request, response) => {
return response.json([
  {id:1,name:'Android'},
  {id:2,name:'Ios'},
  {id:3,name:'web'},
])
})
app.listen(3333)