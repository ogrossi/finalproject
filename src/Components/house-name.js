import React from 'react';


export default class HouseName extends React.Component{
	state = {
	  review: '',
	  reviews: [],
	};
  
	saveReview = (i) => {
		this.setState({ review: i.target.value });
	};
  
	addReview = () => {
	  let { reviews, review } = this.state;
	  reviews.push(review);
	  this.setState({review: review});
	};
  
	render() {
	  return (
		<div className="card">
            <h1 id="reviewsList">Name your new dream home!</h1>
            <div id="reviewsList">
                <input className="form-control" id="reviewInput" type="text" placeholder="House Name" onChange={this.saveReview} />
            </div>
			<div className="card-body">
                <button type="button" className="btn btn-primary" onClick={this.addReview}> Add House </button>
				
            </div>
            <div>
                <h5 className="card-header bg-primary text-white">My House</h5>
                    {this.state.reviews.map((content, comment) => {
                    return <h3><li className="card-body" key={comment}> {content}</li></h3>
                    })}
            </div>
		</div>
	  );
	}
  }
