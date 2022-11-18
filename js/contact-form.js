document.addEventListener("DOMContentLoaded", function(){
    //create the form
    var form = "";
    form = `<form class="contact-form" action="mailto:20066106@tafe.wa.edu.au" method="post" enctype="multipart/form-data" name="emailform">
                <label class="contact-label" for="fname">First name:</label>
                <input class="contact-input" type="text" id="fname" name="fname">
                <label class="contact-label" for="lname">Last name:</label>
                <input class="contact-input" type="text" id="lname" name="lname">
                <label class="contact-label" for="email">Email:</label>
                <input class="contact-input" type="email" id="email" name="email" autocomplete="off">
                <label class="contact-label" for="enquiry">Details of enquiry:</label>
                <textarea class="contact-text" id="enquiry" name="enquiry"></textarea>
                <input class="contact-button" type="submit" value="Enquire">
            </form>`;

    //get the page html where the form will go
    const formarea = document.getElementById("form-area");

    //put the form into the html tag
    formarea.innerHTML = form;
  });