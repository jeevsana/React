import React from "react";
import FuncComp from '../Components/Functional';
//class component

class ClassComponent extends React.Component{
    render(){
        return(
            <h3><FuncComp></FuncComp> FRESH INVESTMENT SOLUTIONS <ClassComponent1></ClassComponent1></h3>
        )
    }
}

class ClassComponent1 extends React.Component{
    render(){
        return(
            <h3> <FunctionalComponent> LEARNING O SAVE MONEY</FunctionalComponent></h3>
        )
    }
}

function FunctionalComponent()
{
 return(
    <h4>OUR FOCUS IS OUR CLIENTS SUCCESS</h4>
 )
}

export default ClassComponent;