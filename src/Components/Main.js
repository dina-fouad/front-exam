import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Drink from './Drink';



class Main extends React.Component{

constructor(props){
    super(props);
    this.state={
        allData:[],
        showDrink:false
    }
}


    componentDidMount = async ()=>{
     const server = `http://localhost:3030`;
   
  const allData = await axios.get(`${server}/drinks`)
this.setState({
    allData:allData.data,
    showDrink:true
})



    }



addToFav = async(drinks)=>{
    const server = `http://localhost:3030`;
    await axios.post(`${server}/addtofavorite`, drinks)
}



  render(){
    return(
      <>
 {
     this.state.showDrink &&
     this.state.allData.map((item,idx)=>{
         return(
             <Drink
             drinks={item}
             index ={idx}
             addToFav ={this.addToFav}
             
             
             />
         )
     })
 }
      </>
    )
  }
}
export default Main;