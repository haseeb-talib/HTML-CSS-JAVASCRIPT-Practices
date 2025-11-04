
// task1

// if(!Array.prototype.myFilter){
//     Array.prototype.myFilter=function(callback){
//         const result =[]
//         for(let i=0; i<this.length; i++){
//             if(callback(this[i])){
//                 result.push(this[i])
//             }
//         }
//         return result
//     }
// }


// const fruits=[
//     "APPLE",
//     "ORANGE",
//     "BANANA",
//     "MANGO",
//     "GRAPES"
// ];

// const NoBANANAfruits =fruits.filter((fruit)=> fruit !=="BANANA")
// const MyNoBANANAfruits = fruits.myFilter((fruit)=> fruit !=="BANANA")

// console.log("pahly sy bana howa  ", NoBANANAfruits)
// console.log("apna howa ",MyNoBANANAfruits)


// task2

// const arr = [1, 2, 4, 6, 7];


// Array.prototype.myMap = function(callback){
//     const result = [];
//     for(let i = 0; i<this.length; i++){
//         console.log(this[i]);

//         const value = callback(this[i])
//         result.push(value)
//     }
//     return result;
// }

// // const arr = [1, 2, 4, 6, 7];

// const arr2 = arr.myMap ((item) => item*2)
// console.log(arr2)

// task3

// ""*push function*""
// if(!Array.prototype.myPush){
//     Array.prototype.myPush=function(){
//         const atIndex=this.length
//         for(let i=0; i<arguments.length; i++){
//         this[atIndex + i]=arguments[i]
//         }
//         return this.length ;
//     }
// }
// const numbers=[1,2,3,4,5]
// len =numbers.myPush(6,7)
// console.log(numbers);
// console.log(len);

//""*pop function*""
// if(!Array.prototype.myPop){
//     Array.prototype.myPop=function(){
       
//         lastIndex=this.length
//           if(lastIndex==0){
//             return undefined
//          }
//          val=this[lastIndex-1]
       
//         this.length=lastIndex-1
//          return val
//     } 
    
// }
// const numbers=[]
// len = numbers.myPop()
// console.log(numbers);
// console.log(len);

// ""*Shift function*""
// if(!Array.prototype.myShift){
//     Array.prototype.myShift=function(){
       
//          if(this.length==0){
//             return "empty array"
//          }
//         fstIndexVal=this[0]
//         //  this.length = this[fstIndexVal]-1
//          for(let i=0; i<this.length-1;i++){
//             this[i]=this[i+1]    
//          }
//          this.length = this.length - 1;
//          return fstIndexVal
//     } 
    
// }
// const numbers=["a","b","c","d","e"]
// len = numbers.myShift()
// console.log(numbers);
// console.log(len);

// ""*UnShift Function*""
// if(!Array.prototype.myUnShift){
//     Array.prototype.myUnShift=function(){
       
//          if(this.length==0){
//             return "empty array"
//          }
//          let fstIndexVal=arguments.length
//          for(let i=this.length-1; i>=0;i--){
//             this[i+fstIndexVal]=this[i]    
//          }
//           for (let i = 0; i < fstIndexVal; i++) {
//       this[i] = arguments[i];
//     }
//        this.length+=fstIndexVal
       
//          return this.length
//     } 
    
// }
// const numbers=["b","c","d","e"]
// len = numbers.myUnShift("a")
// console.log(numbers);
// console.log(len);

// ""*includes function*""
// if(!Array.prototype.myincludes){
//     Array.prototype.myincludes=function(){
       
//          if(this.length==0){
//             return "empty array"
//          }
//        Val=arguments
//         console.log(Val);
        
//          for(let i=0; i<this.length;i++){
//             if(Val == this[i]){
//                 return true;
                
//          }
//          else{
//             return false
//          }
//         }
//          }    
// }
// const numbers=[1,2,3,4]
// console.log(numbers.myincludes(7));

// ""*for each*""
if(!Array.prototype.myforEach){
    Array.prototype.myforEach=function(callback){
       for(let i=0;i<this.length;i++){
        callback(this[i])
       } 
         }    
}
const numbers=[1,2,3,4]
const num = numbers.myforEach((num)=> console.log(num*2));

// ""*map function*""
// if(!Array.prototype.Mymap){
//     Array.prototype.Mymap=function(callback){
//      const result= []
//     for(let i=0 ; i<this.length; i++){
//         const value = callback(this[i])
//         result.push(value)
//     }
//     return result;
// }
// }
//  const arr=[1,2,3,4,5]
//   const arr2=  arr.Mymap((item) => item*5)
//   console.log(arr2);








