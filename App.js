import React from 'react';
import CustomNavbar from './Components/CustomNavbar';
import ProductGrid from './Components/ProductGrid';

import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  {
    name:"dress" ,
    description: 'Cost:1800/-',
    image:"https://cdn.pixabay.com/photo/2020/09/20/12/19/dress-5586955_1280.png" ,
  },
  {
    name: 'teady bear',
    description: 'Cost:1200/-',
    image: 'https://m.media-amazon.com/images/I/71olYvEpf0L.jpg',
  },
 {
  name: 'watch',
    description: 'Cost:2650/-',
    image:"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
 },
 {
  name: 'notebooks',
    description: 'Cost:650/-',
    image:"https://st.depositphotos.com/1875497/3781/i/450/depositphotos_37810929-stock-photo-books-on-white.jpg",
 },
 {
  name: 'hp laptop',
    description: 'Cost:65000/-',
    image:"https://www.91-cdn.com/hub/wp-content/uploads/2020/08/HP-14s-feat-1200x900.jpg",
 },


];

function App() {
  return (
    <div>
      <br></br>
      <CustomNavbar />
      <ProductGrid products={products} />
    </div>
  );
}

export default App;