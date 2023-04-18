import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { db } from "@/firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const getProduct = async (id) => {
  let refColecction = collection(db, "products");
  let refDoc = doc(refColecction, id);

  const res = await getDoc(refDoc);
  const productData = {
    ...res.data(),
    id: res.id,
  };
  return productData;
};

const ProductDetailPage = async ({ params }) => {
  const { id } = params;
  const product = await getProduct(id);
  return (
      <ProductDetail product={product} />
  );
};

export default ProductDetailPage;
