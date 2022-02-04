import React from 'react';
import styles from './homepage.module.css'
import Chart from 'react-apexcharts'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


export default function Homepage() {
    // Recebe Campos da Base de Dados 
    const [users, setUsers] = useState([]);
    const [imoveis, setImoveis] = useState([]);


    // Test Grafico 
    console.log(imoveis);
    console.log(users);
    useEffect(() => {
        getData();
        receiveUsers();
    }, [])

    function getData() {
        fetch('/listImoveis', { method: "GET" })
            .then(response => response.json())
            .then(data => setImoveis(data))
    }
    const receiveUsers = () => {
        fetch('/listUser', { method: "GET" })
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    return (
        <div>
            <div className={styles.firstDiv}>
                <div>
                    <h1 className={styles.title}>Administrator Area</h1>
                </div>


            </div>
            <div className={styles.nav}>
                <ul>
                    <li><Link className={styles.link} to="/Homepage">Homepage</Link></li>
                    <li><Link className={styles.link} to="/Clients">Clients</Link></li>
                    <li><Link className={styles.link} to="/Overview">Overview</Link></li>
                </ul>
            </div>

            <h2>Statistics</h2>

            <div className={styles.first3divs}>
                <div className={styles.area}>
                    <p>Area (m<sup>2</sup>)</p><br />
                    <Area />
                </div>
                <div className={styles.locations}>
                    <p>Locations</p><br />
                    <Locations />
                </div>
                <div className={styles.tipology}>
                    <p>Tipology</p><br />
                    <Tipology />
                </div>
            </div>
            <div className={styles.second3divs}>
                <div className={styles.certificate}>
                    <p>Energetic Certificate</p><br />
                    <EnergeticCertificate />
                </div>
                <div className={styles.prices}>
                    <p>Prices (€)</p><br />
                    <Prices />
                </div>
                <div className={styles.condition}>
                    <p>Condition</p>
                    <Condition />
                </div>
            </div>
            <div className={styles.third3divs}>
                <div className={styles.year}>
                    <p>Year of Construction</p><br />
                    <YearOfConstruction />
                </div>
                <div className={styles.types}>
                    <p>Properties Types</p><br />
                    <PropertyType />
                </div>
                <div className={styles.project}>
                    <p>Real Estate Project</p><br />
                    <RealEstateProject />
                </div>
            </div>
            <div>

            </div>

        </div>
    );
}

class Area extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [11, 12, 16, 24, 13, 1, 78, 10, 2, 10],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['0-99', '100-199', '200-299', '300-399', '400-499', '500-599', '600-699', '700-799', '800-899', '900-1000'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
    }

    render() {
        return (

            <div className={styles.chart}>
                <Chart options={this.state.options} series={this.state.series} type="pie" width={350} />
            </div>
        )
    }
}

class Locations extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    categories: ['Sintra', 'Lisbon', 'Porto', 'Setúbal', 'Aveiro', 'Beja', 'Faro', 'Guimarães', 'Braga', 'Guarda']
                }
            },
            series: [{
                name: 'series-1',
                data: [145, 278, 21, 9, 10, 155, 292, 105, 99, 40]
            }]
        }

    }
    render() {
        return (
            <Chart options={this.state.options} series={this.state.series} type="bar" width={350} height={230} />
        )
    }
}

class Tipology extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            series: [34, 60, 8, 24, 9, 2, 76, 69, 44, 10],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10 or superior'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
    }

    render() {
        return (

            <div className={styles.chart}>
                <Chart options={this.state.options} series={this.state.series} type="pie" width={350} />
            </div>
        )
    }
}

class EnergeticCertificate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    categories: ['A+', 'A', 'B', 'B-', 'C', 'D', 'E', 'F', 'G']
                }
            },
            series: [{
                name: 'series-1',
                data: [40, 65, 21, 13, 18, 198, 223, 115, 88, 20]
            }]
        }

    }
    render() {
        return (
            <Chart options={this.state.options} series={this.state.series} type="bar" width={350} height={230} />
        )
    }
}

class Prices extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            series: [10, 8, 7, 100, 1, 94, 8, 230, 64, 23],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['0-99 999', '100 000-199 999', '200 000-299 999', '300 000-399 000', '400 000-499 000', '500 000-599 000', '600 000-699 000', '700 000-799 000', '800 000-899 000', '900 000-1 000 000'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
    }

    render() {
        return (

            <div className={styles.chart}>
                <Chart options={this.state.options} series={this.state.series} type="pie" width={350} />
            </div>
        )
    }
}

class Condition extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    categories: ['New', 'Used', 'Renovated', 'Doom', 'In Construction', 'To Recover']
                }
            },
            series: [{
                name: 'series-1',
                data: [20, 58, 76, 112, 231, 180]
            }]
        }

    }
    render() {
        return (
            <Chart options={this.state.options} series={this.state.series} type="bar" width={350} height={230} />
        )
    }
}

class YearOfConstruction extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            series: [10, 26, 23, 54, 45, 97, 2, 6],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['1950-1959', '1960-1969', '1970-1979', '1980- 1989', '1990-1999', '2000-2009', '2010-2019', '2020-2022'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
    }

    render() {
        return (

            <div className={styles.chart}>
                <Chart options={this.state.options} series={this.state.series} type="pie" width={380} />
            </div>
        )
    }
}

class PropertyType extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    categories: ['Apartement', 'Dwelling', 'Bedrooms', 'Lands', 'Stores', 'Warehouses', 'Garages', 'Offices', 'Buildings', 'Farms and Homesteads']
                }
            },
            series: [{
                name: 'series-1',
                data: [432, 284, 82, 123, 20, 59, 10, 78, 39, 23]
            }]
        }

    }
    render() {
        return (
            <Chart options={this.state.options} series={this.state.series} type="bar" width={380} height={230} />
        )
    }
}

class RealEstateProject extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            series: [67, 43],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Yes', 'No',],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
    }

    render() {
        return (

            <div className={styles.chart}>
                <Chart options={this.state.options} series={this.state.series} type="pie" width={350} />
            </div>
        )
    }
}