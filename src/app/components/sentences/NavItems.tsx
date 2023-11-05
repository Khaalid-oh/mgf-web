import React, { useEffect, useRef, useState } from "react";

function NavItems() {
  const navItemsName = [
    { id: 0, item: "About us" },
    { id: 1, item: "Patients Registration" },
    { id: 2, item: "Resources" },
    { id: 3, item: "Research" },
    { id: 4, item: "News" },
    { id: 5, item: "Awareness" },
  ];

  const [dropDown, setDropDown] = useState(false);
  
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  
  const handleDropDrown = () => {
    setDropDown((prev) => !prev);
  };

   useEffect(() => {
     function handleClickOutside(event :MouseEvent) {
       if (dropdownRef.current && !dropdownRef.current.contains(event.target as HTMLElement)) {
         setDropDown(false);
       }
     }

     window.addEventListener("click", handleClickOutside);


     return () => {
       window.removeEventListener("click", handleClickOutside);
     };
   }, []);


  return (
    <div>
      <ul className="flex gap-8 cursor-pointer" ref={dropdownRef}>
        {navItemsName.map((item, i) => (
          <li
            key={i}
            className={`hover:text-green-700 text-lg transition-all ${
              item.id === 0 ? "relative" : ""
            }`}
            onClick={item.id === 0 ? handleDropDrown : undefined}
          >
            {item.item}
            {item.id === 0 && dropDown && (
              <ul
                className={`absolute text-black w-[13rem] z-10 bg-white mt-2 p-2 border rounded-md transition-all ${
                  !dropDown ? "hidden" : ""
                }`}
              >
                <li className="p-2 hover:bg-green-50 rounded-md">Who we are</li>
                <li className="p-2 hover:bg-green-50 rounded-md">
                  Wolfram Syndrome
                </li>
                <li className="p-2 hover:bg-green-50 rounded-md">
                  Annual Reports
                </li>
                <li className="p-2 hover:bg-green-50 rounded-md">
                  Our Policies
                </li>
                <li className="p-2 hover:bg-green-50 rounded-md">
                  WS Overview
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavItems;
