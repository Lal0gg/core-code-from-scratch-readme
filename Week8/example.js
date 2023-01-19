// queue = ["sheep", "sheep", "sheep", "wolf", "sheep"];

// function warnTheSheep(queue) {
//   const stateWolf = queue.indexOf("wolf");
//   if (stateWolf == queue.length - 1)
//     return "Pls go away and stop eating my sheep";
//   const stateSheep = queue.length - (stateWolf + 1);
//   return (
//     "Oi! Sheep number " + stateSheep + "! You are about to be eaten by a wolf!"
//   );
// }

// warnTheSheep(queue);

//names = ["Peter"]
//names = ["Jacob", "Alex"]
//names = ["Max", "John", "Mark"]
// names = ["Alex", "Jacob", "Mark", "Max"];
// function likes(names) {
//   let contador = 0;
//   for (let i in names) {
//     contador++;
//   }
//   if (contador == 0) {
//     return (message = "no one likes this");
//   } else if (contador == 1) {
//     let niuname;
//     for (let x in names) {
//       niuname = names[x];
//     }
//     return niuname + " likes this";
//   } else if (contador == 2) {
//     let niuname0, niuname1;
//     for (let x in names) {
//       niuname0 = names[0];
//       niuname1 = names[1];
//     }
//     return niuname0 + " and " + niuname1 + " like this";
//   } else if (contador == 3) {
//     let niuname00, niuname11, niuname22;
//     for (let x in names) {
//       niuname00 = names[0];
//       niuname11 = names[1];
//       niuname22 = names[2];
//     }
//     return niuname00 + ", " + niuname11 + " and " + niuname22 + " like this";
//   } else if (contador > 3) {
//     let n;
//     n = contador - 2;
//     let niuname00, niuname11;
//     for (let x in names) {
//       niuname00 = names[0];
//       niuname11 = names[1];
//     }
//     return niuname00 + ", " + niuname11 + " and " + n + " others like this";
//   }
// }
// likes(names);
// var countBits = function(n) {
//   let niu;
//   niu= n.toString(2);
//   let contador=0;
//   for(let x in niu){
//     if(niu[x]==1){
//       contador++;
//     }
//   }
//   return contador
// }
// countBits(15)

function order(words) {
  let array = words.split(' ');
  let sortedArray = [];
  for (i = 0; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}