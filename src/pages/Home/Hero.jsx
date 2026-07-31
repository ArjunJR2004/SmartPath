import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero.jpg";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <h1>
                    Learn New Skills,
                    <span> Build Your Future</span>
                </h1>

                <p>
                    Discover industry-ready courses designed to help you
                    grow your skills, achieve your goals, and build a
                    successful career.
                </p>

                <div className="hero-buttons">

                    <Link to="/courses" className="primary-btn">
                        Explore Courses
                    </Link>

                    <Link to="/register" className="secondary-btn">
                        Get Started
                    </Link>

                </div>

            </div>

            <div className="hero-image">

                <img
                    src={heroImage}
                    alt="Students Learning"
                />

            </div>

        </section>
    );
}

export default Hero;