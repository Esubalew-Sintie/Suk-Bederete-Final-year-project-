import React, { useState } from 'react';

const ProgressBar = ({ length }) => {
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    const newProgress = (progress + 1) % (length + 1);
    setProgress(newProgress);
  };

  // Call the `updateProgress` function periodically to simulate progress updates
  // You can replace this with your actual logic to update the progress

  // For example, if you have a function that updates the progress based on the length
  // you can call it in a useEffect hook or based on some user action

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     updateProgress();
  //   }, 1000);
  //
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <div>
      <progress value={progress} max={length} />
      <span>{`${progress}/${length}`}</span>
    </div>
  );
};

export default ProgressBar;