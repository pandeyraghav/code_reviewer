import React, { useRef } from "react";
import "./review.css";
import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import "highlight.js/styles/github-dark.css";
import prism from "prismjs";
import axios from "axios";
import Nav from "../../components/topnav/Nav";
import Footer from "../../components/footer/Footer";
import CodeArea from "../../components/codeArea/CodeArea";
import ReviewArea from "../../components/reviewArea/ReviewArea";
const ReviewPage = () => {
  const [review, setReview] = useState("Review Will be shown here: ");
  const [code, setcode] = useState(``);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const reviewCode = async () => {
    setLoading(true); 
    setReview("Let's See");

    let dots = 0;
    const interval = setInterval(() => {
      dots = (dots + 1) % 8;
      setReview(`Reviewing${".".repeat(dots)}`);
    }, 1000);

    try {
      const response = await axios.post("http://localhost:3000/ai/review/", {
        code,
      });
      clearInterval(interval); 
      setReview(response.data);
    } catch (error) {
      clearInterval(interval);
      setReview("Failed to get review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav />
      <main>
        <div className="left">
          <CodeArea code={code} setcode={setcode} />
          <div
            onClick={() => {
              if (!loading) {
                reviewCode();
              }
            }}
            className={`review-btn ${loading ? "disable" : ""}`}
          >
            {loading ? "Reviewing.." : "Review"}
          </div>
        </div>
        <div id="right" className="right">
          <ReviewArea loading={loading} review={review} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ReviewPage;
