const listData = async () => {
    const response = await fetch("https://api.weatherbit.io/v2.0/current?lat=-2.1900563&lon=-79.8868741&key=ce6e61e3cfc645da80322dd8faef005f");
    const data = await response.json();
    let tableBody = ``;
        tableBody += `<tr>
        <td class='centered'></td>
        <td class='centered'>${data.data[0].lat}</td>
        <td class='centered'>${data.data[0].lon}</td>
        <td class='centered'>${data.data[0].sunrise}</td>
        <td class='centered'>${data.data[0].ob_time}</td>
        <td class='centered'>${data.data[0].city_name}</td>
        <td class='centered'>${data.data[0].wind_spd}</td>
        <td class='centered'>${data.data[0].temp}</td>
        <td class='centered'>${data.data[0].rh}</td>
        <td class='centered'>${data.data[0].precip}</td>
        <td class='centered'>${data.data[0].uv}</td>
        <td class='centered'>${data.data[0].solar_rad}</td>
        </tr>`; 
    // document.getElementById("tableBody_Users").innerHTML = tableBody;
    tableBody_Data.innerHTML = tableBody;
    
};

window.addEventListener("load", function () {
    listData();
});
