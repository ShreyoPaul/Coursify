import React from 'react'
import seeker from '../assets/seeker.png'
import hire from '../assets/hire.png'
import speed from '../assets/speed.png'
import target from '../assets/target.png'
import privacy from '../assets/privacy.png'

const Bodysec2 = () => {
    return (
        <div className='body2'>
            <div className="sec4">
                <div><img src={seeker} alt='img' /></div>
                <div className=''>
                    <div className=''>HAVE TALENT ?</div>
                    <div>
                        <div className='cardHead'>Why job seekers love us</div>
                        <ul className=''>
                            <li>
                                <div>🚀</div>
                                <div>
                                    Unique jobs at startups and tech companies you can't find anywhere else.
                                </div>
                            </li>
                            <li>
                                <div>🚀</div>
                                <div>
                                    Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.

                                </div>
                            </li>
                            <li>
                                <div>🚀</div>
                                <div>
                                    Everything you need to know to job search
                                </div>
                            </li>
                            <li>
                                <div>🚀</div>
                                <div>
                                    Connect directly with founders at top startups - no third party recruiters allowed
                                </div>
                            </li>

                        </ul>
                        <div className='border learn'>Learn more</div>
                    </div>
                </div>
            </div>
            <div className="sec5">
                <div className=''>
                    <div className=''>NEED TALENT ?</div>
                    <div>
                        <div className='cardHead'>Why job recruiters love us</div>
                        <ul className=''>
                            <li>
                                <div>🚀</div>
                                <div>
                                    Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free

                                </div>
                            </li>
                            <li>
                                <div>🚀</div>
                                <div>
                                    80,000+ responsive and startup-ready candidates, with all the information you need to vet them
                                </div>
                            </li>
                            <li>
                                <div>🚀</div>
                                <div>
                                    A free applicant tracking system, or free integration with any ATS you may already use
                                </div>
                            </li>

                        </ul>
                        <div className='border learn'>Learn more</div>
                    </div>
                </div>
                <div><img src={hire} alt='img' /></div>

            </div>
            <div className="sec6">
                <div className='card1'>
                    <div><img src={speed} alt='img' /></div>
                    <div className='text'>
                        <div className="text1">5X higher response from companies</div>
                        <div className="text2">Tired of having your applications ignored by companies? Instahyre only matches you with the right jobs, leading to 5X response rates from companies compared to other job sites!</div>
                    </div>
                </div>
                <div className='card2'>
                    <div><img src={target} alt='img' /></div>
                    <div className='text'>
                        <div className="text1">Your perfect job</div>
                        <div className="text2">Tired of having your applications ignored by companies? Instahyre only matches you with the right jobs, leading to 5X response rates from companies compared to other job sites!</div>
                    </div>
                </div>
                <div className='card3'>
                    <div><img src={privacy} alt='img' /></div>
                    <div className='text'>
                        <div className="text1">Privacy guaranteed</div>
                        <div className="text2">Tired of having your applications ignored by companies? Instahyre only matches you with the right jobs, leading to 5X response rates from companies compared to other job sites!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bodysec2