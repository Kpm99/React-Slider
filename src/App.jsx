import { useState } from "react";
import { longList, shortList, list } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaGreaterThan } from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);
  const setNext = () => {
    setIndex((prev) => {
      const idx = (prev + 1) % longList.length;
      return idx;
    });
  };

  const setPrev = () => {
    setIndex((prev) => {
      const idx = (prev - 1 + longList.length) % longList.length;
      return idx;
    });
  };
  return (
    <main className="slider-container">
      {longList.map((i, listIndex) => {
        return (
          <div
            className="slide"
            style={{ transform: `translateX(${100 * (listIndex - index)}%)` }}
            key={i.id}
          >
            <img src={i.image} className="person-img" />
            <h5 className="name">{i.name}</h5>
            <p className="title">{i.title}</p>
            <p className="title text">{i.quote}</p>
            <FaQuoteRight className="icon" />
          </div>
        );
      })}
      <button className="prev" onClick={setPrev}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={setNext}>
        <FiChevronRight />
      </button>
    </main>
  );
};
export default App;
