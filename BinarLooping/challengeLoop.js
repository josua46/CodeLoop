// lantai ganjil : menyapu
// lantai genap : mengepel

let controller = true
let ganjil = 1
let genap = 2
do {
    console.log('Menyapu lantai ', ganjil)
    console.log('Mengepel lantai', genap)
    
 ganjil = ganjil + 2
 genap = genap + 2
 
controller = ganjil  <=10
controller = genap  <=10
}
while(controller)