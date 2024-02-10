document.addEventListener("DOMContentLoaded", function () {

    var positionDisp = document.getElementById("input11");
    positionDisp.textContent = ` ${ localStorage.getItem("input1")}`;

    // var temppp = localStorage.getItem("input1");
    // console.log(temppp);

    positionDisp = document.getElementById("input22");
    positionDisp.textContent = ` ${ localStorage.getItem("input2")}`;

    positionDisp = document.getElementById("input33");
    positionDisp.textContent = ` ${ localStorage.getItem("input3")}`;




    const maxMarks = localStorage.getItem("courseTotal");
    console.log(maxMarks);

    const totalMarksArray = JSON.parse(localStorage.getItem("totalMarksArray"));

    


    if (!totalMarksArray || !totalMarksArray.length) {
        console.error("Total marks data not found in local storage.");
        return;
    }

    // Calculate histogram data
    const binWidth = 1; // Adjust as needed

    
    const minMarks = 0;

    const totalMarksRange = maxMarks - minMarks + 1;
    const binCount = Math.ceil(totalMarksRange / binWidth);
    const bins = Array.from({ length: binCount }, (_, i) => minMarks + i * binWidth);
    const histogramData = Array(binCount).fill(0);


    const maxobtmarks = Math.max(...totalMarksArray);

    totalMarksArray.forEach((mark) => {
        const binIndex = Math.floor((mark - minMarks) / binWidth);
        histogramData[binIndex]++;
    });

    // Divide the histogram bars into two colors (red and green)
    const halfBinCount = Math.floor(binCount / 2);
    const backgroundColors = Array(binCount).fill(0);
    // backgroundColors.fill("rgba(255, 0, 0, 0.6)", 0, halfBinCount); // Red
    // backgroundColors.fill("rgba(0, 255, 0, 0.6)", halfBinCount); // Green


    

    // console.log(`The average of the elements in the array is: ${average.toFixed(2)}`);

    // console.log(`The length of the in the array is: ${totalMarksArray.length}`);








    var myElement = document.getElementById('A');

    myElement.style.left = 0.9*maxobtmarks * 100 / maxMarks + '%';


    myElement = document.getElementById('A-');

    myElement.style.left = 0.8*maxobtmarks * 100 / maxMarks + '%';


    myElement = document.getElementById('B');

    myElement.style.left = 0.7*maxobtmarks * 100 / maxMarks + '%';


    myElement = document.getElementById('B-');

    myElement.style.left = 0.6*maxobtmarks * 100 / maxMarks + '%';

    myElement = document.getElementById('C');

    myElement.style.left = 0.5*maxobtmarks * 100 / maxMarks + '%';

    myElement = document.getElementById('C-');

    myElement.style.left = 0.4*maxobtmarks * 100 / maxMarks + '%';

    myElement = document.getElementById('D');

    myElement.style.left = 0.3*maxobtmarks * 100 / maxMarks + '%';

    myElement = document.getElementById('E');

    myElement.style.left = 0.2*maxobtmarks * 100 / maxMarks + '%';





    var threshold =parseInt( 0.9 * maxobtmarks );
    console.log(threshold + " this is the initial threshol value");
    var studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold);

// Get the number of students meeting the criteria
    var numberOfStudentsAboveThreshold = studentsAboveThreshold.length;

    console.log(0.9 * maxobtmarks);

    console.log(`Number of students with marks greater than or equal to 90% of maxobtmarks: ${numberOfStudentsAboveThreshold}`);

    var positionDisplay = document.getElementById("acnt");
    positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;
    var tempo = numberOfStudentsAboveThreshold;

    positionDisplay = document.getElementById("acut");
    positionDisplay.textContent = ` ${threshold}`;




    
    
    
    
    threshold =parseInt( 0.8 * maxobtmarks);
    studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold) ;

    console.log(threshold + " initial a- val ");


    numberOfStudentsAboveThreshold = studentsAboveThreshold.length - tempo;

    
    positionDisplay = document.getElementById("a-cnt");
    positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;

    tempo += numberOfStudentsAboveThreshold;

    positionDisplay = document.getElementById("a-cut");
    positionDisplay.textContent = ` ${threshold}`;


    



    threshold =parseInt( 0.7 * maxobtmarks);
    studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold) ;


    numberOfStudentsAboveThreshold = studentsAboveThreshold.length - tempo;

    
    positionDisplay = document.getElementById("bcnt");
    positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;

    tempo += numberOfStudentsAboveThreshold;

    positionDisplay = document.getElementById("bcut");
    positionDisplay.textContent = ` ${threshold}`;

    
    
    threshold =parseInt( 0.6 * maxobtmarks);
    studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold) ;


    numberOfStudentsAboveThreshold = studentsAboveThreshold.length - tempo;

    
    positionDisplay = document.getElementById("b-cnt");
    positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;

    tempo += numberOfStudentsAboveThreshold;

    positionDisplay = document.getElementById("b-cut");
    positionDisplay.textContent = ` ${threshold}`;



    threshold =parseInt( 0.5 * maxobtmarks);
    studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold) ;


    numberOfStudentsAboveThreshold = studentsAboveThreshold.length - tempo;

    
    positionDisplay = document.getElementById("ccnt");
    positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;

    tempo += numberOfStudentsAboveThreshold;

    positionDisplay = document.getElementById("ccut");
    positionDisplay.textContent = ` ${threshold}`;

    
    
    threshold =parseInt( 0.4 * maxobtmarks);
    studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold) ;


    numberOfStudentsAboveThreshold = studentsAboveThreshold.length - tempo;

    
    positionDisplay = document.getElementById("c-cnt");
    positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;
    
    tempo += numberOfStudentsAboveThreshold;


    positionDisplay = document.getElementById("c-cut");
    positionDisplay.textContent = ` ${threshold}`;
    

    





    threshold =parseInt( 0.3 * maxobtmarks);
    studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold) ;


    numberOfStudentsAboveThreshold = studentsAboveThreshold.length - tempo;

    
    positionDisplay = document.getElementById("dcnt");
    positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;

    tempo += numberOfStudentsAboveThreshold;


    positionDisplay = document.getElementById("dcut");
    positionDisplay.textContent = ` ${threshold}`;


    threshold =parseInt( 0.2 * maxobtmarks);
    studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold) ;


    numberOfStudentsAboveThreshold = studentsAboveThreshold.length - tempo;

    
    positionDisplay = document.getElementById("ecnt");
    positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;

    tempo += numberOfStudentsAboveThreshold;

    positionDisplay = document.getElementById("ecut");
    positionDisplay.textContent = ` ${threshold}`;




    threshold =parseInt( 0 * maxobtmarks);
    studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold) ;


    numberOfStudentsAboveThreshold = studentsAboveThreshold.length - tempo;

    
    positionDisplay = document.getElementById("nccnt");
    positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;

    tempo += numberOfStudentsAboveThreshold;

    positionDisplay = document.getElementById("nccut");
    positionDisplay.textContent = ` ${threshold}`;

    var sumlessthannclim = 0;

    for (let i = 0; i < totalMarksArray.length; i++) {
        if (totalMarksArray[i] < 0.2*maxobtmarks) {
            sumlessthannclim += totalMarksArray[i];
        }
    }
    console.log('sumlessthannclim');
    console.log(sumlessthannclim);

    var sum = totalMarksArray.reduce((acc, currentValue) => acc + currentValue, 0);

