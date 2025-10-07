
window.addEventListener("DOMContentLoaded",function(){
    let count=0;
    let arr=[];
    document.getElementById("registerAnimal").addEventListener("click",function(event){
        event.preventDefault();
        const animalsNameDataEl=document.getElementById("animalsName").value;
        const animalsTypeDataEl= document.getElementById("animalsType").value;
        const breedsDataEl = document.getElementById("breeds").value;
        const agesDataEl = document.getElementById("ages").value;
        const medicalHistoryEl = document.getElementById("medicalHistory").value;

        if (!animalsNameDataEl || !animalsTypeDataEl || !breedsDataEl || !agesDataEl || !medicalHistoryEl) {
            alert("Please fill in all required fields!");
            return;
        }
        let obj={
            name:animalsNameDataEl,
            type:animalsTypeDataEl
        }
        //code for checking the duplicate entries....
        if(arr.length>0){
            for(let i=0;i<arr.length;i++){
                if(arr[i].name==animalsNameDataEl && arr[i].type== animalsTypeDataEl ){
                    alert("Duplicate Data Entered !!");
                    return;
                }
            }
        }
        arr.push(obj);


        const blockEl=document.createElement("div");
        blockEl.id="block";

        // code for row 1 element....


        const animalRow1El= document.createElement("div");
        animalRow1El.id="animalRow1";

        const animalDataEl = document.createElement("div");
        animalDataEl.id="animalData";

        const animalNameEl = document.createElement("div");
        animalNameEl.id="animalName";

        const animalNameTextNode=document.createTextNode(animalsNameDataEl);
        animalNameEl.appendChild(animalNameTextNode);

        const subdataEl=document.createElement("div");
        subdataEl.id="subdata";

        const animalTypeEl = document.createElement("div");
        animalTypeEl.className="animalType";

        const animalTypeTextNode = document.createTextNode(animalsTypeDataEl);
        animalTypeEl.appendChild(animalTypeTextNode);

        const animalBreedEL= document.createElement("div");
        animalBreedEL.id="animalBreed";

        const iEl=document.createElement("i");
        iEl.className="fa-solid fa-circle";

        const animalBreedTextNode = document.createTextNode(breedsDataEl);
        animalBreedEL.appendChild(iEl);
        animalBreedEL.appendChild(animalBreedTextNode);

        subdataEl.appendChild(animalTypeEl);
        subdataEl.appendChild(animalBreedEL);

        animalDataEl.appendChild(animalNameEl);
        animalDataEl.appendChild(subdataEl);

        const healthConditionEl = document.createElement("div");
        healthConditionEl.id="healthCondition";

        const buttonEl = document.createElement("button");

        buttonEl.appendChild(document.createTextNode("healthy"));

        healthConditionEl.appendChild(buttonEl);

        animalRow1El.appendChild(animalDataEl);
        animalRow1El.appendChild(healthConditionEl);

        // Code for Row1 Element ends here...

        // code for row2 element Startsh....

        const animalRow2El = document.createElement("div");
        animalRow2El.id="animalRow2";

        // part 1 code
        const part1EL = document.createElement("div");
        part1EL.id = "part1";

        const iEl2 = document.createElement("i");
        iEl2.className = "fa-solid fa-calendar";

        const data1El = document.createElement("div");
        data1El.className = "data";

        const commonHeading1El = document.createElement("div");
        commonHeading1El.className = "commonHeading";

        commonHeading1El.appendChild(document.createTextNode("Age"));

        const ageEl = document.createElement("div");
        ageEl.id = "age";
        ageEl.appendChild(document.createTextNode(agesDataEl));

        data1El.appendChild(commonHeading1El);
        data1El.appendChild(ageEl);

        part1EL.appendChild(iEl2);
        part1EL.appendChild(data1El);


        // part 2 code
        const part2EL = document.createElement("div");
        part2EL.id = "part2";

        const iEl3 = document.createElement("i");
        iEl3.className = "fa-solid fa-heart-pulse";

        const data2El = document.createElement("div");
        data2El.className = "data";

        const commonHeading2El = document.createElement("div");
        commonHeading2El.className = "commonHeading";

        commonHeading2El.appendChild(document.createTextNode("Last Vaccination"));

        const vaccinatedOnEl = document.createElement("div");
        vaccinatedOnEl.id = "vaccinatedOn";
        vaccinatedOnEl.appendChild(document.createTextNode("Not recorded"));

        data2El.appendChild(commonHeading2El);
        data2El.appendChild(vaccinatedOnEl);

        part2EL.appendChild(iEl3);
        part2EL.appendChild(data2El);



        // part 3 code
        const part3EL = document.createElement("div");
        part3EL.id = "part3";

        const iEl4 = document.createElement("i");
        iEl4.className = "fa-solid fa-location-dot";

        const data3El = document.createElement("div");
        data3El.className = "data";

        const commonHeading3El = document.createElement("div");
        commonHeading3El.className = "commonHeading";

        commonHeading3El.appendChild(document.createTextNode("Next Due"));

        const vaccinationDueOnEl = document.createElement("div");
        vaccinationDueOnEl.id = "vaccinationDueOn";
        vaccinationDueOnEl.appendChild(document.createTextNode("Schedule needed"));

        data3El.appendChild(commonHeading3El);
        data3El.appendChild(vaccinationDueOnEl);

        part3EL.appendChild(iEl4);
        part3EL.appendChild(data3El);


        // Now adding all the parts of Row2

        animalRow2El.appendChild(part1EL);
        animalRow2El.appendChild(part2EL);
        animalRow2El.appendChild(part3EL);



        // Code to enter the animal row3 elements...
        const animalRow3El = document.createElement("div");
        animalRow3El.id="animalRow3";

        const btnn1El = document.createElement("button");
        btnn1El.id="btnn1";

        const a1El= document.createElement("a");
        a1El.href="home";
        a1El.appendChild(document.createTextNode("view details"));

        btnn1El.appendChild(a1El);

        const btnn2El = document.createElement("button");
        btnn2El.id="btnn2";

        const a2El= document.createElement("a");
        a2El.href="home";
        a2El.appendChild(document.createTextNode("Schedule vaccination"));

        btnn2El.appendChild(a2El);

        animalRow3El.appendChild(btnn1El);
        animalRow3El.appendChild(btnn2El);


        // Code to combine all the animal rows....
        blockEl.appendChild(animalRow1El);
        blockEl.appendChild(animalRow2El);
        blockEl.appendChild(animalRow3El);

        // document.getElementById("result_displayDatacomehere").textContent(blockEl);
        // // document.body.appendChild(blockEl); 

        const resultContainerEl = document.getElementById("result_displayDatacomehere");
        const resultDisplayMainContentEl = document.getElementById("resultDisplayMainContent");

        
        

        if(count==0){
            resultDisplayMainContentEl.removeChild(resultContainerEl);  
            resultDisplayMainContentEl.appendChild(blockEl); 
            count++;
        }
        else{resultDisplayMainContentEl.appendChild(blockEl); }
        



        // const medicalInfoDetailsEl = document.getElementById("medicalInfoDetails");
        // medicalInfoDetailsEl.innerHTML=medicalHistoryEl;





        // Vaccination track section here....

        // Create the outer div with class "animal-card"
        const animalCardEl = document.createElement("div");
        animalCardEl.className = "animal-card";

        // Create the animal-info div
        const animalInfoEl = document.createElement("div");
        animalInfoEl.className = "animal-info";

        // Create the icon div with id "animal-infoIcon"
        const animalInfoIconEl = document.createElement("div");
        animalInfoIconEl.id = "animal-infoIcon";

        // Create the <i> tag for the icon
        const iconEl = document.createElement("i");
        iconEl.className = "fa-solid fa-circle-exclamation";
        animalInfoIconEl.appendChild(iconEl);

        // Create the "info" div
        const infoEl = document.createElement("div");
        infoEl.className = "info";

        // Create the span for animal name and type
        const animalsNameEl = document.createElement("span");
        animalsNameEl.innerHTML = `<strong>${animalsNameDataEl}</strong> (${animalsTypeDataEl})`;  // You can replace 'Bella' and 'Cow' dynamically

        // Create the medicalInfoDetails div
        const medicalInfoDetailsEl = document.createElement("div");
        medicalInfoDetailsEl.id = "medicalInfoDetails";
        medicalInfoDetailsEl.textContent = medicalHistoryEl ;  // Default text, can be dynamically changed

        // Create the dateSchedulingInfo div
        const dateSchedulingInfoEl = document.createElement("div");
        dateSchedulingInfoEl.id = "dateSchedulingInfo";

        // Create the Last/Next vaccination span elements
        const lastInfoEl = document.createElement("span");
        lastInfoEl.innerHTML = "Last: <strong>No records</strong>";

        const nextInfoEl = document.createElement("span");
        nextInfoEl.innerHTML = "Next: <strong>Schedule needed</strong>";

        // Append the spans to dateSchedulingInfo
        dateSchedulingInfoEl.appendChild(lastInfoEl);
        dateSchedulingInfoEl.appendChild(nextInfoEl);

        // Append all elements to the "info" div
        infoEl.appendChild(animalsNameEl);
        infoEl.appendChild(medicalInfoDetailsEl);
        infoEl.appendChild(dateSchedulingInfoEl);

        // Append the "animal-info" div to the animal card
        animalInfoEl.appendChild(animalInfoIconEl);
        animalInfoEl.appendChild(infoEl);

        // Create the status div
        const statusEl = document.createElement("div");
        statusEl.className = "status";

        // Create the due label
        const dueLabelEl = document.createElement("span");
        dueLabelEl.className = "due-label";
        dueLabelEl.textContent = "due";

        // Create the schedule button
        const scheduleBtnEl = document.createElement("button");
        scheduleBtnEl.className = "schedule-btn";
        scheduleBtnEl.textContent = "Schedule";

        // Append due label and button to the status div
        statusEl.appendChild(dueLabelEl);
        statusEl.appendChild(scheduleBtnEl);

        // Append the status div to the animal card
        animalCardEl.appendChild(animalInfoEl);
        animalCardEl.appendChild(statusEl);

        document.getElementById("connectedResult").appendChild(animalCardEl);

    });


})

