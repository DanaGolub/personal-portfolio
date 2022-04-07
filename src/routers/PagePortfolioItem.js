import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';


const PagePortfolioItem = () => {
    // Use the React Router useParams() custom hook to extract the 
    // "id" parameter passed to this component...
    let { id }  = useParams();


    // Make sure id is a whole number between 1 and 6 (inclusive)
    // ...If is not...then send them back to the Portfolio page
    if(isNaN(id) || (id % 1 !== 0) || (id < 1 || id > 6)){
        return (
            <Navigate to="/portfolio" />
        );
    }

    id = id*1;

    let aboutPj;

    switch(id) {
        case 1:
            // <p>Project1</p>
            aboutPj = <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad vero ex dignissimos, ut accusamus facere. Maxime fugiat modi sit, delectus laborum minus expedita, error, pariatur quas voluptas a corporis vitae!</p>
            break;
        case 2:
            aboutPj = <p>Project1</p>
            break;
        case 3:
            aboutPj = <p>Project2</p>
            break;
        case 4:
            aboutPj = <p>Project3</p>
            break;
        case 5:
            aboutPj = <p>Project4</p>
            break;
        default:
            // img = <div className="gallery-item"><img src={cat01} alt="Orange kitten" /></div>;
    }

    return (
        <main>
            <section className="portfolio-item-section">
                <h2>Portfolio Item {id}</h2>
                <p>{aboutPj}</p>
            </section>
        </main>
    );

}
    
export default PagePortfolioItem;