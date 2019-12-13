import React from 'react';
import './SidePanel.css'

export class SidePanel extends React.Component {

    constructor(){
        super();
        this.state = {
            
        };

    }

    

    render(){
        
        return(
            <div className = "myapp-sidePanel">
                <div className = "myapp-sidePanel-filter">
                    <h2> Filter </h2>
                    <hr />
                    <select className = "myapp-dropDown">
                        <option default>Type Of house</option>
                        <option>3 BHK</option>
                    </select>
                    <select className = "myapp-dropDown">
                        <option default>Interior</option>
                    </select>
                    
                    <div className = "myapp-sidePanel-sliders">
                        <p className = "myapp-sidePanel-title"> Price </p>
                        <input type = "range" min = "2000000" max = "8000000" name = "priceFilter"  />
                            <div className = "min-max">
                                <span>2000000</span><span>8000000</span>
                            </div>
                        <p className = "myapp-sidePanel-title"> Floor Space </p>
                        <input type = "range" min = "90 sq.m" max = "150 sq.m" name = "floorSpaceFilter"  />
                        <p className = "myapp-sidePanel-title"> Radius </p>
                        <input type = "range" min = "1 KM" max = "50 KM" name = "radiusFilter"  />
                    </div>

                    <div className = "myapp-facilities">
                        <p className = "myapp-sidePanel-title"> Facilities </p>
                        <span >Elevator</span><input type = "checkbox"  name = "facilities" /><br />
                        <span >Storage</span><input type = "checkbox"  name = "facilities" /><br />
                        <span >Swimming Pool</span><input type = "checkbox"  name = "facilities" /><br />
                        <span >Garden</span><input type = "checkbox"  name = "facilities" />
                     </div>   
                </div>
            </div>
            
        );
    }

}