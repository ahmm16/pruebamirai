import React, { Component } from "react"
import CircularProgress from '@material-ui/core/CircularProgress';

class Loader extends Component {
    render() {
        const { status } = this.props
        return (
            <div className={"loader"}>
                {status && <CircularProgress color="secondary" />}
            </div>
        );
    }
}
export default Loader