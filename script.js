// Задача 3 


// document.querySelector('button').onclick = myClick;

// function myClick() {
//   let a = document.querySelector('.input').value;
//   alert(a);
// }





// Задача 4 

document.querySelector('button').onclick = myClick;

function myClick() {
  let value = document.querySelector('input').value;

  if (value == "google"){
    alert("Yandex круче. Но это не точно")
  }
  else {
    value
  }
}




// Задача 5 

// const arr = [
//   {name: 'Den', age: 29},
//   {name: 'Victor', age: 40},
//   {name: 'Olga', age: 20}
// ]

// document.querySelector('button').onclick = myClick;

// function myClick() {
//   alert(arr[0].name);
// }




// Задача 6 

// function superSum(a, b) {
//   alert(a + b);
// }

// superSum(4, 5);




// Задача 7 

// const array = [12, 356, 34, 2, -3, 0]
// const max = getMaxValue(array);
// const min = getMinValue(array);

// alert(max);
// alert(min);


// function getMaxValue(array){
//   let max = array[0];
//   for (let i = 0; i < array.length; i++) {
//       if (max < array[i]) max = array[i];
//   }
//   return max;
// }

// function getMinValue(array){
//   let min = array[0];
//   for (let i = 0; i < array.length; i++) {
//       if (min > array[i]) min = array[i];
//   }
//   return min;
// }






// Задача 8 


// let a = "XXX";
// let b = "YYY";
// let change = a;

// a = b;
// b = change;

// console.log(a);
// console.log(b);





// Задача 9 

// function findMax(arr) {
//   function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//   }


//   let sortNumbers = arr.sort(compareNumeric);
//   let maxNumber = sortNumbers.pop();

//   return (console.log(maxNumber));
// }

// findMax([12, 343, 454, -23, 0]);






// Задача 10 

// document.querySelector('button').onclick = myClick;

// function myClick() {
//   setTimeout(() => {
//     alert("Yandex круче. Но это не точно")
//   }, 3000);
// }

