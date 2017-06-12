/**
 * Created by Administrator on 2016/12/8.
 */
var app=angular.module('back_stage',['ng','ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when("/start",{
            templateUrl:"tpl/index.html",
            controller:"roomCtrl"
        })
        .when("/dish",{
            templateUrl:"tpl/dish.html",
            controller:"dishCtrl"
        })
        .when("/dish/:did",{
            templateUrl:"tpl/add_dish.html",
            controller:"dishCtrl"
        })
        .when("/news",{
            templateUrl:"tpl/all_new.html",
            controller:"newCtrl"
        })
        .when("/news/:nid",{
            templateUrl:"tpl/add_news.html",
            controller:"newCtrl"
        })
         //查看会员
        .when("/user",{
            templateUrl:"tpl/select_admin.html",
            controller:"userCtrl"
        })
         //查看订单
        .when("/order",{
            templateUrl:"tpl/order_select.html",
            controller:"orderCtrl"
        })
        .when("/detail/:did",{
            templateUrl:"tpl/detail.html",
            controller:"datailCtrl"
        })
        .when("/update_pwd",{
            templateUrl:"tpl/update_pwd.html",
            controller:"updatePwdCtrl"
        })
        .otherwise({redirectTo:"/start"});
});
//父元素的控制器
app.controller("parentCtrl",['$scope','$location',function($scope,$location){
    $scope.jump=function(arg){
        $location.path(arg);
    }
    $scope.name=sessionStorage['name'];
    $scope.type=sessionStorage['aType'];
    //$scope.dateFormat=function(time){
    //    var t=new Date(time);
    //    var year= t.getFullYear();
    //    var month= t.getMonth()+1;
    //    var day= t.getDate();
    //    var hours= t.getHours();
    //    hours<10&&(hours="0"+hours);
    //    var minute= t.getMinutes();
    //    //var s= t.getMinutes();
    //    //console.log(year+"-"+month+"-"+day+" "+hours+":"+minute);
    //    return year+"-"+month+"-"+day+" "+hours+":"+minute;
    //}
}]);
//房间动态
app.controller("roomCtrl",['$scope','$http',function($scope,$http){
    $scope.roomState=function(page){
        $http.get("data/room_status.php?pageNum="+page)
            .success(function (data) {
                $scope.roomList = data.data;
                //console.log($scope.roomList );
                $scope.pageCount=data.pageCount;
            });
    };
    $scope.roomState(1);
    $scope.statu=function(statu){
        console.log($scope.rstatu);
        $scope.rstatu=statu;
    }
     }
]);
//菜单管理
app.controller("dishCtrl",['$scope','$http',
    function($scope,$http) {
        $scope.newPage = function (page,type) {
            $http.get("data/food_select.php?pageNum=" + page+"&type="+type)
                .success(function (data) {
                    $scope.foodList = data.data;
                    $scope.pageCount = data.pageCount;
                });
        };
        $scope.newPage(1,'000');
        $scope.checkAll=function(){
            $("input[name='id[]']").each(function(){
                if (this.checked) {
                    this.checked = false;
                }
                else {
                    this.checked = true;
                }
            });
        };
        $scope.DelSelect=function(){
            var Checkbox=false;
            $("input[name='id[]']").each(function(){
                if (this.checked==true) {
                    Checkbox=true;
                }
            });
            if (Checkbox){
                var t=confirm("您确认要删除选中的内容吗？");
                if (t==false) return false;
            }
            else{
                alert("请选择您要删除的内容!");
                return false;
            }
        }

    }]);
//动态管理
app.controller("newCtrl",['$scope','$http',
    function($scope,$http) {
        $scope.newPage=function(page){
            $http.get("data/news_select.php?pageNum="+page)
                .success(function (data) {
                    $scope.newList = data.data;
                    console.log($scope.newList );
                    $scope.pageCount=data.pageCount;
                    console.log($scope.pageCount);
                    var html='';
                    for(var i;i<$scope.pageCount;i++){
                        html+='<a href="" ng-click="newPage("'+i+'")" >'+i+'</a>';
                        console.log(i);
                    }
                    console.log(html);
                });
        }
        $scope.newPage(1);
        $scope.checkAll=function(){
            $("input[name='id[]']").each(function(){
                if (this.checked) {
                    this.checked = false;
                }
                else {
                    this.checked = true;
                }
            });
        };
        $scope.DelSelect=function(){
                var Checkbox=false;
                $("input[name='id[]']").each(function(){
                    if (this.checked==true) {
                        Checkbox=true;
                    }
                });
                if (Checkbox){
                    var t=confirm("您确认要删除选中的内容吗？");
                    if (t==false) return false;
                }
                else{
                    alert("请选择您要删除的内容!");
                    return false;
                }
        }

    }]);
//修改密码
app.controller("updatePwdCtrl",['$scope','$http',
    function($scope,$http) {
        $scope.name=sessionStorage['name'];
        $scope.mySwitch=false;
        $scope.update=function(){
            if($scope.mySwitch==true){
                $scope.mySwitch=false;
            }else if($scope.mySwitch==false){
                $scope.mySwitch=true;

            }
            //$(this).pre().children("input").removeAttr("disabled");
        }
    }

]);
//会员
app.controller("userCtrl",['$scope','$http',
    function($scope,$http) {
        $scope.user=function(page){
            $http.get("data/user_select.php?pageNum="+page)
                .success(function (data) {
                    $scope.userList = data.data;
                    console.log($scope.userList );
                    $scope.pageCount=data.pageCount;
                });
        }
        $scope.user(1);
    }
]);
//订单处理
app.controller("orderCtrl",['$scope','$http',
    function($scope,$http) {
        $scope.order=function(page){
            $http.get("data/order_select.php?pageNum="+page)
                .success(function (data) {
                    $scope.orderList = data.data;
                    console.log($scope.orderList );
                    $scope.pageCount=data.pageCount;
                });
        }
        $scope.order(1);
    }
]);
function del(id){
    if(confirm("您确定要删除吗?")){

    }
}


