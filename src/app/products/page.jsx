import ProductsList from "@/components/ProductsList/ProductsList";
import { db } from "@/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

async function getProducts() {
  let refCollection = collection(db, "products");
  const res = await getDocs(refCollection);
  const products = res.docs.map((product) => {
    return {
      ...product.data(),
      id: product.id,
    };
  });
  return products;
}

const Productspage = async () => {
  const products = await getProducts();
  return (
      <ProductsList products={products} />
  );
};

export default Productspage;
