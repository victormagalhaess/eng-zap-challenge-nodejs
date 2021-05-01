# Eng Zap Challenge - Nodejs

## Conteúdo

- [Informações gerais](#informações-gerais)
- [Execução e testes](#execução-e-testes)
- [Deploy](#deploy)
- [Estrutura da api](#estrutura-da-api)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Possíveis melhorias](#possíveis-melhorias)

## Informações gerais

Esse projeto é a implementação de uma API para listagem de imóveis dos portais Zap e Viva Real, aplicando regras de negócio específicas para cada tipo de imóvel, venda ou aluguel, para cada portal e retornando através de uma rota GET os imóveis elegíveis. <br/>
<br/>

### Tecnologias

As principais ferramentas que possibilitaram esse projeto são:

- Nodejs 14.0;
- npm 6.14.7
- express 4.17.1
- jest 26.6.3

## Execução e testes

A fim de executar a API, duas abordagens podem ser tomadas: execução local ou por **containers**. Para ambas as abordagens, garanta que nenhuma outra aplicação estará rodando na porta 4000 da máquina onde a API será executada. <br/>

- A fim de executar <b>localmente</b>, instale o <a href="https://nodejs.org/en/download/" target="_blank">Nodejs</a> na versão 14.0 ou superior. Clone esse repositório na sua máquina local e navegue até o diretório onde ele se encontra. Em seguida, inicie um terminal e rode os seguintes comandos: <br/>

Para instalar as dependências:

```sh
npm install
```

Para rodar os testes unitários:

```sh
npm run test
```

Para executar a API:

```sh
npm run start
```

- A fim de executar <b> em um container </b>, instale o <a href="https://docs.docker.com/get-docker/" target="_blank"> docker e o docker-compose</a> na versão 19.03.1 ou superior. Clone esse repositório na sua máquina local e navegue até o diretório onde ele se encontra. Em seguida, inicie um terminal e rode os seguintes comandos:

Para instalar as dependências, a imagem e rodar a API:

```sh
docker-compose up --build
```

Tendo em vista que o container instala apenas as dependências de produção, não é possível rodar os testes mesmo acessando o terminal do container. Uma possível solução seria remover a flag `--only=production` presente no Dockerfile.

<b> Após executar a API ela estará disponível em `http://localhost:4000`</b> <br/>
<br/>

## Deploy

Um arquivo docker-compose foi adicionado para orquestrar a criação e execução do container da API. A fim de realizar o deploy da API, utilize o próprio docker-compose ou qualquer outra ferramenta de orquestramento para iniciar o container e publique-o em qualquer provedor de cloud. <br/>
<br/>

## Estrutura da API

A fim de permitir requisições a API, aqui contém uma breve explicação das rotas. Informações detalhadas para cada uma das rotas podem ser encontradas na pasta <a href="https://github.com/victormagalhaess/eng-zap-challenge-nodejs/tree/main/docs" target="_blank"> docs</a>.
Um environment do <a href="https://insomnia.rest/download" target="_blank">Insomnia</a> pode ser encontrado <a href="https://github.com/victormagalhaess/eng-zap-challenge-nodejs/tree/main/docs/Insomnia" target="_blank">aqui</a>.

#### **/api/v1/healthcheck**:

Rota de execução da aplicação.

- Em caso de sucesso o retorno será:
  - **200** "Ok";
- Em caso de falha o retorno será:
  - **500** "Internal server error" com status 500 quando a API está com algum problema. <br/>

#### **/api/v1/zap**:

Rota de obtenção dos imóveis elegíveis para a plataforma zap.

- Necessita dos queryParams: `page: Int > 0` e `pageSize: Int > 0`
- Em caso de sucesso o retorno será:
  - **200:** metadados da requisição e uma lista paginada a partir de page e pageSize dos imóveis eletivos para o portal Zap;
    - Ex: `get http://localhost:4000/api/v1/zap?page=1&pageSize=1`
- Em caso de falha o retorno será:
  - **400:** "Bad Request", acontece quando 'page' e 'pageSize' não foram passados corretamente
    - Ex: `get http://localhost:4000/api/v1/zap?page=A&pageSize=0`
  - **500** "Internal server error" com status 500 quando a API está com algum problema. <br/>

#### **/api/v1/vivareal**:

Rota de obtenção dos imóveis elegíveis para a plataforma Viva Real.

- Necessita dos queryParams: `page: Int > 0` e `pageSize: Int > 0`
- Em caso de sucesso o retorno será:
  - **200:** metadados da requisição e uma lista paginada a partir de page e pageSize dos imóveis eletivos para o portal Viva Real;
    - Ex: `get http://localhost:4000/api/v1/vivareal?page=1&pageSize=1`
- Em caso de falha o retorno será:
  - **400:** "Bad Request", acontece quando 'page' e 'pageSize' não foram passados corretamente
    - Ex: `get http://localhost:4000/api/v1/vivareal?page=A&pageSize=0`
  - **500** "Internal server error" com status 500 quando a api está com algum problema. <br/>
    <br/>

## Estrutura do projeto

O projeto foi estruturado utilizando uma arquitetura de _Controller, Service e Repository_, onde cada camada tenta isolar suas responsabilidades e se manter o mais desacoplada possível.

Segue um diagrama representando cada camada, como se comunicam e suas responsabilidades:

<div style="text-align:center"> <img src="https://i.ibb.co/nPsH8tR/scheme.png"/> </div> <br/>
<br/>

### Considerações sobre a implementação:

- Dada a natureza da aplicação de não utilizar um banco de dados, foi necessário escolher uma abordagem para o armazenamento. Como obter todos os dados a cada requisição tornaria o processo muito lento, optou-se por carregar os dados em memória no início da aplicação, utilizando um _service_ para um _singleton_. Uma instância da classe do singleton é exportada, permitindo que os dados sejam carregados quando a API inicia, e possam ser reutilizados sem chamadas adicionais a qualquer momento.
- Foram criados testes unitários para boa parte da aplicação, o framework utilizado para _mock_ e asserções foi o **jest**.
- A fim de adicionar uma etapa de validação e sanitização dos dados, foram utilizados _middlewares_ com checagem no _controller_, que permitem a avaliação e envio das respostas adequadas à entrada. <br/>
  <br/>

## Possíveis melhorias

Tendo em vista a natureza da aplicação, o uso de banco de dados não era permitido, porém futuramente, o uso de um banco de dados permitiria uma otimização maior do código, desacoplamento maior da camada de _service_ e camada de _repository_, o que excluiria a necessidade de um _singleton_ para armazenar os dados permitindo o uso de uma ORM para desacoplar a aplicação do próprio banco de dados.<br/>
Outra potencial melhoria seria a migração da API para Typescript. O Typescript permite validações de tipagem robustas, implementação de padrões de POO de forma elegante. Além disso, a linguagem ainda pode ser transpilada para javascript, mantendo a fácil implementação e deploy da API.<br/>
A documentação da API foi feita de forma manual e gerada pelo Insomnia. Futuramente, alguma ferramenta de documentação automática, como o SwaggerUI, poderia ser adicionado ao projeto para facilitar a manutenibilidade da documentação.
