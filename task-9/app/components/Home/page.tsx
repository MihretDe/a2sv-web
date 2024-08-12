"use client";
import JobCard from "./Card";
import { useUser } from "../../../contexts/UserContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import  Cookie  from "js-cookie";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    async function getData() {
      const response = await fetch(
        "https://akil-backend.onrender.com/opportunities/search",
        {
          method: "GET",
          headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!response) {
        throw new Error("Failed");
      }
      const result = await response.json();
      setJobs(result.data);
    }
    getData();
  }, []);
  console.log(jobs);
  return (
    <div>
      <div className="w-75p flex-col items-center justify-center ml-24 mt-6">
      <nav className="flex justify-end gap-4 mr-10 mb-2">
        <Link href="./bookmarked" className="text-xl  text-[#242172] font-medium">Bookmarked</Link>
        <Link href="/" onClick={()=> {localStorage.removeItem("accessToken"); Cookie.remove('currentUser')}} className="text-xl  text-[#242172] font-medium">Sign Out</Link>
        
      </nav>
      <hr className="border-t border-gray-300" />
      </div>
      
      <div className="ml-32 mt-10">
        <div className="flex flex-row w-60p justify-between items-center mb-5">
          <div>
            <h1 className="text-neutral-100 text-[32px] font-black font-poppins">
              Opportunities
            </h1>
            <h2 className="font-normal font-epilogue text-base text-custom-gray">
              Showing {jobs.length} results
            </h2>
          </div>
          <div>
            <p className="font-normal font-epilogue text-base text-custom-gray flex items-center ">
              Sort by:{" "}
              <span className=" font-epilogue text-base text-custom-blue px-2 font-black">
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6667 1.66663L6 6.33329L1.33333 1.66663"
                  stroke="black"
                  strokeOpacity="0.2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6667 1.66663L6 6.33329L1.33333 1.66663"
                  stroke="black"
                  strokeOpacity="0.2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
        </div>
        <div>
          {jobs.length > 0 ? (
            jobs.map((job: any, index: number) => (
              <JobCard key={index} job={job} index={index} />
            ))
          ) : (
            <p>No job Found</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
