package com.myroad;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Naver on 2016-01-26.
 */
@Controller
public class MainController {

    @RequestMapping(value = "/main")
    public String mainView() {
        return "nothing";
    }
}
