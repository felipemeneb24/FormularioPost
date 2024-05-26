import express from 'express';
const host = "0.0.0.0";
const port = 3000;
const app = express();

let listaEmpresas = [];
//manipular o express para manipular corretamendo os dados quando forem submetidos via post
app.use(express.urlencoded({ extended: true })); //habilita a biblioca query string 
import path from 'path';


function cadastrarEmpresas(requisicao, resposta) {
    const nome = requisicao.body.nome;
    const fantasia = requisicao.body.fantasia;
    const endereço = requisicao.body.endereço;
    const cidade = requisicao.body.cidade;
    const estado = requisicao.body.estado;
    const cep = requisicao.body.cep;
    const telefone = requisicao.body.telefone;
    const cnpj = requisicao.body.cnpj;
    const email = requisicao.body.email;

    //verificando se todos os campos estao prenchidos.

    if (nome && fantasia && endereço && cidade && estado && cep && telefone && cnpj && email) {
        listaEmpresas.push({
            nome: nome,
            fantasia: fantasia,
            endereço: endereço,
            cidade: cidade,
            estado: estado,
            cep: cep,
            telefone: telefone,
            cnpj: cnpj,
            email: email,
        });
        resposta.redirect('/ListarEmpresas');
    }

    else {
        resposta.write(`<!DOCTYPE html>
        <html lang="pt-br">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cadastro de Produtos</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        </head>
        <body>
            <div class="container" style="border: solid 2px; padding: 15px;">
                <form method="post" action="/CadastrodeEmpresas" class="row g-3 needs-validation" novalidate>
                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">Nome ou razão social</label>
                        <input type="text" class="form-control" id="validationCustom01" name="nome" value="${nome}" required>`);

        if (nome == "") {
            resposta.write(`<div class="alert alert-danger" role="alert">
                             Por favor, preencha o campo Nome ou razão social
                            </div>`);
        }

        resposta.write(`
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Nome Fantasia</label>
                        <input type="text" class="form-control" id="validationCustom02" name="fantasia" value="${fantasia}" required>`);
        if (fantasia == "") {
            resposta.write(`<div class="alert alert-danger" role="alert">
                Por favor, preencha o campo Nome Fantasia
              </div>`);
        }
        resposta.write(`
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustomUsername" class="form-label">Endereço</label>
                        <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend" name="endereço" value="${endereço}" required>`);
        if (endereço == "") {
            resposta.write(`<div class="alert alert-danger" role="alert">
            Por favor, preencha o campo Endereço
          </div>`);
        }
        resposta.write(`
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">Cidade</label>
                    <input type="text" class="form-control" id="validationCustom03" name="cidade" value="${cidade}" required>`);
        if (cidade == "") {
            resposta.write(`<div class="alert alert-danger" role="alert">
            Por favor, preencha o campo Cidade
                </div>`);
        }
        resposta.write(`</div>
        <div class="col-md-3">
            <label for="validationCustom04" class="form-label">Estado</label>
            <select class="form-select" id="validationCustom04" name="estado" required>
                <option selected disabled value="${estado}">Selecione um estado...</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
            </select>`);
        if (!estado) {
            resposta.write(`<div class="alert alert-danger" role="alert">
                    Por favor, preencha o campo Estado
                  </div>`);
        }
        resposta.write(` </div>
        <div class="col-md-3">
            <label for="validationCustom05" class="form-label">CEP</label>
            <input type="text" class="form-control" id="validationCustom05" name="cep" value="${cep}" required>`);
        if (cep == "") {
            resposta.write(`<div class="alert alert-danger" role="alert">
                Por favor, preencha o campo Cep
              </div>`);
        }
        resposta.write(`</div>
        <div class="col-md-3">
            <label for="validationCustom05" class="form-label">Telefone</label>
            <input type="number" class="form-control" id="validationCustom05" name="telefone" placeholder="(XX) XXXXX-XXXX" value="${telefone}" required>`);
        if (telefone == "") {
            resposta.write(`<div class="alert alert-danger" role="alert">
            Por favor, preencha o campo Telefone
          </div>`);
        }
        resposta.write(`</div>
        <div class="col-md-3">
            <label for="validationCustom05" class="form-label">CNPJ</label>
            <input type="number" class="form-control" id="validationCustom05" name="cnpj" value="${cnpj}" required>`);
        if (cnpj == "") {
            resposta.write(`<div class="alert alert-danger" role="alert">
                Por favor, preencha o campo CNPJ
              </div>`);
        }
        resposta.write(`</div>
        <div class="col-md-3">
            <label for="validationCustom05" class="form-label">Email</label>
            <input type="text" class="form-control" id="validationCustom05" name="email" value="${email}" required>`);
        if (email == "") {
            resposta.write(`<div class="alert alert-danger" role="alert">
                    Por favor, preencha o campo Email
                  </div>`);
        }
        resposta.write(`</div>
                            <div class="col-12">
                            <button class="btn btn-primary" type="submit">Cadastrar Empresa</button>
                         </div>            
    </form>
                </div>
                </body>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
                crossorigin="anonymous"></script>

    </html>`);




    }//fim else


}
//quando um usuario enviar uma requisiçao do tipo post para o end point /cadastrodeEmpresas acionar a funçao cadastrarEmpresas.
app.post('/CadastrodeEmpresas', cadastrarEmpresas)

app.get('/listarEmpresas', (req, resp) => {
    resp.write('<!DOCTYPE html>');
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<meta charset="UTF-8">');
    resp.write('<title>Lista de Empresas</title>');
    resp.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">')
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<h3>Empresas Cadastradas</h3>');
    resp.write('<table class="table table-dark table-striped">');
    resp.write('<tr>');
    resp.write('<th>Nome ou Razao Social</th>');
    resp.write('<th>Nome Fantasia</th>');
    resp.write('<th>Endereço</th>');
    resp.write('<th>Cidade</th>');
    resp.write('<th>Estado</th>');
    resp.write('<th>Cep</th>');
    resp.write('<th>Telefone</th>');
    resp.write('<th>CNPJ</th>');
    resp.write('<th>Email</th>');
    resp.write('</tr>');

    for (let i = 0; i < listaEmpresas.length; i++) {
        resp.write('<tr>');
        resp.write(`<td>${listaEmpresas[i].nome}</td>`);
        resp.write(`<td>${listaEmpresas[i].fantasia}</td>`);
        resp.write(`<td>${listaEmpresas[i].endereço}</td>`);
        resp.write(`<td>${listaEmpresas[i].cidade}</td>`);
        resp.write(`<td>${listaEmpresas[i].estado}</td>`);
        resp.write(`<td>${listaEmpresas[i].cep}</td>`);
        resp.write(`<td>${listaEmpresas[i].telefone}</td>`);
        resp.write(`<td>${listaEmpresas[i].cnpj}</td>`);
        resp.write(`<td>${listaEmpresas[i].email}</td>`);
    }
    resp.write('</table>');
    resp.write('<button><a href="/CadastrodeEmpresas.html">Cadastrar nova empresa</a></button>');
    resp.write('<button><a href="/index.html">Voltar</a></button>');
    resp.write('</body');
    resp.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>')
    resp.write('</html>');
    resp.end();
});

app.use(express.static(path.join(process.cwd(), '/publico')));

app.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`);
});

