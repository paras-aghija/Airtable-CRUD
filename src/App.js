import React, { useEffect, useState } from 'react';
import './App.css';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';

function App() {
    const [courses, setCourses] = useState([]);

    const loadCourses = async () => {
        //TODO:load the courses
        try {
            const res = await fetch('/.netlify/functions/courses');
            const courses = await res.json();
            console.log(courses);
            setCourses(courses)
        } catch (error) {
            console.log(error);
        }
        
    };

    useEffect(() => {
        loadCourses();
    }, []);
    return (
        <div className="container mt-5">
            <h1 className="mb-5 text-center">Course Tracker</h1>
            <CourseForm courseAdded={loadCourses} />
            <CourseList courses={courses} refreshCourses={loadCourses} />
        </div>
    );
}

export default App;
