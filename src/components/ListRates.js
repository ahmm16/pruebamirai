import React, { Component } from "react"
import Rate from './Rate'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Loader } from "./common"

class ListRates extends Component {
    render() {
        const { data } = this.props
        return (
            <React.Fragment>
                {data !== false && data.length > 0 &&
                    <Grid container spacing={2}>
                        {
                            data.map(rate =>
                                <Rate data={rate} key={rate.key} />
                            )
                        }
                    </Grid>
                }
            </React.Fragment>
        )
    }
}

export default ListRates
