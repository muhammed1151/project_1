import Header from "./components/header/Header";
import ProductCard from "./components/products/Products";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <ProductCard src="./img/1.jpg" productName="test" price="30$" />
    </>
  );
}

export default App;
