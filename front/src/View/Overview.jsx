import styles from './homepage.module.css'
import Chart from 'react-apexcharts'
import React from 'react';

export default function Overview() {
    return (
        <div>
            <div className={styles.oi}>
                <div className={styles.overview}>
                    <p>Overview</p><br />
                    <Overview_2 />
                </div>
                <div className={styles.invoicing}>
                    <p>Invoicing (€)</p><br />
                    <Invoicing />
                </div>
            </div>
        </div>
    );
}

class Overview_2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                }
            },
            series: [{
                name: 'series-1',
                data: [20, 40, 60, 80, 100, 120, 140, 160, 50, 60, 120, 180]
            }]
        }

    }
    render() {
        return (
            <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={230} />
        )
    }
}

class Invoicing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [68, 16, 11, 5],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Yearly', 'Monthly', 'Weekly', 'Daily'],
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
                <Chart options={this.state.options} series={this.state.series} type="pie" width={400} />
            </div>
        )
    }
}
