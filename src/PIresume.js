import React, {Component} from "react";


class PIresume extends Component {
    
    constructor(props) {
        super(props);
    }

    capitalize(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
     } 

    render() {
        let {email,phone,lname,fname} = this.props.info;
        return(
            <div className="PIresume">
              <div className="left-side">
                  <h3>{this.capitalize(fname) + ' ' + this.capitalize(lname)}</h3>
                  <div className="contactinfo">
                    <div className="emailInfo">Email : <span>{email}</span></div>
                    <div className="phoneInfo">Phone : <span>{phone}</span></div>
                  </div>
              </div>
              <div className="right-side">
                <button className="editbtn" onClick={this.props.onClick}>Edit</button>
              </div>
            </div>
        );
    }

}

export default PIresume;