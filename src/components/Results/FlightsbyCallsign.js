import React, {Component} from 'react';


class FlightsbyCallsign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flights: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({flights: nextProps.flights});
    }

    render() {
        return (
            <>

                {
                    this.state.flights.length > 0 ?
                        this.state.flights.map((flight) =>
                            <div className="col-6 mb-4">
                                <div className="card">
                                    <div className="card-body text-left small" key={flight.flightID}>
                                        <div className="row border-bottom">
                                            <div className="col-6">Departure Airport</div>
                                            <div className="col-6">{flight.departureAirport}</div>
                                        </div>
                                        <div className="row border-bottom">
                                            <div className="col-6">Arrival Airport</div>
                                            <div className="col-6">{flight.arrivalAirport}</div>
                                        </div>
                                        <div className="row border-bottom">
                                            <div className="col-6">Departure Country</div>
                                            <div className="col-6">{flight.departureCountry}</div>
                                        </div>
                                        <div className="row border-bottom">
                                            <div className="col-6">Arrival Country</div>
                                            <div className="col-6">{flight.arrivalCountry}</div>
                                        </div>
                                        <div className="row border-bottom">
                                            <div className="col-6">Call Sign</div>
                                            <div className="col-6">{flight.callsign}</div>
                                        </div>
                                        <div className="row border-bottom">
                                            <div className="col-6">Estimated Flight Time</div>
                                            <div className="col-6">{flight.estimatedFlightTime}</div>
                                        </div>
                                        <div className="row border-bottom">
                                            <div className="col-6">Time Of Arrival</div>
                                            <div className="col-6">{new Date(flight.timeOfArrival).toUTCString()}</div>
                                        </div>
                                        <div className="row border-bottom">
                                            <div className="col-6">Time Of Departure</div>
                                            <div className="col-6">{new Date(flight.timeOfDeparture).toUTCString()}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">Flight ID</div>
                                            <div className="col-6">{flight.flightID}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : ""
                }
            </>
        )

    }
}

export default FlightsbyCallsign;