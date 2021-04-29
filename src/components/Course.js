import React from 'react';

export default function Course({ course, refreshCourses }) {
    const markCoursePurchased = async () => {
        //TODO mark course as purchased
        try {
            await fetch('/.netlify/functions/courses', {
                method:'PUT',
                body: JSON.stringify({...course, purchased: true})
            });
            refreshCourses();
        } catch (error) {
            console.log(error);
        }
    };

    const deleteCourse = async () => {
        //TODO delete course
        try {
            await fetch('/.netlify/functions/courses', {
                method:'DELETE',
                body: JSON.stringify({id: course.id})
            });
            refreshCourses();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="list-group-item">
            <a href={course.link}>
                <h4 className="list-group-item-heading">{course.name}</h4>
            </a>
            <p>
                Tags:{' '}
                {course.tags &&
                    course.tags.map((tag, index) => (
                        <span className="badge badge-primary mr-2" key={index}>
                            {tag}
                        </span>
                    ))}
            </p>
            {!course.purchased && (
                <button
                    className="btn btn-sm btn-primary"
                    onClick={markCoursePurchased}
                >
                    Purchased
                </button>
            )}
            <button
                className="btn btn-sm btn-danger ml-2"
                onClick={deleteCourse}
            >
                Delete
            </button>
        </div>
    );
}
