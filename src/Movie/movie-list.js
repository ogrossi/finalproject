import React from 'react';
import Movie from './movie';
import ReviewForm from './review-form';
import ReviewList from './review-list';



export default class MovieList extends React.Component {
    render() {
        let movieOne = {
            title: 'Shawshank Redemption',
            image: <img src='https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/21463/shawshankonesheet.jpg'/>,
            synopsis: 'Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didnt commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden, etc., all in 19 years.',
            genre: 'Genre: Drama/Crime',
           

        };
        let movieTwo = {
            title: 'VENOM: LET THERE BE CARNAGE (2021)',
            image: <img src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/223021/FND_poster_VenomLTBC_PreSale.jpg" />,
            synopsis: 'Tom Hardy returns to the big screen as the lethal protector Venom, one of MARVEL’s greatest and most complex characters. Directed by Andy Serkis, the film also stars Michelle Williams, Naomie Harris and Woody Harrelson, in the role of the villain Cletus Kasady/Carnage.',
            genre: 'Genre: Action/Adventure,  Suspense/Thriller',
            
            
        };
        let movieThree = {
            title: 'TERMINATOR 2: JUDGMENT DAY (1992) ',
            image: <img src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/200453/t2-judgementday-posterart.jpg" />,
            synopsis: 'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.',
            genre: 'Genre: Science fiction action',
            
            
        };
        let movieFour = {
            title: 'AVENGERS: ENDGAME (2019) ',
            image: <img src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/215871/AvengersEndgame_Payoff.jpg" />,
            synopsis: ' Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
            genre: 'Genre: Science fiction action',
       
            
        };
        return (
            <div className="container">
                <Movie {...movieOne} />
                <div>
                    <ReviewList />
                
                <br/><br/>
                </div>
                <Movie {...movieTwo} />
                <div>
                    <ReviewList />
                </div>
                <br/><br/>

                <Movie {...movieThree} />
                <div>
                    <ReviewList />
                </div>
                <br/><br/>
                <Movie {...movieFour} />
                <div>
                    <ReviewList />
                </div>
                <br/><br/>
            </div>
            
        
           
        );

    }
}
