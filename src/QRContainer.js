import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';

class QrContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 'Hold QR Code Steady and Clear to Scan',
        }
        this.handleScan = this.handleScan.bind(this)
    }

    handleScan(result) {
        this.setState({
            result: result.data
        })
    }

    handleError(err) {
        console.error(err);
    }

    render() {
        const previewStyle = {
            border: '1px solid black',
            margin: '10px',
            height: 700,
            width: 1000,
            display: 'flex',
            justifyContent: "center"
        }

        const camStyle = {
            display: 'flex',
            justifyContent: "center",
            marginTop: '10px'
        }

        const textStyle = {
            fontSize: '30px',
            textAlign: 'center',
            marginTop: '10px'
        }
        return (
            <React.Fragment>
                <div style={camStyle}>
                    <QrReader
                        delay={100}
                        style={previewStyle}
                        onError={this.handleError}
                        onScan={this.handleScan}
                    />
                </div>
                <p style={textStyle}>
                    {this.state.result}
                </p>
            </React.Fragment>
        )
    }
}
export default QrContainer;