import {useState} from "react";
import style from "../styles/ProfileForm.module.css"

const ProfileForm = () => {
    const [data, setData] = useState({ name: "", title: "", email: "", bio: "", image: null});
    const [errors, setErrors] = useState([ image: "", general: "" ]);
    const [submitting, setSubmitting] = useState(false);


    const handleChange = (e) => {
        if (e.target.name === "image"){
            const file = e.target.files[0];
            if (file.size > 2000000)
                setErrors({...errors})
            else{
                setErrors({data})
            }
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    }

}
}
return 

{
    {
        <textarea
            name="bio"
            placeholder="Some Description"
            maxLength={200}
            required
            value={data.bio}
            onChange={handleChange}
        >
        </textarea>
        <label htmlFor="image" name="image" accept="image/png, image/jpeg, image/jpg, image/gif" onChange={handleChange}>
            errors
        </label>
    }
}

export default ProfileForm;