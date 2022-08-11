const app = angular.module('MinitienditaCDS', [])
const local = '../../assets/sources/data.json'
const remote = 'https://cokeralcocer.github.io/MinitienditaPososa/assets/sources/data.json'

app.controller('productController', ['$scope', '$http', ($scope, $http) => {
    $scope.products = []

    $scope.getData = () => {
        $http({
            method: 'GET',
            url: remote
        }).then(res => {
            let {data} = res
            for(let i = 0; i < data.length; i++){
                data[i].id = i+1
            }
            $scope.products = data
        })
    }

    $scope.fireContact = () => {
        $('#contactModal').modal('show')
    }

    $scope.fireTransfer = () => {
        $('#transferModal').modal('show')
    }

    $scope.fireCode = () => {
        $('#codeModal').modal('show')
    }
}])