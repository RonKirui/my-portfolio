interface homeProps {
  name: String;
  image: string;
}
function Home({ name, image }: homeProps) {
  return (
    <div className="d-flex justify-content-evenly justify-content-center align-items-center vh-100">
      <div>
        <h5 className="greeting"> Hi, my name is</h5>
        <h1>{name}</h1>
        <h2>Software Developer</h2>
        <h6>
          I am Softawre developer with a strong focus on building high-quality,
          scalable, and visually engaging applications. My expertise spans
          front-end and back-end development, using tools such as React, Java,
          Spring Boot, and Firebase.
        </h6>

        <button type="button" className="btn btn-outline-success">
          View My Work
        </button>
      </div>
      <div className="col-2 col-lg-4 text-center mb-4 mb-lg-0 rounded-circle shadow">
        <img src={image} className="img-fluid" alt="..."></img>
      </div>
    </div>
  );
}
export default Home;
