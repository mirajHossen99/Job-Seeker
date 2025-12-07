import React, { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import PaymentPortal from "../components/PaymentPortal";
import CoursePayment from "../components/PaymentCourse";

const courseData = {
  1: {
    title: "Web Development",
    description: "Learn HTML, CSS, JS, React",
    videos: [
      "HTML Basics",
      "CSS Fundamentals",
      "JavaScript Introduction",
      "React Components",
      "React State & Props",
    ],
  },
  2: {
    title: "UI/UX Design",
    description: "Learn design principles and Figma",
    videos: [
      "Design Principles",
      "Figma Basics",
      "Wireframing",
      "Prototyping",
      "User Testing",
    ],
  },
};

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData[id];

  const [paid, setPaid] = useState(false);
  const [watchedVideos, setWatchedVideos] = useState([]);

  // Payment simulation
  function payNow() {
    alert("Payment successful!");
    setPaid(true);
  }

  // Watch video
  function watchVideo(video) {
    if (!watchedVideos.includes(video)) {
      setWatchedVideos([...watchedVideos, video]);
    }
  }

  const progress = Math.round(
    (watchedVideos.length / course.videos.length) * 100
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mt-20 mb-2 text-center
      ">Payment Geteway</h1>
      
      {!paid ? (
        <CoursePayment />
      ) : (
        <>
          <p className="mb-2 font-medium">Video Progress: {progress}%</p>
          <div className="space-y-2">
            {course.videos.map((video, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border p-2 rounded bg-gray-50"
              >
                <span>{video}</span>
                <button
                  onClick={() => watchVideo(video)}
                  disabled={watchedVideos.includes(video)}
                  className={`px-2 py-1 rounded text-white ${
                    watchedVideos.includes(video)
                      ? "bg-gray-400"
                      : "bg-blue-600"
                  }`}
                >
                  {watchedVideos.includes(video) ? "Watched" : "Watch"}
                </button>
              </div>
            ))}
          </div>

          {progress === 100 && (
            <div className="mt-4 text-green-600 font-semibold">
              ✅ You completed all videos! You can now apply for the job.
              <button
                className="ml-4 px-3 py-1 bg-indigo-600 text-white rounded"
                onClick={() => {navigate("/find-jobs"), scrollTo(0,0)}}
              >
                Go to Job Portal
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CourseDetails;
