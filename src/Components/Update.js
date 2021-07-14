import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export class Update extends Component {
    render() {
        return (
            <div>
                <Modal
                 show={this.props.show}
                 onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Form  onSubmit={(e)=>{this.props.updateData(e)}}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name={'strDrink'} defaultValue={this.props.strDrink}/>
                                <Form.Label>img</Form.Label>
                                <Form.Control type="text" name={'strDrinkThumb'} defaultValue={this.props.strDrinkThumb} />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={this.props.handleClose}>
                                Submit
                            </Button>
                        </Form>

                    </Modal.Body>

                </Modal>
            </div>
        )
    }
}

export default Update;