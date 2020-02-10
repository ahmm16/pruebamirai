import React, { Component } from "react"
import LinearProgress from '@material-ui/core/LinearProgress';

class Loader extends Component {
    render() {
        const { status } = this.props
        return (
            <div className={"loader"}>
                {status && <LinearProgress color="secondary" />}
            </div>
        );
    }
}
export default Loader