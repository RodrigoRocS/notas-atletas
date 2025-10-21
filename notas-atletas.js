let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

const mediaNotas = (dados) => {
    const media = dados.map((d) => {
        let notasValidas = d.notas.sort((a, b) => a - b).slice(1 , -1);
        //  console.log(nota);
        
        const mediaNota = notasValidas.reduce((acc, n) => acc + n , 0) / notasValidas.length;
        // console.log(mediaNota);
        
        const retorno =`Atleta: ${d.nome}\nNotas Obtidas: ${d.notas.join(",")}\nMédia Válida: ${mediaNota}`;
        
        return retorno
    })
    return media.join(`\n\n`);
}

console.log(mediaNotas(atletas));
