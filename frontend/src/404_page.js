import './404_page.css';


function Error_page() {

  const redirectHome = () => {
    fetch("http://localhost:8000/destinations/").then(response => {
      if (response.ok) {
        window.location.href = "http://localhost:8000/destinations/";
      } else {
        console.error("Unable to find homepage");
      }
    })
    .catch(error => {
      console.error("Error" , error);
    });
  };

  return (
    <div>
      <div id="stars"></div>
      <div id="star2"></div>
      <div id="stars3"></div>
      <div id="title">
        <span>LOOKS LIKE YOU LOVE TO WANDER MATE !!!</span><br /><br />
        <span>BUT I THINK YOU ARE A BIT LOST HERE !!</span><br /><br />
        <h3><span>THIS IS ONLY A 404 PAGE</span></h3>
        <p> THE RESOURCE YOU ARE LOOKING FOR HAS EITHER MOVED TO DIFFERENT PLACE <br /> OR IS TEMPERORILY UNAVAILABLE. MAYBE NEXT TIME PAL !!!!</p>
        <button onClick={redirectHome}><a><b>BACK TO HOME PAGE </b></a></button>
      </div>
    </div>
  );
}

export default Error_page;
