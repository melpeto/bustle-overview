import './Homepage.scss';
import Header from '../components/Header.js';
import { Link } from 'react-router-dom';
import mckinseyFig from '../../src/assets/mckinseyFig.png';

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
                <p>Organizations with workplace culture issues may struggle with employee retention. Some causes of culture issues and poor retention are employee burnout (possibly due to mismatch of talent & workload), and ineffective/stagnant DEI strategies</p>
                <p>Lack of diversity and inclusion practices leads to employees feeling undervalued. Due to systemic bias many employees may find themselves being excluded, passed over for growth/promotion opportunities, undervalued and un-recognized.</p>
                <div className="homepage__researchImg">
                    <img src={mckinseyFig} alt="" />
                </div>
            </section>

            <div className="homepage__criteriaParent">

            <section className="homepage__criteria-desirability homepage__criteria">
                <h2>Desirability</h2>

                <div className="homepage__personas homepage__criteria-section">
                    <h3>Persona</h3>
                    <p>NAME is a Product Manager who is considering leaving her role because she does not feel as though there are platforms to grow and learn, and to exhibit her skills. As a woman returning to the workforce and a new employee of the company, she does not have a sense of inclusion and support, and does not see any way to remedy that.</p>
                    <p>Interests: New Product Management Tools, Entrepreneaurship, Hiking</p>
                    <p>Based on <a href="https://www.canva.com/link?target=https%3A%2F%2Fgo.ceridian.com%2Frs%2F285-SCZ-328%2Fimages%2FRP-CA-EN-DF-114930-300-2022-Pulse-of-Talent-Exec-Summary-7hbRM8UqdC.pdf%3F_ga%3D2.61904431.2011094495.1661879904-1559850254.1661879904&design=DAFHz1NipCo&accessRole=viewer&linkSource=document">2022 Pulse of Talent</a> research, <span className='italics'>"Attracting and Retaining Talent of Today"</span></p>
                </div>

                <div className="homepage__customer homepage__criteria-section">
                    <h3>The Ideal Customer</h3>
                    <p>The customer is a large organization which is having issues with employee retention. Workplace culture is less than ideal - new staff feel lost at sea and dis-included. Equity and diversity is also an issue - many staff feel stuck, undervalued and unrecognized due to poor (or no) DEI practices</p>
                </div> 

            </section>

            <section className="homepage__criteria-feasibility homepage__criteria">
                
                <h2>Feasibility</h2>

                <div className="homepage__criteria-section">
                    <h3>What we created:</h3>
                    <ul>
                        <li>High-fidelity Wireframes and Prototypes of the main user journey (the "employee")</li>
                        <li>Dashboard which shows XXXX</li>
                        <li>Profile which shows XXXX</li>
                        <li>Database which includes XXX. IRL this would be populated by XXXX</li>
                        <li>Connection between front end and back end XXXXX</li>
                    </ul>
                </div>


                <div className="homepage__criteria-section">
                    <h3>Tools & Technologies:</h3>
                    <ul>
                        <li>Figma to create designs, high fidelity wireframes, prototypes</li>
                        <li>back end stuff</li>
                        <li>React to build out the front end. Sass for styling</li>
                        <li>Other things XXXX</li>
                    </ul>
                    <p>Check out our <Link to="/teaminfo">About the Team</Link> page for information about the tech stack of our team members!</p>
                </div>

                <div className="homepage__criteria-section">
                    <h3>Next Steps</h3>
                    <ul>
                        <li>Wireframes & Design of "admin" user journey</li>
                        <li>Other things to build XXX</li>
                        <li>Other things to build XXX</li>
                    </ul>
                </div>

                {/* link to github repo here? */}

            </section>
            {/* feasibility closing tag */}

            <section className="homepage__criteria-viability homepage__criteria">

                <h2>Viability</h2>

                <div className="homepage__criteria-section">
                    <h3>Business Model / Revenue Streams</h3>
                    <ul>
                        <li>Tiered Subscriptions - Monthly/Yearly plans</li>
                        <li>Ad Revenue - focus on items of interest to that type of company</li>
                    </ul>
                </div>

                <div className="homepage__criteria-section">
                    <h3>Market</h3>
                    <ul>
                        <li>Target: Large organizations which are likely to have employee retention issues due to poor diversity in upper management, a lack of cohesion due to workforce size and difficulty implementing impactful DEI strategies</li>
                        <li>Competition: Work-related social media such as Linkedin (lack the organizational-focus and internal control), workplace communication apps (MS Teams)</li>
                        <li>Differentiators: Tackles employee satisfaction and retention, positive workplace culture and equity/inclusion, while ALSO providing a platform for internal communication, workload management, performance management and employee skill-building</li>
                        <li>Growth: Expand reach to large institutions such as universities, target mid-size businesses which are quickly growing to become large copororations</li>
                    </ul>
                </div>

            </section>
            {/* viability closing tag */}

            </div>
            {/* above is .homepage__criteriaParent closing tag */}

            <div className="homepage__pain-points">
                <h3>Potential Issues / Pain Points</h3>
                <section className="homepage__pain-point homepage__pain-point-title">
                    <p>Issue</p>
                    <p>Mitigation</p>
                </section>
                <section className="homepage__pain-point">
                    <p>Lack of Manager Engagement</p>
                    <p>Notifications and Reminders about adding events and tasks. Suggestions for how to build a mini project/task and what information to include</p>
                </section>
                <section className="homepage__pain-point">
                    <p>Managers worry about loss of productivity/focus due to staff working on projects on other teams</p>
                    <p>Managers are brought on board with the promise of getting projects done more efficiently, by moving employees to ad hoc teams/projects where their skills can shine. Work is stil kept internal and working towards organizational goals</p>
                </section>
                <section className="homepage__pain-point">
                    <p>Are staff expected to work outside of the work day to complete extra work? Contrary to work-life balance goals and 'disconnect' laws</p>
                    <p>Organization develops operating procedures regarding how managers can structure project time - managers could 'swap' or 'share' staff to encourage growth and skill building while not losing out on productivity. Fro example, Manager agrees that Employee A works on Project X for 3 hours every Wednesday, but Employee B helps that Manager with their project Z.</p>
                </section>
                <section className="homepage__pain-point"></section>
                <section className="homepage__pain-point"></section>
            </div>
            
            </div>
            {/* above is .wrapper closing tag */}
        </div>
        // above is .homepage__summary closing tag
    )
}

export default Homepage;