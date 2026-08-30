import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { MapPin, ArrowLeft } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [isRegistering, setIsRegistering] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);



  async function handleEmailAuth(e) {
    e.preventDefault();

    setError("");

    if (isRegistering && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      if (isRegistering) {
        const userCredential =
          await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

        await updateProfile(userCredential.user, {
          displayName: name,
        });
      } else {
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      }

      navigate("/");
    } catch (error) {
      console.error(error);

      switch (error.code) {
        case "auth/email-already-in-use":
          setError("An account with this email already exists.");
          break;

        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;

        case "auth/weak-password":
          setError("Password should be at least 6 characters.");
          break;

        case "auth/invalid-credential":
          setError("Incorrect email or password.");
          break;

        default:
          setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }


  async function handleGoogleLogin() {
    setError("");

    try {
      setLoading(true);

      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      navigate("/");
    } catch (error) {
      console.error(error);

      if (error.code === "auth/popup-closed-by-user") {
        setError("Google sign-in was cancelled.");
      } else {
        setError("Unable to sign in with Google.");
      }
    } finally {
      setLoading(false);
    }
  }



  return (
    <main className="min-h-screen bg-[#D9D9D9] px-4 py-10 flex items-center justify-center">

      <div className="w-full max-w-md">

        
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-[#10B981] font-bold mb-6 transition"
        >
          <ArrowLeft size={20} />
          Back to StagePoa
        </button>

        
        <div className="bg-[#D9D9D9] border-2 border-black border-r-4 border-b-4 rounded-2xl p-7">

          
          <div className="flex items-center gap-2 mb-6">

            <div className="bg-[#10B981] text-white p-2 rounded-lg">
              <MapPin size={22} />
            </div>

            <span className="text-2xl font-extrabold text-[#10B981]">
              StagePoa
            </span>

          </div>

          <h1 className="text-3xl font-extrabold text-black">
            {isRegistering
              ? "Create your account"
              : "Welcome back"}
          </h1>

          <p className="mt-2 text-gray-600 font-medium">
            {isRegistering
              ? "Create an account to get the most out of StagePoa."
              : "Sign in to continue using StagePoa."}
          </p>

          
          {error && (
            <div className="mt-5 bg-red-100 border-2 border-red-400 text-red-700 rounded-xl px-4 py-3 text-sm font-bold">
              {error}
            </div>
          )}

          
          <form
            onSubmit={handleEmailAuth}
            className="mt-6 space-y-4"
          >

            
            {isRegistering && (
              <div>
                <label className="block text-sm font-extrabold mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 outline-none focus:border-[#10B981]"
                />
              </div>
            )}

         
            <div>
              <label className="block text-sm font-extrabold mb-2">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 outline-none focus:border-[#10B981]"
              />
            </div>

         
            <div>
              <label className="block text-sm font-extrabold mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 outline-none focus:border-[#10B981]"
              />
            </div>

         
            {isRegistering && (
              <div>
                <label className="block text-sm font-extrabold mb-2">
                  Confirm Password
                </label>

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  required
                  placeholder="••••••••"
                  className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 outline-none focus:border-[#10B981]"
                />
              </div>
            )}

           
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#10B981] text-white px-5 py-3 rounded-xl font-extrabold border-2 border-black border-r-4 border-b-4 hover:translate-y-[1px] transition disabled:opacity-50"
            >
              {loading
                ? "Please wait..."
                : isRegistering
                ? "Create Account"
                : "Sign In"}
            </button>

          </form>

          
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-400" />
            <span className="text-sm font-bold text-gray-500">
              OR
            </span>
            <div className="flex-1 h-px bg-gray-400" />
          </div>

          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full bg-white text-black px-5 py-3 rounded-xl font-extrabold border-2 border-black hover:bg-gray-100 transition disabled:opacity-50"
          >
            Continue with Google
          </button>

          <p className="text-center mt-6 text-gray-600 font-medium">

            {isRegistering
              ? "Already have an account?"
              : "Don't have an account?"}

            <button
              type="button"
              onClick={() => {
                setIsRegistering(!isRegistering);
                setError("");
              }}
              className="ml-2 text-[#10B981] font-extrabold hover:underline"
            >
              {isRegistering ? "Sign In" : "Register"}
            </button>

          </p>

        </div>

      </div>

    </main>
  );
}

export default Login;