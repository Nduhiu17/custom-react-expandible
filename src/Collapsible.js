import React, {Component} from 'react';

class Collapsible extends Component {

    constructor(props) {
        super(props);

        this.state={
            open:false
        }

        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e){
        this.setState({
            open:!this.state.open
        })
    }
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div onClick={(e)=>this.togglePanel(e)} className="header">{this.props.title}</div>
                    {this.state.open ? (<div>{this.props.children}</div>) : null}
                </div>
        </div>);
    }
}

export default Collapsible;