import { DoctorLookup } from "./doctor-lookup";
import $ from 'jquery';
$;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

let getElements = (response, searchInput) => {
    for (var i = 1; i <= targetArray.length; i +=1) {
      let doctorSearch = result.targetArray[i].targetAttribute];
      if (searchInput === doctorSearch) {      
      }
    }
  }
  
  $(document).ready(function()  {
  
    $("form#search-input").submit(function(event)  {
      event.preventDefault();
    //   let bikeColorInput = $("select#color").val();
      (async () => {
        let doctorLookup = new DoctorLookup();
        const response = await doctorLookup.getDoctorByName();
        console.log(response.data[0].profile);
        $("#result").append(`${response.data[0].profile.first_name}`);
        $("#result").append(`${response.data[0].profile.last_name}`);
        $("#result").append(`${response.data[0].practices[0].visit_address.street}`);
        $("#result").append(`${response.data[0].practices[0].visit_address.city}`);
        $("#result").append(`${response.data[0].practices[0].visit_address.state}`);
        $("#result").append(`${response.data[0].practices[0].phones[0].number}`);
        getElements(response, searchInput);
      })();
    });
  });