
// Home work one
function foo (){
    console.log('foo'); 
    function bar (){
        console.log('bar');    
    }
    bar();
}
foo();


// // Home work one
// function foo (){
//     console.log('foo'); 
//     bar();
// }
// foo();

// function bar (){
//     console.log('bar');    
// }

// Problem  Two

function make_avg(num1, num2, num3){
    const total = num1 + num2 + num3;
    const mark_average = total / 3;
    return mark_average;
}

const num1 = 80;
const num2 = 40;
const num3 = 60;

var total_avrege = make_avg(num1, num2, num3);
console.log('Average of three integer is :', total_avrege);


// Problem three






    function make_array_avg(){
        var nums = [10, 2, 30, 4, 5];
        var totalSum = 0;
        for(i=0; i < nums.length; i++){
            totalSum += nums[i];
            var avg = totalSum/ nums.length;
        }
        console.log('the :',avg);
        // return totalSum;
    } 
    make_array_avg();
    
    
    // var total_avg = make_array_avg(nums);
    // console.log('Your avg :',total_avg);

// console.log('total avg:', avg);


// function make_array_avg(){
//     for(var i=0; i < array.length; i++ )
//     sum = sum + array[i];
//     console.log(sum);
// }

//   var array = [30, 45, 78, 90, 54, 1, 87];


// Home work Four way one
// has paremeter
// function odd_even(number){
    
//     if (number % 2 === 0 ){
//         console.log(number, 'this number is even');
//     }
//     else{
//         console.log(number, 'this number is odd');
//     }   
    
// }
// odd_even(25);

// Home work Four way has return has paremater
function odd_even(number){
    
    var number_type = number % 2 === 0 ;
    return number_type;       

}
var return_type = 32;
var has_return = odd_even(return_type);
console.log('the number is ',return_type, has_return);

// Problem Five 

var signal = 'red';

if (signal === 'green'){
    console.log('You can cross the road');
}
else if (signal === 'yellow'){
    console.log('Stop dont cross the road');
}
else if (signal === 'red' ){
    console.log('You are in danger');
}
// Problem Five using switch case

switch(signal){
    case 'green':
        console.log('You can cross the road');
        break;
    case 'yellow':
        console.log('Stop dont cross the road');
        break;
    default:
        console.log('You are in danger')
}
