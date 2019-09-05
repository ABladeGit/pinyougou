package com.pinyougou.service;

/*
import com.pinyougou.pojo.TbPresident;
import com.pinyougou.xinxi.service.PresidentService;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;
import java.util.List;

*/
/**
 * 自定义认证类
 *      认证管理本身采用配置版，这里也采用配置版，注入需要set方法
 *//*

public class UserDetailsServiceImpl implements UserDetailsService {

    // 采用配置版，注入到spring容器中
    private PresidentService presidentService;

    public void setPresidentService(PresidentService PresidentService) {
        this.presidentService = PresidentService;
    }

    // 重写UserDetailsService接口中的方法

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("经过了UserDetailsServiceImpl");

        // 1. 构建角色
        List<GrantedAuthority> list = new ArrayList<>();
        // 2. 添加角色
        list.add(new SimpleGrantedAuthority("ROLE_PRESIDENT"));
        // 3. 根据用户名查询实体类
        TbPresident tbPresident = presidentService.findOne(username); // 用户名就是sellerId

        // 判断状态
        if (tbPresident != null){
            if (tbPresident.getStatus().equals("1")){ // 商家已经审核通过
                return new User(username,tbPresident.getPassword(),list);
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
}
*/
