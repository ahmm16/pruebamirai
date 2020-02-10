import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Typography variant="body2" color="primary" align="center">
                    Made with <FavoriteIcon className="madewithlove" /> by Alex!
                    {" " + new Date().getFullYear()}
                    {'.'}
                </Typography>
            </footer>
        );
    }
}

export default Footer;