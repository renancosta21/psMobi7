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