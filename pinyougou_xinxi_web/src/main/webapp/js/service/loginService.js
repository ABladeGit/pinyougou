/**
 登录
 */
app.service("loginService",function ($http) {
    this.showLoginName = function () {
        return $http.get('../login/getName.do')
    }
})