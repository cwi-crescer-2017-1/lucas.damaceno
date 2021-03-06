modulo.factory("usuarioService", function ($http) {
    return ({
        getDados:getDados,
        getPostagensDosAmigos:getPostagensDosAmigos,
        getDadosEspecificos:getDadosEspecificos,
        getPostagensEspecificas:getPostagensEspecificas,
        getSolicitacoes:getSolicitacoes,
        aceitar:aceitar,
        getUsuarios:getUsuarios,
        adicionarAmigo:adicionarAmigo,
        getAmigos:getAmigos,
        modificar:modificar
        
    });

    function getDados(){
   
        return $http.get("http://localhost:9090/dadosUsuarioAtual");

    }
    
    function getPostagensDosAmigos(){
        
        return $http.get("http://localhost:9090/postagens/feed");
    }
    
    function getDadosEspecificos(id){
        return $http.get("http://localhost:9090/usuario/" + id + "");
    }
    
    function getPostagensEspecificas(id){
        return $http.get("http://localhost:9090/postagens/" + id + "");
    }
    
    function getSolicitacoes(){
        return $http.get("http://localhost:9090/usuario/solicitacoes");
    }
    function aceitar(id){
        return $http.post("http://localhost:9090/usuario/aceitar/" + id);
    }
    function getUsuarios(){
        return $http.get("http://localhost:9090/usuarios");
        }
    
    function adicionarAmigo(id){
        
        return $http.post("http://localhost:9090/usuario/convidar/" + id + "");
        
    }
    
    function getAmigos(){
        return $http.get("http://localhost:9090/usuario/amigos")
    }
    
    function modificar(usuario){
        
         return $http.put("http://localhost:9090/usuario", usuario);
        
    }

});