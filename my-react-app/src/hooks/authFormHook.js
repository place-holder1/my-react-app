import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext

const [errors, setErrors] = useState({ password: "", general: ""});
const [submitting, setSubmitting] = useState(false);