import React from "react";

const Blog = () => {
  const questionAnswer = [
    {
      question: "What Is Context Api?",
      answer:
        "Data is sent from one component to another through props drilling. But context api made it very easy. With the context api we can keep the data in the main component and share it in the siblings between the child and the context provider. This has given a new dimension to React and made it easier to speed up the work.",
    },
    {
      question: "what is semantic tag?",
      answer:
        "Semantic tags are those that help to seo the page and understand the Internet. There are a number of tags in html that are used for specific purposes. For example, suppose this tag is used to hold css links and metrics with metadata. Mine is usually the main content of the website. In addition, nav and footer, their job is to add navigation and footer section to the website, respectively. Each of these tags plays a special role in making the website searchable on the Internet.",
    },
    {
      question: "Difference between inline block and  inline-block element.",
      answer:
        "The main feature or difference between inline element and inline block element is that two inline blocks sit side by side and two inline blocks can be given margin or padding. Which does not accept inline elements. Inline -block can be given specific width height. Inline elements such as: a, span, ul etc. but with css inline block property they can be made inline block property.",
    },
  ];
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid md:grid-cols-3 md:container mx-auto gap-5 my-3 ">
        {questionAnswer.map((data) => (
          <div className="border rounded-md py-2 px-1 mx-3">
            <h3 className="bg-slate-500 text-slate-200 h-20 rounded-sm text-xl flex items-center justify-center">
              {data.question}
            </h3>
            <p className="pt-3 px-2 text-justify">
              <span className="text-orange-400 uppercase font-semibold">
                Answer:{" "}
              </span>
              {data.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
