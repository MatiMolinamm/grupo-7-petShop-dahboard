import Navbar from "./Navbar";
import ProductsList from "./ProductsList";

function ContentProducts() {
  return (
    <div class="conteiner">
      <Navbar />
      <br></br>
      <h2>LISTA DE PRODUCTOS</h2>
      <ProductsList />
    </div>
  );
}

export default ContentProducts;
