import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Card ,Button} from 'react-bootstrap';
import Update from './Update';



class DrinkFav extends React.Component{


    constructor(props){
        super(props);
        this.state={
            drinkArr :[],
            show :false ,
            index:-1,
            strDrink:'',
            strDrinkThumb:'',

        }
    }
    
    
        componentDidMount = async ()=>{
         const server = `http://localhost:3030`;
       
      const drinkArr = await axios.get(`${server}/getFavDrink`)
    this.setState({
        drinkArr: drinkArr.data,
       
    })
}
    
delete= async(id)=>{
    const server = `http://localhost:3030`;
    const newArr =await axios.delete(`${server}/deletFav?id=${id}`);
    this.setState({
        newArr:newArr.data,
    })

}

showUpdateForm = async(idx)=>{
    this.setState({
        show :true,
        index :idx,
        strDrink:this.state.drinkArr[idx].strDrink,
        strDrinkThumb:this.state.drinkArr[idx].strDrinkThumb,
        
    })

}

handleClose = async()=>{
    this.setState({
        show :false,
    })
}


updateData = async(e)=>{
    e.preventdefault();
    const obj ={
        strDrinkThumb : e.target.strDrinkThumb.value,
        strDrink: e.target.strDrink.value,
        id:this.state.drinkArr[this.state.index]['idDrink']
    }
    const server = `http://localhost:3030`;
    const newData= await axios.put(`${server}/updateFav`,obj);
    this.setState({
        drinkArr:newData.data,
        show:false
    })
}

  render(){
    return(
      <>
{
    this.state.drinkArr.map((item,idx)=>{
        return(
            <Card style={{ width: '18rem' , display : 'inline-block', margin:'45px 45px' }}>
            <Card.Img variant="top" src={item.strDrinkThumb} />
            <Card.Body>
              <Card.Title>{item.strDrink}</Card.Title>
             
              <Button variant="primary" onClick = {()=>this.showUpdateForm(idx)}>update </Button>
              <Button variant="primary" onClick = {()=>this.delete(this.idDrink)}>delete </Button>
            </Card.Body>
          </Card>  
        )
    })
}

{this.state.show && 
    <Update
    show={this.state.show}
    handleClose={this.handleClose}
    strDrink={this.state.strDrink}
    strDrinkThumb={this.state.strDrinkThumb}
    updateData ={this.updateData}
    
    />
}

      </>
    )
  }
}
export default DrinkFav;