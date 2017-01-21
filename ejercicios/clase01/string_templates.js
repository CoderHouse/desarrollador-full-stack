const contenido = 'CONTENIDO'
const antesDeLiterals = 'Este texto dice: ' + contenido
console.log('antesDeLiterals', antesDeLiterals)
console.log('\n\n')

const textoSimple = `Este texto dice: ${contenido}`
console.log('textoSimple', textoSimple)
console.log('\n\n')

const textoSimpleEnLineas = `Este texto dice:
${contenido} en otra linea`
console.log('textoSimpleEnLineas', textoSimpleEnLineas)
console.log('\n\n')


const textoConLogica = `Este texto dice: ${contenido.toLowerCase()} con logica`
console.log('textoConLogica', textoConLogica)
console.log('\n\n')


const toLower = texto => texto.toLowerCase();

const textoConLogicaExterna = `Este texto dice: ${toLower(contenido)} con logica externa`
console.log('textoConLogicaExterna', textoConLogicaExterna)
console.log('\n\n')
