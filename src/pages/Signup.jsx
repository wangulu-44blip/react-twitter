import { Link, useNavigate } from "react-router";
import main from "../assets/main.jpg";
import { useState } from "react";
 
 
import {
  createUserWithEmailAndPassword,


  
} from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

function Signup() {
    const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setisLoading(true);
      setError("");
      const { name, email, password } = user;
      if (!name || !email || !password) return;

      // firebase.auth().createUserWithEmailAndPassword(email, password).then(()=> {}).catch(error)=>{})
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      console.log("userCredential");
      toast.success("Account created successfully")
        setUser({
          name: "",
          email: "",
          password: "",
        });
        navigate("/");
        ;
      } catch (err) {
      console.error(err.message);
      setError(err.message);
      setUser((user) => ({ ...user, password: "" }));
    } finally {
      setisLoading(false);
    }
  };
  return (
    <div className="auth">
      <div className="left">
            <img src={main} alt="assets/main.jpg" />
        </div>

       <form className="right" onSubmit={handleSignup}>
        
        <input
          value={user.name}
          onChange={(e) =>
            setUser((user) => ({ ...user, name: e.target.value }))
          }
          type="text"
          placeholder="Enter your Full Name"
          name=""
          id=""
        />
        <input
          value={user.email}
          onChange={(e) =>
            setUser((user) => ({ ...user, email: e.target.value }))
          }
          type="email"
          placeholder="Enter your Email Address"
          name=""
          id=""
        />
        <input
          value={user.password}
          onChange={(e) =>
            setUser((user) => ({ ...user, password: e.target.value }))
          }
          type="password"
          placeholder="See your Password"
          name=""
          id=""
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Signing up.." : "Create Account"}
        </button>
       </form>
    </div>
  )
}

export default Signup
