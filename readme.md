Para rodar o projeto:
- npm install na pasta server e na pasta client

- na pasta client:
  - criar pasta com o nome "apikey" dentro de src
  - criar arquivo "apiKey.js dentro da pasta apikey com o seguinte conteúdo:
      const apiKey = 'SUA GOOGLE API KEY';
      export default apiKey;
  - untrack a pasta apikey e o arquivo apiKey.js (comando git rm --cached) antes de commitar

- npm start na pasta client e na pasta server (usei npm run dev na pasta server, para rodar o nodemon)


Algumas anotações:

npm init -y
instalação das dpendências
criação do db chamado "db-data" no mongodb com duas collections:
 - positions: referente ao posicoes.csv
 - pois: referente ao base_pois_def.csv

criação da conexão com o banco de dados
criação dos models
criação dos controllers
criação das rotas no index.js
criação de um frontend básica para checar se os dados podem ser corretamente consumidos da api

instalação da lib cors no server-side para corrigir o erro:
Access to XMLHttpRequest at 'http://localhost:3001/positions' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

criação do component Map no frontend para realização de alguns testes com a lib @react-google-maps/api

criação da função getPositionsById

untrack arquivo com a chave da api do google
git rm --cached FILENAME
criada nova google API key
