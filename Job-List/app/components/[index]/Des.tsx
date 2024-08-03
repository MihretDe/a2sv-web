"use client";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import images from "../../../public/images/Vector.png";
import Record from "../../../public/records.json";
import Left from "./Left";
import Right from "./Right";
function Description() {
  const params = useParams();

  const id = params.index;

  return (
    <div className="flex flex-row gap-[15%] m-10">
      <Left id={id}></Left>
      <Right id = {id}></Right>
    </div>
  );
}
export default Description;
