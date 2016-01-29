package com.test.promises;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Naver on 2016-01-25.
 */
@Controller
public class PromisesController {
    @RequestMapping(value = "/javascript")
    public String testPromises() {
        return "promises";
    }

    @RequestMapping(value = "/ajaxTest", method = RequestMethod.GET, produces = "application/json; charset=utf8")
    @ResponseBody
    public String ajaxTest() {
        /*
         jsonText = {
                        title   :  <h1>치약에 뭐가 들어 있나?</h1>
                        chapterUrls : [ chapter1.json, chapter2.json, chapter3.json, chapter4.json, chapter5.json]
                    }
        */
        String jsonText = "{ \"title\": \"<h1><치약에 뭐가 들어 있나?></h1>\","
                + "\"chapterUrls\": [ \"chapter1.json\",\"chapter2.json\",\"chapter3.json\",\"chapter4.json\",\"chapter5.json\"]}";
        return jsonText;

    }


    @RequestMapping(value = "/chapter1.json", method = RequestMethod.GET , produces = "application/json; charset=utf8")
    @ResponseBody
    public String chapter1() throws InterruptedException {
        //Thread.sleep(1000);
        String jsonText = "{ \"content\" : \"ch1, 에나멜과 연마제\"}";
        return jsonText;
    }

    @RequestMapping(value = "/chapter2.json", method = RequestMethod.GET, produces = "application/json; charset=utf8")
    @ResponseBody
    public String chapter2() throws InterruptedException {
        Thread.sleep(1000);
        String jsonText = "{ \"content\" : \"ch2. 불소요\"}";
        return jsonText;
    }


    @RequestMapping(value = "/chapter3.json", method = RequestMethod.GET, produces = "application/json; charset=utf8")
    @ResponseBody
    public String chapter3() throws InterruptedException {
        Thread.sleep(3000);
        String jsonText = "{ \"content\" : \"ch3. 방부제요\"}";
        return jsonText;
    }


    @RequestMapping(value = "/chapter4.json", method = RequestMethod.GET, produces = "application/json; charset=utf8")
    @ResponseBody
    public String chapter4() throws InterruptedException {
        Thread.sleep(2000);
        String jsonText = "{ \"content\" : \"ch4. 첨가에죠\"}";
        return jsonText;
    }

    @RequestMapping(value = "/chapter5.json", method = RequestMethod.GET, produces = "application/json; charset=utf8")
    @ResponseBody
    public String chapter5() throws InterruptedException {
        Thread.sleep(1000);
        String jsonText = "{ \"content\" : \"ch5. 염기 요\"}";
        return jsonText;
    }
}
