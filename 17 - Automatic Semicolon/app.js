function getPerson() {
	return;
	{
		firstname: 'Gabriel';
	}
}

/*
O uso de ponto e vírgula no JavaScript é opcional,
não porque é desnecessário, mas porque o sintax 
parser do JS insere automaticamente os pontos e 
vírgulas onde eles "deveriam" estar caso não 
existam.

O código acima retornará undefined, pois o sintax
parser entenderá que o ponto e vírgula deve vir após
o fim da palavra "return". Para evitar isso, é
necessário trazer o { para a mesma linha do "return".
*/

console.log(getPerson());
