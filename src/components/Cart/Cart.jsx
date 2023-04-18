"use client";
import { addCart } from "@/store/product/productSlice";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => dispatch(addCart({ name: "hola", price: 22 }))}
      >
        Agregar
      </Button>
      {
        cart.map((e, i) => <h1 key={i}>{e.name}</h1>)
      }
    </div>
  );
};

export default Cart;
