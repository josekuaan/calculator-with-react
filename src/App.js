import React, {Component} from 'react';

class  App extends Component{
      constructor(){
        super()
        this.state = {
          result:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleClear=this.handleClear.bind(this)
        }
     handleChange (e){
       const {name,value} = e.target
       const result = this.state.result 
       console.log(result)
       this.setState({result:result + value})

     }

     handleSubmit(){  
      const  currentVal = this.state.result
     console.log(currentVal)
      const val = currentVal.split(" ")
      var result = 'ERROR'
      if(val === "NAN"){
        result = 'ERROR'
      }
      if(val[1] === '/'){

      result = val[0] / val[2]
    
      }else if(val[1] === '*'){

        console.log(val[0])
        result = val[0] *val[2]

      }else if(val[1] === '+'){

        result = Number(val[0]) +  Number(val[2])

      }else if(val[1] === '-'){

        result = val[0] - val[2]

      }else{
        return result;
      }
       this.setState({result: result})

    }

    handleClear(){
     this.setState({result:''})
    }
  

render(){
  return(
    
    <main>
     <div className="container">
       <h1 align="center">Calculator</h1>
       <br />
       <div className="content ">
        <div align="center">
          <input types="text" name="result" onChange={this.handleChange} value={this.state.result} className="form-control input-lg" />
        </div>
        <div align="center">
          <button onClick={this.handleChange} className="btn value btn-lg btn-light btn-num" value="9">9</button >
          <button onClick={this.handleChange} className="btn value btn-lg btn-light btn-num" value="8">8</button>
          <button onClick={this.handleChange} className="btn value btn-lg btn-light btn-num" value="7">7</button>
          <button onClick={this.handleChange} className="btn value btn-lg btn-light" value=" / ">/</button>
        </div>
        <div align="center">
          <button onClick={this.handleChange} className="btn value btn-lg btn-light btn-num" value="6">6</button>
          <button onClick={this.handleChange} className="btn value btn-lg btn-light btn-num" value="5">5</button>
          <button onClick={this.handleChange} className="btn value btn-lg btn-light btn-num" value="4">4</button>
          <button onClick={this.handleChange} className="btn value btn-lg btn-light" value=" * ">&times;</button>

        </div>
        <div align="center">
          <button onClick={this.handleChange} className="btn value btn-lg btn-light btn-num"value="3">3</button>   
          <button onClick={this.handleChange} className="btn value btn-lg btn-light btn-num" value="2">2</button>
          <button onClick={this.handleChange} className="btn value btn-lg btn-light btn-num" value="1">1</button>
          <button onClick={this.handleChange} className="btn value btn-lg btn-light" value=" - ">-</button>
        </div>
        <div align="center">
          
          <button onClick={this.handleClear} className="btn  btn-bottom btn-warning btn-act">CL</button>
          <button onClick={this.handleChange} className="btn  btn-bottom btn-light btn-num" value="0">0</button> 
          <button onClick={this.handleChange} className="btn  btn-bottom btn-light btn-num" value=".">.</button> 
          <button onClick={this.handleSubmit} className="btn  btn-bottom btn-success btn-act" >=</button> 
          <button onClick={this.handleChange} className="btn  btn-bottom btn-light btn-act" value=" + ">+</button>
        </div>
       </div>
       </div>
    </main>
    
 );
 
}
  


  
}

export default App
