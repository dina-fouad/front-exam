import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';



export class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allData: []

        }
    }

    componentDidMount = async () => {
        let server = 'http://localhost:3030';
        const allData = await axios.get(`${server}/drinks`)
        this.setState({
            allData: allData.data,
        })

    }

    addtofav=async(drinks)=>{
        const server = `http://localhost:3030`;
    await axios.post(`${server}/addtofavorite`, drinks)
}

    render() {
        return (
            <div>
                <CardGroup>

                    {this.state.allData.map((item, idx) => {
                        return (
                            <div>
                               
                                <Card style={{ width: '18rem' , display : 'inline-block', margin:'45px 45px' }}>
                                <Card.Img variant="top" src={item.strDrinkThumb} />
                                <Card.Body>
                               <Card.Title>{item.strDrink}</Card.Title>
                               <Button onClick={()=>this.addtofav(idx)}>add to favorite</Button>
                               </Card.Body>
                                    
                                </Card>

                            </div>
                        )
                    })}


                </CardGroup>

            </div>
        )
    }
}

export default Main;