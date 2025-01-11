import React, { useEffect, useState } from "react";
import SearchBar from "../comp/SearchBar";
import { useParams } from "react-router-dom";

const Home = () => {
  const { category = "products" } = useParams();
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = () => {
      fetch(`https://api.escuelajs.co/api/v1/products/`)
        .then((response) => response.json())
        .then((data) => setData(data));
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    if (!!category) {
      function getCategoryIds(products) {
        const categoryMap = {};
        products.forEach((product) => {
          const { id, name } = product.category;
          categoryMap[name] = id;
        });
        return categoryMap;
      }
      function getCategoryIdByName(categoryName, products) {
        const categoryMap = getCategoryIds(products);
        return categoryMap[categoryName] || "Category not found";
      }
      let id = getCategoryIdByName(category, products);
      id = isNaN(id) ? id : Number(id);

      if (typeof id === "number") {
        fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}`)
          .then((response) => response.json())
          .then((data) => setProducts(data))
          .catch((error) => console.error("Error fetching products:", error));
      }
    } else {
      setProducts(data);
    }
  }, [category, data]);
  // console.log(data, products);
  return (
    <div>
      <h1> Home</h1>
      <div>
        <div className="flex items-center justify-center">
          <SearchBar />
        </div>
        <div>
          {products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
