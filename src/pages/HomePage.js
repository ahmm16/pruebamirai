import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import hotelActions from "../actionCreators/hotel"
import { FormSearch } from '../components/FormSearch/'
import { Response, Loader } from '../components/common/'
import { Rate, ListRates } from '../components/'
import Constants from '../constants/'

class HomePage extends Component {
    render() {
        const { formRate, setFormRate, getAvailableRate, lowestRate, rates, loadingRate, rateResponse } = this.props
        return (
            <React.Fragment>
                <FormSearch formRate={formRate} onChange={setFormRate} getAvailableRate={getAvailableRate} />
                <Loader status={loadingRate} />
                {lowestRate !== false &&
                    <React.Fragment>
                        <Rate data={lowestRate} />
                        <ListRates data={rates} />
                    </React.Fragment>
                }
                {rateResponse === Constants.INCORRECT_HOTEL_ID && <Response id={"error" + Constants.INCORRECT_HOTEL_ID} titleResponse={"Error en el Hotel seleccionado."}
                    descriptionResponse={"Por favor vuelve a seleccionar un Hotel."}
                />}
                {rateResponse === Constants.INCORRECT_CHECKIN_DATE && <Response id={"error" + Constants.INCORRECT_CHECKIN_DATE} titleResponse={"Error en el CheckIn."}
                    descriptionResponse={"No puede introducir una fecha anterior a la actual."}
                />}
                {rateResponse === Constants.INCORRECT_NUMBER_NIGHTS && <Response id={"error" + Constants.INCORRECT_NUMBER_NIGHTS} titleResponse={"Error en el número de noches."}
                    descriptionResponse={"No puede introducir un numero de noches menor que 0 o mayor que 30."}
                />}
                {rateResponse === Constants.NO_AVAILABLE_RATES && <Response id={"error" + Constants.NO_AVAILABLE_RATES} titleResponse={"Lo sentimos, no hay tarifas disponibles."} />}
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
