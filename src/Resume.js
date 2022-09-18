import React, {Component} from "react";
import PIresume from "./PIresume.js";
import PersonInfo from "./PersonInfo.js";
import Eduresume from "./Eduresume.js";
import uniqid from "uniqid";
import Divider from "./Divider.js"
import Workresume from "./Workresume.js";


class Resume extends Component {
    
    constructor(props) {
        super(props)
        this.state={
            email:this.props.state.email,
            phone:this.props.state.phone,
            fname:this.props.state.fname,
            lname:this.props.state.lname,
            edu:this.props.state.eduArr,
            work:this.props.state.workArr,
            edit:false
        }

        this.editOnClick=this.editOnClick.bind(this);
        this.updatePersonInfo=this.updatePersonInfo.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onDeleteEdu=this.onDeleteEdu.bind(this);
        this.onSave=this.onSave.bind(this);
        this.onAddEdu=this.onAddEdu.bind(this);
        this.onAddWork=this.onAddWork.bind(this);
        this.onDeleteWork=this.onDeleteWork.bind(this);
        
    }

    editOnClick(e) {
        this.setState({
            edit:true
        })
    }


    updatePersonInfo() {
        let fname = document.querySelector("#fname").value;
        let lname = document.querySelector("#lname").value;
        let email = document.querySelector("#email").value;
        let phone = document.querySelector("#phone").value;
        this.setState({
          fname,
          lname,
          email,
          phone
        });
      }

      onSubmit(e) {
        e.preventDefault();
        this.updatePersonInfo()
        this.setState({
          edit:false
        });
    }

    onDeleteEdu(e){
      
        let id=e.target.id;
        let newArr=[];
        this.state.edu.forEach( obj => {
             if(obj.id != id) {
                newArr.push(obj);
             }
        });

        this.setState({
            edu:newArr
        });
    }


    onDeleteWork(e){
      
        let id=e.target.id;
        let newArr=[];
        this.state.work.forEach( obj => {
             if(obj.id != id) {
                newArr.push(obj);
             }
        });

        this.setState({
            work:newArr
        });
    }


    onSave(object,type) {
       let newArr=[];
       if(type=="edu") {

        let original=this.state.edu;

        original.forEach(element => {
            if(element.id == object.id) {
                newArr.push(object);
            }
            else newArr.push(element);
        });

        this.setState({
            edu:newArr
        });

       }

       else {
        let original=this.state.work;

        original.forEach(element => {
            if(element.id == object.id) {
                newArr.push(object);
            }
            else newArr.push(element);
        });

        this.setState({
            work:newArr
        });

       }
    }
    
    onAddEdu() {
        let obj={};
        obj.degree="";
        obj.org="";
        obj.start="";
        obj.end="";

        obj.id=uniqid();
        obj.editable=true;  
        let newArr = this.state.edu.concat(obj);
        this.setState({
            edu:newArr
        });
        
    }

    onAddWork() {
        let obj={};
        obj.title="";
        obj.employer="";
        obj.desc = "";
        obj.start="";
        obj.end="";

        obj.id=uniqid();
        obj.editable=true;  
        let newArr = this.state.work.concat(obj);
        this.setState({
            work:newArr
        });
       
    }
    
    render() {
       
        return (
            <form className="resume-container" onSubmit={this.onSubmit}>
                 <h2>Personel infomations</h2>
                 { !this.state.edit && <PIresume info={this.state} onClick={this.editOnClick}/>}
                 { this.state.edit && <PersonInfo edit={true} info={this.state} />}
                 {this.state.edit && <button type="submit" className="save">save</button>}
                 <h2>Education informations</h2>
                 { this.state.edu.map( (obj) => {
                 return [<Eduresume key={obj.id} info={obj} ondelete={this.onDeleteEdu} onSave={this.onSave}/>,<Divider />]
                 }) }
                 <button className="add educ" onClick={this.onAddEdu}>Add</button>
                 <h2>Work experience</h2>
                 { this.state.work.map( (obj) => {
                 return [<Workresume key={obj.id} info={obj} onDelete={this.onDeleteWork} onSave={this.onSave}/>,<Divider />]
                 }) }

                 <button className="add work" onClick={this.onAddWork}>Add</button>
                 
            </form>
        );
    }
}

export default Resume;