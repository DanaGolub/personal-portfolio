import { Link, Navigate, useParams } from 'react-router-dom';

import ProduceSupplier from '../images/ps-desktop.PNG'
import ThriftBook from '../images/ThriftBook-medium.PNG'
import IM from '../images/instag-mock-screen.PNG'
import { FaRegHandPointer } from 'react-icons/fa';


const PagePortfolioItem = () => {
    let { id } = useParams();

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
    let pjTechStack;
    let liveDemoBool;

    switch (id) {
        case 1:
            projectName = "Thrift Book App"
            briefDescription = "Web App"
            aboutPj = "Developed a web application for online selling of used books. Application available to both administrators and customers for managing inventory as well as purchasing books by clients. The technologies used for this application are .Net Core, Razor Pages, CSS, SQLite, powered by Paypal payment processing. This program was developed along with three other team-members, my main contribution (but not limited to) was implementing the registration process/update of profile info, along with the model creation and data input validation. Ratings creation - controller logic, view and most backend logic. Checkout procedure and purchase handling with Paypal implementation, ensuring a smooth chackout and payment process after items are added to Cart."
            projectImage = <img src={ThriftBook} alt="Thrift Book" />
            pjTechStack = ["C#", "ASP.NET Core", "Razor Pages", "SQLite", "CSS"]
            liveDemoBool = true
            break;
        case 2:
            projectName = "Produce Suppliers App"
            briefDescription = "Web App"
            aboutPj = "Developed this Produce-Supplier app, which helps manage inventory of products and their suppliers. The tech stack is C#, ASP.Net Core API, SQLite for backend, and Angular powered with Bootstrap for frontend. Utilized Postman to work with the Restful API endpoints."
            projectImage = <img src={ProduceSupplier} alt="Thrift Book" />
            pjTechStack = ["C#", "ASP.NET Core API", "SQLite", "Angular", "CSS", "Bootstrap"]
            liveDemoBool = false
            break;
        case 3:
            projectName = "Instag-mock App"
            briefDescription = "Web App"
            aboutPj = "Developed this web application as a practice, with instagram-alike functionality.Users can registed with Cognito, sign-in and upload, modify, view, delete posts (with an image and description) as well as comments to posts. Images are stored in S3 Bucket and the rest of data in DynamoDb. I used Amplify CLI to set up the AWS backend. Will keep working on this app to give it another life with a rather useful purpose, more details to follow."
            projectImage = <img src={IM} alt="Thrift Book" />
            pjTechStack = ["React", "AWS", "DynamoDb", "NodeJS", "S3 Bucket", "Cognito", "Amplify", "CSS"]
            liveDemoBool = false
            break;
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
                        <p>{aboutPj}</p>
                        <div className="project-tech-links-container">
                            <div className="project-technologies-container">
                                <p>Solutions Stack:</p>
                                <div className="project-tech-list-container">
                                    {pjTechStack.map(technology => <span>{technology}</span>)}
                                </div>
                            </div>
                            <div className="project-links-container">
                                {liveDemoBool &&
                                    <span>
                                        <a href="https://thriftbookusedbookstoreapp.azurewebsites.net/" className='pj-live-link'>
                                            <FaRegHandPointer />
                                            Visit Live Demo(Web)
                                        </a>
                                    </span>
                                }
                            </div>
                        </div>
                    </div>

                </div>
                {/* /////////////////////////////////// */}
            </section>
        </main>
    );

}

export default PagePortfolioItem;