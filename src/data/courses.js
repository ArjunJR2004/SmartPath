import reactCourse from "../assets/images/courses/reactCourse.jpg";
import javaCourse from "../assets/images/courses/javaCourse.jpg";
import springBoot from "../assets/images/courses/springBoot.jpg";
import javaScript from "../assets/images/courses/javaScript.jpg";

const courses = [
    {
        id: 1,
        title: "React.js Masterclass",
        instructor: "John Doe",
        price: "₹999",
        image: reactCourse
    },
    {
        id: 2,
        title: "Java Programming",
        instructor: "Jane Smith",
        price: "₹799",
        image: javaCourse
    },
    {
        id: 3,
        title: "Spring Boot",
        instructor: "David Wilson",
        price: "₹1199",
        image: springBoot
    },
    {
        id: 4,
        title: "JavaScript ES6",
        instructor: "Robert Brown",
        price: "₹699",
        image: javaScript
    }
];

export default courses;