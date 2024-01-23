import React from 'react';
import withRole from '@/learning/HOC/withRole';

// so the flow of props is --->
// page -> StudentWithRole
// StudentWithRole is actually a component returned by withRole HOC
// withRole HOC returns a component which is StudentClassroom and then forwards the props there.

const StudentClassroom = ({ name }: { name: string }) => {
  console.log('STUDENT CLASSROOM IS RENDERED');
  return (
    <div className="text-3xl font-semibold">StudentClassroom : {name}</div>
  );
};

const TeacherClassroom = () => {
  console.log('TEACHER CLASSROOM IS RENDERED');
  return <div className="text-3xl font-semibold">TeacherClassroom</div>;
};

const StudentWithRole = withRole(StudentClassroom, 'student');
const TeacherWithRole = withRole(TeacherClassroom, 'teacher');

const Temp = () => {
  console.log('TEMP IS RENDERED');
  return <div>HELLO FRIENDS </div>;
};

const page = () => {
  console.log('PAGE IS RENDERED');
  return (
    <React.Fragment>
      <StudentWithRole name="kabeer" />
      <TeacherWithRole />
      <Temp />
    </React.Fragment>
  );
};

export default page;
