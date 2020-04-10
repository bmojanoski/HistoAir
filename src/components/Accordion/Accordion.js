import React, {Component} from 'react';
import DateTimePicker from 'react-datetime-picker';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flightByCountryList: [],
            country: "",
            info: 'Arrival',
            airport: "",
            code: 'Arrival',
            callsign: "",
            time: "",
            type:'Arrival',
            date: new Date(),
            before: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        this.setState({
            before: !this.state.before
        });
    }

    onChange = date => this.setState({date});

    validateForm() {
        return this.state.country.length > 2;
    }

    validateForm2() {
        return this.state.airport.length > 2;
    }

    validateForm3() {
        return this.state.callsign.length > 2;
    }

    validateForm4() {
        return this.state.time.length > 2;
    }

    addCountry(e) {
        e.preventDefault();
        this.props.onAddCountry(this.state.country, this.state.info);
    };

    addAirport(e) {
        e.preventDefault();
        this.props.onAddAirport(this.state.airport, this.state.code)
    }

    addCallsign(e) {
        e.preventDefault();
        this.props.onAddCallsign(this.state.callsign)
    }

    addEstimated(e) {
        e.preventDefault();
        this.props.onAddEstimated(this.state.time)
    }
    addTimeOf(e) {
        e.preventDefault();
        var date = this.state.date.toISOString();
        this.props.onAddTimeOf(this.state.before,date,this.state.type)
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header  text-left" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn  text-reset collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapseOne" aria-expanded="false"
                                        aria-controls="collapseOne">
                                    Get Flights By Country
                                </button>
                            </h2>
                        </div>
                        <div id="collapseOne"
                             className="collapse show"
                             aria-labelledby="headingOne"
                             data-parent="#accordionExample">
                            <div className="card-body">
                                <div className="container">
                                    <div className="row text-left">
                                        <div className="col-12 col-md-12 col-lg-12">

                                            <div className="form-group my-2">
                                                <div className="form-row">
                                                    <div className="col">
                                                        <input type="text" id="arrivalInput"
                                                               className="form-control"
                                                               placeholder="Enter country"

                                                               value={this.state.country}
                                                               onChange={(e) => this.setState({country: e.target.value})}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">

                                                <input type="radio"
                                                       id="radioArrivalCountry"
                                                       name="customRadio"
                                                       value={"Arrival"}
                                                       checked={this.state.info === "Arrival"}
                                                       onChange={(e) => this.setState({info: e.currentTarget.value})}
                                                       className="custom-control-input"/>

                                                <label className="custom-control-label" htmlFor="radioArrivalCountry">
                                                    Arrival</label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">

                                                <input type="radio"
                                                       id="radioDepartureCountry"
                                                       name="customRadio"
                                                       value={"Departure"}
                                                       checked={this.state.info === "Departure"}
                                                       onChange={(e) => this.setState({info: e.currentTarget.value})}
                                                       className="custom-control-input"/>

                                                <label className="custom-control-label" htmlFor="radioDepartureCountry">
                                                    Departure</label>
                                            </div>
                                            <div className="form-group mt-2">
                                                <button
                                                    className="btn btn-primary"
                                                    disabled={!this.validateForm()}
                                                    onClick={(e) => this.addCountry(e)}
                                                >Search
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header   text-left" id="headingTwo">
                            <span className="mb-0">
                                <button className="btn text-reset text-capitalize" type="button" data-toggle="collapse"
                                        data-target="#collapseTwo"
                                        aria-expanded="true" aria-controls="collapseTwo">
                                    Get flights By Airport
                                </button>
                            </span>
                        </div>

                        <div id="collapseTwo"
                             className="collapse"
                             aria-labelledby="headingTwo"
                             data-parent="#accordionExample">
                            <div className="card-body">
                                <div className="container">
                                    <div className="row text-left">
                                        <div className="col-12 col-md-12 col-lg-12">

                                            <div className="form-group my-2">
                                                <div className="form-row">
                                                    <div className="col">
                                                        <input type="text" id="arrivalInput"
                                                               className="form-control"
                                                               placeholder="Enter airport ICAO code"
                                                               value={this.state.airport}
                                                               onChange={(e) => this.setState({airport: e.target.value})}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">

                                                <input type="radio"
                                                       id="radioArrivalAirport"
                                                       name="customRadioAirport"
                                                       value={"Arrival"}
                                                       checked={this.state.code === "Arrival"}
                                                       onChange={(e) => this.setState({code: e.currentTarget.value})}
                                                       className="custom-control-input"/>

                                                <label className="custom-control-label" htmlFor="radioArrivalAirport">
                                                    Arrival</label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">

                                                <input type="radio" id="radioDepartureAirport"
                                                       name="customRadioAirport"
                                                       value={"Departure"}
                                                       checked={this.state.code === "Departure"}
                                                       onChange={(e) => this.setState({code: e.currentTarget.value})}
                                                       className="custom-control-input"/>

                                                <label className="custom-control-label" htmlFor="radioDepartureAirport">
                                                    Departure</label>
                                            </div>
                                            <div className="form-group mt-2">
                                                <button
                                                    className="btn btn-primary"
                                                    disabled={!this.validateForm2()}
                                                    onClick={(e) => this.addAirport(e)}
                                                >Search
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header text-left" id="headingThree">
                            <h2 className="mb-0">
                                <button className="btn text-capitalize text-reset collapsed" type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                    Get Flights By Call Sign
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                             data-parent="#accordionExample">
                            <div className="card-body">
                                <div className="container">
                                    <div className="row text-left">
                                        <div className="col-12 col-md-12 col-lg-12">

                                            <div className="form-group my-2">
                                                <div className="form-row">
                                                    <div className="col">
                                                        <input type="text" id="callsignInput"
                                                               className="form-control"
                                                               placeholder="Enter Call Sign code"
                                                               value={this.state.callsign}
                                                               onChange={(e) => this.setState({callsign: e.target.value})}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group mt-2">
                                                <button
                                                    className="btn btn-primary"
                                                    disabled={!this.validateForm3()}
                                                    onClick={(e) => this.addCallsign(e)}
                                                >Search
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header text-left" id="headingFour">
                            <h2 className="mb-0">
                                <button className="btn text-capitalize text-reset collapsed" type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseFour" aria-expanded="false"
                                        aria-controls="collapseFour">
                                    Get Flights With Estimated Flight Time
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                             data-parent="#accordionExample">
                            <div className="card-body">
                                <div className="container">
                                    <div className="row text-left">
                                        <div className="col-12 col-md-12 col-lg-12">

                                            <div className="form-group my-2">
                                                <div className="form-row">
                                                    <div className="col">
                                                        <div className="input-group mb-3">
                                                            <input type="number" id="timeInput"
                                                                   className="form-control"
                                                                   placeholder="Enter Estimated Flight Time in seconds"
                                                                   value={this.state.time}
                                                                   onChange={(e) => this.setState({time: e.target.value})}
                                                            />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text"
                                                                      id="basic-addon1">seconds</span>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group mt-2">
                                                <button
                                                    className="btn btn-primary"
                                                    disabled={!this.validateForm4()}
                                                    onClick={(e) => this.addEstimated(e)}
                                                >Search
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header text-left" id="headingFive">
                            <h2 className="mb-0">
                                <button className="btn text-capitalize text-reset collapsed" type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseFive" aria-expanded="true" aria-controls="collapseOne">
                                    Get flights By Time Of
                                </button>
                            </h2>
                        </div>

                        <div id="collapseFive"
                             className="collapse"
                             aria-labelledby="headingFive"
                             data-parent="#accordionExample">
                            <div className="card-body">
                                <div className="container">
                                    <div className="row text-left">
                                        <div className="col-12 col-md-12 col-lg-12">

                                            <div className="form-group my-2">
                                                <div className="form-row">
                                                    <div className="col">
                                                        <DateTimePicker
                                                            onChange={this.onChange}
                                                            value={this.state.date}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group my-2">
                                                <div className="form-row">
                                                    <div className="col">
                                                        <div className="custom-control custom-switch">
                                                            <input
                                                                name="Before"
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customSwitch1"
                                                                checked={this.state.before}
                                                                onChange={this.handleInputChange} />

                                                            <label className="custom-control-label" htmlFor="customSwitch1">
                                                                Search before this date
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input type="radio"
                                                       id="radioTimeOfArrival"
                                                       name="customRadioTimeOf"
                                                       value={"Arrival"}
                                                       checked={this.state.type === "Arrival"}
                                                       onChange={(e) => this.setState({type: e.currentTarget.value})}
                                                       className="custom-control-input"/>

                                                <label className="custom-control-label" htmlFor="radioTimeOfArrival">
                                                    Arrival</label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">

                                                <input type="radio" id="radioTimeOfDeparture"
                                                       name="customRadioTimeOf"
                                                       value={"Departure"}
                                                       checked={this.state.type === "Departure"}
                                                       onChange={(e) => this.setState({type: e.currentTarget.value})}
                                                       className="custom-control-input"/>

                                                <label className="custom-control-label" htmlFor="radioTimeOfDeparture">
                                                    Departure</label>
                                            </div>

                                            <div className="form-group mt-2">
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={(e) => this.addTimeOf(e)}
                                                >Search
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    };
}

export default Accordion;