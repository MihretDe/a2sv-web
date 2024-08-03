import React from "react";
import Record from '../../../public/records.json'
const Left= ({id}) =>{
    const job = Record[id]
    return(
        <div className="w-60p">
        <p className="text-custom-blue font-black text-2xl font-poppins pt-5 pb-3">
          Description
        </p>
        <p className="text-custom-blue font-epilogue font-normal text-base leading-[25.6px]  ">
          {job.description}
        </p>
        <p className="text-custom-blue font-black text-2xl font-poppins pb-3 pt-10">
          Responsibilities{" "}
        </p>
        <ul>
          {job.responsibilities.map((resp, idx) => (
            <li
              key={idx}
              className="flex flex-row text-custom-blue font-epilogue font-normal text-base leading-[25.6px] pb-2 gap-1.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#56CDAD
"
                className="size-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              {resp}
            </li>
          ))}
        </ul>
        <p className="text-custom-blue font-black text-2xl font-poppins pb-3 pt-10">
          Ideal Candidate we want
        </p>
        <ul className="list-disc pl-5  ">
          <li className=" text-custom-blue font-epilogue font-bold text-base leading-[25.6px] pb-1">
            ({job.ideal_candidate.age} year old) {job.ideal_candidate.gender}{" "}
            {job.title}
          </li>
          {job.ideal_candidate.traits.map((resp, idx) => (
            <li
              className="text-custom-blue font-epilogue font-bold text-base pb-1 "
              key={idx}
            >
              {resp}
            </li>
          ))}
        </ul>
        <p className="text-custom-blue font-black text-2xl font-poppins pb-3 pt-10">
          When and Where
        </p>
        <div className="flex flex-row items-center">
          <div className="border border-solid border-slate-300 rounded-full p-1 flex justify-center items-center mr-1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="rgb(56 189 248)"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
          </div>
          <p>{job.when_where}</p>
        </div>
      </div>
    )
}
export default  Left;