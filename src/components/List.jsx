import React from "react";
import {IoIosClose} from "react-icons/io"
function List({ items, setItems, deleteItem }) {
  return (
    <>
      {items.length!==0 && <article>
        <ul className="bg-gray-700 mx-5 p-5 rounded-lg mt-10 sm:max-w-xl sm:mx-auto">
          {items.map(({ id, title }) => (
            <ul className="flex items-center justify-between border-b border-gray-500">
              <li
                key={id}
                className="todo-list text-white py-3 tracking-wider px-5 "
              >
                {title}
              </li>
              <button onClick={()=>{deleteItem(id)}} className="text-2xl"><IoIosClose className="text-red-500"></IoIosClose></button>
            </ul>
          ))}
          <ul className="px-5 py-3 flex items-center justify-between">
            <li>
                <p className="text-sm text-yellow-400">{items.length} items left</p>
            </li>
            <li>
                <button onClick={()=>setItems([])} className="text-md mx-auto text-rose-600">
                    Clear All
                </button>
            </li>

          </ul>
        </ul>
      </article>
      }
    </>
  );
}

export default List;
