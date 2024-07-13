import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import { ProductInterface } from "../interfaces/interface";
import { FormContext } from "../context/context";
import { useContext, useEffect } from "react";

export default function Main() {
  const { products } = useContext(FormContext);

  useEffect(() => {
    console.log("here are the products");
    console.log(products);
  }, [products]);
  return (
    <main>
      {products.map((product, index) => {
        return (
          <div className="card" key={index}>
            <Card sx={{ flexGrow: 1 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    قیمت : {product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        );
      })}
    </main>
  );
}
