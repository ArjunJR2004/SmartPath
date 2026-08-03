import { useParams } from "react-router-dom";
import courses from "../../data/courses";
import "./CourseDetails.css";

function CourseDetails() {

    const { id } = useParams();

    const course = courses.find(
        (course) => course.id === Number(id)
    );

    if (!course) {
        return (
            <div className="course-not-found">
                <h1>Course Not Found</h1>
                <p>The course you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <section className="course-details">

            <div className="course-image-container">
                <img
                    src={course.image}
                    alt={course.title}
                    className="course-image"
                />
            </div>

            <div className="course-info">

                <h1>{course.title}</h1>

                <p>
                    <strong>Instructor:</strong> {course.instructor}
                </p>

                <p>
                    <strong>Price:</strong> {course.price}
                </p>

                <p>
                    <strong>Description:</strong>
                </p>

                <p className="course-description">
                    {course.description}
                </p>

                <button className="enroll-btn">
                    Enroll Now
                </button>

            </div>

        </section>
    );
}

export default CourseDetails;