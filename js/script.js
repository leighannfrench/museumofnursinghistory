const addSr = () => {
    document.querySelector("#cart").innerHTML += "<p> Senior Admission 13.99 <p>";
  }
  document.querySelector("#senior").addEventListener("click", addSr);
  const addStu = () => {
    document.querySelector("#cart").innerHTML += "<p> Student Admission 14.99 <p>";
  }
  document.querySelector("#student").addEventListener("click", addStu);
  const addAd = () => {
    document.querySelector("#cart").innerHTML += "<p> Adult Admission 17.99 <p>";
  }
  document.querySelector("#adult").addEventListener("click", addAd);
  const addChi = () => {
    document.querySelector("#cart").innerHTML += "<p> Child Admission 5.99 <p>";
  }
  document.querySelector("#child").addEventListener("click", addChi);