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

function nextDiv(element) {
  // alert('clicked')
  // let fatherDiv= element.parentNode.id

  let checkFirstName = document.getElementsByName('firstName')[0].checkValidity()
  // alert(checkFirstName)
  let checkLastName = document.getElementsByName('lastName')[0].checkValidity()
  let checkBirthDate = document.getElementsByName('birthDate')[0].checkValidity()
  let checkNationality = document.getElementsByName('nationality')[0].checkValidity()

  let checkUserName = document.getElementsByName('username')[0].checkValidity()
  let checkPassword = document.getElementsByName('password')[0].checkValidity()
  let checkRepeatPassword = document.getElementsByName('password-repeat')[0].checkValidity()
  let checkImageFile = document.getElementsByName('imageFile')[0].checkValidity()

  let checkAddress = document.getElementsByName('address')[0].checkValidity()
  let checkHouseNumber = document.getElementsByName('houseNumber')
  let checkZipCode = document.getElementsByName('zipCode')[0].checkValidity()

  let passwordMatch = checkPassword === checkRepeatPassword

  let fatherDiv = element.parentNode.id;

  //     SWITCH STATE FOR SECOND PAGE

  switch (fatherDiv) {
    case 'personalDiv':

      if (checkFirstName &&
        checkLastName &&
        checkBirthDate &&
        checkNationality) {
        element.parentNode.style.display = 'none'

        document.getElementById('addressDiv').style.display = 'block';
        document.getElementById('profileDiv').style.display = 'none';
        document.getElementById('resultDiv').style.display = 'none';

      } else {
        alert('You have invalid entries')
      }

      break;

    case 'addressDiv':
      if (checkAddress &&
        checkHouseNumber &&
        checkZipCode &&
        passwordMatch) {
        element.parentNode.style.display = 'none'
        document.getElementById('personalDiv').style.display = 'none';
        document.getElementById('profileDiv').style.display = 'block';
        document.getElementById('resultDiv').style.display = 'none';
      } else {
        alert('You have invalid entries')
      }

      break;
    // default:
    //   break;
    case 'profileDiv':

      if (checkUserName &&
        checkPassword &&
        checkRepeatPassword &&
        checkImageFile) {

        element.parentNode.style.display = 'none'

        document.getElementById('resultDiv').style.display = 'none';
        document.getElementById('profileDiv').style.display = 'none';
        document.getElementById('resultDiv').style.display = 'block';
        showData()
      } else {
        alert('You have invalid entries')
      }
      break;


    default:
      break;

  }
}
// const resultName = document.getElementById('#name')
// const resultBirthDate = document.getElementById('#birthDateLabel')
// const resultNationality = document.getElementById('#nationalityLabel')
// const resultAddress = document.getElementById('#addressLabel')
// const resultUserName = document.getElementById('#usernameLabel')
// const resultPassword = document.getElementById('#passwordLabel')
// const resultPhoto = document.getElementById('#photoLabel')

const firstName = document.getElementsByName('firstName')[0].value
const lastName = document.getElementsByName('lastName')[0].value
const birthDate = document.getElementsByName('birthDate')[0].value
const nationality = document.getElementsByName('nationality')[0].value
const userName = document.getElementsByName('nationality')[0].value
const imageFile = document.getElementsByName('imageFile')[0].value
const address = document.getElementsByName('address')[0].value
const houseNumber = document.getElementsByName('houseNumber')[0].value
const zipCode = document.getElementsByName('zipCode')[0].value
const password = document.getElementsByName('password')[0].value

function showData() {
  document.getElementById('#nameLabel').innerHTML = firstName + ' ' + lastName
  document.getElementById('#birthDateLabel').innerHTML = birthDate
  document.getElementById('#nationalityLabel').innerHTML = nationality
  document.getElementById('#addressLabel').innerHTML = address + '' + houseNumber + '' + zipCode
  document.getElementById('#passwordLabel').innerHTML = password

}