import facebook from '../../assets/social-media/icon_facebook.png'
import instagram from '../../assets/social-media/icon_instagram.png'
import mail from '../../assets/social-media/icon_mail.png'
import twitch from '../../assets/social-media/icon_twitch.png'
import twitter from '../../assets/social-media/icon_twitter.png'
import './styles.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="address">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="footer-navigation">
                <p>Our services</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>Testimonial</p>
                <p>FAQ</p>
            </div>
            <div className="social-media">
                <p>Connect with us</p>
                <div>
                    <img src={facebook} alt='facebook' />
                    <img src={instagram} alt='instagram' />
                    <img src={twitter} alt='twitter' />
                    <img src={mail} alt='mail' />
                    <img src={twitch} alt='twitch' />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright Binar 2022</p>
            </div>
        </div>
    )
}

export default Footer;