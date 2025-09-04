'use client'
import React, { useState, useEffect } from 'react';

//STEP 2: first basic card - Basic styling stuff
const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-300 p-6 mb-4 shadow-sm">
      <h3 className="text-blue-600 font-bold text-lg mb-2">{course.courseNumber}</h3>
      <h4 className="text-gray-900 font-medium text-base mb-2">{course.courseName}</h4>
      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{course.description}</p>
      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
        {course.creditHours} Credit Hours
      </span>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="bg-blue-100 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Maxing our <span className="font-black">GPA</span>,
        </h2>
        <h3 className="text-4xl font-bold text-gray-900">
          One <span className="font-black">Class</span> at a Time
        </h3>
      </div>
    </div>
  );
};

export default function HomePage() {
  // STEP 3: Using react hooks (useState and useEffect) 
  const [courses, setCourses] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Mock data that simulates what would come from an external API
  const mockAPIData = [
    {
      course_number: "CS 1200",
      course_name: "Introduction to Computer Science and Software Engineering",
      description: "Overview of computer science and software engineering concepts.",
      credit_hours: "2"
    },
    {
      course_number: "CS 1337",
      course_name: "Computer Science I",
      description: "Introduction to programming with an emphasis on systematic problem solving.",
      credit_hours: "3"
    },
    {
      course_number: "CS 2336",
      course_name: "Computer Science II",
      description: "Further development of programming techniques and introduction to data structures.",
      credit_hours: "3"
    },
    {
      course_number: "CS 2340",
      course_name: "Computer Architecture",
      description: "Introduction to computer architecture and assembly language programming.",
      credit_hours: "3"
    },
    {
      course_number: "CS 3345",
      course_name: "Data Structures and Introduction to Algorithmic Analysis",
      description: "Analysis of algorithms and their computational complexity.",
      credit_hours: "3"
    }
  ];

  // STEP 4: Show them how that returned data looks using console.log
  useEffect(() => {
    console.log('🚀 Component mounted - DevGPA is ready!');
    console.log('📚 Mock external API data structure:', mockAPIData);
    console.log('🎯 Example of first course data:', mockAPIData[0]);
    console.log('📊 Total courses available:', mockAPIData.length);

    // Simulate loading data
    setTimeout(() => {
      // STEP 5: Mapping the real data to multiple cards via .map function and props
      // Transform external API format to our component props format
      const mappedCourses = mockAPIData.map((course, index) => {
        const mappedCourse = {
          courseNumber: course.course_number,
          courseName: course.course_name,
          description: course.description,
          creditHours: course.credit_hours
        };
        
        console.log(`🔄 Mapping course ${index + 1}:`, course.course_number, '→', mappedCourse);
        return mappedCourse;
      });

      console.log('🎯 Final mapped data for components:', mappedCourses);
      setCourses(mappedCourses);
      setIsLoaded(true);
    }, 1000);
  }, []);

  // useEffect that runs when courses state changes
  useEffect(() => {
    if (courses.length > 0) {
      console.log('📝 Courses state updated! Now displaying:', courses.length, 'courses');
      console.log('🎨 Each course will be rendered as a CourseCard component using .map()');
    }
  }, [courses]);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      {/* Main Content Area */}
      <div className="px-6 pb-12 pt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-6 text-center text-gray-700">
            {isLoaded ? 'Course Catalog' : 'Loading Courses...'}
          </h2>
          
          {isLoaded ? (
            <div className="grid gap-4">
              {/* Using .map() function to render multiple CourseCard components with PROPS */}
              {courses.map((course, index) => {
                // Console log each course being rendered for educational purposes
                console.log(`🎯 Rendering CourseCard ${index + 1} with props:`, course);
                
                return (
                  <CourseCard 
                    key={index}
                    course={course}  // Passing mapped course data as props
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading course data...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}