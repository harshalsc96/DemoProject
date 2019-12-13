import * as React from 'react'
import { Header } from '../Header/Header'; 
import { SidePanel } from '../SidePanel/SidePanel';
import { MainContent } from "../MainContent/MainContent";

export class MyAppContainer extends React.Component {

    render(){
        return(
            <div>
                <div>
                    <Header />
                </div>
                <SidePanel />
                <MainContent />
            </div>
        )
    }

}