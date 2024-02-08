import React, { useState, useEffect } from "react";

interface CourseAvailabilityTimerProps {
  courseStartDate: Date;
}

const CourseAvailabilityTimer: React.FC<CourseAvailabilityTimerProps> = ({
  courseStartDate,
}) => {
  const [remainingTime, setRemainingTime] = useState<number>(() =>
    calculateRemainingTime(courseStartDate)
  );

  useEffect(() => {
    const storedRemainingTime = localStorage.getItem("remainingTime");

    if (storedRemainingTime) {
      setRemainingTime(Number(storedRemainingTime));
    }

    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        const newRemainingTime = Math.max(0, prevRemainingTime - 1);
        localStorage.setItem("remainingTime", String(newRemainingTime));
        return newRemainingTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [courseStartDate]);

  function calculateRemainingTime(startDate: Date): number {
    const currentDate = new Date();
    const timeDifference = startDate.getTime() - currentDate.getTime();
    return Math.max(0, Math.floor(timeDifference / 1000));
  }

  function formatTime(seconds: number): string {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${days} days, ${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds`;
  }

  return (
    <div>
      {remainingTime > 0 ? (
        <h2 className=" text-textPrimary text-[16px]">
          {formatTime(remainingTime)}
        </h2>
      ) : (
        <h2>Course is no longer available.</h2>
      )}
    </div>
  );
};

export default CourseAvailabilityTimer;
