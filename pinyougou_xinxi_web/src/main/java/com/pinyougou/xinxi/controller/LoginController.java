/*package com.pinyougou.xinxi.controller;


import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

*//**
 用于获取登录名
 *//*
@RestController
@RequestMapping("/login")
public class LoginController {

    @RequestMapping("/getName")
    public Map getName() {
        // 从springSecurity框架中获取登录名
        String name = SecurityContextHolder.getContext().getAuthentication().getName();

        // 存储到map集合中
        HashMap map = new HashMap<>();
        map.put("loginName",name);
        return map;
    }
}*/
