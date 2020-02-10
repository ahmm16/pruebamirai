import React, { Component } from "react"
import Author from './Author'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Loader } from "./common/"

class ListAuthors extends Component {
    render() {
        const { data, loadingAuthors } = this.props
        return (
            <React.Fragment>
                {
                    loadingAuthors === true &&
                    <React.Fragment>
                        <Typography component="h2" variant="h4" color="secondary">Cargando autores</Typography>
                        <Loader status={loadingAuthors} />
                    </React.Fragment>
                }
                {
                    !loadingAuthors && data === false &&
                    <Typography component="h2" variant="h4" color="error">Ha habido un error al cargar el listado de autores</Typography>
                }
                {/*TODO: improve this conditional to not allow render the Grid*/}
                {data !== false && data.length > 0 &&
                    <Grid container spacing={2}>
                        {
                            data.map(author =>
                                <Author data={author} key={author.ID} showButton={true} />
                            )
                        }
                    </Grid>
                }
            </React.Fragment>
        )
    }
}

export default ListAuthors
