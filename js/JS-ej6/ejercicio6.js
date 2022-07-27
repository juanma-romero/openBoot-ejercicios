const compras = ['Huevos', 'Harina', 'Pan', 'Queso', 'Jamon']

compras.push('Aceite de Girasol')
 
compras.pop()
 
const pelisFav = [
    {titulo: 'El Padrino', director: 'Ford Coppola', fecha: 1972},
    {titulo: 'Matrix', director: 'Hermanos Wachowski', fecha: 1999},
    {titulo: 'Joker', director: 'Todd Phillips', fecha: 2019}
]

const peliFiltrada = pelisFav.filter(peli => peli.fecha > 2010)

const directores = pelisFav.map(peli => peli.director)

const titulo = pelisFav.map(peli => peli.titulo)

const arrayConcatenada = directores.concat(titulo)

const arrayPropagada = [...directores, ...titulo]
