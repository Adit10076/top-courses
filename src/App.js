import React, { useState, useEffect } from "react";
import { filterData } from './data.js';
import Navbar from './components/Navbar.js';
import Cards from './components/Cards.js';
import FilterCourse from './components/FilterCourse.js';
import { apiUrl } from './data.js';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const ans = await response.json();
        setData(ans.data);
      } catch (err) {
        alert("Could not get data due to ", err);
      }
    };

    fetchData();
  }, []);
  const [selectedId , setSelectedId] = useState("All");
  function changeCourses(title){
    if(selectedId===title) return;
    else{
      setSelectedId(title);
    }
  }
  const [courses, setCourses] = useState(filterData);
  return (
    <div className="container">
      <Navbar />
      <div className="btn-container">
        {
          courses.map((course) => {
            return (
              <FilterCourse id={course.id} title={course.title} changeCourses={changeCourses} selectedId={selectedId}/>
            );
          })
        }
      </div>

      {data ? <Cards info={data} selectedId={selectedId}/> : <p>Loading courses...</p>}
      <ToastContainer/>
    </div>
  );
};

export default App;
