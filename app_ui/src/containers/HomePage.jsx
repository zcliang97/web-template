import React from 'react';
import Component from '../components/Component.jsx';

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='container' style={{width: '100', backgroundColor: '#1C2D35'}}>
                <div style={{height: '30px', fontSize: '30px', color: 'white', paddingBottom: '25px'}}>
                    Web Template
                </div>
                <Component />
            </div>
        )
    }
}

export default HomePage;