import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Update from './Update';


export class DrinkFav extends Component {


    constructor(props) {
        super(props)
        this.state = {
           drinkArr: [],
            show:false,
            id:-1,
            strDrink:'',
            strDrinkThumb:'',
        }
    }

    
    componentDidMount = async () => {
    

        const server = 'http://localhost:3030';
        const data = await axios.get(`${server}/getFav`)
        this.setState({
            drinkArr: data.data
        })

    }
    delete=async(idx)=>{

        const id=this.state.drinkArr[idx]._id
        let server = 'http://localhost:3030';
        const data = await axios.delete(`${server}/deletFav?id=${id}`)
        this.setState({
            drinkArr: data.data,
        })

    }


    showUpdateForm=(idx)=>{
        const id=this.state.drinkArr[idx]._id
        const strDrink=this.state.drinkArr[idx].strDrink
        const strDrinkThumb=this.state.drinkArr[idx].strDrinkThumb
        this.setState({
            show:true,
            id:id,
            strDrink:strDrink,
            strDrinkThumb:strDrinkThumb,
        })
    }
    handleClose=()=>{
        this.setState({
            show:false,
        })
    }

    
    updateData=async(e)=>{
        e.preventDefault()
        const strDrink=e.target.strDrink.value;
        const strDrinkThumb=e.target.strDrinkThumb.value;
        const id=this.state.id
        let server = 'http://localhost:3030';
        const data = await axios.put(`${server}/updateFav?strDrink=${strDrink}&strDrinkThumb=${strDrinkThumb}&id=${id}`)
        this.setState({
            drinkArr: data.data
        })
    }   


    render() {
        return (
            <div>
           

                {this.state.drinkArr.map((item, idx) => {
                    return (
                     
                           

                            <Card style={{ width: '18rem' , display : 'inline-block', margin:'45px 45px' }}>
                           <Card.Img variant="top" src={item.strDrinkThumb} />
                          <Card.Body>
                            <Card.Title>{item.strDrink}</Card.Title>
                            
                                    <Button onClick={()=>this.delete(idx)}>Delete</Button>
                                    <Button onClick={()=>this.showUpdateForm(idx)}>Update</Button>
                                </Card.Body>
                                
                            </Card>

                    )
                })}


         
            <Update
             handleClose={this.handleClose}
              show={this.state.show} 
              strDrink={this.state.strDrink}
              strDrinkThumb={this.state.strDrinkThumb}
                updateData={this.updateData}/>
        </div>
        )
    }
}

export default DrinkFav;