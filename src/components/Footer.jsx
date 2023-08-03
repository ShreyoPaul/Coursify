import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='part1'>
                <div className="title1 title_part">COURSIFY</div>
                <div className="title2">
                    TopHire is on a mission to make it dead simple for leading Indian startups to hire the top 2% of tech talent.
                </div>
            </div>
            <div className='part2'>
                <div className='title_part'>CANDIDATES</div>
                <div className='py'>For Candidates</div>
                <div className='py'>Candidates Sign Up</div>
                <div className='py'>Candidate FAQ</div>
            </div>
            <div className='part3'>
            <div className='title_part'>EMPLOYERS</div>
                <div className='py'>For Employers</div>
                <div className='py'>Employers Sign Up</div>
                <div className='py'>Employers FAQ</div>
            </div>
            <div className='part4'>
            <div className='title_part'>COMPANY</div>
                <div className='py'>Careers</div>
                <div className='py'>Privacy Policy</div>
            </div>
        </div>
    )
}

export default Footer