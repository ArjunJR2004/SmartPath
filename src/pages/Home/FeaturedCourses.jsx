import "./FeaturedCourses.css";

import courses from "../../data/courses";

import CourseCard from "../../components/course/CourseCard";

function FeaturedCourses() {

    return (

        <section className="featured-courses">

            <h2>Featured Courses</h2>

            <div className="course-grid">

                {
                    courses.map((course) => (

                        <CourseCard
                            key={course.id}
                            course={course}
                        />

                    ))
                }

            </div>

        </section>

    );

}

export default FeaturedCourses;