import React, { useRef, useState } from "react";
import Modal from "./Modal";

const projects = [
  {
    title: "Document App",
    year: "2017",
    src: "Intersect.webp",
    color: '#000000'
  },
  {
    title: "Ads Video",
    year: "2017",
    src: "Intersect.webp",
    color: '#8c8c8c'
  },
  {
    title: "Edu Credit ",
    year: "2017",
    src: "Intersect.webp",
    color:"#EFE8D3"
  },
];

export const HoverImageLinks = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <section className=" p-4 md:p-8 my-20">
      <h1 className="max-w-[1440px] text-secondary-800  text-heading-2 mx-auto text-center">
        A Quick Glance of My past Project
      </h1>

      <div className="mx-auto max-w-[1440px] mt-24">
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
              year={project.year}
            />
          );
        })}
       
      </div>
      <Modal modal={modal} projects={projects}/>
    </section>
  );
};

function Project({ title, setModal, year, index }) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="flex w-full justify-between items-center py-12 px-12 hover:px-8 border-t cursor-pointer transition-all duration-200 hover:opacity-50"
    >
      <h2 className="text-6xl font-normal duration-500 ">{title}</h2>
      <h1 className="duration-500 font-light ">{year}</h1>
    </div>
  );
}
