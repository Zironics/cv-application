import React, {Component} from "react";
import Education from "./Education.js";

class Eduresume extends Component {
    
    constructor(props) {
        super(props);
        this.editOnClick=this.editOnClick.bind(this);
        this.state= {
            edit:this.props.info.editable
        }

        this.onSave=this.onSave.bind(this);
    }

    capitalize(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    } 

    editOnClick(e) {
        this.setState({
            edit:true
        })
    }



    onSave(e) {
        let p = e.target.parentNode;
        let obj={}
        let degree=p.querySelector(".degree-title");
        let org=p.querySelector(".org");
        let start=p.querySelector(".eSDate");
        let end=p.querySelector(".eEDate");
        let checkbox=p.querySelector(".eduSwitchs");
        let id = p.querySelector(".del").id;
        
        obj.degree=degree.value;
        obj.org=org.value;
        obj.start=start.value;
        if(checkbox.checked) {
                obj.end="Ongoing";
        }
        else obj.end=end.value;

        obj.id=id;
        obj.editable=false; 
        

        this.props.onSave(obj,"edu");

        this.setState({
            edit:false
        });
    }


   
    render() {
        let obj = this.props.info;
        
        if(!this.state.edit) return(
            
            <div className="Eduresume">
              <div className="left-side">
        
                <h1>{ this.capitalize(obj.degree)}</h1>
                <h3>{obj.org}</h3>
                <p> {obj.start} - {obj.end} </p>

              </div>
              <div className="right-side">
                <button className="editbtn" onClick={this.editOnClick} type="button" >Edit</button>
                <button className="resDel" onClick={this.props.ondelete} id={obj.id} type="button" >delete</button>
              </div>
            </div>
        );

        else {
          
          return( <Education edit={true} uniqid={obj.id} onDelete={this.props.ondelete} onSave={this.onSave} /> )
        }
    }

}

export default Eduresume;