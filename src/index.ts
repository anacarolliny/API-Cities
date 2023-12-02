import {server} from './server/server';

server.listen(process.env.PORT || 3333,()=> console.log(`A Aplicação está rodando na porta ${process.env.PORT || 3333}`));