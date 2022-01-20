import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
    { id: 1, name: "Shoes", price: "$100", image: "data:image/jpeg;base64,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", description: "Running shoes" },
    { id: 2, name: "Macbook", price: "$500", image: "data:image/jpeg;base64,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", description: "Apple Macbook" },
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;