import products from "../data/products"
import ProductCard from "../components/ProductCard"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="container">
        <h2 id="featured-title">Featured Products</h2>

        <div className="products">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
