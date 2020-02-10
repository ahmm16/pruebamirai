import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Grid container alignItems="center" justify="space-between">
                        <img alt="walmeric" src="https://es.mirai.com/wp-content/themes/miraicorp/images/xlogo-mirai-es.png.pagespeed.ic.-L2H1h7kO0.webp" />
                        <Typography variant="h6" noWrap>
                            Prueba Mirai
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;