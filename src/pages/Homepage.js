import './Homepage.scss';
import Header from '../components/Header.js';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="homepage__summary">

            <Header />
            <div className="wrapper">

            <section className="homepage__challenge">
                <h2>The Challenge</h2>
                <p>How can we ensure a diverse and inclusive culture in and around the workplace?</p>
                <p>How can we create an environment where employees feel comfortable and supported at work while continuously developing their career?</p>
            </section>

            <section className="homepage__problem">
                <h2>The Problem</h2>
                <p>Organizations with workplace culture issues may struggle with employee retention issues. Some causes of culture issues and poor retention are employee burnout (possibly due to mismatch of talent & workload), and ineffective/stagnant DEI strategies</p>
                <p>Lack of diversity and inclusion practices leads to employees feeling undervalued. Due to workplace bias (related to systemic racism, sexism, ageism, being a newcomer to Canada) many employees may find themselves being excluded, passed over for growth/promotion opportunities, undervalued and un-recognized.</p>
            </section>

            <div className="homepage__criteriaParent">
            <section className="homepage__criteria-desirability homepage__criteria">
                <h2>Desirability</h2>

                <div className="homepage__personas homepage__criteria-section">
                    <h3>The Personas</h3>
                    <p>NAME is a Product Manager who is considering leaving her role because she does not feel as though there are platforms to grow and learn, and to exhibit her skills. As a woman returning to the workforce and a new employee of the company, she does not have a sense of inclusion and support, and does not see any way to remedy that.</p>
                    <p>Interests: New Product Management Tools, Entrepreneaurship, Hiking</p>
                    <p>Based on <a href="https://www.canva.com/link?target=https%3A%2F%2Fgo.ceridian.com%2Frs%2F285-SCZ-328%2Fimages%2FRP-CA-EN-DF-114930-300-2022-Pulse-of-Talent-Exec-Summary-7hbRM8UqdC.pdf%3F_ga%3D2.61904431.2011094495.1661879904-1559850254.1661879904&design=DAFHz1NipCo&accessRole=viewer&linkSource=document">2022 Pulse of Talent</a> research, <span className='italics'>"Attracting and Retaining Talent of Today"</span></p>
                    <p>NAME is a Manager</p>
                </div>

                <div className="homepage__customer homepage__criteria-section">
                    <h3>The Ideal Customer</h3>
                    <p>Name is a large organization which is having issues with employee retention. Workplace culture is less than ideal - new staff feel lost at sea and dis-included. Equity and diversity is also an issue - many staff feel stuck, undervalued and unrecognized due to poor DEI strategies.</p>
                </div> 

                <div className="homepage__pain-points homepage__criteria-section">
                    <h3>Pain points along the customer journey:</h3>
                    <p></p>
                </div>


            </section>

            <section className="homepage__criteria-feasibility homepage__criteria">
                <h2>Feasibility</h2>

                <div className="homepage__criteria-section">
                    <h3>What we created:</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>


                <div className="homepage__criteria-section">
                    <h3>Tools & Technologies:</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <p>Check our our <Link to="/teaminfo">About the Team</Link> page for information about the tech stack of our team members!</p>
                </div>


                <div className="homepage__criteria-section">
                    <h3>Next Steps</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                {/* link to github repo here? */}

                
                
            </section>

            <section className="homepage__criteria-viability homepage__criteria">
                <h2>Viability</h2>

                <div className="homepage__criteria-section"></div>
                <div className="homepage__criteria-section"></div>
                <div className="homepage__criteria-section"></div>

            </section>

            </div>
            
            </div>
        </div>
    )
}

export default Homepage;