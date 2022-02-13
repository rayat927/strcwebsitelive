import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-row'>
                <div className='footer-col'>
                    <h3>Get Involved</h3>
                    <ul>
                        <li>strc.official@gmail.com</li>
                        <li>management.strc@gmail.com</li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <ul>
                        <li>
                            <a>Privacy Policy</a>
                        </li>
                        <li>
                            <a>Terms and Conditions</a>
                        </li>
                        <li>
                            <a>Violation Code</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h3>Social Media</h3>
                    <ul>
                        <li>
                            <FacebookIcon />
                            <a href='https://www.facebook.com/STRC-Official-107288211146810'>Facebook</a>
                        </li>
                        <li>
                            <InstagramIcon />
                            <a href='https://www.instagram.com/strc.official/'>Instagram</a>
                        </li>
                        <li>
                            <TwitterIcon />
                            <a href='https://twitter.com/OfficialStrc?fbclid=IwAR2gV91E1RoWL2n935VfcVeCZFYts0C6cvU-6Nm0IzXoqalrjJIPNrFvJ44'>Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
