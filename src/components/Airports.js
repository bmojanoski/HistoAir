import React, {Component} from 'react';
import HistoAirService from "../repository/axiosRepository";
import Header from "./Header/Header";
import jsonData from '../airports'
class Airports extends Component {

    constructor(props) {
        super(props);
        this.state = {
            airports: [],
            counter:0
        }
    }
    componentDidMount() {
        this.addAir();
    }

    addAir = () => {
        this.setState({
            //airports: Object.values(jsonData)
        })
    };

    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className="row mt-4">
                        <table className="table table-dark">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Icao</th>
                                <th scope="col">Name</th>
                                <th scope="col">City</th>
                                <th scope="col">State</th>
                                <th scope="col">Country</th>
                                <th scope="col">Elevation</th>
                                <th scope="col">Latitude</th>
                                <th scope="col">Longitude</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.airports.length > 0 ? this.state.airports.map((airport) =>
                                    <tr>
                                        <th scope="row">{++this.state.counter}</th>
                                        <td>{airport.icao}</td>
                                        <td>{airport.iata}</td>
                                        <td>{airport.name}</td>
                                        <td>{airport.city}</td>
                                        <td>{airport.country}</td>
                                        <td>{airport.elevation}</td>
                                        <td>{airport.lat}</td>
                                        <td>{airport.lon}</td>
                                    </tr>
                                ) : ""
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Airports;
