import React from 'react'
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {


    return (
        <div className='footer'>
            <div className='footer--icons'>   
                <a href='https://facebook.com' target='_blank'><AiOutlineFacebook /></a>
                <a href='https://instagram.com' target='_blank'><AiOutlineInstagram/></a>
                <a href='https://twitter.com' target='_blank'><AiOutlineTwitter/></a>
            </div>
        </div>
    )
}

export default Footer;