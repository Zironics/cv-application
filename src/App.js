import React, {Component} from "react";
import PersonInfo from "./PersonInfo.js";
import Education from "./Education.js";
import uniqid from 'uniqid';
import Work from "./Work.js";
import Resume from "./Resume.js";
import "./style.css";

class App extends Component {
      constructor() {
        super();

        this.onClick=this.onClickAdd.bind(this);
        this.onClickDel=this.onClickDelete.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.getPersonInfo=this.getPersonInfo.bind(this);

        this.state={
          exp:[<Work key="0" onDelete={this.onClickDel} index="0" />],
          eduLength:1,
          expLength:1,
          edu:[<Education key="1" onDelete={this.onClickDel} index="1"/>],
          fname:"jon",
          lname:"doe",
          phone:"0552925849",
          email:"email@me.com",
          result:false
        } 
      }


      onClickAdd(e) {
      
        if(e.target.classList.contains("educ")){
          let i=uniqid();
          this.setState({
            edu:this.state.edu.concat(<Education key={i} onDelete={this.onClickDel} index={i}/>),
            eduLength:this.state.eduLength+1
          });
        }

        else {
          let i=uniqid();
          this.setState({
            exp:this.state.exp.concat(<Work key={i} onDelete={this.onClickDel} index={i}/>),
            expLength:this.state.expLength+1
          });
        }
      }

      getWorkInfo() {
        let arr=[];
        let jobs=document.querySelectorAll(".job-title");
        let employers=document.querySelectorAll(".employer");
        let desc=document.querySelectorAll(".desc");
        let start=document.querySelectorAll(".wSDate");
        let end=document.querySelectorAll(".wEDate");
        let checkboxs=document.querySelectorAll(".workSwitchs");
        let l=jobs.length;

          for(let i=0;i<l;i++) {
              let obj={};
              obj.title=jobs[i].value;
              obj.employer=employers[i].value;
              obj.desc=desc[i].value;
              obj.start=start[i].value;
              if(checkboxs[i].checked) {
                obj.end="Ongoing";
              }
              
              else obj.end=end[i].value;
                    
              obj.editable=false;
              obj.id=uniqid();
              arr.push(obj);
          }
    
          
          this.setState({
            workArr:arr
          });
      }

      getEduInfo() {
        let arr=[];
        let degrees=document.querySelectorAll(".degree-title");
        let orgs=document.querySelectorAll(".org");
        let start=document.querySelectorAll(".eSDate");
        let end=document.querySelectorAll(".eEDate");
        let checkboxs=document.querySelectorAll(".eduSwitchs");
        let l=orgs.length;

          for(let i=0;i<l;i++) {
              let obj={};
              obj.degree=degrees[i].value;
              obj.org=orgs[i].value;
              obj.start=start[i].value;
              if(checkboxs[i].checked) {
                obj.end="Ongoing";
              }
              else obj.end=end[i].value;
              obj.id=uniqid();
              obj.editable=false;  
              arr.push(obj);
          }
         
          this.setState({
            eduArr:arr
          });
      }

      onClickDelete(e) {
           let newArr=[];
           if(e.target.classList.contains("deleteEdu")) {
            let id=e.target.id;
             this.state.edu.forEach(element => {
              if(element.key!=id) {
                newArr.push(element);
              }
             });

             this.setState({
              edu:newArr,
              eduLength:this.state.eduLength-1
             });
             
           }

           else {
            let id=e.target.id;
            this.state.exp.forEach(element => {
             if(element.key!=id) {
               newArr.push(element);
             }
            });

            this.setState({
             exp:newArr,
             expLength:this.state.expLength-1
            });
           }
      }

      onSubmit(e) {
          e.preventDefault();
          this.getEduInfo();
          this.getWorkInfo();
          this.getPersonInfo();
          this.setState({
            result:true
          });
        
      }

      getPersonInfo() {
        let fname = document.querySelector("#fname").value;
        let lname = document.querySelector("#lname").value;
        let email = document.querySelector("#email").value;
        let phone = document.querySelector("#phone").value;
        this.setState({
          fname,
          lname,
          email,
          phone
        })
      }


      
      render() {
             
             if(!this.state.result){
              return (
              <div className="main">
                <header>
                  Welcome, Let's create your CV !
                </header>
                <form onSubmit={this.onSubmit}>
                <h2>Personel infomations</h2>
                 <PersonInfo />
                 <h2>Education and training</h2>
                 {this.state.edu}
                 <button className="add educ" onClick={this.onClick}>Add</button>
                 <h2>Work experience</h2>
                 {this.state.exp}
                 <button className="add work" onClick={this.onClick}>Add</button>
                 <button className="submit" type="submit">Submit</button>
                 </form>
              </div>
             );
            }
            else {
              return (
                 <div className="main">
                 <Resume state={this.state} />
                 </div>
              );
            }
      }
}

export default App;