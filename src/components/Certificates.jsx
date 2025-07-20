import React from "react";
import "./img.css";

const certificatesData = [
  {
    title: "React Developer Certificate",
    issuer: "Meta",
    image: "apshce.jpeg",
    link: "https://www.linkedin.com/in/your-profile",
  },
  {
    title: "Java Programming",
    issuer: "HackerRank",
    image: "apssdc.png",
    link: "https://www.hackerrank.com/your-cert-link",
  },
  {
    title: "Java Programming",
    issuer: "HackerRank",
    image: "bharat.png",
    link: "https://www.hackerrank.com/your-cert-link",
  },
  {
    title: "Java Programming",
    issuer: "HackerRank",
    image: "cipher.png",
    link: "https://www.hackerrank.com/your-cert-link",
  },
  {
    title: "Java Programming",
    issuer: "HackerRank",
    image: "edx.png",
    link: "https://www.hackerrank.com/your-cert-link",
  },
  {
    title: "Java Programming",
    issuer: "HackerRank",
    image: "ibm.png",
    link: "https://www.hackerrank.com/your-cert-link",
  },
  {
    title: "Java Programming",
    issuer: "HackerRank",
    image: "ibm2.png",
    link: "https://www.hackerrank.com/your-cert-link",
  },
  {
    title: "Java Programming",
    issuer: "HackerRank",
    image: "microsoft.png",
    link: "https://www.hackerrank.com/your-cert-link",
  },
  {
    title: "Java Programming",
    issuer: "HackerRank",
    image: "microsoft2.png",
    link: "https://www.hackerrank.com/your-cert-link",
  },
  {
    title: "Java Programming",
    issuer: "HackerRank",
    image: "tcs.png",
    link: "https://www.hackerrank.com/your-cert-link",
  },
  {
    title: "Java Programming",
    issuer: "HackerRank",
    image: "workshop.png",
    link: "https://www.hackerrank.com/your-cert-link",
  },
];

function Certificates() {
  return (
    <div className="certificates-container">
      
      <div className="certificates-grid">
        {certificatesData.map((cert, index) => (
          <div key={index} className="certificate-card">
            <img
              src={`/images/${cert.image}`}
              alt={cert.title}
              className="certificate-image"
            />
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
