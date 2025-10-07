window.addEventListener("DOMContentLoaded",function(){
  document.querySelectorAll(".bv-vet-card").forEach(card => {
      card.addEventListener("click", () => {
        const doctorName = card.querySelector(".bv-vet-name").textContent;
        const doctorDisplayEl = document.getElementById("bv-disabled-field");

        //border style on selecting
        card.style.border = "3px solid #4caf50";
        card.style.boxShadow = "0 0 10px 2px rgba(76, 175, 80, 0.6)";

        //button was disabled now abled on selection
        document.getElementById("bv-btn").disabled = false;

        doctorDisplayEl.className = "newstyle";
        doctorDisplayEl.textContent=doctorName;
        
      });
    });


    // values for displaying the alert of appointment fix...
        // confirmation button codee was here...
        const confirmBookingBtn = document.getElementById("bv-btn");
        confirmBookingBtn.addEventListener("click",(event)=>{
          event.preventDefault();
          const doctorName = document.getElementById("bv-disabled-field").textContent;
          const animalNameforAppoinEl = document.getElementById("animalNameforAppoin").value;
          const animalHealthConditionofAppoinEl = document.getElementById("animalHealthConditionofAppoin").value;
          const dateSelectedforAppoinEl = document.getElementById("dateSelectedforAppoin").value;
          const timeSelectedforAppoinEl = document.getElementById("timeSelectedforAppoin").value;
          alert("Appointment Fixed Successfully !!");
          


          // we can add our details related to the appointment in the below section....
          // appointment is fixed and data is visible here when the confirmation button is clicked...
          const bookingsectionEL = document.querySelector(".booking-section");
          const bookingcardEl = document.createElement("div")
          bookingcardEl.className="booking-card";
          const bookinginfoEl = document.createElement("div")
          bookinginfoEl.className="booking-info";

          const confirmationDocNameEl = document.createElement('strong');
          confirmationDocNameEl.id="confirmationDocName";

          const textnodeconfirmationDocNameEl = document.createTextNode(doctorName) ;
          confirmationDocNameEl.appendChild(textnodeconfirmationDocNameEl);

          const completeDetailsofAppointmentEl = document.createElement('p') ;
          completeDetailsofAppointmentEl.id="completeDetailsofAppointment";

          completeDetailsofAppointmentEl.appendChild(document.createTextNode(`(${animalNameforAppoinEl})  • ${animalHealthConditionofAppoinEl} • ${dateSelectedforAppoinEl} at ${timeSelectedforAppoinEl}`))
          bookinginfoEl.appendChild(confirmationDocNameEl);
          bookinginfoEl.appendChild(completeDetailsofAppointmentEl);


          const badgeStatusEl = document.createElement('span') ;
          badgeStatusEl.className="badge upcoming";

          badgeStatusEl.appendChild(document.createTextNode("Upcoming"));

          bookingcardEl.appendChild(bookinginfoEl);
          bookingcardEl.appendChild(badgeStatusEl);

          
          //Child being appended.....
          bookingsectionEL.appendChild(bookingcardEl);

        })






    // email sms enabling elements....

    const emailEl = document.createElement("input");
    emailEl.type = "email";
    emailEl.placeholder = "abc@gmail.com";
    emailEl.id = "email_entryEl";

    const smsEl = document.createElement("input");
    smsEl.type = "tel";
    smsEl.placeholder = "80XXXXXXX3";
    smsEl.id="sms_entryEl";

    document.getElementById("enable").addEventListener("click",function(){
        const button = document.getElementById("enable");
        button.before(emailEl);

        // emailEl.value contains the value of the field


        // this is the code for the enter being pressed...
        emailEl.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                alert("Email Entered Successfully!!");
                
                
            }
        });
    })

    document.getElementById("setup").addEventListener("click",function(){
      const button = document.getElementById("setup");
        button.before(smsEl);

        // smsEl.value contains the mobile Number

        smsEl.addEventListener("keydown",function(event){
          if(event.key === "Enter"){
            alert("Number Added Successfully !!!");

          }
        })
    })


})