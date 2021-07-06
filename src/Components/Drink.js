import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card ,Button} from 'react-bootstrap';



class Drink extends React.Component{
  render(){
    return(
      <>
<Card style={{ width: '18rem' , display : 'inline-block', margin:'45px 45px' }}>
  <Card.Img variant="top" src={this.props.drinks.strDrinkThumb} />
  <Card.Body>
    <Card.Title>{this.props.drinks.strDrink}</Card.Title>
   
    <Button variant="primary" onClick = {()=> this.props.addToFav(this.props.drinks)}>add to favorite </Button>
  </Card.Body>
</Card>
      </>
    )
  }
}
export default Drink;