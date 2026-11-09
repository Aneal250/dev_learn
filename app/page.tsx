"use client"; // make this component a client component where you can use React hooks
import { Person } from "@/types/data";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// React Hooks
// 1. useState
// 2. useEffect
// 3. useRef

export default function Home() {
  const [people, setPeople] = useState<Person[]>([]); // useState to manage the list of people

  const [isFetchData, setIsFetchData] = useState<boolean>(false); // useState to manage the fetch data state

  // useEffectss

  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const data = await response.json();
      setPeople(data.results);
      console.log(data.results, "this is data");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // if the isFetchData state is true, then fetch data from api and set the state
  // useEffect(() => {
  //   // fetch data from api and set the state
  //   if (isFetchData) {
  //     fetchData(); // call the fetchData function to fetch data from api

  //   }

  //   // fetchData(); // call the fetchData function to fetch data from api
  // }, [isFetchData]); // the component runs only once when the component is mounted

  // get John
  return (
    <div className="flex flex-col items-center justify-center py-2 gap-2">
      {/* list peope */}
      {/* card */}
      // some Javascripts methods map filter and reduce
      <h1 className="text-3xl font-bold underline">People List</h1>
      {/*  */}
      {people.map((person, index) => (
        <section
          key={index}
          className="border-2 border-gray-300 full rounded-lg p-2 m-2 w-full max-w-md flex flex-row gap-2 hover:border-blue-500"
        >
          <img
            src={person.picture.medium}
            className="w-30 h-30 rounded-e-lg m-3 "
          />
          <div className="flex flex-col m-3">
            <p>Title: {person.name.title}</p>
            <h1>
              Name: {person.name.first} {person.name.last}
            </h1>
            <p>Age: {person.dob.age}</p>
            <p>
              Location: {person.location.city}, {person.location.state}
            </p>
            <p>Country: {person.location.country}</p>
            <p>Phone: {person.phone}</p>
          </div>
        </section>
      ))}
      <div className="flex flex-row gap-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => fetchData()}
        >
          {" "}
          Fetch Data
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setPeople([])}
        >
          {" "}
          Clear Data
        </button>
      </div>
    </div>
  );
}
