import React from "react";
import ProjectPreview from "../../components/ProjectPreview";
import SectionTitle from "../../parts/SectionTitle";

export default function ProjectPage() {
  return (
    <section id="project" className="mt-[120px] md:mt-[60px] md:pt-[50px]">
      <SectionTitle text="Project Page" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 md:gap-4 mb-4">
        <ProjectPreview
          name="Flip App"
          description="Next Gen Social Media"
          imageUrl="/project-1.png"
          bgColor="#685cdd"
          dark
        />
        <ProjectPreview
          name="Flip App"
          description="Next Gen Social Media"
          imageUrl="/project-1.png"
          bgColor="#685cdd"
          dark
        />
        <ProjectPreview
          name="Flip App"
          description="Next Gen Social Media"
          imageUrl="/project-2.png"
          bgColor="#313442"
          dark
        />
        <ProjectPreview
          name="Flip App"
          description="Next Gen Social Media"
          imageUrl="/project-3.png"
        />
        <ProjectPreview
          name="Flip App"
          description="Next Gen Social Media"
          bgColor="#4e4e56"
          dark
        />
        <ProjectPreview
          name="Flip App"
          description="Next Gen Social Media"
          imageUrl="/project-2.png"
          bgColor="#171717"
          dark
        />
      </div>
    </section>
  );
}
