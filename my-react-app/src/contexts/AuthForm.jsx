import {useState, useEffect} from "react";
import style from "../styles/ProfileForm.mobile.css";
import { useNavigate } from "react-router-dom";

const AuthForm = ([isRegister = false]) => {
    const [data, setData] = useState({
        username: "",
        password: "",
        email = "",
    });
    const [errors, setErrors] = useState({ image: "", general: ""});
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSucessMessage] = useState("");

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const formData = new FormData();
        formData.append("username", data.username.trim());
        formData.append("password", data.password.trim());
        if (isRegister) formData.append("email", data.email.trim());
        formData.append("action", isRegister);
        
    }

    return (
        <form onSubmit={handleSubmit} className ={style["[profile-form"]}>
            <input 
            type="text" 
            name="username"
            placeholder="Username"
            required
            value={data.username}
            onChange={handleChange}
            />
            { isRegister &&
            <input 
            type="email" 
            name="email"
            placeholder="Email"
            required
            value={data.email}
            onChange={handleChange}
            />
            }
            <input 
            type="password" 
            name="password"
            placeholder="Password"
            required
            value={data.password}
            onChange={handleChange}
            />
            <button
            type="submit"
            disabled={
                submitting ||
                data.username.trim() === "" ||
                (isRegister && )
            }
            >    
            </button>
        </form>
    )
}