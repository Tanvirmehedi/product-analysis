import React from "react";

const Blog = () => {
  const questionAnswer = [
    {
      question: "What Is Context Api?",
      answer: "Answer",
    },
    {
      question: "what is semantic tag?",
      answer: "Answer",
    },
    {
      question: "Difference between inline block and  block element.",
      answer: "Answer",
    },
  ];
  return (
    <div className="grid md:grid-cols-3 md:container mx-auto gap-5 my-3 ">
      {questionAnswer.map((data) => (
        <div className="border rounded-md py-2 px-1 mx-3">
          <h3 className="bg-slate-500 text-slate-200 rounded-sm text-xl">
            {data.question}
          </h3>
          <p>
            <span className="text-orange-400 uppercase font-semibold">
              Answer:{" "}
            </span>
            {data.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
