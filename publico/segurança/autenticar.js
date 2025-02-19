//tres parametros
//requisição = resposta, resposta e next (prosseguir)
//parametros fornercidos pelo express

export default function autenticar(requisição, resposta, next){
    if(requisição.session.autenticado === true)
        next();
    else{
        resposta.redirect('/login');
    }


    
}