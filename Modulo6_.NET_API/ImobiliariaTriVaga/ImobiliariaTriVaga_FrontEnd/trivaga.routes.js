var modulo = angular.module('trivagaApp', ['ui.bootstrap', 'ngRoute', 'auth','ngStorage']);
modulo.config(function ($routeProvider) {

    $routeProvider
        .when('/login', {
        controller: 'LoginController',
        templateUrl: 'Login.html',
        css: 'login.css'
    })
        .when('/cadastro', {
        controller: 'CadastroController',
        templateUrl: 'Cadastro.html'
    }).when('/pedido', {
        controller: 'PedidoController',
        templateUrl: 'Pedido.html'
    }).when('/gerencia', {
        controller: 'PedidoController',
        templateUrl: 'gerencia.html'
    }).when('/visualizarAtrasos', {
        controller: 'PedidoController',
        templateUrl: 'RelatoriosAtraso.html'
    }).when('/visualizarPedido/:id', {
        controller: 'PedidoController',
        templateUrl: 'VisualizarPedido.html'
    }).when('/visualizarPedidoARetornar/:id', {
        controller: 'PedidoController',
        templateUrl: 'VisualizarPedidoARetornar.html'
    }).when('/CriarPedido/:id', {
        controller: 'PedidoController',
        templateUrl: 'CriarPedido.html'
    }).when('/pedidos', {
        controller: 'PedidoController',
        templateUrl: 'Pedidos.html'
    })
        .otherwise({redirectTo: '/login'});
});

modulo.constant('authConfig', {

    // Obrigatória - URL da API que retorna o usuário
    urlUsuario: 'http://localhost:55508/api/Usuario',

    // Obrigatória - URL da aplicação que possui o formulário de login
    urlLogin: '/login',

    // Opcional - URL da aplicação para onde será redirecionado (se for informado) após o LOGIN com sucesso
    urlPrivado: '/cadastro',

    // Opcional - URL da aplicação para onde será redirecionado (se for informado) após o LOGOUT
    urlLogout: '/editora'
});