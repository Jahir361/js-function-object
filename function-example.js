function avarageMarks(trimester1, trimester2, trimester3){
    const totalThreeTri = trimester1 + trimester2 + trimester3 ;
    const average = totalThreeTri/3;
    return average;
}
const trimester1 = 80;
const trimester2 = 70;
const trimester3 = 90;
var myAverage = avarageMarks(trimester1,trimester2,trimester3);
console.log('totl average : ' , myAverage);