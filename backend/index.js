const express = require("express")
const sequelize = require('./database/bd')
const cors = require('cors')
const livroControllers = require('./controllers/LivroController')

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.use('/livros',livroControllers);

async function startServer(){
    try{
        await sequelize.authenticate();
        console.log('Conexão ao Mysql estabelecida')
        await sequelize.sync();

        app.listen(PORT, () =>{
            console.log('Servidor rodando na porta -',PORT)
        });


    }catch(err){
        console.error("Erro ao iniciar o servidor: ",err)
    }
}

startServer();