/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var x = 0;
var pa = "";
var pa2 = "";
var pa3 ="";
$(document).ready(function () {
    $("span").hide();

    $("#elgame1").click(function () {
        if (x % 2 === 0) {
            $("#im1").hide();
            $("#span1").show();
            x++;
            pa = "#elgame1";
            pa2 = "#im1";
            pa3 ="#span1";
        } else {
            $("#im1").hide();
            $("#span1").show();
            setTimeout(function(){
            if (pa !== "#elgame10") {
                $(pa3).hide(1000);
                $(pa2).show(1000);
                pa ="";
                pa2="";
                $("#span1").hide();
                $("#im1").show();
                x++;
                $("#tex").text("Sorry you didn't match the English word with the Dutch Words");
            }
            else{
                
                x++;
                $("#tex").text("Congratulations you managed to match one English word with one Dutch Word");
                $(pa).hide(1000);
                $("#elgame1").hide();
            }},1000);
        }
    
    //$(t).show();
    });

    $("#elgame2").click(function () {
        if (x % 2 === 0) {
            $("#im2").hide();
            $("#span2").show();
            x++;
            pa = "#elgame2";
            pa2 = "#im2";
            pa3 ="#span2";
        } else {
            $("#im2").hide();
            $("#span2").show();
            setTimeout(function(){
            if (pa !== "#elgame8") {
                $(pa3).hide(1000);
                $(pa2).show(1000);
                pa ="";
                pa2="";
                $("#span2").hide();
                $("#im2").show();
                x++;
                $("#tex").text("Sorry you didn't match the English word with the Dutch Words");
            }
            else{
                
                x++;
                $("#tex").text("Congratulations you managed to match one English word with one Dutch Word");
                $(pa).hide(1000);
                $("#elgame2").hide();
            }},1000);
        }
    });
    $("#elgame3").click(function () {
        if (x % 2 === 0) {
            $("#im3").hide();
            $("#span3").show();
            x++;
            pa = "#elgame3";
            pa2 = "#im3";
            pa3 ="#span3";
        } else {
            $("#im3").hide();
            $("#span3").show();
            setTimeout(function(){
            if (pa !== "#elgame12") {
                $(pa3).hide(1000);
                $(pa2).show(1000);
                pa ="";
                pa2="";
                $("#span3").hide();
                $("#im3").show();
                x++;
                $("#tex").text("Sorry you didn't match the English word with the Dutch Words");
            }
            else{
                
                x++;
                $("#tex").text("Congratulations you managed to match one English word with one Dutch Word");
                $(pa).hide(1000);
                $("#elgame3").hide();
            }},1000);
        }
    });

    $("#elgame4").click(function () {
        if (x % 2 === 0) {
            $("#im4").hide();
            $("#span4").show();
            x++;
            pa = "#elgame4";
            pa2 = "#im4";
            pa3 ="#span4";
        } else {
            $("#im4").hide();
            $("#span4").show();
            setTimeout(function(){
            if (pa !== "#elgame9") {
                $(pa3).hide(1000);
                $(pa2).show(1000);
                pa ="";
                pa2="";
                $("#span4").hide();
                $("#im4").show();
                x++;
                $("#tex").text("Sorry you didn't match the English word with the Dutch Words");
            }
            else{
                
                x++;
                $("#tex").text("Congratulations you managed to match one English word with one Dutch Word");
                $(pa).hide(1000);
                $("#elgame4").hide();
            }},1000);s
        }
    });

    $("#elgame5").click(function () {
        if (x % 2 === 0) {
            $("#im5").hide();
            $("#span5").show();
            x++;
            pa = "#elgame5";
            pa2 = "#im5";
            pa3 ="#span5";
        } else {
            $("#im5").hide();
            $("#span5").show();
            setTimeout(function(){
            if (pa !== "#elgame7") {
                $(pa3).hide(1000);
                $(pa2).show(1000);
                pa ="";
                pa2="";
                $("#span5").hide();
                $("#im5").show();
                x++;
                $("#tex").text("Sorry you didn't match the English word with the Dutch Words");
            }
            else{
                
                x++;
                $("#tex").text("Congratulations you managed to match one English word with one Dutch Word");
                $(pa).hide(1000);
                $("#elgame5").hide();
            }},1000);
        }
    });

    $("#elgame6").click(function () {
        if (x % 2 === 0) {
            $("#im6").hide();
            $("#span6").show();
            x++;
            pa = "#elgame6";
            pa2 = "#im6";
            pa3 ="#span6";
        } else {
            $("#im6").hide();
            $("#span6").show();
            setTimeout(function(){
            if (pa !== "#elgame11") {
                $(pa3).hide(1000);
                $(pa2).show(1000);
                pa ="";
                pa2="";
                $("#span6").hide();
                $("#im6").show();
                x++;
                $("#tex").text("Sorry you didn't match the English word with the Dutch Words");
            }
            else{
                
                x++;
                $("#tex").text("Congratulations you managed to match one English word with one Dutch Word");
                $(pa).hide(1000);
                $("#elgame6").hide();
            }},1000);
        }
    });

    $("#elgame7").click(function () {
        if (x % 2 === 0) {
            $("#im7").hide();
            $("#span7").show();
            x++;
            pa = "#elgame7";
            pa2 = "#im7";
            pa3 ="#span7";
        } else {
            $("#im7").hide();
            $("#span7").show();
            setTimeout(function(){
            if (pa !== "#elgame5") {
                $(pa3).hide(1000);
                $(pa2).show(1000);
                pa ="";
                pa2="";
                $("#span7").hide();
                $("#im7").show();
                x++;
                $("#tex").text("Sorry you didn't match the English word with the Dutch Words");
            }
            else{
                
                x++;
                $("#tex").text("Congratulations you managed to match one English word with one Dutch Word");
                $(pa).hide(1000);
                $("#elgame7").hide();
            }},1000);
        }
    });

    $("#elgame8").click(function () {
        if (x % 2 === 0) {
            $("#im8").hide();
            $("#span8").show();
            x++;
            pa = "#elgame8";
            pa2 = "#im8";
            pa3 ="#span8";
        } else {
            $("#im8").hide();
            $("#span8").show();
            setTimeout(function(){
            if (pa !== "#elgame2") {
                $(pa3).hide(1000);
                $(pa2).show(1000);
                pa ="";
                pa2="";
                $("#span8").hide();
                $("#im8").show();
                x++;
                $("#tex").text("Sorry you didn't match the English word with the Dutch Words");
            }
            else{
                
                x++;
                $("#tex").text("Congratulations you managed to match one English word with one Dutch Word");
                $(pa).hide(1000);
                $("#elgame8").hide();
            }},1000);
        }
    });

    $("#elgame9").click(function () {
        if (x % 2 === 0) {
            $("#im9").hide();
            $("#span9").show();
            x++;
            pa = "#elgame9";
            pa2 = "#im9";
            pa3 ="#span9";
        } else {
            $("#im9").hide();
            $("#span9").show();
            setTimeout(function(){
            if (pa !== "#elgame4") {
                $(pa3).hide(1000);
                $(pa2).show(1000);
                pa ="";
                pa2="";
                $("#span9").hide();
                $("#im9").show();
                x++;
                $("#tex").text("Sorry you didn't match the English word with the Dutch Words");
            }
            else{
                
                x++;
                $("#tex").text("Congratulations you managed to match one English word with one Dutch Word");
                $(pa).hide(1000);
                $("#elgame9").hide();
            }},1000);
        }
    });
    $("#elgame10").click(function () {
        if (x % 2 === 0) {
            $("#im10").hide();
            $("#span10").show();
            x++;
            pa = "#elgame10";
            pa2 = "#im10";
            pa3 ="#span10";
        } else {
            $("#im10").hide();
            $("#span10").show();
            setTimeout(function(){
            if (pa !== "#elgame1") {
                $(pa3).hide(1000);
                $(pa2).show(1000);
                pa ="";
                pa2="";
                $("#span10").hide();
                $("#im10").show();
                x++;
                $("#tex").text("Sorry you didn't match the English word with the Dutch Words");
            }
            else{
                
                x++;
                $("#tex").text("Congratulations you managed to match one English word with one Dutch Word");
                $(pa).hide(1000);
                $("#elgame10").hide();
            }},1000);
        }
    });

    $("#elgame11").click(function () {
        if (x % 2 === 0) {
            $("#im11").hide();
            $("#span11").show();
            x++;
            pa = "#elgame11";
            pa2 = "#im11";
            pa3 ="#span11";
        } else {
            $("#im11").hide();
            $("#span11").show();
            setTimeout(function(){
            if (pa !== "#elgame6") {
                $(pa3).hide(1000);
                $(pa2).show(1000);
                pa ="";
                pa2="";
                $("#span11").hide();
                $("#im11").show();
                x++;
                $("#tex").text("Sorry you didn't match the English word with the Dutch Words");
            }
            else{
                
                x++;
                $("#tex").text("Congratulations you managed to match one English word with one Dutch Word");
                $(pa).hide(1000);
                $("#elgame11").hide();
            }},1000);
        }
    });

    $("#elgame12").click(function () {
        if (x % 2 === 0) {
            $("#im12").hide();
            $("#span12").show();
            x++;
            pa = "#elgame12";
            pa2 = "#im12";
            pa3 ="#span12";
        } else {
            $("#im12").hide();
            $("#span12").show();
            setTimeout(function(){
            if (pa !== "#elgame3") {
                $(pa3).hide(1000);
                $(pa2).show(1000);
                pa ="";
                pa2="";
                $("#span12").hide();
                $("#im12").show();
                x++;
                $("#tex").text("Sorry you didn't match the English word with the Dutch Words");
            }
            else{
                
                x++;
                $("#tex").text("Congratulations you managed to match one English word with one Dutch Word");
                $(pa).hide(1000);
                $("#elgame12").hide();
            }},1000);
        }
    });


});

