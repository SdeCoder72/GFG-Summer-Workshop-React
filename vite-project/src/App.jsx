
import './App.css'
import Product from './components/Product'

function App() {

  const products = [
    {
      title: "Macbook Pro",
      image: "https://images.unsplash.com/photo-1605468497592-2aabbc7b0cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjI3OTAwMTgw&ixlib=rb-1.2.1&q=80&w=1080",
      price: 100,
      description: "Discription of our Macbook Pro"
    },
    {
      title: "Macbook Air",
      image: "https://th.bing.com/th/id/OIP.-MGKgC48iRW7jVcCNJQZQAHaFP?rs=1&pid=ImgDetMain",
      price: 200,
      description: "Discription of our Macbook Pro"
    },
    {
      title: "Mac Mini",
      image: "https://th.bing.com/th/id/OIP.bdkBd2ipy8FH8boE7cDZ0QHaEK?rs=1&pid=ImgDetMain",
      price: 300,
      description: "Discription of our Macbook Pro"
    },
  ]


  return <section>
    {products.map((product, index) =>{
      return <Product 
        key = {index}
        title = {product.title}
        price = {product.price}
        description = {product.description}
        image = {product.image}
      />
    })}
    
  </section>
  
}

export default App
