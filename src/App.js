// Koding react di App.js aja
// Selalu import react dlu diawal koding
import react, { useState } from "react";
import Timer from "./Timer";
import "./style.css";
import CssModule from "./style.module.css";
import PasswordCard from "./PasswordCard";
import React from "react";
// Functional Component
function App() {
  const [passwordList, setPasswordList] = useState([
    {
      password:"123", website:"BNCC", username:"email@gmail.com"
    },

    {
      password:"456", website:"Binus.ac.id", username:"binus@gmail.com"
    },

    {
      password:"789", website:"socs.binus.ac.id", username:"socs@gmail.com"
    }

  ])
  return (
    // <div>
    //   <h1 style={{color: "green"}}>Hello Peter Parker</h1>
    //   <Timer user={"peter"} />

    //   {/* Inline CSS */}
    //   <p style={{color: "red", fontSize: "24px"}}>Text Merah</p>

    //   {/* External CSS */}
    //   <p className="textCool">Text External CSS</p>

    //   {/* CSS Module -> Bikin jadi object gitu */}
    //   <p className={CssModule.textCool}>Text Module CSS</p>

    // </div>
    <React.Fragment>
      {passwordList.map(function({password, website, username}, index){
        return (
          <PasswordCard
          password={password} website={website} username={username}/>
        )
      })}


      <button onClick={function(){
      
        // Array distructuring -> buat nambahin data dan jadi array baru
        setPasswordList([
          ...passwordList,
          {
            password:"789", website:"socs.binus.ac.id", username:"socs@gmail.com"
          }    
        ])

      }}>
        tambah kartu password</button>
    </React.Fragment>
    
  );
}

export default App;
