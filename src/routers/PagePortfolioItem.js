import { IconLocalFireDepartment } from '@aws-amplify/ui-react';
import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import cat from '../images/cat.jpg'


const PagePortfolioItem = () => {
    // Use the React Router useParams() custom hook to extract the 
    // "id" parameter passed to this component...
    let { id } = useParams();


    // Make sure id is a whole number between 1 and 6 (inclusive)
    // ...If is not...then send them back to the Portfolio page
    if (isNaN(id) || (id % 1 !== 0) || (id < 1 || id > 6)) {
        return (
            <Navigate to="/portfolio" />
        );
    }

    id = id * 1;

    let projectName;
    let aboutPj;
    let projectImage;
    let briefDescription;

    switch (id) {
        case 1:
            projectName = "Thrift Book App"
            briefDescription = "Web App"
            aboutPj = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad vero ex dignissimos, ut accusamus facere. Maxime fugiat modi sit, delectus laborum minus expedita, error, pariatur quas voluptas a corporis Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad vero ex dignissimos, ut accusamus facere. Maxime fugiat modi sit, delectus laborum minus expedita, error, pariatur quas voluptas a corporis vitae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad vero ex dignissimos, ut accusamus facere. Maxime fugiat modi sit, delectus laborum minus expedita, error, pariatur quas voluptas a corporis Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad vero ex dignissimos, ut accusamus facere. Maxime fugiat modi sit, delectus laborum minus expedita, error, pariatur quas voluptas a corporis vitae!"
            projectImage = <img src={cat} alt="Thrift Book" />
            break;
        case 2:
            projectName = "Produce Suppliers App"
            briefDescription = "Web App"
            aboutPj = <p>Project1</p>
            projectImage = <img src={cat} alt="Thrift Book" />
            break;
        case 3:
            projectName = "Movie App"
            briefDescription = "Web App"
            aboutPj = <p>Project2</p>
            projectImage = <img src={cat} alt="Thrift Book" />
            break;
        default:
        // img = <div className="gallery-item"><img src={cat01} alt="Orange kitten" /></div>;
    }

    return (
        <main>
            <section className="portfolio-item-section">
                <h2 className="uppercase-center">Project Details</h2>
                {/* ///////////////////////////// */}
                <div>
                    <figure className="project-image">{projectImage}</figure>
                    <h1 className="uppercase-center">{projectName}</h1>
                    <h3 className="uppercase-center">{briefDescription}</h3>
                    {/* more detailed description ---> */}
                    <div className="project-full-descr-container">
                        {/* <p className="project-about">{aboutPj}</p> */}
                        <p>{aboutPj}</p>
                        <div className="project-tech-links-container">
                            <div className="project-technologies-container">
                                <p>Technologies Used:</p>
                                <div className="project-tech-list-container">
                                    <span>React</span>
                                    <span>React</span>
                                    <span>React</span>
                                    <span>React</span>
                                    <span>React</span>
                                    <span>React</span>
                                </div>
                            </div>
                            <div className="project-links-container">
                                <span>Visit Live Demo(Web)</span>
                                <span>View App Code</span>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>

                </div>
                {/* /////////////////////////////////// */}
            </section>
        </main>
    );

}

export default PagePortfolioItem;