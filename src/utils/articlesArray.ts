/* eslint-disable @typescript-eslint/explicit-function-return-type */

interface Article {
  id: number
  buttonTitle: string
  title: string
  author: string
  data: string
  img: string
  categoryId: number
  buttonColor: string
  // bigImgPage: string
  // pRecipe: string
  // citationP: string
  // citationImg: string
  // nutritionalInformation: string
  // coockingInformation: string
  // coockingInformationImg: string
  // ingredients: []
  // instructionsPhotoOne: string
  // instructionsPhotoTwo: string
  // instructionsText: string
  // notes: string
  // notesPhotoOne: string
  // notesPhotoTwo: string
  // notesPhotoThree: string
}
const articlesArray: Article[] = [
  {
    id: 1,
    buttonTitle: 'drinks',
    title: 'Pure lemon Lemonade Juice with Paper',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 4,
    buttonColor: 'blue'
  },
  {
    id: 2,
    buttonTitle: 'deserts',
    title: 'Gluten Free Orange Biscotti Recipe',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 5,
    buttonColor: 'pink'
  },
  {
    id: 3,
    buttonTitle: 'deserts',
    title: 'Chia Pudding with Blueberries and Almonds',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 5,
    buttonColor: 'pink'
  },
  {
    id: 1,
    buttonTitle: 'fast food',
    title: 'Whole Wheat Burger Buns Without Yeast',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 1,
    buttonColor: 'green'
  },
  {
    id: 5,
    buttonTitle: 'deserts',
    title: 'Strawberry Croissants With Puff Pasty',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 5,
    buttonColor: 'pink'
  },
  {
    id: 6,
    buttonTitle: 'fast food',
    title: 'Baked Sweet Potato Fries With Sauce',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 1,
    buttonColor: 'green'
  },
  {
    id: 7,
    buttonTitle: 'fast food',
    title: 'Garlic Butter Grilled Steak & Shrimp',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 1,
    buttonColor: 'green'
  },
  {
    id: 8,
    buttonTitle: 'appetizer',
    title: 'Blackberry Cake With cream Cheese',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 2,
    buttonColor: 'orange'
  },
  {
    id: 9,
    buttonTitle: 'appetizer',
    title: 'Best Avocado Toast Recipe With Egg',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 2,
    buttonColor: 'orange'
  },
  {
    id: 10,
    buttonTitle: 'breakfast',
    title: '12 Healthy Breakfasts for a Fresh Start',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 3,
    buttonColor: 'green'
  },
  {
    id: 11,
    buttonTitle: 'appetizer',
    title: 'Chocolate Mint Dessert Brownies Recipe',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 2,
    buttonColor: 'orange'
  },
  {
    id: 12,
    buttonTitle: 'breakfast',
    title: '11 Tips For Baking The Perfect Fruit Cake',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 3,
    buttonColor: 'green'
  },
  {
    id: 13,
    buttonTitle: 'breakfast',
    title: 'Pot Beef Brisket With Onion Soup Mix',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 3,
    buttonColor: 'green'
  },
  {
    id: 14,
    buttonTitle: 'drinks',
    title: 'Healthy Yogurt Recipes For Breakfast',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 4,
    buttonColor: 'blue'
  },
  {
    id: 15,
    buttonTitle: 'drinks',
    title: 'Grilled Octopus, Olive Oil And Gremolata',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 4,
    buttonColor: 'blue'
  },
  {
    id: 16,
    buttonTitle: 'pizza',
    title: 'Supreme Vegatarian Pizza With Mozzarella',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 6,
    buttonColor: 'orange'
  },
  {
    id: 17,
    buttonTitle: 'pizza',
    title: '30 Minute Sweet Thai Chili Peanut Chicken',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 6,
    buttonColor: 'orange'
  },
  {
    id: 18,
    buttonTitle: 'pizza',
    title: 'Tuna Avocado Salad With Mayo',
    author: 'Laura Nikova',
    data: 'September 6, 2022',
    img: 'images/img7.jpg',
    categoryId: 6,
    buttonColor: 'orange'
  }
]

export const getArticlesObject = (array: Article[]) =>
  array.reduce(
    (object, article) => ({
      ...object,
      [article.id]: article
    }),
    {}
  )

export default articlesArray
