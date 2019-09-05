//控制层 
app.controller('presidentController' ,function($scope,$controller   ,presidentService){

    $controller('baseController',{$scope:$scope});//继承

    //读取列表数据绑定到表单中  
    $scope.findAll=function(){
        presidentService.findAll().success(
            function(response){
                $scope.list=response;
            }
        );
    }

    //分页
    $scope.findPage=function(page,rows){
        presidentService.findPage(page,rows).success(
            function(response){
                $scope.list=response.rows;
                $scope.paginationConf.totalItems=response.total;//更新总记录数
            }
        );
    }

    //查询实体 
    $scope.findOne=function(id){
        presidentService.findOne(id).success(
            function(response){
                $scope.entity= response;
            }
        );
    }

    //保存 
    $scope.save=function(){
        var serviceObject;//服务层对象  				
        if($scope.entity.id!=null){//如果有ID
            serviceObject=presidentService.update( $scope.entity ); //修改  
        }else{
            serviceObject=presidentService.add( $scope.entity  );//增加 
        }
        serviceObject.success(
            function(response){
                if(response.success){
                    //重新查询 
                    $scope.reloadList();//重新加载
                }else{
                    alert(response.message);
                }
            }
        );
    }


    //批量删除 
    $scope.dele=function(){
        //获取选中的复选框			
        presidentService.dele( $scope.selectIds ).success(
            function(response){
                if(response.success){
                    $scope.reloadList();//刷新列表
                    $scope.selectIds=[];
                }
            }
        );
    }

    $scope.searchEntity={};//定义搜索对象 

    //搜索
    $scope.search=function(page,rows){
        presidentService.search(page,rows,$scope.searchEntity).success(
            function(response){
                $scope.list=response.rows;
                $scope.paginationConf.totalItems=response.total;//更新总记录数
            }
        );
    }

    $scope.updateStatus = function (sellerId,status) {
        presidentService.updateStatus(sellerId,status).success(
            function (response) {
                if (response.success){
                    $scope.reloadList(); // 刷新
                } else {
                    alert(response.message);
                }
            }
        )
    }

});	