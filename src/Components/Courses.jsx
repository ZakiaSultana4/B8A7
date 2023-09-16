import { useEffect } from "react";
import { useState } from "react";
import swal from "sweetalert";
import { FaBookmark } from "react-icons/fa";
import dollor from "../assets/dollar.svg";
import book from "../assets/Frame.svg";
import Cart from "./Cart";
const budge = 20;
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectCourses, setSelectCourses] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [cost, setcost] = useState(0);
  const [price, setprice] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelectCourses = (course) => {
    const isExist = selectCourses.find((item) => item.id === course.id);
    let count1 = course.Credit;
    let count2 = course.price;

    if (isExist) {
      return swal({
        title: "OPPS !",
        text: "You cannot select a course in multipale time",
        icon: "info",
        button: "Ok",
      });
    } else {
      selectCourses.forEach((item1) => {
        count1 = count1 + item1.Credit;
        count2 = count2 + item1.price;
      });
      setprice(count2);
      const totalRemaining = budge - count1;
      if (count1 >= 21) {
        return swal({
          title: "OPPS !",
          text: `Total Credit Hour is finished ,
         
       You cannot add any Course`,
          icon: "error",
          button: "Back",
        });
      } else {
        setcost(count1);
        setRemaining(totalRemaining);
        setSelectCourses([...selectCourses, course]);
      }
    }
  };

  return (
    <div className="flex flex-row  ">
      <div className="grid  md:grid-cols-3 gap-5 my-5 ml-6 3/4">
        {courses.map((course, idx) => (
          <div className="card w-96 bg-base-100 shadow-lg">
            <figure>
              <img src={course.image} className=" rounded-sm mt-8 w-80" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course.name}</h2>
              <p className="text-slate-600">{course.description}</p>
              <div className="flex font-medium my-5">
                <img src={dollor} alt="" />
                <p className=" mx-3 font-semibold text-[#2F80ED]">Price : {course.price} $</p>

                <button>
                  <img src={book} alt="" />
                </button>

                <p className="ml-5 font-semibold text-[#2F80ED] ">Credit : {course.Credit} hr</p>
              </div>
              <div className="card-actions justify-center">
                <button
                  onClick={() =>handleSelectCourses(course)}
                  className="btn bg-[#2F80ED] text-white my-6 w-80 hover:bg-[#325a8ddd]"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" 1/4">
        <Cart
          selectCourses={selectCourses}
          remaining={remaining}
          cost={cost}
          price={price}
        ></Cart>
      </div>
    </div>
  );
};

export default Courses;
