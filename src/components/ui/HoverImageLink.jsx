import React, { useRef, useState } from "react";
import Modal from "./Modal";

const projects = [
  {
    title: "Document App",
    year: "2017",
    src: "Intersect.webp",
    color: '#000000',
    href:'https://github.com/wanhasibala/document'
  },
  {
    title: "Ads Video",
    year: "2017",
    src: "Ads Video.webp",
    color: '#8c8c8c',
    href: 'https://drive.google.com/file/d/1lCTDH_EttkNq8K1PDg7_8-l6OOJ1byKH/view?usp=sharing'
  },
  {
    title: "Edu Credit ",
    year: "2017",
    src: "EduCredit.webp",
    color:"#EFE8D3",
    href: 'https://www.figma.com/file/hEbCeGd0sCAT2E9CsYzE48/Mobile?type=design&node-id=1780%3A166&mode=design&t=HszvxqfrMy6e7l5i-1'
  },
];

export const HoverImageLinks = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <section className=" p-4 md:p-8 my-20">
      <h1 className="max-w-[1440px] text-secondary-800  text-heading-2 mx-auto text-center">
        A Quick Glance of My past Project
      </h1>

      <div className=" max-w-[1440px] mt-24 mx-auto">
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
              year={project.year}
              href={project.href}
            />
          );
        })}
       
      </div>
      <Modal modal={modal} projects={projects} />
    </section>
  );
};

function Project({ title, setModal, year, index, href}) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="flex w-full justify-between items-center py-12 px-4 lg:px-12 hover:px-8 border-t cursor-pointer transition-all duration-200 hover:opacity-50"
    >
      <h2 className="text-heading-4 font-normal duration-500 "><a href={href}>{title}</a></h2>
      <h1 className="duration-500 font-light "><a href={href}>{year}</a></h1>
    </div>
  );
}
