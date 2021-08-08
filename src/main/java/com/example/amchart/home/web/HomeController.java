package com.example.amchart.home.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/chart")
public class HomeController {
    @RequestMapping("/bar")
    public String barChart(Model model) throws Exception {
        List<Integer> sampleData = new ArrayList<>();

        model.addAttribute("dataList", sampleData);
        return "/barChart";
    }

    @RequestMapping("/pie")
    public String pieChart() throws Exception {
        return "/pieChart";
    }

    @RequestMapping("/bar2")
    public String barChart2(Model model) throws Exception {
        return "/barChart2";
    }

    @RequestMapping("/all")
    public String allChart(Model model) throws Exception {
        return "/allChart";
    }
}
