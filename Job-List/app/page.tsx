import Link from "next/link";
import Records from "../public/records.json";
import JobCard from "./components/Card";
const Home = () => {
  return (
    <div className="ml-24 mt-10">
      <div className="flex flex-row w-60p justify-between items-center mb-5">
        <div>
          <h1 className="text-neutral-100 text-2xl font-black font-poppins">
            Opportunities
          </h1>
          <h2 className="font-normal font-epilogue text-base text-custom-gray">
            Showing 73 results
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
      {Records.map((job, index) => (
        <JobCard key={index} job={job} index={index} />
      ))}
    </div>
  );
};

export default Home;
