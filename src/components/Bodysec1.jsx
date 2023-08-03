import React from 'react'

const Bodysec1 = () => {
    const MarQ = [
        "https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287f1797e6321_Vector-4.svg",
        "https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d7128746107e6310_Vector-3.svg",
        "https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712878c8c7e62ff_Vector-2.svg",
        "https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712873dc17e62ee_Vector-1.svg",
        "https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287f2017e62db_Group.svg",
        "https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712877d277e62be_Group-1.svg",
        "https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287cd407e62bd_Group%2047.svg",
        "https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287437a7e6343_Vector.svg"
    ]
    return (
        <div>
            <div className='sec1'>
                <div className='hero'>Where techies realise their true potential</div>
                <div className='hero_sub'>Look beyond the obvious. Use Cutshort to easily get discovered by awesome companies and get referred to job positions very few know about.</div>
                <div className='hero_btn'>
                    <div className='b1 fill'>Find your next hire</div>
                    <div className='b2 border'>Find your next job</div>
                </div>
            </div>
            <div className="sec2">
                <div className="data1" style={{
                    border: '1px solid black',
                    borderTop: 0,
                    borderBottom: 0,
                    borderLeft: 1,
                    width: "250px"
                }}>
                    <div className='title_data'>8K+</div>
                    <div className='title'>Tech Jobs</div>
                </div>
                <div className="data2" style={{
                    border: '1px solid black',
                    borderTop: 0,
                    borderBottom: 0,
                    borderLeft: 1,
                    width: "250px"
                }}>
                    <div className='title_data'>20K</div>
                    <div className='title'>Applicants</div>
                </div>
                <div className="data3" style={{
                    border: '1px solid black',
                    borderTop: 0,
                    borderBottom: 0,
                    borderLeft: 0,
                    borderRight: 0,
                    width: "250px"
                }}>
                    <div className='title_data'>1800+</div>
                    <div className='title'>Startup Approachs</div>
                </div>
            </div>
            <div className="sec3">
                <div className='sec3text'>
                    <b>30,000+ professionals</b> from <b>8,500 companies</b> are cutting short their path to success
                </div>
                <marquee className="">
                    {
                        MarQ.map((item, key) => {
                            return (
                                <span>
                                    <img src={item} alt='img' width={"150px"} height={"200px"} />
                                </span>
                            )
                        })
                    }
                    {
                        MarQ.map((item, key) => {
                            return (
                                <span>
                                    <img src={item} alt='img' width={"150px"} height={"200px"} />
                                </span>
                            )
                        })
                    }
                </marquee>
            </div>
        </div>
    )
}

export default Bodysec1