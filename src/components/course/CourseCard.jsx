import { Link } from "react-router-dom";
import "./CourseCard.css";

function CourseCard({ course }) {
    return (
        <div className="course-card">

            <img
                src={course.image}
                alt={course.title}
                className="course-image"
            />

            <div className="course-content">

                <h3>{course.title}</h3>

                <p>{course.instructor}</p>

                <span>{course.price}</span>

                <Link
                    to={`/courses/${course.id}`}
                    className="view-details-btn"
                >
                    View Details
                </Link>

            </div>

        </div>
    );
}

export default CourseCard;