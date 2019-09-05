/*
    父控制器，要注入$scope
 */
app.controller("baseController",function ($scope) {

    // 加载分页组件
    $scope.paginationConf = {
        currentPage: 1, // 当前页码初始化值
        totalItems: 10, // 总记录数初始化值
        itemsPerPage: 10, // 每页记录数初始化值
        perPageOptions: [10, 20, 30, 40, 50], // 每页记录数选项
        onChange: function () { // 改变当前分页组件的时候触发的函数
            $scope.reloadList(); // 调用初始化分页方法，重新加载信息
        }
    };

    // 初始化分页方法的调用
    $scope.reloadList = function () {
        $scope.search($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    };


    $scope.selectIds = []; // 空的数组
    // 选中复选框
    $scope.updateSelection = function (event, brandId) { // event表示事件源的形参
        // 如何判断复选框是否被选中
        // 获取当前复选框的选中状态
        if (event.target.checked) {
            $scope.selectIds.push(brandId);
        } else {
            // 先去获取当前id在selectIds数组中所在的索引
            var index = $scope.selectIds.indexOf(brandId);
            $scope.selectIds.splice(index, 1); // 根据索引去切割(删除)，1表示删除个数
        }
    };

    /**
     * 提取json字符串数据中某个属性，返回拼接字符串 逗号分隔
     * 参数1jsonString 表示json类型的字符串
     * 参数2 key表示指定的属性
     */
    $scope.jsonToString = function (jsonString, key) {
        // 把json字符串转换为json对象
        var json = JSON.parse(jsonString);
        var value = ""; // 定义并初始化value属性值
        for (i = 0 ; i < json.length; i++) {
            if (i > 0) {
                value += ","; // 表示第一次不需要加逗号
            }
            value += json[i][key]; // 根据k值获取第i个value属性值
        }
        return value; // 最终效果应该是"华为,联想,小米"...
    }
});