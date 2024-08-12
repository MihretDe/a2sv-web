"use client";
import React from "react";
import { useEffect, useState } from "react";
import JobCard from "./Card";
import Link from "next/link";
const Bookmarked = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    async function getData() {
      const response = await fetch(
        "https://akil-backend.onrender.com/bookmarks",
        {
          method: "GET",
          headers: {
            // "content-Type" : "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!response) {
        alert("Failed");
        throw new Error("Failed");
      }
      const result = await response.json();
      setJobs(result.data);
    }
    getData();
  }, []);
  console.log(jobs);
  if (jobs.length === 0) {
    return <div>No job listings found.</div>;
  }
  return (
    <div>
    <div className="w-75p flex-col items-center justify-center ml-24 mt-6 text-[#242172]">
      <nav className="flex justify-end gap-4 mr-10 mb-2">
        <Link href="./Home" className="text-xl  text-[#242172] font-medium">Opportunities</Link>
        <Link href="/" className="text-xl  text-[#242172] font-medium ">Sign Out</Link>
        
      </nav>
      <hr className="border-t border-gray-300" />
      </div>
    <div className="ml-24 mt-10">
      <div className="flex flex-row w-60p justify-between items-center mb-5">
        <div>
          <h1 className="text-neutral-100 text-[32px] font-black font-poppins">
            Bookmarked
          </h1>
          <h2 className="font-normal font-epilogue text-base text-custom-gray">
            Showing {jobs.length} results
          </h2>
        </div>
        <div>
            <p className="font-normal font-epilogue text-base text-custom-gray flex items-center ">
              Sort by:{" "}
              <span className="font-medium font-epilogue text-base text-custom-blue px-2">
                Most relevant{" "}
              </span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6667 1.66663L6 6.33329L1.33333 1.66663"
                  stroke="#4640DE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6667 1.66663L6 6.33329L1.33333 1.66663"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6667 1.66663L6 6.33329L1.33333 1.66663"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
          </div>
          </div>
        {jobs.length > 0 ? (
          jobs.map((job: any, index: number) => (
            <JobCard key={index} job={job} index={index} />
          ))
        ) : (
          <p>Loading . . .</p>
        )}
      
    </div>
    </div>
  );
};

export default Bookmarked;
