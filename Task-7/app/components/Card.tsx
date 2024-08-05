import React from "react";
import Link from "next/link";
const JobCard = ({ job, index }) => {
  return (
    <Link
      key={job.id}
      href={{
        pathname: `./components/${job.id}`, 
        query: { id: job.id }, 
      }}
      passHref
      className="flex flex-row border-solid border border-custom-border p-6 bg-white rounded-3xl mb-7 w-60p gap-2"
    >
      <div className="m-2 min-w-16 max-w-20">
        <img src={job.logoUrl} alt={job.title} className="w-full h-auto" />
      </div>
      <div>
        <p className="not-italic font-epilogue text-xl text-custom-blue font-semibold m-2 mb-1">
          {job.title}
        </p>
        <p className="text-custom-gray m-2">
          {job.orgName} {job.location}
        </p>
        <p className="not-italic font-epilogue text-custom-blue text-base m-2">
          {job.description}
        </p>
        <div className="flex gap-3 mt-2">
          <button className="w-auto rounded-full bg-custom-teal h-8 px-4">
            In person
          </button>
          <button className="w-auto rounded-full text-orange-400 border border-orange-400 h-8 px-4">
            Education
          </button>
          <button className="w-auto rounded-full text-Slate-Blue border border-Slate-Blue h-8 px-4">
            IT
          </button>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
