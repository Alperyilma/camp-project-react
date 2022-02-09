import React from 'react';
import ProductList from '../pages/ProductList';
import Categories from './Categories';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route} from 'react-router-dom';



export default function Dashboard() {
  return <div>
    <Grid>
      <GridRow>
        <GridColumn width={4}>
        <Categories/>
        </GridColumn>
        <GridColumn width={12}>

       
        <Route exact path='/' component={ProductList}/>
        
          
        <Route exact path='/products' component={ProductList}/>
          

   


        
        </GridColumn>
      </GridRow>
    </Grid>
  </div>;
}
