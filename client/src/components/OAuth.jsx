import { Button } from "flowbite-react";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  getAuth,
} from "firebase/auth";
import { app } from "../firebase";
//Khai báo useDispatch để gọi action
import { useDispatch } from "react-redux";
//Khai báo signInSuccess để gọi action
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    const providerGoogle = new GoogleAuthProvider();
    providerGoogle.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, providerGoogle);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleGithubClick = async () => {
    const providerGithub = new GithubAuthProvider();
    providerGithub.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGithub = await signInWithPopup(auth, providerGithub);
      const res = await fetch("/api/auth/github", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultsFromGithub.user.displayName,
          email: resultsFromGithub.user.email,
          githubPhotoUrl: resultsFromGithub.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <Button
        type="button"
        gradientDuoTone="pinkToOrange"
        outline
        onClick={handleGoogleClick}
      >
        <AiFillGoogleCircle className="w-6 h-6 mr-2" />
        Continue with Google
      </Button>
      <Button
        type="button"
        gradientDuoTone="greenToBlue"
        outline
        onClick={handleGithubClick}
      >
        <AiFillGithub className="w-6 h-6 mr-2" />
        Continue with Github
      </Button>
    </div>
  );
}