// Calculate the average
    var average = (sum - sumlessthannclim) / (totalMarksArray.length-numberOfStudentsAboveThreshold );



    positionDisplay = document.getElementById("avg");
    positionDisplay.textContent = ` ${average.toFixed(2)}`;


    var abvavcnt =0;

    for (let i = 0; i < totalMarksArray.length; i++)
    {
        if(totalMarksArray[i]>=average)
        {
            abvavcnt++;
        }
    }


    positionDisplay = document.getElementById("abvav");
    positionDisplay.textContent = ` ${abvavcnt}`;


    positionDisplay = document.getElementById("belav");
    positionDisplay.textContent = ` ${totalMarksArray.length - abvavcnt}`;
    


    console.log(average.toFixed(2));
    console.log(sum / totalMarksArray.length);
    

    console.log(maxobtmarks);

    


    

    

    
                
    backgroundColors.fill("rgba(221, 25, 62, 0.8)", parseInt(0.9 * maxobtmarks),maxMarks );

    console.log(0.9 * maxobtmarks);

    // const positionDisplay = document.getElementById("positionDisplay");
    // positionDisplay.textContent = `SliderButtonAPosition0: ${sliderButtonAPosition0.toFixed(2)}`;

    

    // const sliderButtonAPosition1 = ( (buttons[1].getBoundingClientRect().left - sliderRect.left) /  sliderRect.width) * 100;
    backgroundColors.fill("rgba(236, 241, 17, 0.8)",parseInt(0.8*maxobtmarks),parseInt(0.9*maxobtmarks) );
    

    // const sliderButtonAPosition2 =( (buttons[2].getBoundingClientRect().left - sliderRect.left) /  sliderRect.width) * 100;
    backgroundColors.fill("rgba(80, 45, 183, 0.8)", parseInt(0.7*maxobtmarks),parseInt(0.8*maxobtmarks) );

    // console.log(parseInt(0.7*maxobtmarks) + " 3rd color starts over here");

    // const sliderButtonAPosition3 = ( (buttons[3].getBoundingClientRect().left - sliderRect.left) /  sliderRect.width) * 100;
    backgroundColors.fill("rgba(255, 188, 53, 0.8)", parseInt(0.6*maxobtmarks),parseInt(0.7*maxobtmarks));

    // const sliderButtonAPosition4 = ( (buttons[4].getBoundingClientRect().left - sliderRect.left) /  sliderRect.width) * 100;
    backgroundColors.fill("rgba(50, 206, 180, 0.8)", parseInt(0.5*maxobtmarks),parseInt(0.6*maxobtmarks) );

    // const sliderButtonAPosition5 = ( (buttons[5].getBoundingClientRect().left - sliderRect.left) /  sliderRect.width) * 100;
    backgroundColors.fill("rgba(103, 160, 0, 0.8)", parseInt(0.4*maxobtmarks),parseInt(0.5*maxobtmarks) );
    
    // const sliderButtonAPosition6 = ( (buttons[6].getBoundingClientRect().left - sliderRect.left) /  sliderRect.width) * 100;
    backgroundColors.fill("rgba(106, 77, 108, 0.8)", parseInt(0.3*maxobtmarks) ,parseInt(0.4*maxobtmarks) );

    // const sliderButtonAPosition7 = ( (buttons[7].getBoundingClientRect().left - sliderRect.left) /  sliderRect.width) * 100;
    backgroundColors.fill("rgba(221, 148, 27, 0.8)", parseInt(0.2*maxobtmarks) ,parseInt(0.3*maxobtmarks)  );

    
    backgroundColors.fill("rgba(101, 39, 25, 0.6)",0,parseInt(0.2*maxobtmarks) );

    console.log(0.2*maxobtmarks);

    

    // Create a histogram chart using Chart.js
    const ctx = document.getElementById("histogramCanvas").getContext("2d");
    const chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: bins.map((bin) => `${bin  }`),
            datasets: [
                {
                    label: "Frequency",
                    data: histogramData,
                    backgroundColor: backgroundColors,
                    borderColor: "rgba(255, 255, 255, 0.8)", // Border color (you can adjust this)
                    borderWidth: 0.2,
                },
            ],
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Marks Range",
                    },
                    grid: {
                        display: false, // hide x-axis grid lines
                    },
                    // ticks: {
                    //     stepSize: 1, // Adjust the step size as needed
                    // },
                },
                y: {
                    title: {
                        display: true,
                        text: "Frequency",
                    },
                },
            },
        },
    });

    const slider = document.getElementById("range-slider");
    const buttons = document.querySelectorAll(".slider-button");
    const valueLabel = document.createElement("div");
    valueLabel.classList.add("value-label");
    slider.appendChild(valueLabel);

    
    buttons.forEach((button, index) => {
        button.addEventListener("mousedown", (e) => {
            e.preventDefault();
            button.classList.add("active");
    
            const onMouseMove = (e) => {
                const sliderRect = slider.getBoundingClientRect();
                const newPosition = ((e.clientX - sliderRect.left) /  sliderRect.width ) * (maxMarks) ;
                const minValue = 0;
                const maxValue = maxMarks;
    
                const currentValue = Math.min(maxValue, Math.max(minValue, newPosition));
                button.style.left = `${ (currentValue * 100) /maxMarks}%`;

                // const sliderRect = slider.getBoundingClientRect();
                var position = parseInt(( (e.clientX  - sliderRect.left) /  sliderRect.width) * maxMarks);

                position = Math.min(Math.max(0, position), maxMarks);
                
                console.log(e.clientX + "*******");
                // valueLabel.textContent = `Position: ${position.toFixed(0)}`;

                // const labelWidth = valueLabel.offsetWidth;
                // const labelHeight = valueLabel.offsetHeight;
                // const posX = e.clientX - labelWidth / 2; // Center horizontally
                // const posY = e.clientY - labelHeight ; // Above the cursor with a 10px gap

                // valueLabel.style.left = `${posX}px`;
                // valueLabel.style.top = `${posY}px`;
                // valueLabel.style.left = `${e.clientX}px`;
                // valueLabel.style.top = `${e.clientY}px`;
    
                
                // valueLabel.textContent = `Value: ${currentValue.toFixed(0)}`;
                
                const positionDisplayy = document.getElementById("positionDisplayy");
                positionDisplayy.textContent = `Position: ${position.toFixed(0)}`;
                
    
                const sliderButtonAPosition0 = parseInt (( (buttons[0].getBoundingClientRect().left - sliderRect.left +10) /  sliderRect.width) * maxMarks);
                console.log(buttons[0].getBoundingClientRect().left + "***********");    
                
                backgroundColors.fill("rgba(221, 25, 62, 0.8)",  sliderButtonAPosition0 , maxValue);
                console.log(sliderButtonAPosition0);
    
    
                
    
                const sliderButtonAPosition1 = parseInt( ( (buttons[1].getBoundingClientRect().left - sliderRect.left) /  sliderRect.width) * maxMarks);
                console.log("Hiii");
                console.log(sliderButtonAPosition1);
                backgroundColors.fill("rgba(236, 241, 17, 0.8)",sliderButtonAPosition1  , sliderButtonAPosition0);
                
    
                const sliderButtonAPosition2 = parseInt(( (buttons[2].getBoundingClientRect().left - sliderRect.left) /  sliderRect.width) * maxMarks);
                backgroundColors.fill("rgba(80, 45, 183, 0.8)", sliderButtonAPosition2,sliderButtonAPosition1 );
    
                const sliderButtonAPosition3 = parseInt(( (buttons[3].getBoundingClientRect().left - sliderRect.left) /  sliderRect.width) * maxMarks);
                backgroundColors.fill("rgba(255, 188, 53, 0.8)", sliderButtonAPosition3 ,sliderButtonAPosition2 );
    
                const sliderButtonAPosition4 = parseInt(( (buttons[4].getBoundingClientRect().left - sliderRect.left) /  sliderRect.width) * maxMarks);
                backgroundColors.fill("rgba(50, 206, 180, 0.8)", sliderButtonAPosition4 ,sliderButtonAPosition3 );
    
                const sliderButtonAPosition5 = parseInt(( (buttons[5].getBoundingClientRect().left - sliderRect.left) /  sliderRect.width) * maxMarks);
                backgroundColors.fill("rgba(103, 160, 0, 0.8)", sliderButtonAPosition5 ,sliderButtonAPosition4 );
                
                const sliderButtonAPosition6 = parseInt(( (buttons[6].getBoundingClientRect().left - sliderRect.left) /  sliderRect.width) * maxMarks);
                backgroundColors.fill("rgba(106, 77, 108, 0.8)", sliderButtonAPosition6 ,sliderButtonAPosition5 );
    
                const sliderButtonAPosition7 = parseInt(( (buttons[7].getBoundingClientRect().left - sliderRect.left + 10) /  sliderRect.width) * maxMarks);
                backgroundColors.fill("rgba(221, 148, 27, 0.8)", sliderButtonAPosition7 ,sliderButtonAPosition6 );
    
                
                backgroundColors.fill("rgba(101, 39, 25, 0.6)",0,sliderButtonAPosition7 );


                var msum =0;
                

                var threshold = sliderButtonAPosition0 ;
                var studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold);

            // Get the number of students meeting the criteria
                var numberOfStudentsAboveThreshold = studentsAboveThreshold.length;

                console.log(`Number of students with marks greater than or equal to 90% of maxMarks: ${numberOfStudentsAboveThreshold}`);

                var positionDisplay = document.getElementById("acnt");
                positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;
                var tempo = numberOfStudentsAboveThreshold;

                positionDisplay = document.getElementById("acut");
                positionDisplay.textContent = ` ${threshold }`;



                msum += 10 * numberOfStudentsAboveThreshold;
                
                
                
                
                threshold = sliderButtonAPosition1;
                studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold) ;
            
            
                numberOfStudentsAboveThreshold = studentsAboveThreshold.length - tempo;
            
                
                positionDisplay = document.getElementById("a-cnt");
                positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;

                positionDisplay = document.getElementById("a-cut");
                positionDisplay.textContent = ` ${threshold }`;
            
                tempo += numberOfStudentsAboveThreshold;

                msum += 9 * numberOfStudentsAboveThreshold;



                threshold = sliderButtonAPosition2;
                studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold) ;


                numberOfStudentsAboveThreshold = studentsAboveThreshold.length - tempo;

                
                positionDisplay = document.getElementById("bcnt");
                positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;

                positionDisplay = document.getElementById("bcut");
                positionDisplay.textContent = ` ${threshold }`;

                tempo += numberOfStudentsAboveThreshold;

                msum += 8 * numberOfStudentsAboveThreshold;

                
                
                threshold = sliderButtonAPosition3;
                studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold) ;


                numberOfStudentsAboveThreshold = studentsAboveThreshold.length - tempo;

                
                positionDisplay = document.getElementById("b-cnt");
                positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;

                positionDisplay = document.getElementById("b-cut");
                positionDisplay.textContent = ` ${threshold }`;

                tempo += numberOfStudentsAboveThreshold;

                msum += 7 * numberOfStudentsAboveThreshold;



                threshold = sliderButtonAPosition4;
                studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold) ;


                numberOfStudentsAboveThreshold = studentsAboveThreshold.length - tempo;

                
                positionDisplay = document.getElementById("ccnt");
                positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;

                positionDisplay = document.getElementById("ccut");
                positionDisplay.textContent = ` ${threshold }`;

                tempo += numberOfStudentsAboveThreshold;


                msum += 6 * numberOfStudentsAboveThreshold;


                threshold = sliderButtonAPosition5;
                studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold) ;


                numberOfStudentsAboveThreshold = studentsAboveThreshold.length - tempo;

                
                positionDisplay = document.getElementById("c-cnt");
                positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;

                positionDisplay = document.getElementById("c-cut");
                positionDisplay.textContent = ` ${threshold }`;

                tempo += numberOfStudentsAboveThreshold;

                msum += 5 * numberOfStudentsAboveThreshold;

                threshold = sliderButtonAPosition6;
                studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold) ;


                numberOfStudentsAboveThreshold = studentsAboveThreshold.length - tempo;

                
                positionDisplay = document.getElementById("dcnt");
                positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;

                positionDisplay = document.getElementById("dcut");
                positionDisplay.textContent = ` ${threshold }`;

                tempo += numberOfStudentsAboveThreshold;

                msum += 4 * numberOfStudentsAboveThreshold;


                threshold = sliderButtonAPosition7;
                studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold) ;


                numberOfStudentsAboveThreshold = studentsAboveThreshold.length - tempo;

                
                positionDisplay = document.getElementById("ecnt");
                positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;

                positionDisplay = document.getElementById("ecut");
                positionDisplay.textContent = ` ${threshold }`;

                tempo += numberOfStudentsAboveThreshold;

                msum += 2 * numberOfStudentsAboveThreshold;



                positionDisplay = document.getElementById("nccut");
                positionDisplay.textContent = ` ${0}`;



                var sumlessthannclim = 0;

                for (let i = 0; i < totalMarksArray.length; i++) {
                    if (totalMarksArray[i] < threshold) {
                        sumlessthannclim += totalMarksArray[i];
                    }
                }
                console.log('sumlessthannclim');
                console.log(sumlessthannclim);


                threshold = 0 * maxMarks;
                studentsAboveThreshold = totalMarksArray.filter(mark => mark >= threshold) ;


                numberOfStudentsAboveThreshold = studentsAboveThreshold.length - tempo;

                
                positionDisplay = document.getElementById("nccnt");
                positionDisplay.textContent = ` ${numberOfStudentsAboveThreshold}`;

                tempo += numberOfStudentsAboveThreshold;

                
                


                average = (sum - sumlessthannclim)/(totalMarksArray.length - numberOfStudentsAboveThreshold);
                
                positionDisplay = document.getElementById("avg");
                positionDisplay.textContent = ` ${average.toFixed(2)}`;


                abvavcnt =0;

                for (let i = 0; i < totalMarksArray.length; i++)
                {
                    if(totalMarksArray[i]>=average)
                    {
                        abvavcnt++;
                    }
                }


                positionDisplay = document.getElementById("abvav");
                positionDisplay.textContent = ` ${abvavcnt}`;


                positionDisplay = document.getElementById("belav");
                positionDisplay.textContent = ` ${totalMarksArray.length - abvavcnt}`;


                var mgpa = msum / ( totalMarksArray.length - numberOfStudentsAboveThreshold);
                
                
                console.log(mgpa);

                positionDisplay = document.getElementById("mg");
                positionDisplay.textContent = ` ${mgpa.toFixed(2)}`

    
    
                // Update the chart
                chart.data.datasets[0].backgroundColor = backgroundColors;
                chart.update();
            };
    
            const onMouseUp = () => {
                button.classList.remove("active");
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            };
    
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        });
    
        // ...
    
        button.addEventListener("mouseover", () => {
            // Show the button id on hover
            valueLabel.style.display = "block";
        });
    
        button.addEventListener("mouseout", () => {
            // Hide the button id when not hovering
            valueLabel.style.display = "none";
        });
    });
    




});







// ...

