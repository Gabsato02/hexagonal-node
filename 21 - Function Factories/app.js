function makeGreeting(language) {
	return function(firstname, lastname) {
		if (language === 'en') {
			console.log(`Hello, ${firstname} ${lastname}!`);
		}

		if (language === 'es') {
			console.log(`Hola, ${firstname} ${lastname}!`);
		}
	}
}

var greetEnglish = makeGreeting('en'); // Cria um contexto de execução que aponta para o idioma "en"
var greetSpanish = makeGreeting('es'); // Cria um contexto de execução que aponta para o idioma "es"

greetEnglish('Gabriel', 'Sato'); // Cria um novo contexto de execução, cujo contexto léxico referencia (via Closure), o contexto de execução com ambiente "en"
greetSpanish('Gabriel', 'Sato'); // Cria um novo contexto de execução, cujo contexto léxico referencia (via Closure), o contexto de execução com ambiente "es