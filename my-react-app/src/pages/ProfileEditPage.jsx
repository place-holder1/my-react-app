import Wrapper from "../components/Wrapper";
import {useNavigate, useParams} from "react-router-dom";

const ProfileEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      fetch(`https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php?id=${id}`, {
      method: "delete",
      credentials: "include",
    }).then((rep) => rep.json())
    .then(data => {
      if(data.message){
        alert("Profile Deleted");
        navigate("/")
      }else{
        alert("Failed to delete profile");
      }
    });

  return (
    <Wrapper>
      <h1>Edit Profile</h1>
      <button onClick={handleDelete}>
        Delete Profile
      </button>
    </Wrapper>
    );
  };
};
}

export default ProfileEditPage;