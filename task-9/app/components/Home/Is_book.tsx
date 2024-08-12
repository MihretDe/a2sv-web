"use client"
import React from "react";
import { useState } from "react";


const Is_book = ({ id, marked }) => {
 const [bgColor , setbgColor] = useState(marked?"black" : 'white')
 
  async function onClick() {
    const accessToken = localStorage.getItem('accessToken')
    setbgColor(prevColor => prevColor === 'white' ? 'black' : 'white');
    if (marked){
        // alert("prev marked")
        // alert(marked)
        try {
            const response = await fetch(`https://akil-backend.onrender.com/bookmarks/${id}` , 
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                      },
                }
            )
            if (response.ok){
              alert("Deleted")

            }
            else{
              alert("not deleted")
            }
        }
        catch(error){
          alert("error")
        }
    }
    else{
        // alert("now marked")
        // alert(marked)
        try {
            const response = await fetch(`https://akil-backend.onrender.com/bookmarks/${id}` , 
                {
                    method: 'POST',
                    headers: {
                        // 'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                      },
                }
            )
            if (response.ok){
              alert("posted")

            }
            else{
              alert("not posted")
            }
        }
        catch(error){
          alert("error")
        }
    }
};
    

  return (
    <button className="flex items-start pt-6 max-w-6 max-h-12 justify-end" data-testid="my-button" onClick={onClick}  >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
        data-testid="bookmark-icon"
        style={{fill:bgColor}}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
        />
      </svg>
    </button>
  );
};

export default Is_book;
