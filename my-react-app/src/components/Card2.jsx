import img from '../assets/warm.png'
import '../styles/card.css'

const Card2 = () => {
    const name = 'Jane Doe';
    const title = 'Mechanical Engineer';
    const email = 'b@b.com';
    return (
        <div className="profile-card">
            <div className="profile-card__image">
                <img src={img} alt="profile" />
            </div>
            <div className="profile-card__content">
                <p>{name}</p>
                <p>{title}</p>
                <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
        </div>
    );
}

export default Card2;