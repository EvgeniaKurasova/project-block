
interface Categoria {
  id: number
  buttonTitle: string
  title: string
  author: string
  data: string
  imgCategoria: string
  buttonColor: string
}

const categoriesArray: Categoria[] = [
  {
    id: 1,
    buttonTitle: 'fast food',
    title: 'Fast food',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    imgCategoria: 'fast-food',
    buttonColor: 'green'
  },
  {
    id: 2,
    buttonTitle: 'drinks',
    title: 'Drinks',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    imgCategoria: 'drinks',
    buttonColor: 'blue'
  },
  {
    id: 3,
    buttonTitle: 'breakfast',
    title: 'Breakfast',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    imgCategoria: 'breakfast',
    buttonColor: 'orange'
  },
  {
    id: 4,
    buttonTitle: 'appetizer',
    title: 'Appetizer',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    imgCategoria: 'appetizer',
    buttonColor: 'green'
  },
  {
    id: 5,
    buttonTitle: 'deserts',
    title: 'Deserts',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    imgCategoria: 'deserts',
    buttonColor: 'pink'
  },
  {
    id: 6,
    buttonTitle: 'pizza',
    title: 'Pizza',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    imgCategoria: 'pizza',
    buttonColor: 'orange'
  }
]

export default categoriesArray
