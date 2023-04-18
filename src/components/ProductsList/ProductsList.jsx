"use client";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import "./ProductsList.css";

const ProductsList = ({ products }) => {
  const router = useRouter();
  return (
    <div className="container-products">
      {products.map((elemento) => (
        <Card
          onClick={() => router.push(`/productDetail/${elemento.id}`)}
          key={elemento.id}
          sx={{
            width: 300,
            height: 400,
            cursor: "pointer",
            borderRadius: "10px",
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={elemento.img}
          />
          <CardContent sx={{ height: 100 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              {elemento.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {elemento.description}
            </Typography>
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "center",
              height: 100,
              alignItems: "center",
            }}
          >
            <Button
              size="small"
              variant="contained"
              onClick={() => deleteProductById(elemento.id)}
            >
              eliminar
            </Button>
            <Button size="small" variant="contained">
              Ver detalle
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ProductsList;
