import React, { useState, useEffect } from "react";

interface CourseAvailabilityTimerProps {
  courseStartDate: Date; // Replace with the actual start date of your course
}

const CourseAvailabilityTimer: React.FC<CourseAvailabilityTimerProps> = ({
  courseStartDate,
}) => {
  const [remainingTime, setRemainingTime] = useState<number>(
    calculateRemainingTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  function calculateRemainingTime(): number {
    const currentDate = new Date();
    const timeDifference = courseStartDate.getTime() - currentDate.getTime();

    // Calculate remaining time in seconds
    const remainingSeconds = Math.floor(timeDifference / 1000);

    return remainingSeconds;
  }

  function formatTime(seconds: number): string {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${days} days, ${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds`;
  }

  return (
    <div className=" text-textPrimary text-[16px]">
      {remainingTime > 0 ? (
        <h2>{formatTime(remainingTime)}</h2>
      ) : (
        <h2>Course is no longer available.</h2>
      )}
    </div>
  );
};

export default CourseAvailabilityTimer;
