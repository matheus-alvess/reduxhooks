import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCourseAction } from '../../actions';
export default function CoursesList() {
  const courses = useSelector((state) => state.courses.data);
  const dispacth = useDispatch();

  function addCourse() {
    dispacth(addCourseAction('GraphQL'));
  }

  return (
    <>
      <ul>
        {courses.map((course) => (
          <li key={course}> {course} </li>
        ))}
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar curso
      </button>
    </>
  );
}
