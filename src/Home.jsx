import React from "react";

function Home() {
  return (
    <div className="p-4 shadow-sm rounded bg-light">
      <h1 className="display-4 text-primary">Welcome to Edupoly</h1>
      <p className="lead">Your gateway to mastering modern web technologies.</p>
      <hr />
      <h3>Our Expertise</h3>
      <p>
        We specialize in Full Stack Development training, helping students
        bridge the gap between academia and industry requirements with hands-on
        projects and expert mentorship.
      </p>
      <button className="btn btn-primary">Explore Courses</button>
    </div>
  );
}

export default Home;
