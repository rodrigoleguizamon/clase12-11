const fs = require('fs');
const rutaArchivo = __dirname + '/app.js'

let app = fs.readFileSync(rutaArchivo, {encoding: 'utf8'})

app = JSON.parse(app)


let homePage = {
    Título: 'Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.',
    peliculasCant: 'Total de películas en cartelera: (total de películas)',
    peliculasLista: //Listados de películas,
    peliculasAlfab: //Mostrar el listado de películas organizadas alfabéticamente por título.,
    piePag: 'Pié de página: Recordá que podés visitar las secciones:
    i. En Cartelera
    ii. Más Votadas
    iii. Sucursales
    iv. Contacto
    v. Preguntas Frecuentes'}

console.log(app.movies)