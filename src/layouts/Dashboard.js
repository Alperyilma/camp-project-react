import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import ProductsDetail from "../pages/ProductsDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import ProductsAdd from "../pages/ProductsAdd";

export default function Dashboard() {
  return (
    <div>
    <ToastContainer position="bottom-right"/>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <Routes>
              <Route exact path="/" element={<ProductList />} />
              <Route exact path="/products" element={<ProductList />} />
              <Route path="/products/:name" element={<ProductsDetail />} />
              <Route path="/cart" element={<CartDetail />} />
              <Route path="/products/add" element={<ProductsAdd />} />
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
