import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




class Update extends React.Component{
  render(){
    return(
      <>
      <Modal
        show={this.props.show}
        onHide={this.props.handleClose}
       
      >
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form onSubmit = {this.props.updateData()}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" strDrink='strDrink' defaultValue={this.props.strDrink} />
    <Form.Label>img</Form.Label>
    <Form.Control type="text" strDrinkThumb='strDrinkThumb'defaultValue={this.props.strDrinkThumb} />
    
  </Form.Group>
  <Button type='submit' variant="primary">save</Button>
</Form>

        </Modal.Body>
    
      </Modal>
      </>
    )
  }
}
export default Update;