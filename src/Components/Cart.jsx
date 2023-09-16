const Cart = ({ selectCourses, remaining, cost, price }) => {
  return (
    <div className="mt-8 bg-[#FFF] mx-7 p-5 rounded-xl">
      <h2 className="text-[#2F80ED]  font-semibold">
        Credit Hour Remaining {remaining} hr
      </h2>
      <hr className="my-5" />
      <p className=" font-bold">
        Course Name :
        {selectCourses.map((course, idx) => (
          <li
            key={idx}
            className=" list-decimal text-slate-600 text-[13px] mt-2"
          >
            {course.name}
          </li>
        ))}
      </p>
      <hr className="my-5" />
      <p className="font-semibold text-[#2F80ED]"> Total Credit Hour : {cost} hr </p>
      <hr className="my-5" />
      <p className="font-semibold">Total Price : {price} USD </p>
    </div>
  );
};

export default Cart;
