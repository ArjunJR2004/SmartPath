import reactCourse from "../assets/images/courses/reactCourse.jpg";
import javaCourse from "../assets/images/courses/javaCourse.jpg";
import springBoot from "../assets/images/courses/springBoot.jpg";
import javaScript from "../assets/images/courses/javaScript.jpg";
import python from "../assets/images/courses/python.jpg";

const courses = [
    {
        id: 1,
        title: "React.js Masterclass",
        instructor: "John Doe",
        price: "₹999",
        image: reactCourse,
        description: "Learn React from scratch including components, hooks, routing, state management, and best practices by building real-world projects."
    },
    {
        id: 2,
        title: "Java Programming",
        instructor: "Jane Smith",
        price: "₹799",
        image: javaCourse,
        description: "Build a strong foundation in Core Java by learning object-oriented programming, collections, exception handling, multithreading, file handling, and JDBC. Gain practical coding experience through real-world programming exercises."
    },
    {
        id: 3,
        title: "Spring Boot",
        instructor: "David Wilson",
        price: "₹1199",
        image: springBoot,
        description: "Learn how to develop scalable backend applications using Spring Boot. Understand REST APIs, dependency injection, Spring Data JPA, validation, security basics, and database integration by building real-world backend projects."
    },
    {
        id: 4,
        title: "JavaScript ES6",
        instructor: "Robert Brown",
        price: "₹699",
        image: javaScript,
        description: "Learn how to develop scalable backend applications using Spring Boot. Understand REST APIs, dependency injection, Spring Data JPA, validation, security basics, and database integration by building real-world backend projects."
    },
    {
        id: 5,
        title: "Python Programming",
        instructor: "Kiran Kumar",
        price: "₹699",
        image: python,
        description: "Learn how to develop scalable backend applications using Spring Boot. Understand REST APIs, dependency injection, Spring Data JPA, validation, security basics, and database integration by building real-world backend projects."
    }
];

export default courses;