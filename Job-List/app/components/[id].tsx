// import { useRouter } from "next/router";
// import Record from "./records.json";
// function Description() {
//   const router = useRouter();
//   const { id } = router.query;

//   const index = parseInt(id as string, 10);

//   const job = Record[index];
//   return (
//     <div className="flex flex-row">
//       <div>
//         <p>Description</p>
//         <p></p>
//         <p>Responsibilities </p>
//         <ul>
//           {job.responsibilities.map((resp, idx) => (
//             <li key={idx}>{resp}</li>
//           ))}
//         </ul>
//         <p>Ideal Candidate we want</p>
//         <ul>
//           <li>
//             {job.ideal_candidate.age} {job.ideal_candidate.gender} {job.title}
//           </li>
//           {job.ideal_candidate.traits.map((resp, idx) => (
//             <li key={idx}>{resp}</li>
//           ))}
//         </ul>
//         <p>When and Where</p>
//         <p>{job.when_where}</p>
//       </div>
//       <div className="flex flex-col">
//         <p>About</p>
//         <div className="flex flex-row">
//           <img></img>
//           <div className="flex flex-col">
//             <p>Posted on</p>
//             <p>{job.about.posted_on}</p>
//           </div>
//         </div>
//         <div className="flex flex-row">
//           <img></img>
//           <div className="flex flex-col">
//             <p>Deadline</p>
//             <p>{job.about.deadline}</p>
//           </div>
//         </div>
//         <div className="flex flex-row">
//           <img></img>
//           <div className="flex flex-col">
//             <p>Location</p>
//             <p>{job.about.location}</p>
//           </div>
//         </div>
//         <div className="flex flex-row">
//           <img></img>
//           <div className="flex flex-col">
//             <p>End Date</p>
//             <p>{job.about.end_date}</p>
//           </div>
//         </div>
//       </div>
//       <hr></hr>
//       <div>
//         <p>Categories</p>
//         <div className="flex flex-row">
//           {job.about.categories.map((resp, idx) => (
//             <p key={idx}>{resp}</p>
//           ))}
//         </div>
//       </div>
//       <hr></hr>
//       <div>
//         <p>Required Skills</p>
//         {job.about.required_skills.map((resp, idx) => (
//           <p key={idx}>{resp}</p>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Description;
