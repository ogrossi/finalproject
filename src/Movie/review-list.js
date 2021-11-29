import React from 'react';
import ReviewForm from './review-form';

export default class ReviewList extends React.Component {
    render () {
        return (
            <div className="card ">
                <ReviewForm />
            </div>
        );
    }
}
