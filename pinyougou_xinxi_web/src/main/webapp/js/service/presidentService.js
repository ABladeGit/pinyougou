//服务层
app.service('presidentService',function($http){

    //读取列表数据绑定到表单中
    this.findAll=function(){
        return $http.get('../president/findAll.do');
    }
    //分页 
    this.findPage=function(page,rows){
        return $http.get('../president/findPage.do?page='+page+'&rows='+rows);
    }
    //查询实体
    this.findOne=function(id){
        return $http.get('../president/findOne.do?id='+id);
    }
    //增加 
    this.add=function(entity){
        return  $http.post('../president/add.do',entity );
    }
    //修改 
    this.update=function(entity){
        return  $http.post('../president/update.do',entity );
    }
    //删除
    this.dele=function(ids){
        return $http.get('../president/delete.do?ids='+ids);
    }
    //搜索
    this.search=function(page,rows,searchEntity){
        return $http.post('../president/search.do?page='+page+"&rows="+rows, searchEntity);
    }

    this.updateStatus = function (presidentId, status) {
        return $http.get('../president/updateStatus.do?presidentId='+presidentId+'&status='+status);
    }
});
