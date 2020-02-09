import React from 'react';

export default class Myinput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message:null,
            isFailed: false,
            name:null,
            personId:null,
            age:null,
            gender:null
        };
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    CheckTheValue = (event) => {
        console.log("this role",this.props.role);
        switch(this.props.role) {
            case 'name':
                console.log("this.props.role",this.props.role);
                
                if (!event.target.value.match(/^[a-zA-Z]+$/) ){
                    this.setState({ value: "" ,message:"please enter a valid name"});
                   
                }
                else{
                    this.setState({ value: event.target.value ,message:null,name:event.target.value});  
                };
                break;
            case "id":
                console.log("this.props.role",this.props.role);
                if (!this.isValidIsraeliID(event.target.value)){
                    this.setState({ value: "" ,message:"please enter a valid id"});
                }
                else{
                    this.setState({ value: event.target.value ,message:null,personId:event.target.value});  
                };
                break;
                case "age":
                    if (event.target.value<18){
                        this.setState({ value: "" ,message:"Age must be at least 18"});
                    }
                    else{
                        this.setState({ value: event.target.value ,message:null,age:event.target.value});  
                    };
                    console.log("this.props.role",this.props.role);
                    console.log("event.target.value",event.target.value);
                break;
                case "Gender":
                    this.setState({gender:event.target.value})
                    console.log("this.props.role",this.props.role);
                    console.log("event.target.value",event.target.value);
                break;
                    
            default:
              return 'foo';
          }
        var isValidName = true;
        if (!event.target.value.match(/^[a-zA-Z]+$/) ){
            isValidName = false;
        }

    }
     isValidIsraeliID=(id)=> {
        var id = String(id).trim();
        if (id.length > 9 || id.length < 5 || isNaN(id)) return false;
    
        // Pad string with zeros up to 9 digits
          id = id.length < 9 ? ("00000000" + id).slice(-9) : id;
    
          return Array
                .from(id, Number)
                  .reduce((counter, digit, i) => {
                    const step = digit * ((i % 2) + 1);
                    return counter + (step > 9 ? step - 9 : step);
                }) % 10 === 0;
    }
    render() {
        return (< div className="inputbox" >
            <p className="header">{this.props.header}</p>
           {!this.props.select?<input
                type={this.props.type}
                min={this.props.min}
                max={this.props.max}
                onChange={this.handleChange}
                value={this.state.value}
                onBlur={this.CheckTheValue}
                className="theinput">
           </input>:<select 
            onBlur={this.CheckTheValue}
           className="theinput">{this.props.option}</select>} 
            <p className="validmessage">{this.state.message}</p>



        </div >


        )
    }

}