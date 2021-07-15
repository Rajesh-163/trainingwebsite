var slide = document.getElementById("slider");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var s1=document.getElementById("slide1");
var s2=document.getElementById("slide2");
var s3=document.getElementById("slide3");
var s4=document.getElementById("slide4");

btn1.onclick = function(){
    
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    s1.classList.add("visible-onclick");
    s2.classList.add("not-visible-onclick");
    s3.classList.add("not-visible-onclick");
    s4.classList.add("not-visible-onclick");
}
btn2.onclick = function(){
   
    btn2.classList.add("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn1.classList.remove("active");
    s1.classList.add("not-visible-onclick");
    s2.classList.add("visible-onclick");
    s3.classList.add("not-visible-onclick");
    s4.classList.add("not-visible-onclick");
}
btn3.onclick = function(){
   
    btn3.classList.add("active");
    btn1.classList.remove("active");
    btn4.classList.remove("active");
    btn2.classList.remove("active");
    s1.classList.add("not-visible-onclick");
    s2.classList.add("not-visible-onclick");
    s3.classList.add("visible-onclick");
    s4.classList.add("not-visible-onclick");
}
btn4.onclick = function(){
    
    btn4.classList.add("active");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    s1.classList.add("not-visible-onclick");
    s2.classList.add("not-visible-onclick");
    s3.classList.add("not-visible-onclick");
    s4.classList.add("visible-onclick");
}