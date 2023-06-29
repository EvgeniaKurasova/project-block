
interface Categoria {
  buttonTitle: string
  title: string
  author: string
  data: string
  imgCategoria: string
  buttonColor: string
}

// window.globalStorage = {}

const categoriesArray: Categoria[] = [
  {
    buttonTitle: 'fast food',
    title: 'Fast food',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    imgCategoria: 'fast-food',
    buttonColor: 'green'
  },
  {
    buttonTitle: 'drinks',
    title: 'Drinks',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    imgCategoria: 'drinks',
    buttonColor: 'blue'
  },
  {
    buttonTitle: 'breakfast',
    title: 'Breakfast',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    imgCategoria: 'breakfast',
    buttonColor: 'orange'
  },
  {
    buttonTitle: 'appetizer',
    title: 'Appetizer',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    imgCategoria: 'appetizer',
    buttonColor: 'green'
  },
  {
    buttonTitle: 'deserts',
    title: 'Deserts',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    imgCategoria: 'deserts',
    buttonColor: 'pink'
  },
  {
    buttonTitle: 'pizza',
    title: 'Pizza',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    imgCategoria: 'pizza',
    buttonColor: 'orange'
  }
]

export default categoriesArray
