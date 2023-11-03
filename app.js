// Simulando uma operação longa
function waitThreeSeconds() {
  console.log('Started function');
	var ms = 3000 + new Date().getTime();
	while (new Date() < ms) {}
	console.log('Finished function');
}

function clickHandler() {
	console.log('Click event!');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();

console.log('Finished execution');

/*

O JavaScript começa a processar a fila de eventos SOMENTE quando todos
os contextos de execução são finalizados.

No código acima, embora exista um listener para os eventos de click, estes
serão escutados de fato apenas quando a função de 3 segundos for finalizada.

*/
