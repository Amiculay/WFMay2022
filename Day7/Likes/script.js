var count1 = 9;
var count2 = 12;
var count3 = 9;

var countElement1 = document.querySelector("#like1");
var countElement2 = document.querySelector("#like2");
var countElement3 = document.querySelector("#like3");

function like1() {
    count1++;
    countElement1.innerText = count1 + " Like(s)";
    console.log("Neil M like count: ", count1);
}

function like2() {
    count2++;
    countElement2.innerText = count2 + " Like(s)";
    console.log("Nichole K like count: ", count2);
}

function like3() {
    count3++;
    countElement3.innerText = count3 + " Like(s)";
    console.log("Jim R like count: ", count3);
}