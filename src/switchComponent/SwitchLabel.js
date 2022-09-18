import React, {Component} from "react";
import "./switchStyle.css";
import uniqid from "uniqid";

class SwitchLabel extends Component {
     
    constructor(props) {
        super(props);
        this.id=uniqid();

        this.onClick=this.onClick.bind(this);
    }


    onClick() {
        let container=document.querySelector(`.${this.id}`);
        
        container.classList.toggle('on');
        let div=document.getElementById(`${this.props.ident}`);
        if(div.required) {
            div.required=false;
        }
        else div.required=true;
        div.value="";
        let group=div.parentNode.parentNode;
        group.classList.remove("empty");
        group.classList.remove("invalide");
        group.classList.remove("focused");
        group.classList.remove("filled");
        group.classList.toggle("disabled");
    }



    render() {
        
        return (
        
        <div className="comp">
            <label className={"switchcontainer " + this.id} onClick={this.onClick} htmlFor={this.id}>
                <div className="circle-container">
                <div className="circle"></div>
                </div>
            </label>
            <input type="checkbox" className={"hidden " + this.props.classname} id={this.id} />
            <div className="desc">ongoing</div>
        </div>
        )
    }

    
    


}


export default SwitchLabel;