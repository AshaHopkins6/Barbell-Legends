import React from "react";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import LiftingTable  from "../component/LiftingTable";
import Records from "../Data/cleanedData.json"
import "/Users/ashahopkins/Desktop/BarbellLegends/Website/barbell-legends/src/App.css"



export default function LiftingRecords() {
    
    return (
        <div>
            <Header/>
                <LiftingTable data={Records}/>
            <Footer/>
        </div>    
      
    )
  }