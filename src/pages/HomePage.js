import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import hotelActions from "../actionCreators/hotel"
import { FormSearch } from '../components/FormSearch/'
import { Response, Loader } from '../components/common/'
import { Rate } from '../components/'

class HomePage extends Component {
    componentDidMount() {
        //this.props.getAvailableRate()
    }
    render() {
        const { formRate, setFormRate, getAvailableRate, lowestRate, rates, loadingRate, rateResponse } = this.props
        return (
            <React.Fragment>
                <FormSearch formRate={formRate} onChange={setFormRate} getAvailableRate={getAvailableRate} />
                {lowestRate !== false && <Rate data={lowestRate} />}
                <Loader status={loadingRate} />
                {rateResponse === -1 && <Response titleResponse={"Error en el CheckIn"}
                    descriptionResponse={"No puede introducir una fecha anterior a la actual"}
                />}
                {rateResponse === -2 && <Response titleResponse={"Error en el número de noches"}
                    descriptionResponse={"No puede introducir un numero de noches menor que 0 o mayor que 30"}
                />}
                {rateResponse === -3 && <Response titleResponse={"Lo sentimos, no hay tarifas disponibles"} />}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    formRate: state.hotel.formRate,
    lowestRate: state.hotel.lowestRate,
    rates: state.hotel.rates,
    rateResponse: state.hotel.rateResponse,
    loadingRate: state.hotel.loadingRate
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
