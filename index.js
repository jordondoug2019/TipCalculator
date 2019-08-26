x=0;
let userinput=prompt(`Choose one of the following: 
                        A. Tip Calculator
                        B. Change donation
                        Q. Quit`);
while(userinput!="q")
    {
        if(userinput==="a")
        {
            calInput=prompt("How much is your bill?");
            pplInput= prompt("How many people are in your party?");
            newInput=parseInt(calInput)*0.150;
            if(calInput==="q" )
            {
                break;
            }
            if(pplInput==="q")
             {
                 break;
             }
              tip= newInput/parseInt(pplInput);
             alert(`Your should tip: $${tip}`)
        }
        if(userinput==='b')
        {
            totalInput= parseFloat(prompt("How much change would you like to donate? "));
                newDonation= totalInput
            // newDonation= newDonation+totalInput
            alert(`Your donation is $${newDonation}.0`);
            if(totalInput==='q')
            {
                break;
            }
        }
    }

userinput=prompt(`Choose one of the following:
                   A. Tip Calculator
                   B. Change counter
                   Q.Quit`)