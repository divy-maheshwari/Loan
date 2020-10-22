import React,{useState} from 'react';
import axios from 'axios';

const  App = () => {


    const {firstName,setFirstName} = useState("");
    const {lastName,setlastName} = useState("");
    const {email,setEmail} = useState("");
    const {status,setStatus} = useState("");
    const {number,setNumber} = useState("");
    const {street1,setStreet1} = useState("");
    const {street2,setStreet2} = useState("");
    const {city,setCity} = useState("");
    const {state,setState} = useState("");
    const {postal,setPostal} = useState("");
    const {present,setPresent} = useState("");
    const {occupation,setOccupation} = useState("");
    const {income,setIncome} = useState("");
    const {rent,setRent} = useState("");
    const {comment,setComment} = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/form",{firstName,lastName,email,state,status,number,street1,street2,rent,city,postal,present,income,occupation,comment})
                             .then(res => {
                                 console.log("detail added");
                             })
                             .catch(err => {
                                 console.log(err);
                             })
    }

  return (
    <div>


<div class="modal fade" id="step1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Step 1</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="container"> <div class=" text-center mt-5 ">
        <h1>All details are mandatory</h1>
    </div>
    <div class="row ">
                    <div class="container">
                        <form id="contact-form" role="form">
                            <div class="controls">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_name">Firstname *</label> <input id="form_name" type="text" onChange={e => {setFirstName(e.target.value)}} name="firstname" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."></input> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_lastname">Lastname *</label> <input id="form_lastname" type="text" onChange={e => {setlastName(e.target.value)}} name="lastname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."></input> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_email">Email *</label> <input id="form_email" type="email" onChange={e => {setEmail(e.target.value)}} name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."></input> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_need">Marital Status *</label> <select id="form_need" name="status" onChange={e => {setStatus(e.target.value)}} class="form-control" required="required" data-error="Please specify your need.">
                                                <option value="" selected disabled>--Select--</option>
                                                <option>Single</option>
                                                <option>Married</option>
                                                <option>Other</option>
                                            </select> </div>
                                            </div>
                                </div>
                                <div class="row">
                                            <div class="col-6">
                                        <div class="form-group"> <label for="form_email">Phone No. *</label> <input id="form_email" type="text" onChange={e => {setNumber(e.target.value)}} name="phone" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."></input> </div>
                                    </div>
                                            </div>
                            </div>
                        </form>
                    </div> 
    </div>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-dismiss="modal" data-target="#step2">Next</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="step2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Step 2</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="container"> <div class=" text-center mt-5 ">
        <h1>Address</h1>
    </div>
    <div class="row ">
                    <div class="container">
                        <form id="contact-form" role="form">
                            <div class="controls">
                            <div class="row">
                            <div class="col-12">
                                        <div class="form-group"> <label for="form_name">Street Address *</label> <input id="form_name" type="text" onChange={e => {setStreet1(e.target.value)}} name="street1" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."></input> </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group"> <label for="form_name">Street Address line2 *</label> <input id="form_name" type="text" onChange={e => {setStreet2(e.target.value)}} name="street2" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."></input> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_name">City *</label> <input id="form_name" type="text" onChange={e => {setCity(e.target.value)}} name="city" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."></input> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_name">State *</label> <input id="form_name" type="text" onChange={e => {setState(e.target.value)}} name="state" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."></input> </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group"> <label for="form_name">Postal/zip code *</label> <input id="form_name" type="text" onChange={e => {setPostal(e.target.value)}} name="postal" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."></input> </div>
                                    </div>
                                    </div>
                                    </div>
                                    </form>
                                    </div>
                                    </div>
                                    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-toggle="modal" data-dismiss="modal" data-target="#step1">Back</button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-dismiss="modal" data-target="#step3">Next</button>
      </div>
    </div>
  </div>
</div>




<div class="modal fade" id="step3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Step 3</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="container"> <div class=" text-center mt-5 ">
        <h1>Employment Information</h1>
    </div>
    <div class="row ">
                    <div class="container">
                        <form id="contact-form" role="form">
                            <div class="controls">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_name">present Employer *</label> <input id="form_name" type="text" onChange={e => {setPresent(e.target.value)}} name="present" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."></input> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_lastname">Occupation *</label> <input id="form_lastname" type="text" onChange={e => {setOccupation(e.target.value)}} name="occupation" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."></input> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_email">Gross monthly income *</label> <input id="form_email" type="email" onChange={e => {setIncome(e.target.value)}} name="income" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."></input> </div>
                                    </div>
                                    <div class="col-md-6">
                                    <div class="form-group"> <label for="form_email">Monthly rent/mortgage *</label> <input id="form_email" type="email" onChange={e => {setRent(e.target.value)}} name="rent" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."></input> </div>
                                </div>
                            </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group"> <label for="form_email">Comment *</label> <textarea id="form_email" onChange={e => {setComment(e.target.value)}} name="comment" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."></textarea> </div>
                                    </div>
                                    </div>
                                    </div>
                                    </form>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-toggle="modal" data-dismiss="modal" data-target="#step2">Back</button>
        <button type="button" class="btn btn-success" data-dismiss="modal"  onClick={e => submitHandler(e)}>Submit</button>
      </div>
    </div>
  </div>
</div>




<nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="/"><img src="./images/logo.png"></img></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Service</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Team</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Connect</a>
                </li>
            </ul>
        </div>
    </div>
</nav>


<div id="slides" class="carousel slide" data-ride="carousel">
    <ul class="carousel-indicators">
        <li data-target="#slides" data-slide-to="0" className="active" ></li>
        <li data-target="#slides" data-slide-to="1" ></li>
        <li data-target="#slides" data-slide-to="2"></li>
    </ul>
    <div class="carousel-inner">
    <div class="carousel-item active">
            <img src="./images/mac.png"></img>
            <div class="carousel-caption" >
                <h1 class="display-2">Home Loan</h1>
                <h3>Website Layout</h3>
                <button class="btn btn-outline-light btn-lg" data-toggle="modal" data-target="#step1" >Fill details</button>
        </div>
        </div>
        <div class="carousel-item ">
            <img src="./images/realtor-client-shaking-hands.jpg"></img>
            <div class="carousel-caption" style={{color:"grey"}}>
                <h1 class="display-2">Home Loan</h1>
                <h3>Website Layout</h3>
                <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#step1">Fill details</button>
            </div>
        </div>
        <div class="carousel-item">
            <img src="./images/background.png"></img>
            <div class="carousel-caption">
                <h1 class="display-2">Home Loan</h1>
                <h3>Website Layout</h3>
                <button class="btn btn-outline-light btn-lg" data-toggle="modal" data-target="#step1">Fill details</button>
        </div>
    </div>
</div>
</div>


<div class="container-fluid padding">
    <div class="text-center welcome row">
        <div class="col-12">
            <h1 class="display-4">How it Works</h1>
        </div>
        <hr></hr>
        <div class="col-12">
            <p class="lead">We provide online instant cash loans with quick approval that suit your term</p>
        </div>
</div>
</div>


<div class="container-fluid padding">
    <div class="row text-center padding">
        <div class="col-xs-12 col-sm-6 col-md-4">
            <i class="fas fa-code"></i>
            <h1>Apply for loan</h1>
            <p>We will customize a loan based on the amount of cash your company need term</p>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
            <i class="fas fa-bold"></i>
            <h1>Application review</h1>
            <p>We will customize a loan based on the amount of cash your company need term</p>
        </div>
        <div class="col-sm-12 col-md-4">
            <i class="fab fa-css3"></i>
            <h1>Get funding fast</h1>
            <p>We will customize a loan based on the amount of cash your company need term</p>
        </div>
    </div>
    <hr class="my-4"></hr>
</div>


<div class="container-fluid padding">
    <div class="padding row">
        <div class="col-lg-6">
            <h1 class="display-4">Why Choose Us?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ol>
              <li>Loans with quick approval.</li><br></br>
              <li>Customize a loan based on the amount.</li><br></br>
              <li>Good credit profile and you have built your loan.</li><br></br>
              <li>We provide online instant cash loans.</li><br></br>
            </ol>
            <button type="button" class="btn btn-primary btn-lg">learn more</button>
        </div>
        <div class="col-lg-6">
            <img src="./images/desk.png" class="img-fluid"></img>
        </div>
    </div>
</div>
<hr class="my-4"></hr>

<figure>
        <div id="fixed">
        </div>
</figure>


  
<div class="container-fluid padding">
    <div class="row text-center welcome">
        <div class="col-12">
        <h1 class="display-4">Meet The Team</h1>
        </div>
        <hr></hr>
    </div>
</div>

<div class="container-fluid padding">
    <div class="row padding">
        <div class="col-md-4">
            <div class="card">
                <img class="card-img-top" src="./images/emp2.jpg"></img>
                <div class="card-body">
                    <h4 class="card-title">divy</h4>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="/"><button class="btn btn-outline-secondary">See Profile</button></a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img class="card-img-top" src="./images/emp1.jpg"></img>
                <div class="card-body">
                    <h4 class="card-title">rakha</h4>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="/"><button class="btn btn-outline-secondary">See Profile</button></a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img class="card-img-top" src="./images/emp3.jpg"></img>
                <div class="card-body">
                    <h4 class="card-title">swati</h4>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="/"><button class="btn btn-outline-secondary">See Profile</button></a>
                </div>
            </div>
        </div>
    </div>
    <hr class="my-4"></hr>
</div>


<div class="container-fluid padding">
    <div class="padding row">
        <div class="col-lg-6">
            <h1 class="display-4">Home Services</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quidem corrupti aut incidunt vero dolores dolore accusantium eligendi. Mollitia placeat animi ex voluptatem eveniet sed consequuntur, eaque ducimus enim aliquam.</p>
            <br></br>
        </div>
        <div class="col-lg-6">
            <img src="./images/bootstrap2.png" class="img-fluid"></img>
        </div>
    </div>
    <hr class="my-4"></hr>
</div>


<div class="container-fluid padding">
    <div class="row padding text-center">
        <div class="col-12">
            <h2>Connect</h2>
        </div>
        <div class="col-12 social padding">
            <a href="/"><i class="fab fa-google-plus-g"></i></a>
            <a href="/"><i class="fab fa-instagram"></i></a>
            <a href="/"><i class="fab fa-facebook"></i></a>
            <a href="/"><i class="fab fa-twitter"></i></a>
            <a href="/"><i class="fab fa-youtube"></i></a>
        </div>
    </div>
</div>


<footer>
<div class="container-fluid padding">
    <div class="row padding text-center">
        <div class="col-md-4">
            <img src="./images/log.png"></img>
            <hr class="light"></hr>
            <p>555-555-555</p>
            <p>100 street name</p>
            <p>city,state,0000</p>
        </div>
        <div class="col-md-4">
            <hr class="light"></hr>
            <p>our hours</p>
            <hr class="light"></hr>
            <p>monday 9 to 6</p>
            <p>saturday 10 to 3</p>
            <p>sunday closed</p>
        </div>
        <div class="col-md-4">
            <hr class="light"></hr>
            <p>service areas</p>
            <hr class="light"></hr>
            <p>city 0000</p>
            <p>city 0000</p>
            <p>city 0000</p>
        </div>
        <div class="col-12">
            <hr class="light"></hr>
            <h5>&copy; DIVY</h5>
        </div>
    </div>
</div>
</footer>
    </div>
  )
}

export default App;