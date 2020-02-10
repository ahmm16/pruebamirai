import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class FormSearch extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        e.preventDefault();
        this.props.onChange(e.target.name, e.target.value);
    }
    render() {
        const { hotelId,
            checkIn,
            numNights } = this.props.formRate
        const getAvailableRate = this.props.getAvailableRate
        return (
            <React.Fragment>
                <Typography component="h1" variant="h3" color="primary">
                    Busca la oferta más barata
                </Typography>
                <FormControl variant="outlined" className="formSearch">
                    <InputLabel htmlFor="outlined-age-native-simple">
                        Selecciona un Hotel
                    </InputLabel>
                    <Select
                        native
                        value={hotelId}
                        name="hotelId"
                        id="hotelId"
                        onChange={this.onChange}
                    >
                        <option value={''} />
                        <option value={44069509}>Hotel Baqueira Val de Neu</option>
                        <option value={10030559}>Hotel Moderno</option>
                        <option value={100376478}>Hotel Grand Luxor</option>
                    </Select>
                    <Grid container alignItems="center" justify="space-between">
                        <TextField
                            id="checkIn"
                            label="Checkin"
                            type="date"
                            name="checkIn"
                            defaultValue={checkIn}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.onChange}
                        />
                        <TextField
                            id="numNights"
                            label="Número de noches"
                            type="number"
                            name="numNights"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            value={numNights}
                            onChange={this.onChange}
                        />
                    </Grid>
                    <Button variant="outlined" color="primary" id="searchButton" onClick={getAvailableRate}>
                        Buscar
                    </Button>
                </FormControl>
            </React.Fragment>
        )
    }
}

export default FormSearch