var addInput = document.getElementById('addInput');
var addButton = document.getElementById('addButton');
var dateInput = document.getElementById('dateInput');
var TaskContainer = []

if(localStorage.getItem("Task") != null){
    TaskContainer = JSON.parse(localStorage.getItem("Task"));
    display(TaskContainer);
}
function addTask(){
    if(validateDate() && validateTask()){
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          });
  var Task = {
    title:addInput.value,
    date:dateInput.value
  }
  TaskContainer.push(Task);
  localStorage.setItem("Task",JSON.stringify(TaskContainer))
  display(TaskContainer)
  clear();
}
}
function clear(){
    addInput.value = "";
    dateInput.value = "";

}

function display(arr){
  var cartoona = ``;
  for(var i=0 ; i<arr.length ; i++){
   cartoona += `
   <div class="col-lg-12">
   <div class="form-check d-flex align-items-center px-3">
     <input class="form-check-input mx-0" type="checkbox"  id="${arr[i].title}">
     <label class="form-check-label h3 m-3 p-0" for="${arr[i].title}">${arr[i].title}</label>
     <div class="icon ms-auto d-flex align-items-center gap-2" >
       <i class="fa-solid fa-trash-can text-danger" onclick="deleteTask(${i})"></i>
       <div class="bg-white border border-warning rounded p-2">
         <i class="fa-solid fa-hourglass-half text-warning"></i>
         <span>
         ${arr[i].date}
         </span>
       </div>
     </div>
   </div>
 </div>
   `;

    
  }
  document.getElementById('TaskContent').innerHTML = cartoona
}
function deleteTask(id){
    TaskContainer.splice(id,1);
    localStorage.setItem("Task",JSON.stringify(TaskContainer));
    display(TaskContainer)
}
function validateDate(){
    var cuurentDate = new Date().toJSON().slice(0,10)
    if(dateInput.value < cuurentDate ){
        swal("Enatr Valid Date");
        return false ;
    }else{
        return true;
    }
}
function validateTask(){
    var regx  = /.+/ ; 
    if(regx.test(addInput.value)){
        return true
    }else{
        swal("Enatr Task");
        return false ;
    }
}

// Problems

//1- Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array.
//  Otherwise, return "there is no 7 in the array".

// function check(arr){
//     var newarr = []
// for(var i=0 ; i<arr.length ; i++){
//   for(var y=0 ; y<arr[i].length ; y++){
//      if(arr[i][y]>=0 && arr[i][y]<=9  ){
//          newarr.push(arr[i])
//      }
//   }  
// }
// console.log(newarr);

// }
// ----------------------------------------------------------------------------------------------------

//2-Create a function that takes an array of strings and returns an array with only the strings
//that have numbers in them. If there are no strings containing numbers, return an empty array.

// function check(arr){
//     var newArr=[];
//     for(var i=0; i<arr.length;i++){
//         for(var j=0;j<arr[i].length;j++){
//             if(arr[i][j]>=0 && arr[i][j]<=9){
//                 newArr.push(arr[i])

//                 // console.log(arr[i]);
//             }
          
//         }
//     }
//     console.log(newArr);

// }
// // check(["1aasadas77", "aaaa", "2b", "b"])


// Another Solution From Khaled 
// function numInStr(arr){
//     for(var i=0;i<arr.length;i++){
//         if(arr[i].includes("1")
//         ||arr[i].includes("2")
//         ||arr[i].includes("3")
//         ||arr[i].includes("4")
//         ||arr[i].includes("5")
//         ||arr[i].includes("6")
//         ||arr[i].includes("7")
//         ||arr[i].includes("8")
//         ||arr[i].includes("9")==true){

//             console.log(arr[i]);
//         }

//     }
// }

// numInStr(["this is a test", "test1" ,"12sa"]);



// ----------------------------------------------------------------------------------------------------


// 3-Write a sum method which will work properly when invoked using either syntax below.

// function sum(x){
//   if(arguments.length == 2){
//     console.log(arguments[0]+arguments[1]);
//   }else{
//     return function(y){
//         console.log((x+y));
//     }
//   }

// }
//  sum(2,3)   
// sum(2)(3)
