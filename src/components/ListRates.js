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
                <Typography variant="h3" color="primary" component="h2" align="center">
                    Aquí tienes un listado de todas las ofertas del hotel:
                </Typography>
                {data !== false && data.length > 0 &&
                    <Grid container spacing={2} className="gridRates">
                        {
                            data.map(rate =>
                                <Rate data={rate} key={data.length--} list={true}/>
                            )
                        }
                    </Grid>
                }
            </React.Fragment>
        )
    }
}

export default ListRates
