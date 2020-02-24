import React from 'react';
import { connect } from 'react-redux';
import {saveField} from  '../myRedux/Actions'
// import  shiduchReducer  from '../myRedux/Reducer'
 class Myinput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null,
            isFailed: false,
            name: null,
            personId: null,
            age: null,
            gender: null,
            father: null,
            mother: null,
            chug: null,
            yeshiva: null,
            gives: null,
            tel: null,
            address: null,
        };
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    
    updatingPerson = (obj) => {

        let newPerson = Object.assign({}, this.props.newPerson); 
        
        let updatedPerson = {};
        updatedPerson[obj.name] = obj.value
        let updatedNewPerson = Object.assign(newPerson, updatedPerson);
        
        this.props.saveField(updatedNewPerson)
    }
    CheckTheValue = (event) => {
        switch (this.props.role) {
            case 'name':

                if (!event.target.value.match(/^[a-zA-Z]+$/)) {
                    this.setState({ value: "", message: "please enter a valid name" });
                }
                else {
                    this.setState({ value: event.target.value, message: null, name: event.target.value });
                    this.updatingPerson({name:this.props.role,value:event.target.value})

                };
                break;
            case "pid":
                if (!this.isValidIsraeliID(event.target.value)) {
                    this.setState({ value: "", message: "please enter a valid id" });
                }
                else {
                    this.setState({ value: event.target.value, message: null, personId: event.target.value });
                    this.updatingPerson({name:this.props.role,value:event.target.value})

                };
                break;
            case "chug":

                this.setState({ chug: event.target.value, message: null });
                this.updatingPerson({name:this.props.role,value:event.target.value})


                break;
            case "tel":

                this.setState({ chug: event.target.value, message: null});
                this.updatingPerson({name:this.props.role,value:event.target.value})


                break;
            case "Gender":

                this.setState({ chug: event.target.value, message: null });
                this.updatingPerson({name:this.props.role,value:event.target.value})


                break;
            case "yeshiva":

                this.setState({ yeshiva: event.target.value, message: null, personId: event.target.value });
                this.updatingPerson({name:this.props.role,value:event.target.value})


                break;
            case "gives":

                this.setState({ gives: event.target.value, message: null, personId: event.target.value });
                this.updatingPerson({name:this.props.role,value:event.target.value})


                break;
            case "mother":
                this.setState({ mother: event.target.value, message: null, personId: event.target.value });
                this.updatingPerson({name:this.props.role,value:event.target.value})

                break;
            case "father":
                this.setState({ father: event.target.value, message: null, personId: event.target.value });
                this.updatingPerson({name:this.props.role,value:event.target.value})

                break;
            case "address":
                this.setState({ address: event.target.value, message: null, personId: event.target.value });
                this.updatingPerson({name:this.props.role,value:event.target.value})

                break;
            case "age":
                if (event.target.value < 18) {
                    this.setState({ value: "", message: "Age must be at least 18" });
                    
                }
                else {
                    this.setState({ value: event.target.value, message: null, age: event.target.value });
                    this.updatingPerson({name:this.props.role,value:event.target.value})

                };
                break;
            case "Gender":
                this.setState({ gender: event.target.value })
                this.updatingPerson({name:this.props.role,value:event.target.value})

                break;

            default:
                return 'foo';
        }
        var isValidName = true;
        if (!event.target.value.match(/^[a-zA-Z]+$/)) {
            isValidName = false;
        }

    }
    isValidIsraeliID = (id) => {
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
            {!this.props.select ? <input
                type={this.props.type}
                min={this.props.min}
                max={this.props.max}
                onChange={this.handleChange}
                value={this.state.value}
                onBlur={this.CheckTheValue}
                className="theinput">
            </input> : <select
                onBlur={this.CheckTheValue}
                className="theinput">{this.props.option}</select>}
            <p className="validmessage">{this.state.message}</p>



        </div >


        )
    }

}
const mapStateToProps = (state) => {

    return {
        newPerson :state.shiduchim.newPerson

    }

}


export default connect(
    mapStateToProps,
    { saveField }
)(Myinput);