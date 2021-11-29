import React from 'react';

export default class Movie extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header bg-primary text-white">
                    {this.props.title}
                </div>
                <div className="card-body">
                    {this.props.image}
                </div>
                <div className="card-body">
                    {this.props.synopsis}
                </div>
                <div className="card-body">
                    {this.props.genre}
                </div>
                <div className="card-body">
                    {this.props.rating}
                </div>
            </div>
        );
    }
}
