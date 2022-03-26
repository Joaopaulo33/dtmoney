import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { createServer, Model} from 'miragejs';

createServer({
    models:{
      transaction: Model,
    },

seeds(server){
  server.db.loadData({
    // nome da tabela, que é sempre o nome do model no plural
    transactions:[
      {
        //id sempre tem que ter
        id: 1,
        title:'Freelance web',
        type:'deposit',
        category:'Dev',
        amount:7000,
        createdAt:new Date('2021-03-16 09:00:00'),
      },
      {
        //id sempre tem que ter
        id:2,
        title:'Aluguel',
        type:'withdraw',
        category:'Casa',
        amount:500,
        createdAt:new Date('2021-03-10 11:00:00'),
      }
    ]
  })

},

  routes(){
    //- Isso informa pro miragejs que todas as chamadas que eu for fazer vão estar a partir do endereço “api”,Ou seja, ele deve captar todas essas chamadas
    this.namespace = 'api';

    this.get('/transactions', ()=> {
      //Listar todas as transações que estão dentro do banco de dados
      return this.schema.all('transaction')      
    })


    this.post('/transactions', (schema,request)=>{
      //Geralmente vem como texto, para isso, passa para json
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction',data);

      
    })

  }

})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

