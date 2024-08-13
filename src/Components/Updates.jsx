import React, { useState, useEffect } from "react";
import axios from "axios";

function Update({setUpdate}) {
  const [commits, setCommits] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/AnkurOtaku/Youtube-Clone/commits"
        );

        setCommits(response.data);
      } catch (error) {
        setError(error);
      }
    };

    // Fetch commits on component mount
    fetchCommits();

    // Poll for new commits every 60 seconds
    const interval = setInterval(fetchCommits, 60000);

    // Clean up interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return console.log(error.message);
  }

  return (
      <div
        className="fixed inset-0 backdrop-blur-md text-black"
        style={{
          pointerEvents: "auto",
          userSelect: "auto",
        }}
      >
        <div
          className={
            "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-lg p-4 bg-white rounded-lg shadow-md transition-transform"
          }
        >
          <button
            className="absolute -right-4 -top-4 px-4 py-2 bg-red-600 text-white rounded"
            onClick={()=>{setUpdate(false)}}
          >
            X
          </button>
          <div className="mb-3">
            <h2 className="text-xl font-bold">Updates</h2>
          </div>
          <hr />
          <div className="mt-3">
            {error ? (
              <div>
                Error fetching updates. Try again later or
                <a
                  className=" rounded-full m-1 p-2 bg-black text-yellow-500 no-underline font-semibold"
                  href="https://www.instagram.com/ankurotaku/"
                >
                  Contact Developer
                </a>
              </div>
            ) : (
              <ul className=" max-h-80 overflow-x-hidden scroll-smooth">
                {commits.map((commit, index) => (
                  <li
                    className="m-1 p-2 w-full rounded-lg capitalize hover:bg-slate-200"
                    key={commit.sha}
                  >
                    {commit.commit.message}
                    <br />
                    <small>
                      {new Date(commit.commit.author.date).toLocaleString()}
                    </small>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    
  );
}

export default Update;