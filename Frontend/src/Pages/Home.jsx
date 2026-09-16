import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">MICRO MUSIC LIBRARY / 001</p>
          <h1>
            Music for the
            <br />
            <em>in-between hours.</em>
          </h1>
          <p className="hero-description">
            A small place to find something new, save what stays with you, and
            give independent artists a direct way to share their work.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" to="/Musics">
              Browse music <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-action" to="/Login">
              Upload a release <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-art" aria-label="Featured release artwork">
          <div className="art-topline">
            <span>FEATURED RELEASE</span>
            <span>001 / 024</span>
          </div>
          <div className="art-title">
            quiet
            <br />
            <em>weather</em>
          </div>
          <div className="art-note">A SIDE / 04:18</div>
          <div className="art-wave">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <span className="art-caption">NILA / AFTER RAIN</span>
          <span className="art-number">01</span>
        </div>
      </section>

      <section className="home-marquee" aria-label="What you can do">
        <span>NEW RELEASES</span>
        <b>✳</b>
        <span>INDEPENDENT ARTISTS</span>
        <b>✳</b>
        <span>NO ALGORITHM FOG</span>
      </section>

      <section className="home-paths">
        <div className="section-intro">
          <p className="eyebrow">WHAT YOU CAN DO HERE</p>
          <h2>
            Pick a side,
            <br />
            or use <em>both.</em>
          </h2>
        </div>
        <div className="path-card listener-card">
          <span className="card-index">01</span>
          <div>
            <p className="card-kicker">IF YOU LIKE TO LISTEN</p>
            <h3>Find your next repeat.</h3>
            <p>
              Browse releases from people making music outside the usual
              playlist machine.
            </p>
            <Link to="/Musics">
              Open the music library <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="path-card artist-card">
          <span className="card-index">02</span>
          <div>
            <p className="card-kicker">IF YOU MAKE MUSIC</p>
            <h3>Give your work a place.</h3>
            <p>
              Create an artist account and upload the tracks you want people to
              hear.
            </p>
            <Link to="/Login">
              Start an artist account <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
