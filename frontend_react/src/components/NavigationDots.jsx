import React from "react";

const NavigationDots = (props) => {
  const items = ["home", "about", "work", "skills", "contact"];

  return (
    <div className="app__navigation">
      {items.map((item, index) => (
        <a
          key={item + index}
          className="app__navigation-dot"
          href={`#${item}`}
          style={props.active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
