function calculateAge() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const now = new Date();
  
    const yearsDiff = now.getFullYear() - birthdate.getFullYear();
    const monthsDiff = now.getMonth() - birthdate.getMonth();
    const daysDiff = now.getDate() - birthdate.getDate();
  
    let ageString = "";
    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      ageString = `${yearsDiff - 1} years, ${12 + monthsDiff} months, ${30 + daysDiff} days`;
    } else {
      ageString = `${yearsDiff} years, ${monthsDiff} months, ${daysDiff} days`;
    }
  
    document.getElementById("result").innerHTML = `Your age is: ${ageString}`;
  }
  