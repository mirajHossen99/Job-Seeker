import React, { useState } from "react";
import SearchJob from "../components/SearchJob";
import QuizPoral from "../components/QuizPoral";

const jobs = [
  // --- Web Development Jobs ---
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechWave Ltd.",
    location: "Remote",
    type: "Full-time",
    description: "Work with React.js, Tailwind CSS, and Next.js to build UIs.",
    image:
      "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
  },
  {
    id: 2,
    title: "Backend Developer (Node.js)",
    company: "CodeCraft Inc.",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description: "Build scalable backend APIs using Node.js and Express.",
    image:
      "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    company: "DevSphere",
    location: "Remote",
    type: "Contract",
    description: "Work on MERN stack projects with global clients.",
    image:
      "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
  },
  {
    id: 4,
    title: "React.js Developer",
    company: "InnovaSoft",
    location: "Chittagong, Bangladesh",
    type: "Part-time",
    description: "Develop reusable components and dynamic dashboards.",
    image:
      "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
  },
  {
    id: 5,
    title: "Next.js Engineer",
    company: "CloudWorks",
    location: "Remote",
    type: "Full-time",
    description: "Build SEO-optimized apps with Next.js and TypeScript.",
    image:
      "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
  },

  // --- UI/UX Design Jobs ---
  {
    id: 6,
    title: "UI Designer",
    company: "Pixel Perfect Studio",
    location: "Remote",
    type: "Full-time",
    description: "Design user-friendly UIs using Figma and Adobe XD.",
    image:
      "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
  },
  {
    id: 7,
    title: "UX Researcher",
    company: "DesignHub",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description: "Conduct user research and usability testing.",
    image:
      "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
  },
  {
    id: 8,
    title: "Product Designer",
    company: "Creative Minds",
    location: "Remote",
    type: "Contract",
    description: "Work on product wireframes, prototypes, and design systems.",
    image:
      "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
  },
  {
    id: 9,
    title: "Interaction Designer",
    company: "UIX Labs",
    location: "Sylhet, Bangladesh",
    type: "Part-time",
    description:
      "Design smooth interactions and animations for mobile/web apps.",
    image:
      "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
  },
  {
    id: 10,
    title: "UX/UI Specialist",
    company: "BrightApps",
    location: "Remote",
    type: "Full-time",
    description: "Work on UX flows and UI components for SaaS products.",
    image:
      "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
  },
];

const FindJobs = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [applied, setApplied] = useState(false);

  function onApply () {
    setShowQuiz(true);
    console.log('onApply')
  }

  function handleQuizComplete(score) {
    if (score >= 8) {
      setApplied(false);
    //   console.log(score);
    }
    else {
        setApplied(true);
    }
    setShowQuiz(false);
    // console.log('find : ', score);
  }


  return (
    <div>
      <SearchJob />
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-9 mt-10">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow hover:bg-blue-100 hover:shadow-lg transition duration-200 overflow-hidden"
          >
            <div className="relative w-full">
              <img src={job.image} alt={job.title} fill className="w-full" />
            </div>
            <div className="p-4 mt-3">
              <h2 className="text-lg font-semibold">{job.title}</h2>
              <p className="text-sm text-gray-600">{job.company}</p>
              <p className="text-xs text-gray-500">
                {job.location} · {job.type}
              </p>
              <p className="text-gray-700 text-sm mt-2">{job.description}</p>
              <div className="flex flex-col ">
                <button
                  onClick={onApply}
                  disabled={applied}
                  className={`mt-4 px-4 py-2 rounded ${
                    applied
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 cursor-pointer hover:bg-green-700 text-white"
                  }`}
                  //   className="mt-4 px-4 py-2 cursor-pointer bg-green-600 text-white rounded hover:bg-green-700"
                >
                  {applied ? "Already Applied" : "Apply"}
                </button>

                <button className="mt-4 px-7 py-2 cursor-pointer bg-blue-600 text-white rounded hover:bg-blue-700">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showQuiz && (
        <QuizPoral
          onClose={() => setShowQuiz(false)}
          onComplete={handleQuizComplete}
        />
      )}
    </div>
  );
};

export default FindJobs;
