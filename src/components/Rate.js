import React, { Component } from "react"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Rate extends Component {
    render() {
        const { data } = this.props
        return (
            <React.Fragment>
                <Typography variant="h3" color="primary" component="h2" align="center">
                    Oferta más barata encontrada:
                </Typography>
                {
                    data !== false && data !== '' &&
                    <Grid item xs={6} md={3} >
                        <Card className="card">
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p" align="center">
                                    {`Hotel id: ${data.hotelId}`}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" align="center">
                                    {`Nombre habitación: ${data.roomName}`}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" align="center">
                                    {`Precio: ${data.netPrice}`}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" align="center">
                                    {`${data.boardName}`}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                }
            </React.Fragment>
        )

    }
}
export default Rate
