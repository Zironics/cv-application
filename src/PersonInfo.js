import React, {Component} from "react";

class PersonInfo extends Component {
    constructor(){
        super()
    }

    onFocus(e) {
        let div=e.target.parentNode;
        div.classList.remove("filled");
        div.classList.add("focused");
        div.classList.remove("empty");
        div.classList.remove("invalide");
    }

    onBlur(e){
        let div=e.target.parentNode;
        if(e.target.validity.valid)
        {
            div.classList.add("filled");
        }
        else {
            if(e.target.value!= "") {
                div.classList.add("filled");
                div.classList.add("invalide")
            }
            else {
                div.classList.remove("focused");
                div.classList.remove("filled");
                div.classList.add("empty")
            }
        }

          
    }

    render() {
        
        return (
            <div className="person-info-container">

                <div className="form-group" >
                <label htmlFor="fname" className="labelanimated">First Name : </label>
                <input id="fname" onFocus={this.onFocus} onBlur={this.onBlur}  required/>
                </div>

                <div className="form-group">
                <label htmlFor="lname" className="labelanimated">Last Name : </label>
                <input id="lname"  onFocus={this.onFocus} onBlur={this.onBlur} required/>
                </div>

                <div className="form-group">
                <label htmlFor="phone" className="labelanimated">Phone Number : </label>
                <input type="tel" id="phone" pattern="[0-9]{10}" maxLength="10" onFocus={this.onFocus} onBlur={this.onBlur}  required/>
                </div>

                <div className="form-group">  
                <label htmlFor="email" className="labelanimated">Email : </label>
                <input type="email" id="email" onFocus={this.onFocus} onBlur={this.onBlur}  required/>
                </div>
                
            </div>
        )
    }
}

export default PersonInfo;