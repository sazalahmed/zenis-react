import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HomeCategory = () => {
  const [categorys, setCategory] = React.useState([]);

  useEffect(() => {
    fetch("categorys.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="container mx-auto flex justify-between">
      <div className="flex flex-wrap gap-6.25 justify-between mt-18.75">
        {categorys.map((category) => (
          <Link
            className="category_item mt-6.25"
            key={category.id}
            to="/product"
          >
            <div className="img w-41.5 h-41.5 p-10 bg-lightBg rounded-[100%_60%_60%_100%/100%_100%_60%_60%] transition-all duration-400">
              <img src={category.image} alt="category" />
            </div>
            <h2 className="mt-5 text-center text-lg capitalize font-medium! transition-all duration-400">
              {category.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
