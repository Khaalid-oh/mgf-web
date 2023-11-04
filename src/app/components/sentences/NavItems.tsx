import React from 'react'

function NavItems() {

  const navItemsName = [
    { id: 0, item: "About us" },
    { id: 1, item: "Patients Registration" },
    { id: 2, item: "Resources" },
    { id: 3, item: "Research" },
    { id: 4, item: "News" },
    { id: 5, item: "Awareness" },
  ];

  return (
    <div>
      <ul className='flex gap-8 cursor-pointer'>
        {navItemsName.map((item, i) => (
          <li key={i} className='hover:text-green-600 text-lg transition-all'>
            {item.item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavItems
