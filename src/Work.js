import React, {Component} from "react";
import uniqid from 'uniqid';
import calendar from './images/icons8-calendar-48.png';
import SwitchLabel from "./switchComponent/SwitchLabel.js";

class Work extends Component {

    constructor(props) {
        super(props)
        this.id1=uniqid();
        this.id2=uniqid();
        this.id3=uniqid();
        this.id4=uniqid();
        this.id5=uniqid();
        this.id6=uniqid();
        this.id7=uniqid();
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
                div.classList.add("empty")
            }
        }
    }

    onChange(e) {
        let div=e.target.parentNode.parentNode;
        if(e.target.id===this.id5) {
            let inp=document.querySelector(`#${this.id4}`);
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

    render() {
        let today = new Date().toISOString().slice(0, 10);

        return (
            <div className="work-container">

                <div className="form-group">
                <label  htmlFor={this.id1} className="labelanimated">Job title : </label>
                <input type="text" className="job-title" id={this.id1} onFocus={this.onFocus} onBlur={this.onBlur} required/>
                </div>

                <div className="form-group">
                <label htmlFor={this.id2} className="labelanimated" >Employer : </label>
                <input type="text" className="employer" id={this.id2}  onFocus={this.onFocus} onBlur={this.onBlur} required/>
                </div>

                <div className="form-group span2 text-area-container">
                <label htmlFor={this.id3} className="labelanimated">Job description : </label>
                <textarea type="text" rows="4" className="desc" id={this.id3}  onFocus={this.onFocus} onBlur={this.onBlur} required/>
                </div>

                <div className="date-group-container span2">
    
                    <div className="date-group">
                       <div className="date-text">
                          <label htmlFor={this.id4} className="labelanimated">From : </label>
                          <input className="textdate wSDate" pattern="([0-9]{4})-([0-9]{2})-([0-9]{2})" placeholder="2001-08-25" id={this.id4} onFocus={this.onFocus} onBlur={this.onBlur} required/>
                       </div>
                       <label htmlFor={this.id5} className="labelimg date-icon">
                        <img src={calendar}/>
                        <input type="date" className="setDate" id={this.id5} max={today} onChange={this.onChange} />
                       </label>
                    </div>
    
                    <div className="date-group">
                       <div className="date-text">
                          <label htmlFor={this.id6} className="labelanimated">To : </label>
                          <input className="textdate wEDate" pattern="([0-9]{4})-([0-9]{2})-([0-9]{2})" placeholder="2001-08-25" id={this.id6} onFocus={this.onFocus} onBlur={this.onBlur} required/>
                       </div>
                       <label htmlFor={this.id7} className="labelimg date-icon">
                        <img src={calendar}/>
                        <input type="date" className="setDate" id={this.id7} max={today} onChange={this.onChange} />
                       </label>
    
                    </div>
                      
                    <SwitchLabel ident={this.id6} classname="workSwitchs"/>

                </div>
                {!this.props.edit && <button className="deleteWork del span2" onClick={this.props.onDelete} id={this.props.index} >delete</button>}
                {this.props.edit && <button type="button" onClick={this.props.onSave} className="save">save</button>}
                {this.props.edit && <button className="deleteEdu del span2" type="button" onClick={this.props.onDelete} id={this.props.uniqid} >delete</button>}
            </div>
        )
    }

}

export default Work;