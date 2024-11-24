// Footer Year and Last Modified
document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.lastModified;

    document.getElementById("lastModified").textContent = lastModified;

    // Static Weather Data for Ruinas de Copán
    const temperature = 23; // °C
    const windSpeed = 6; // km/h

    // Calculate Wind Chill
    const calculateWindChill = (temp, wind) => {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(wind, 0.16) +
            0.3965 * temp * Math.pow(wind, 0.16)
        ).toFixed(1);
    };

    // Check Conditions for Wind Chill
    const windChill =
        temperature <= 10 && windSpeed > 4.8
            ? calculateWindChill(temperature, windSpeed) + "°C"
            : "N/A";

    document.getElementById("windChill").textContent = windChill;
});



