import React, { Component } from 'react'
import { connect } from 'react-redux'
import RouteList from "../Core/routes";
import { get_role } from "../Core/redux/selectors/auth";
import { Header, Footer } from "./Templates/fragments";

class Site extends Component {
    render() {
        return (
            <>
                <Header role={this.props.role} />
                <div id="body" className={`${this.props.role} ui container`}>
                    <RouteList role={this.props.role} />
                </div>
                <Footer role={this.props.role} />
            </>
        );
    }
};

const mapState = state => {
    return {
        role: get_role(state)
    }
}

export default connect(mapState)(Site)