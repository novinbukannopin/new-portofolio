import React from "react";
import SectionTitle from "../../parts/SectionTitle";
import CardBlog from "../../components/CardBlog";

export default function BlogPage() {
  return (
    <section id="blog" className="mt-[120px] md:mt-[60px] md:pt-[50px]">
      <SectionTitle text="Blog" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
    </section>
  );
}
