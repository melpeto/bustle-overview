import './Homepage.scss';
import Header from '../components/Header.js';

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

            <div className="homepage__criteria">
            <section className="homepage__criteria-desirability">
                <h2>Desirability</h2>

                <h3>The Persona</h3>
                <p>Name is a Product Manager who left her last role because she did not feel as though there were platforms to grow and learn, and to exhibit her skills. At that time, as a woman returning to the workforce and a new employee of the company, she did not have a sense of inclusion and support, and was unsure how to remedy that.</p>
                <p>Interests: New Product Management Tools, Entrepreneaurship, Hiking</p>
                <p>Based on <a href="https://www.canva.com/link?target=https%3A%2F%2Fgo.ceridian.com%2Frs%2F285-SCZ-328%2Fimages%2FRP-CA-EN-DF-114930-300-2022-Pulse-of-Talent-Exec-Summary-7hbRM8UqdC.pdf%3F_ga%3D2.61904431.2011094495.1661879904-1559850254.1661879904&design=DAFHz1NipCo&accessRole=viewer&linkSource=document">2022 Pulse of Talent</a> research, <span className='italics'>"Attracting and Retaining Talent of Today"</span></p>

                <h3>The Ideal Customer</h3>
                <p>Name is a large organization which is having issues with employee retention. Workplace culture is less than ideal - new staff feel lost at sea and dis-included. Equity and diversity is also an issue - many staff feel stuck, undervalued and unrecognized due to poor DEI strategies.</p>

            </section>

            <section className="homepage__criteria-feasibility">
                <h2>Feasibility</h2>
            </section>

            <section className="homepage__criteria-viability">
                <h2>Viability</h2>
            </section>

            </div>
            
            </div>
        </div>
    )
}

export default Homepage;