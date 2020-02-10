import React, { Component } from "react"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../imgs/author.jpg'
import { Loader } from "./common/"
import { Link } from "react-router-dom";

class Author extends Component {
    render() {
        const { data, loadingAuthors, showButton } = this.props
        return (
            <React.Fragment>
                {
                    loadingAuthors === true &&
                    <React.Fragment>
                        <Typography component="h2" variant="h4" color="secondary">Cargando detalle de libro</Typography>
                        <Loader status={loadingAuthors} />
                    </React.Fragment>
                }
                {
                    !loadingAuthors && data === false &&
                    <Typography component="h2" variant="h4" color="error">No se ha podido cargar el libro</Typography>
                }
                {
                    data !== false && data !== '' &&
                    <Grid item xs={6} md={3}>
                        <Card className="card">
                            <CardMedia
                                image={data.ID && img}
                                title="author"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p" align="center">
                                    {`${data.FirstName} ${data.LastName} `}
                                </Typography>
                            </CardContent>
                            {showButton &&
                                <CardActions>
                                    <Button size="large" color="secondary" variant="outlined" className="buttonCard">
                                        <Link to={"/autor/" + data.ID} className="linkCard">Ver detalles</Link>
                                    </Button>
                                </CardActions>
                            }
                        </Card>
                    </Grid>
                }
            </React.Fragment>
        )

    }
}
export default Author
