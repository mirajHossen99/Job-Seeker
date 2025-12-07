import React, { useState, useRef, useMemo, useEffect } from "react";
import {
  ChevronDown,
  ChevronRight,
  PlayCircle,
  CheckCircle,
  Award,
  Video,
} from "lucide-react";

// --- COURSE DATA ---
const courseModules = [
  {
    id: 1,
    title: "Introduction to DevOps (part 1)",
    lessons: [
      {
        id: "1-1",
        title: "Introduction to DevOps",
        duration: "00:44:33",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
    ],
  },
  {
    id: 2,
    title: "Hands-on linux",
    lessons: [
      {
        id: "2-1",
        title: "Setup a Linux VM and login to remote ubuntu server",
        duration: "00:19:49",
        url: "https://www.w3schools.com/html/movie.mp4",
      },
      {
        id: "2-2",
        title: "Basic commands of linux",
        duration: "00:57:02",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
      {
        id: "2-3",
        title: "Linux system administration essentials",
        duration: "00:53:29",
        url: "https://www.w3schools.com/html/movie.mp4",
      },
    ],
  },
  {
    id: 3,
    title: "Static site deployment",
    lessons: [
      {
        id: "3-1",
        title: "Deploying using Netlify",
        duration: "00:15:00",
        url: "https://www.w3schools.com/html/movie.mp4",
      },
    ],
  },
  {
    id: 4,
    title: "Configuration management with ansible",
    lessons: [],
  },
  {
    id: 5,
    title: "Deployment with Docker",
    lessons: [
      {
        id: "5-1",
        title: "Dockerizing a Node.js application",
        duration: "00:30:00",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
    ],
  },
];

// Helper: Flatten modules into a single array of all playable lessons
const allPlayableLessons = courseModules.flatMap((module) => module.lessons);
const initialLesson = allPlayableLessons[0] || null;

export default function CoursePlayer() {
  const [activeModuleId, setActiveModuleId] = useState(courseModules[0].id);
  const [currentLesson, setCurrentLesson] = useState(initialLesson);
  const [watched, setWatched] = useState({});
  const [isCourseComplete, setIsCourseComplete] = useState(false);
  const videoRef = useRef(null);

  // Current lesson index
  const currentLessonIndex = useMemo(() => {
    if (!currentLesson) return -1;
    return allPlayableLessons.findIndex((l) => l.id === currentLesson.id);
  }, [currentLesson]);

  // Update watched percentage
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !currentLesson || !video.duration) return;

    const percent = Math.min(
      100,
      Math.floor((video.currentTime / video.duration) * 100)
    );

    setWatched((prev) => ({
      ...prev,
      [currentLesson.id]: Math.max(prev[currentLesson.id] || 0, percent),
    }));
  };

  // Handle resume playback when metadata is ready
  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video && currentLesson) {
      const lastSavedProgress = (watched[currentLesson.id] || 0) / 100;
      if (lastSavedProgress > 0 && video.duration > 0) {
        const storedTime = lastSavedProgress * video.duration;
        if (storedTime < video.duration - 2) {
          video.currentTime = storedTime;
        }
      }
    }
  };

  // Calculate total progress
  const totalProgress = useMemo(() => {
    if (allPlayableLessons.length === 0) return 0;

    const sumProgress = allPlayableLessons.reduce(
      (sum, lesson) => sum + (watched[lesson.id] || 0),
      0
    );

    const avgProgress = Math.floor(sumProgress / allPlayableLessons.length);

    const allCompleted = allPlayableLessons.every(
      (lesson) => (watched[lesson.id] || 0) >= 95
    );

    if (allCompleted && !isCourseComplete) {
      setIsCourseComplete(true);
    }

    return avgProgress;
  }, [watched, isCourseComplete]);

  // Navigation
  const navigateToLesson = (lesson) => setCurrentLesson(lesson);
  const handlePrevious = () =>
    currentLessonIndex > 0 &&
    navigateToLesson(allPlayableLessons[currentLessonIndex - 1]);
  const handleNext = () =>
    currentLessonIndex < allPlayableLessons.length - 1 &&
    navigateToLesson(allPlayableLessons[currentLessonIndex + 1]);

  // Expand the active module when lesson changes
  useEffect(() => {
    if (currentLesson) {
      const currentModule = courseModules.find((module) =>
        module.lessons.some((lesson) => lesson.id === currentLesson.id)
      );
      if (currentModule && currentModule.id !== activeModuleId) {
        setActiveModuleId(currentModule.id);
      }
    }
  }, [currentLesson, courseModules]);

  if (!currentLesson) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-gray-500">
        No lessons available.
      </div>
    );
  }

  const currentVideoProgress = watched[currentLesson.id] || 0;

  return (
    <div className="mt-20">
      <div className="flex gap-9">
        {/* Left: Video Player */}
        <div className="flex-1 flex flex-col bg-gray-800 border border-gray-200 rounded-xl relative">
          {/* Video */}
          <div className="flex-1 relative flex items-center justify-center">
            <video
              key={currentLesson.id}
              ref={videoRef}
              src={currentLesson.url}
              controls
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="w-full rounded-lg h-full object-contain"
            />
          </div>

          {/* Bottom controls */}
          <div className="w-full px-6 py-4 bg-white rounded-b-lg border border-gray-300 flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-lg text-gray-900">
                {currentLesson.title}
              </h2>
              <p className="text-gray-500 text-sm flex items-center mt-1 gap-2">
                <Video className="w-4 h-4 text-red-500" />
                VIDEO · {currentLesson.duration}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handlePrevious}
                disabled={currentLessonIndex <= 0}
                aria-disabled={currentLessonIndex <= 0}
                className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm ${
                  currentLessonIndex <= 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {"< Previous"}
              </button>
              <button
                onClick={handleNext}
                disabled={currentLessonIndex === allPlayableLessons.length - 1}
                aria-disabled={
                  currentLessonIndex === allPlayableLessons.length - 1
                }
                className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm ${
                  currentLessonIndex === allPlayableLessons.length - 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {"Next >"}
              </button>
            </div>
          </div>
        </div>

        {/* Right: Sidebar */}
        <div className="w-96 bg-white border rounded-xl border-gray-200 flex flex-col">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button className="flex-1 py-3 text-center font-bold border-b-2 border-black text-sm">
              Recorded
            </button>
            <button className="flex-1 py-3 text-center text-gray-500 hover:text-black text-sm">
              Live Class
            </button>
          </div>

          {/* Global progress */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-md font-semibold text-gray-700">
                Total Course Progress
              </h2>
              <span className="text-sm font-bold text-blue-600">
                {totalProgress}%
              </span>
            </div>
            <div className="w-full bg-blue-100 rounded-full h-1.5">
              <div
                className="bg-blue-600 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${totalProgress}%` }}
              />
            </div>
          </div>

          {/* Modules list */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {courseModules.map((module) => (
              <div
                key={module.id}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() =>
                    setActiveModuleId(
                      activeModuleId === module.id ? null : module.id
                    )
                  }
                  className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-sm text-gray-800">
                    {module.title}
                  </span>
                  {activeModuleId === module.id ? (
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  )}
                </button>

                {activeModuleId === module.id &&
                  (module.lessons.length > 0 ? (
                    <div>
                      {module.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          onClick={() => navigateToLesson(lesson)}
                          className={`px-4 py-2 cursor-pointer flex justify-between items-center ${
                            lesson.id === currentLesson.id
                              ? "bg-blue-50 border-l-4 border-blue-600"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          <div>
                            <p
                              className={`text-sm ${
                                lesson.id === currentLesson.id
                                  ? "font-medium text-blue-800"
                                  : "text-gray-700"
                              }`}
                            >
                              {lesson.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">
                              VIDEO · {lesson.duration}
                            </p>
                          </div>
                          <div>
                            {(watched[lesson.id] || 0) >= 95 ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : (
                              <PlayCircle className="w-5 h-5 text-gray-400 opacity-80" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="px-4 py-2 text-sm text-gray-500">
                      No lessons available for this module yet.
                    </p>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
