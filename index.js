import express from "express";
import autenticar from "./publico/segurança/autenticar";


const porta = 3200;
const localhost ="0.0.0.0"; //define nosso aplicativo estará disponível em todas redes deste computador
const app = express();


//prepara o servidor p recursos estáticos

//erro http://localhost:3100/publico/index.html
//certo http://localhost:3100/index.html


//disponibilizando o conteúdo da pasta privada
app.use(autenticar,express.static("./privado"));

//disponibilizando o conteúdo da pasta publico
app.use(express.static("./publico"));

app.listen(porta, localhost, ()=> {
    console.log(`O servidor estará rodando http://${localhost}:${porta}`);
    

})