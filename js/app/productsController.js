const app = angular.module('MinitienditaCDS', [])

app.controller('productController', ['$scope', '$http', ($scope, $http) => {
    $scope.products = []

    $scope.getData = () => {
        $http({
            method: 'GET',
            url: '../../assets/sources/data.json'
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
}])