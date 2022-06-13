let pronombre = ["El","Mi","Tu"]
let adjetivo = ["Bueno","Feo","Malo"]
let nombre = ["Zendaya","Daniel","Robbie"]
let ethernet = [".com",".net",".es"]


for(let i = 0;i < pronombre.length;i++){
    for(let y = 0;y < adjetivo.length;y++){
        for(let z = 0; z < nombre.length;z++){
            for(let x = 0;x < ethernet.length;x++)
            console.log(pronombre[i]+adjetivo[y]+nombre[z]+ethernet[x])
        }
    }


}