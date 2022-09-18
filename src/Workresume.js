import React, {Component} from "react";
import Work from "./Work.js";

class Workresume extends Component {
    
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
        let job=p.querySelector(".job-title");
        let employer=p.querySelector(".employer");
        let desc = p.querySelector(".desc");
        let start=p.querySelector(".wSDate");
        let end=p.querySelector(".wEDate");
        let checkbox=p.querySelector(".workSwitchs");
        let id = p.querySelector(".del").id;
        
        obj.title=job.value;
        obj.employer=employer.value;
        obj.desc = desc.value;
        obj.start=start.value;
        if(checkbox.checked) {
                obj.end="Ongoing";
        }
        else obj.end=end.value;

        obj.id=id;
        obj.editable=false; 
        

        this.props.onSave(obj,"work");

        this.setState({
            edit:false
        });
    }


   
    render() {
        let obj = this.props.info;
        
        if(!this.state.edit) return(
            
            <div className="Workresume">
              <div className="left-side">
        
                <h1>{ this.capitalize(obj.title)}</h1>
                <h3>{obj.employer}</h3>
                <p>{obj.desc}</p>
                <p> {obj.start} - {obj.end} </p>

              </div>
              <div className="right-side">
                <button className="editbtn" onClick={this.editOnClick} type="button" >Edit</button>
                <button className="resDel" onClick={this.props.onDelete} id={obj.id} type="button" >delete</button>
              </div>
            </div>
        );

        else {
          
          return( <Work edit={true} uniqid={obj.id} onDelete={this.props.onDelete} onSave={this.onSave} /> )
        }
    }

}

export default Workresume;