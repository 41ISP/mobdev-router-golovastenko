import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const featuredProducts = products.slice(0, 3)
  return (
    <section className="page-shell">
      <div className="hero">
        <div>
          <h1>А мне больше нравится Хаммам облизывать</h1>
          <p>облизывайте, облизывайте, а я пока примусь за массажные столы</p>
          <Link to="/catalog" type="button" className="btn">Смотреть Табакошку(СМЕРТЬ В АУТИЗМЕ)</Link>
        </div>
        <div className="hero-plant" />
      </div>

      <p className="section-label">Популярное сейчас</p>
      <div className="product-grid">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
