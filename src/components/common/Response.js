import React, { Component } from "react"
import Typography from '@material-ui/core/Typography';

class Response extends Component {
    render() {
        const { titleResponse, descriptionResponse } = this.props
        return (
            <React.Fragment>
                <Typography component="h2" variant="h4" color="error">{titleResponse}</Typography>
                <Typography component="p" color="error">{descriptionResponse}</Typography>
            </React.Fragment>
        )
    }
}

export default Response