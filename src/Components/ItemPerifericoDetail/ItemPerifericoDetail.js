import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

const ItemPerifericoDetail = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia component="img" image={data.img} alt={data.category} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Categoria: {data.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio: $ {data.price}.00
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Caracteristicas: {data.caracteristicas}
          </Typography>
          <Button variant="contained">Agregar al Carrito</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemPerifericoDetail;
