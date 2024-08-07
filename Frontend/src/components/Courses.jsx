import { Link } from "react-router-dom";
import list from "../../public/list.json";
import Card from "./Card";
function Courses() {
  return (
    <>
      <div className="mt-28 items-center justify-center text-center">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md: text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">Here</span> :)
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            autem, ratione optio adipisci perferendis officiis aut quam magni
            quidem enim magnam ex animi repellat, voluptatibus sint. Minus,
            iste! Quis reprehenderit eum id natus iure quas dolore totam
            voluptates sequi ipsa?
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md mt-10 hover:bg-pink-700 duration-300 cursor-pointer">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md: grid-cols-4">
          {list.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
