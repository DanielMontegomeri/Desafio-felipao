let nomeDoHeroi = "Plinio"
let pontos = 1
let divisoes = [ 
     0, 1000 ,
     2000, 5000, 
     7000, 8000,
     9000, 10000]
let patentes = [
    "Ferro", "Bronze",
    "Prata", "Ouro",
    "Platina", "Ascendente",
    "Imortal", "Radiante"

]
let finalRank = ""


for(let i = 0 ; i < patentes.length; i++  ){
    
    if(pontos >= divisoes[i]){
    	finalRank = patentes[i]
       
       
		}

}
console.log("você, " + nomeDoHeroi + " está no rank " + finalRank)