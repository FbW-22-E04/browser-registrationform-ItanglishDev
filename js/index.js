function previous(element) {
  let fatherDiv = element.parentNode.id;
  switch (fatherDiv) {
    case 'addressDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'block';
      document.getElementById('profileDiv').style.display = 'none';
      document.getElementById('resultDiv').style.display = 'none';
      break;
    case 'profileDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'none';
      document.getElementById('addressDiv').style.display = 'block';
      document.getElementById('resultDiv').style.display = 'none';

      break;
    case 'resultDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'none';
      document.getElementById('addressDiv').style.display = 'none';
      document.getElementById('profileDiv').style.display = 'block';

      break;

    default:
      break;
  }
}

// const next = document.querySelector

// function checkValidity() {

// }
function nextDiv(element) {
  // alert('clicked')
  // let fatherDiv= element.parentNode.id

  let checkFirstName = document.getElementsByName('firstName')[0].checkValidity()
  // alert(checkFirstName)
  let checkLastName = document.getElementsByName('lastName')[0].checkValidity()
  let checkBirthDate = document.getElementsByName('birthDate')[0].checkValidity()
  let checkNationality = document.getElementsByName('nationality')[0].checkValidity()

  let fatherDiv = element.parentNode.id;

  switch (fatherDiv) {
    case 'personalDiv':

      if (checkFirstName &&
        checkLastName &&
        checkBirthDate &&
        checkNationality) {
        element.parentNode.style.display = 'none'
        document.getElementById('resultDiv').style.display = 'none';
        document.getElementById('profileDiv').style.display = 'block';
        document.getElementById('resultDiv').style.display = 'none';

      } else {
        alert('You have invalid entries')
      }

      break;

    default:
      break;
  }
}
