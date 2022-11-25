let a = 0, imagenav = 0, imagesize = 4, price = 125, sum = 0, finalprice = 0;
let img1 = document.getElementById("backimage");
let img2 = document.getElementById("backimage1");
function add() {
    a = a + 1;
    document.getElementById("num").innerHTML = a;
}
function sub() {
    if (a > 0) { a = a - 1; }
    document.getElementById("num").innerHTML = a;
}
function note() {
    if (a > 0) {
        sum = sum + a;
        finalprice = sum * price;
        //notification
        document.getElementById("note").style.display = 'flex';
        document.getElementById("note").innerHTML = sum;
        //items in cart
        document.querySelector("img").src = "images/image-product-1-thumbnail.jpg";
        document.getElementById("dis1").style.display = 'flex';
        document.getElementById("dis2").style.display = 'flex';
        document.getElementById("finalanswer").innerHTML = "Fall Limited Edition Sneakers " + price + "x" + sum + "=" + finalprice;
    }
}
function display() {
    document.getElementById("listitem").style.display = 'flex';
    if (finalprice == 0) {
        document.getElementById("dis1").style.display = 'none';
        document.getElementById("dis2").style.display = 'none';
    }
}
function remove() {
    document.getElementById("listitem").style.display = 'none';
}
function remove2() {
    document.getElementById("select").style.display = 'none';
}
function remove3() {
    document.getElementById("popup").style.display = 'none';
}
function remove4() {
    let ans = confirm("Are you sure?");
    if(ans == true){
        check();
    }
}
function remove5(){
    alert("items are checked out.");
    check();
}
function check()
{
    document.getElementById("dis1").style.display = 'none';
    document.getElementById("dis2").style.display = 'none';
    document.getElementById("note").style.display = 'none';
    sum = 0;
    finalprice = 0;
}
function image() {
    document.getElementById("popup").style.display = 'flex';
}
function nav() {
    document.getElementById("select").style.display = 'flex';
}

function imagenavset() {
    switch (imagenav) {
        case 1:
            img1.style.backgroundImage = "url('images/image-product-2.jpg')";
            break;
        case 2:
            img1.style.backgroundImage = "url('images/image-product-3.jpg')";
            break;
        case 3:
            img1.style.backgroundImage = "url('images/image-product-4.jpg')";
            break;
        default:
            img1.style.backgroundImage = "url('images/image-product-1.jpg')";
    }
}
//click image change
function imgclick1(){
    img2.style.backgroundImage = "url('images/image-product-1.jpg')";
}
function imgclick2(){
    img2.style.backgroundImage = "url('images/image-product-2.jpg')";
}
function imgclick3(){
    img2.style.backgroundImage = "url('images/image-product-3.jpg')";
}
function imgclick4(){
    img2.style.backgroundImage = "url('images/image-product-4.jpg')";
}
function imagenav1() {
    if (imagenav > 0) {
        imagenav = imagenav - 1;
    }
    else {
        imagenav = imagesize - 1;
    }
    imagenavset();
}
function imagenav2() {
    if (imagenav < imagesize) {
        imagenav = imagenav + 1;
    }
    else {
        imagenav = 1;
    }
    imagenavset();
}