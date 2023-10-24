let controllerWhile = true
let patokan = 1;
const limitIterasi = 10;

while(controllerWhile){
    console.log('diiterasi ke' ,patokan) // terjadi infinty loop
    // break // membantu berhentikan loop

patokan = patokan + 2
controllerWhile = patokan <= limitIterasi

console.log('iterasi selanjutnya', patokan)
console.log('lanjut iterasi', controllerWhile)
console.log()
}