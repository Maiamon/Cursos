import  express  from "express";
import bodyParser from "body-parser";

const app = express();
const porta = 8080

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/', (req,res) => {
    res.render('index');
});

app.get('/apenasumexemplo:nome/:lang',(req, res) => {
    var nome = req.params.nome
    var lang = req.params.lang
    var exibirMsg = false

    var produtos = [
        {nome: 'Doritos', preco: 3.14},
        {nome: 'Coca-cola', preco: 5},
        {nome: 'Leite', preco: 1.45},
    ]

    res.render("exemplo", {
        nome: nome,
        lang, lang,
        empresa: 'Guia do Programador',
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    })
});

app.get('/perguntar', (req,res) => {
    res.render('perguntar');
});

app.post("/savequestion", (req, res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    res.send("Formulario recebido! Titulo: "+ titulo + " descrição: " + descricao);
});

app.listen(porta, ()=>{console.log("App rodando na porta "+ porta)})