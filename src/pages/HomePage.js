import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import hotelActions from "../actionCreators/hotel"
import Typography from '@material-ui/core/Typography';
import FormSearch from '../components/FormSearch/FormSearch'

class HomePage extends Component {
    componentDidMount() {
        //this.props.getAvailableRate()
    }
    render() {
        const { formRate, setFormRate, getAvailableRate } = this.props
        return (
            <React.Fragment>
                <FormSearch formRate={formRate} onChange={setFormRate} getAvailableRate={getAvailableRate}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    formRate: state.hotel.formRate,
    lowestRate: state.hotel.lowestRate,
    rates: state.hotel.rates,
})

const mapDispatchToProps = {
    getAvailableRate: hotelActions.getAvailableRate,
    setFormRate: hotelActions.setFormRate 
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(HomePage)
)
