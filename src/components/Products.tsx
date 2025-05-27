import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { addItem } from '../store/cartSlice';
import { Card, Button, CardGroup } from 'react-bootstrap';

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.products);
  function handleAddToCart(item: (typeof products)[number]) {
    dispatch(addItem(item));
  }
  return (
    <div className="products">
      <CardGroup className="card-group">
        {products.map((item) => (
          <Card
            key={item.title}
            className="product-card text-light"
            style={{ width: '18rem', backgroundColor: '#333' }}
          >
            <Card.Img
              variant="top"
              src={item.src}
              alt={`${item.title} image`}
              style={{ maxWidth: '100%', maxHeight: 'auto' }}
            />{' '}
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>Price: R{item.price}</Card.Text>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </Button>{' '}
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}
export default Products;
