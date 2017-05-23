var app = angular.module('app',['ngRoute']);
app.config(function ($routeProvider) {

    $routeProvider
        .when('/addAulas', {
        controller: 'adicionarAulasController',
        templateUrl: 'adicionarAulas.html'
    })
        .when('/addInstrutores', {
        controller: 'adicionarInstrutores',
        templateUrl: 'adicionarInstrutores.html'
    })
        .when('/modInstrutores', {
        controller: 'modificarInstrutores',
        templateUrl: 'modificarInstrutores.html'
    }).when('/pokemon', {
        controller: 'PokemonController',
        templateUrl: 'pokemon.html'
    })
        .otherwise({redirectTo: 'adicionarAulas.html'});
});



app.controller('adicionarAulasController', function ($scope, $routeParams, aulaService) {
    $scope.insereAula = function(aula){
        let inserir = true;
        aulaService.list().then(function (response){
            var aulas = response.data;
            console.log(aulas);
            for(aulaTestar of aulas){
                if (aulaTestar.nome.toLowerCase() === aula.toLowerCase()) inserir = false;
                swal({
                    title: "Error!",
                    text: "Nome ja cadastrado!",
                    type: "error",
                    confirmButtonText: "Cool"
                });
            }
            if(inserir) {
                aulaService.create(aula).then(function (response) {

                    swal("Feito!", "Aula Inserida Com Sucesso!", "success");
                    $scope.listarAulas();
                });
            }
        });

    }
    
    
    $scope.povoarAulaMod = function(){
        if(typeof $scope.selecionarAula !== 'undefined'){
            let aulaPovoar = $scope.getAulaByID($scope.selecionarAula.id);
            $scope.novoNome = aulaPovoar.nome;
            $scope.modificarAulaUtilizada = aulaPovoar.estaSendoUtilizada;
        }
    }
    
    $scope.getAulaByID = function(ID){

        for(aula of $scope.listaDeAulas){
            if(aula.id === ID) return aula;
        }
        return;
    }
    
    $scope.listarAulas = listarAulas; 
    function listarAulas (){
        aulaService.list().then(function(response){

            $scope.listaDeAulas = response.data; 

        });}

    $scope.findById = findById;

    function findById(id) {
        aulaService.findById(id).then(function (response) {
            $scope.aula = response.data;
        });
    };
});

app.controller('PokemonController', function ($scope, $http) {

    let url = 'http://pokeapi.co/api/v2/pokemon/25/';

    $http.get(url).then(function (response) {
        $scope.name = response.data.name;
    });
});


