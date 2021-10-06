nome1 = prompt('Nome do primeiro estudante entre vírgulas:') 
notas1 = prompt('Digite suas 3 notas') 
notas1 = notas1.split(',') 
 
nota1 = parseFloat(notas1[0]) 
nota2 = parseFloat(notas1[1]) 
nota3 = parseFloat(notas1[2]) 
 
media1 = (nota1 + nota2 + nota3)/3  
 
 
 
nome2 = prompt('Nome do segundo estudante:') 
notas2 = prompt('Digite suas 3 notas entre vírgulas') 
notas2 = notas2.split(',') 
 
nota4 = parseFloat(notas2[0]) 
nota5 = parseFloat(notas2[1]) 
nota6 = parseFloat(notas2[2]) 
 
media2 = (nota4 + nota5 + nota6)/3 

 
 
nome3 = prompt('Nome do terceiro estudante:') 
notas3 = prompt('Digite as 3 notas entre vírgulas') 
notas3 = notas3.split(',') 
 
nota7 = parseFloat(notas3[0]) 
nota8 = parseFloat(notas3[1]) 
nota9 = parseFloat(notas3[2]) 
 
media3 = (nota7 + nota8 + nota9)/3 
 
 
 
nome4 = prompt('Nome do quarto estudante:') 
notas4 = prompt('Digite as 3 notas entre vírgulas') 
notas4 = notas4.split(',') 
 
nota10 = parseFloat(notas4[0]) 
nota11 = parseFloat(notas4[1]) 
nota12 = parseFloat(notas4[2]) 
 
media4 = (nota10 + nota11 + nota12)/3 
 
 
 
nome5 = prompt('Nome do quinto estudante:') 
notas5 = prompt('Digite as 3 notas entre vírgulas') 
notas5 = notas5.split(',') 
 
nota13 = parseFloat(notas5[0]) 
nota14 = parseFloat(notas5[1]) 
nota15 = parseFloat(notas5[2]) 
 
media5 = (nota13 + nota14 + nota15)/3 
 
 
 
if (media1 >= 5){ 
    alert(nome1 + 'foi aprovadxxx!') 
} 
if (media2 >= 5){ 
    alert(nome2 + 'foi aprovadxxx!') 
} 
if(media3 >=5){ 
    alert(nome3 + 'foi aprovadxxx!') 
} 
if(media3 >=5){ 
    alert(nome4 + 'foi aprovadxxx!') 
} 
if(media3 >=5){ 
    alert(nome5 + 'foi aprovadxxx!') 
}