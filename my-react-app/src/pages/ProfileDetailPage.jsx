import Wrapper from "../components/Wrapper";
// import ProfileForm from "../components/ProfileForm";
import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";

const ProfileDetailPage = () => {
    const {id} = useParams();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch(`https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php?`)
        .then((res) => res.json())
        .then((data) => {
            setProfile(data);
            console.log(data);
        });
    }, [id]);

    return(
        <Wrapper>
            {
            !profile ? (<p>Loading...</p>) : ( 
            <>
            <h1>{profile.name}</h1>
            <p><a href={`mailto:${profile.email}`}></a></p>
            <p>{profile.bio}</p>
            <img src={profile.image_url} alt={profile.name} />
            </>
            )}
        </Wrapper>
            
    )
}

export default ProfileDetailPage