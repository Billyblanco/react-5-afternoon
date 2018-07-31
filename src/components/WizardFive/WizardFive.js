import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateRealEsateAgent } from '../../ducks/ActionReducer.js';


class WizardFive extends Component {

    render(){
        const { updateRealEsateAgent } = this.props
        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={() => updateRealEsateAgent("true")}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={() => updateRealEsateAgent("false")}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        realEstateAgent: state.realEstateAgent
    }
}

export default connect(mapStateToProps, { updateRealEsateAgent })(WizardFive);