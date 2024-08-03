async function fetchCars() {
    try {
        const response = await fetch('/.netlify/functions/api/cars');
        const cars = await response.json();
        console.log(cars); // Verify the response
        displayCars(cars); // Function to update the UI
    } catch (error) {
        console.error('Error fetching cars:', error);
    }
}

function displayCars(cars) {
    const carList = document.getElementById('car-list');
    carList.innerHTML = '';

    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.textContent = `${car.name} - ${car.year} - $${car.price}`;
        carList.appendChild(carItem);
    });
}

fetchCars();
