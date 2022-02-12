import React, { useState } from 'react';
import { IoFileTraySharp } from 'react-icons/io5';
import '../css/states.css';
import { 
    updateEmployeeState
} from '../api/authprovider';
import { STATES } from '../App'

const EmployeeStatus = ({empId, status, updateEmployee}) =>{
    const [currentState, setCurrentState] = useState(status);
    
    const handleCurrentStatus = selectedState => {
        updateEmployeeState(empId, selectedState)
        .then(() => setCurrentState(selectedState))
        .then(() => updateEmployee(empId, selectedState))
        .catch(err => console.error(err));
    };

    return(
        <div id={empId} className="container">
        <nav className="breadcrumbs" >
        {STATES && STATES.map((stateName, index) => 
            <a className={`breadcrumbs__item ` + (currentState === stateName ? 'is-active' : "") } 
                href="#!" key={index}  onClick={() => handleCurrentStatus(stateName)} >
                {(currentState === stateName ? <IoFileTraySharp /> : '')}
                <small>{stateName} </small> </a>      
        )}
        </nav>
        </div>
    )
}


export default EmployeeStatus;