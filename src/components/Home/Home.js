import React, {Component} from 'react';

import HistoAirService from "../../repository/axiosRepository";
import Header from "../Header/Header";
import Accordion from "../Accordion/Accordion";
import Loader from 'react-loader-spinner'
import FlightsbyCountry from "../Results/FlightsbyContry";
import FlightsbyAirport from "../Results/FlightsbyAirport";
import FlightsbyCallsign from "../Results/FlightsbyCallsign";
import FlightsbyEstimated from "../Results/FlightsbyEstimated";
import FlightsbyTimeOf from "../Results/FlightsbyTimeOf";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flightByCountryList: [],
            flightByAirportList: [],
            flightByCallsignList: [],
            flightByEstimatedList: [],
            flightByTimeOfList: [],
            showLoader: false,
            show: true
        };
    }

    addCountry = (country, info) => {
        this.setState({
            flightByCountryList: [],
            flightByAirportList: [],
            flightByCallsignList: [],
            flightByEstimatedList: [],
            flightByTimeOfList: [],
            showLoader: !this.state.showLoader,
            show: true
        });
        const countryStr = country.length > 0 ? country : "USA";
        HistoAirService.fetchFlights(countryStr, info).then((response) => {
            const newFlights = response.data;
            this.setState((prevState) => {
                const newFlightsRef = [...newFlights];
                return {
                    "flightByCountryList": newFlightsRef,
                };
            });
            this.setState({
                showLoader: !this.state.showLoader,
            });
            if (this.state.flightByCountryList.length < 1) this.setState({show: false});
        });

    };

    addAirport = (airport, info) => {
        this.setState({
            flightByCountryList: [],
            flightByAirportList: [],
            flightByCallsignList: [],
            flightByEstimatedList: [],
            flightByTimeOfList: [],
            showLoader: !this.state.showLoader,
            show: true
        });

        HistoAirService.fetchAirports(airport, info).then((response) => {
            const newFlights = response.data;
            this.setState((prevState) => {
                const newFlightsRef = [...newFlights];
                return {
                    "flightByAirportList": newFlightsRef,
                };
            });
            this.setState({
                showLoader: !this.state.showLoader,
            });
            if (this.state.flightByAirportList.length < 1) this.setState({show: false});
        });

    };

    addCallsign = (callsign) => {
        this.setState({
            flightByCountryList: [],
            flightByAirportList: [],
            flightByCallsignList: [],
            flightByEstimatedList: [],
            flightByTimeOfList: [],
            showLoader: !this.state.showLoader,
            show: true
        });

        HistoAirService.fetchCallsign(callsign).then((response) => {
            const newFlights = response.data;
            this.setState((prevState) => {
                const newFlightsRef = [...newFlights];
                return {
                    "flightByCallsignList": newFlightsRef,
                };
            });
            this.setState({
                showLoader: !this.state.showLoader,
            });
            if (this.state.flightByCallsignList.length < 1) this.setState({show: false});
        });

    };

    addEstimated = (time) => {
        this.setState({
            flightByCountryList: [],
            flightByAirportList: [],
            flightByCallsignList: [],
            flightByEstimatedList: [],
            flightByTimeOfList: [],
            showLoader: !this.state.showLoader,
            show: true
        });
        const timeInt = parseInt(time);

        HistoAirService.fetchEstimated(timeInt).then((response) => {
            const newFlights = response.data;
            this.setState((prevState) => {
                const newFlightsRef = [...newFlights];
                return {
                    "flightByEstimatedList": newFlightsRef,
                };
            });
            this.setState({
                showLoader: !this.state.showLoader,
            });
            if (this.state.flightByEstimatedList.length < 1) this.setState({show: false});
        });

    };

    addTimeOf = (before, date, type) => {
        this.setState({
            flightByCountryList: [],
            flightByAirportList: [],
            flightByCallsignList: [],
            flightByEstimatedList: [],
            flightByTimeOfList: [],
            showLoader: !this.state.showLoader,
            show: true
        });

        HistoAirService.fetchTimeOf(before, date, type).then((response) => {
            const newFlights = response.data;
            this.setState((prevState) => {
                const newFlightsRef = [...newFlights];
                return {
                    "flightByTimeOfList": newFlightsRef,
                };
            });
            this.setState({
                showLoader: !this.state.showLoader,
            });
            if (this.state.flightByTimeOfList.length < 1) this.setState({show: false});
        });

    };

    render() {
        return (
            <>
                <Header/>
                <div className="container-fluid">
                    <div className="row mt-4">
                        <div className="col-5" style={{overflowY: "auto", maxHeight: 85 + "vh"}}>
                            <Accordion
                                onAddCountry={this.addCountry}
                                onAddAirport={this.addAirport}
                                onAddCallsign={this.addCallsign}
                                onAddEstimated={this.addEstimated}
                                onAddTimeOf={this.addTimeOf}

                            />
                        </div>
                        <div className="col-7" style={{overflowY: "auto", maxHeight: 85 + "vh"}}>
                            <div className="row">

                                    <div style={{position: "absolute", top: 0+"px",left: 0+"px",bottom: 0+"px",right: 0+"px", display: "flex",alignItems: "center",overflow: "auto"}}>
                                        <div style={{margin: "auto", maxHeight: 100+"%"}}>
                                            <Loader type="Plane" color="#somecolor" height={80} width={80} visible={this.state.showLoader} />
                                        </div>
                                    </div>

                                <div hidden={this.state.show}
                                     className="row">
                                    <div style={{position: "absolute", top: 0+"px",left: 0+"px",bottom: 0+"px",right: 0+"px", display: "flex",alignItems: "center",overflow: "auto"}}>
                                        <div style={{margin: "auto", maxHeight: 100+"%"}}>
                                            No data!
                                        </div>
                                    </div>
                                </div>



                                <FlightsbyCountry flights={this.state.flightByCountryList}/>
                                <FlightsbyAirport flights={this.state.flightByAirportList}/>
                                <FlightsbyCallsign flights={this.state.flightByCallsignList}/>
                                <FlightsbyEstimated flights={this.state.flightByEstimatedList}/>
                                <FlightsbyTimeOf flights={this.state.flightByTimeOfList}/>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    };
}

export default Home;