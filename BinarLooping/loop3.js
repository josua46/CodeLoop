// let controller = true // jika true jalan jika false tidak jalan

// while(controller){
//     console.log('Jalan')
//      break
// }

let controller = false
let iterasiDowhile = 1
do {
    console.log('nilai controller', controller)
    console.log('iterasi do while ke', iterasiDowhile)
    
iterasiDowhile++
controller = iterasiDowhile <= 10
 
}
while(controller)