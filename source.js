
// //create object and set object value from user
// function getInput() {
//     const name = document.getElementById("name").value;
//     const age = document.getElementById("role").value;
//     const city = document.getElementById("city").value;
//     const grade =document.getElementById("grade").value;

//     console.log("Your name: " + name);
    
//     const obj = {
//         username: name,
//         role: age,
//         city: city
//     };

//     console.log("Object before deletion:");
//     console.log(obj);

//     // deletion of  a objectgetInput
//     delete obj.city;

//     console.log("Object after deletion:");
//     console.log(obj);

//    //shallow copy using spread operator
//     const copyObj = { ...obj };

//     console.log("Copy object:");
//     console.log(copyObj);



   

//   //iteration of the object
//     const example = [
//         {
//             "id": 1,
//             "name": "Leanne Graham",
//             "username": "Bret",
//             "email": "Sincere@april.biz",
//             "address": {
//                 "street": "Kulas Light",
//                 "suite": "Apt. 556",
//                 "city": "Gwenborough",
//                 "zipcode": "92998-3874"
//             },
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             },
//             "phone": "1-770-736-8031 x56442",
//             "website": "hildegard.org",
//             "company": {
//                 "name": "Romaguera-Crona",
//                 "catchPhrase": "Multi-layered client-server neural-net",
//                 "bs": "harness real-time e-markets"
//             }
//         },
//         {
//             "id": 2,
//             "name": "Ervin Howell",
//             "username": "Antonette",
//             "email": "Shanna@melissa.tv",
//             "address": {
//                 "street": "Victor Plains",
//                 "suite": "Suite 879",
//                 "city": "Wisokyburgh",
//                 "zipcode": "90566-7771"
//             },
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             },
//             "phone": "010-692-6593 x09125",
//             "website": "anastasia.net",
//             "company": {
//                 "name": "Deckow-Crist",
//                 "catchPhrase": "Proactive didactic contingency",
//                 "bs": "synergize scalable supply-chains"
//             }
//         },
//         {
//             "id": 3,
//             "name": "Clementine Bauch",
//             "username": "Samantha",
//             "email": "Nathan@yesenia.net",
//             "address": {
//                 "street": "Douglas Extension",
//                 "suite": "Suite 847",
//                 "city": "McKenziehaven",
//                 "zipcode": "59590-4157"
//             },
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             },
//             "phone": "1-463-123-4447",
//             "website": "ramiro.info",
//             "company": {
//                 "name": "Romaguera-Jacobson",
//                 "catchPhrase": "Face to face bifurcated interface",
//                 "bs": "e-enable strategic applications"
//             }
//         }
//     ];


//     // const example = 
//     //     {
//     //         "id": 1,
//     //         "name": "Leanne Graham",
//     //         "username": "Bret",
//     //         "email": "Sincere@april.biz",
//     //         "address": {
//     //             "street": "Kulas Light",
//     //             "suite": "Apt. 556",
//     //             "city": "Gwenborough",
//     //             "zipcode": "92998-3874"
//     //         },
//     //         "geo": {
//     //             "lat": "-37.3159",
//     //             "lng": "81.1496"
//     //         },
//     //         "phone": "1-770-736-8031 x56442",
//     //         "website": "hildegard.org",
//     //         "company": {
//     //             "name": "Romaguera-Crona",
//     //             "catchPhrase": "Multi-layered client-server neural-net",
//     //             "bs": "harness real-time e-markets"
//     //         }
//     //     };

  
  



//    // iteration using for... in loop for object
//   for(let key in example){
//     console.log(key,example[key]);
//   }

// //itertaion using for... of loop for object
// for(let i of example){
//     console.log(i);
// }



// const array=[1,3,5]
// array[2]=10;
// array[90]=8



// let triple=(item)=>{
       
//     return item*3;
//    }

//  let double=(item,index,array)=>{
       
//     array[index]=item*2;
//    }


//    let even=(item)=>{
//     return (item%2===0)
//    }

// //for...of 
// for(let i of array){
//     console.log(i)
// }

// // for...in
// for(let val in array){
//     console.log(val+"of"+array[val])
// }
// // foreach

// array.forEach(double);
//     console.log(array );


// const mapping=array.map(triple)
// console.log("array using map"+mapping)


// const filtering=array.filter(even)
// console.log("array using filter"+filtering)



// const reduce=array.reduce(function(sum,item){
//     sum+=item
//     return sum
// },0)

// console.log(reduce)


// let result

// if(grade.length!==1 || grade==undefined){
//     result="grade should be albhabet , length=1 or give a grade ";
// }
// else{
//     switch(grade){
    
//         case "0" :
//              result="live project in 1st month"  
//              break;
//         case "A":
//             result=" live project in 2nd month"
//             break;
//         case "b":
//             result="live project in 3rd month"
//             break;
//         case "c":
//             result="live project in 4 th month"
//             break;
//         default:
//             result="rejected"
//             break;
//         }
    
      
            
//     }
//     document.getElementById("result_word").innerHTML=result;
//     console.log(result)



//    document.getElementById("result_word").style.color="green"
//    alert(document.getElementById("name").tagName)
//    document.getElementById("btn").style.backgroundColor="blue"





//   }
  


// function createTable(){
//     let row=prompt("Enter number of rows");
//     let col=prompt("Enter the number of column")
 
 
    
//      const table = document.createElement("table");
//      const body = document.createElement("tbody");
   
    
//      for (let i = 0; i < row; i++) {
       
//        const rows = document.createElement("tr");
   
//        for (let j = 0; j < col; j++) {
         
//          const cols = document.createElement("td");
       
//          rows.appendChild(cols);
//        }
//        body.appendChild(rows);
//      }
   
  
//      table.appendChild(body);
 
//      document.body.appendChild(table);
    
//      table.setAttribute("border", "1");
// }

// createTable()





// function counter(count) {

    
//     console.log(count);

   
//     if(count > 1) {

      
//         count = count - 1;

       
//         counter(count);
//     } else {

      
//         return;
//     };
// };
// counter(5);









