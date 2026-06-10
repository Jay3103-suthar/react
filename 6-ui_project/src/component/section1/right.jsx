import React, { useRef } from "react";
import Rightcard from "./Rightcard";

const Right = ({ user }) => {
  const sliderRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // scroll speed
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={sliderRef}
      id="right"
      className="w-2/3 h-full flex flex-nowrap overflow-x-auto gap-5 p-4 rounded-lg cursor-grab active:cursor-grabbing select-none"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {user.map((elem, index) => (
        <Rightcard
          key={index}
          id={index}
          img={elem.img}
          color={elem.color}
          tag={elem.tag}
          intro={elem.intro}
        />
      ))}
    </div>
  );
};

export default Right;