import {useNavigate} from "react-router-dom"
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()

    const handleSubmitLogin = async(e)=>{
        e.preventDefault()
      const formData = new FormData(e.target)
      await axios.post('http://localhost:3000/api/auth/login',formData)
  .then((res)=>{
        console.log(res.data)
        if(res.data.user.role==='artist'){
            navigate("/Artist")
        }
        else{
            navigate('/Musics')
        }
      }).catch((err)=>{
        console.log(err)
      })

    }
    const handleSubmitSignup = async(e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        await axios.post('http://localhost:3000/api/auth/register',formData)
        .then((res)=>{
            console.log(res.data)
            if(res.data.user.role==='artist'){
                navigate("/Artist")
            }
            else{
                navigate('/Musics')
            }
          }).catch((err)=>{
            console.log(err)
          })
    }
  return (
    <main className="auth-page">
      <section className="auth-intro">
        <p className="eyebrow">MICRO MUSIC LIBRARY</p>
        <h1>
          Your sound,
          <br />
          <em>in one place.</em>
        </h1>
        <p className="intro-copy">
          Save your discoveries, follow the artists you love, and keep your next
          favorite track close.
        </p>
        <div className="sound-mark" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="auth-panel" aria-label="Account access">
        <input
          className="auth-tab-input"
          id="signin-tab"
          name="auth-tab"
          type="radio"
          defaultChecked
        />
        <input
          className="auth-tab-input"
          id="signup-tab"
          name="auth-tab"
          type="radio"
        />
        <div
          className="mode-switch"
          role="tablist"
          aria-label="Authentication mode"
        >
          <label htmlFor="signin-tab" role="tab">
            Sign in
          </label>
          <label htmlFor="signup-tab" role="tab">
            Sign up
          </label>
        </div>

        <div className="auth-form signin-form">
          <div className="form-heading">
            <p className="eyebrow">WELCOME BACK</p>
            <h2>Pick up the beat</h2>
            <p>Sign in to continue listening.</p>
          </div>
          <form onSubmit={handleSubmitLogin}>
            <label>
              email
              <input
                type="email"
                name="email"
                placeholder="you@example.com or username"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                placeholder="••••••••"
              />
            </label>
            <button className="submit-button" type="submit">
              Sign in <span aria-hidden="true">↗</span>
            </button>
          </form>
        </div>

        <div className="auth-form signup-form">
          <div className="form-heading">
            <p className="eyebrow">NEW HERE?</p>
            <h2>Create your account</h2>
            <p>Join the library and start building your collection.</p>
          </div>
          <form onSubmit={handleSubmitSignup}>
            <label>
              Username
              <input
                type="text"
                name="username"
                placeholder="your-username"
              />
            </label>
            <label>
              Email address
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                placeholder="••••••••"
              />
            </label>
            <fieldset>
              <legend>Join as</legend>
              <div className="role-options">
                <label>
                  <input type="radio" name="role" value="user" />
                  <span>User</span>
                  <small>Discover new sounds</small>
                </label>
                <label>
                  <input type="radio" name="role" value="artist" />
                  <span>Artist</span>
                  <small>Share your music</small>
                </label>
              </div>
            </fieldset>
            <button className="submit-button" type="submit">
              Create account <span aria-hidden="true">↗</span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
