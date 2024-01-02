"use client";
import { useHashnodePage } from "hashnode-client";
import React from "react";

const AboutPage = ({ params: { host } }) => {
  const { loading, error, page } = useHashnodePage({
    host: host,
    slug: `about`,
  });

  if (!page) {
    return (
      <div className="h-[90vh] flex items-center justify-center">
        <h1 className="text-4xl">
          You hashnode blog does not seem to have an about page.
        </h1>
      </div>
    );
  }
  return (
    <div className="w-[70vw] mx-auto flex flex-col justify-center items-center pt-4 pb-24 px-2">
      <div
        className="about-content"
        dangerouslySetInnerHTML={{ __html: page?.content?.html }}
      />
    </div>
  );
};

export default AboutPage;
