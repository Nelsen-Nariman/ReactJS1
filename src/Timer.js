// Component ada 2 :
// - Functional Component
// - Class Component

import React from "react";
// import react from "react";

const TimerFunctional = (props) => {
    let [user, setUser] = React.useState("peter");

    // return <h1>Hello Functional dari {props.user}</h1>

    return( 
    <h1>
        Hello Functional dari state {user} 
        <button onClick={
            function(event){
                setUser("BNCC");
            }
        }>
            ganti nama jadi BNCC
        </button>
    </h1>
    );
}

// class TimerClass extends React.Component{
//     render(){
//         return <h1>Hello Class</h1>
//     }
// }

export default TimerFunctional;

// Kalau mau yg TimerClass tinggal:
// export default TimerClass;