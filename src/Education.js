import React , {Component} from "react";
import uniqid from 'uniqid';
import calendar from "./images/icons8-calendar-48.png";
import SwitchLabel from "./switchComponent/SwitchLabel.js";

class Education extends Component {
    constructor(props){
        super(props)
        this.id1=uniqid();
        this.id2=uniqid();
        this.id3=uniqid();
        this.id4=uniqid();
        this.id5=uniqid();
        this.id6=uniqid();
        this.onChange=this.onChange.bind(this);
    }


   onFocus(e) {
    let div;
    if(!e.target.classList.contains("textdate")){ 
        div=e.target.parentNode;
        div.classList.add("focused");
    }
    else {
        div=e.target.parentNode.parentNode;
        div.classList.add("focused");
    }
    div.classList.remove("empty");
    div.classList.remove("invalide");
}

    onChange(e) {
        let div=e.target.parentNode.parentNode;
        if(e.target.id===this.id3) {
            let inp=document.querySelector(`#${this.id5}`);
            inp.value=e.target.value;
        }
        else {
            let inp=document.querySelector(`#${this.id6}`);
            inp.value=e.target.value;
        }
        div.classList.add("focused");
        div.classList.add("filled");
        div.classList.remove("empty")
        div.classList.remove("invalide");

    }

    onBlur(e){
        let div;
        if(!e.target.classList.contains("textdate")) div=e.target.parentNode;
        else div=e.target.parentNode.parentNode;
        div.classList.remove("empty");
        div.classList.remove("invalide");

        if(e.target.validity.valid)
        {
            div.classList.add("filled");
        }
        else {
    
            if(e.target.value!= "") div.classList.add("invalide")
            else {
                div.classList.remove("focused");
                div.classList.remove("filled");
                div.classList.add("empty");
            }
        }
    }

    render() {

        let today = new Date().toISOString().slice(0, 10);
        
        return (

            
            <div className="education-container">
               
                <div className="form-group span2">
                    <label htmlFor={this.id1} className="labelanimated">Degree title : </label>
                    <input className="degree-title" id={this.id1} onFocus={this.onFocus} onBlur={this.onBlur} required/>
                </div>
                
                <div className="form-group span2">
                   <label htmlFor={this.id2} className="labelanimated">Organization providing the title : </label>
                   <input className="org" id={this.id2} onFocus={this.onFocus} onBlur={this.onBlur} required/>
                </div>
            <div className="date-group-container span2">
                <div className="date-group">
                   <div className="date-text">
                      <label htmlFor={this.id5} className="labelanimated">From : </label>
                      <input className="textdate eSDate" pattern="([0-9]{4})-([0-9]{2})-([0-9]{2})" placeholder="2001-08-25" id={this.id5} onFocus={this.onFocus} onBlur={this.onBlur} required/>
                   </div>
                   <label htmlFor={this.id3} className="labelimg date-icon">
                    <img src={calendar}/>
                    <input type="date" className="setDate" id={this.id3}  max={today} onChange={this.onChange} />
                   </label>
                </div>

                <div className="date-group">
                   <div className="date-text">
                      <label htmlFor={this.id6} className="labelanimated">To : </label>
                      <input className="textdate eEDate" placeholder="2001-08-25" pattern="([0-9]{4})-([0-9]{2})-([0-9]{2})" id={this.id6} onFocus={this.onFocus} onBlur={this.onBlur} required/>
                   </div>
                   <label htmlFor={this.id4} className="labelimg date-icon">
                    <img src={calendar}/>
                    <input type="date" className="setDate" max={today} onChange={this.onChange} id={this.id4} />
                   </label>
                   
                </div>

                <SwitchLabel ident={this.id6} classname="eduSwitchs" />
            </div>
                {!this.props.edit && <button className="deleteEdu del span2" onClick={this.props.onDelete} id={this.props.index} >delete</button>}
                {this.props.edit && <button type="button" onClick={this.props.onSave} className="save">save</button>}
                {this.props.edit && <button className="deleteEdu del span2" type="button" onClick={this.props.onDelete} id={this.props.uniqid} >delete</button>}
            </div>
        )
    }
}

export default Education;