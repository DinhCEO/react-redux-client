import React from 'react'
import './loading.scss'


class LoadingCodePen extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="loading">
                <div className="loading__square"/>
                <div className="loading__square"/>
                <div className="loading__square"/>
                <div className="loading__square"/>
                <div className="loading__square"/>
                <div className="loading__square"/>
                <div className="loading__square"/>
            </div>
        )
    }
}

export default LoadingCodePen;