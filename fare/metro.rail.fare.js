const fareMatrix = {
    "উত্তরা উত্তর": [0, 20, 20, 30, 30, 40, 40, 50, 60, 60, 70, 80, 80, 90, 90, 100, 100],
    "উত্তরা সেন্টার": [20, 0, 20, 20, 30, 30, 40, 40, 50, 60, 60, 70, 70, 80, 90, 90, 100],
    "উত্তরা দক্ষিণ": [20, 20, 0, 20, 20, 30, 30, 40, 40, 50, 60, 60, 70, 70, 80, 90, 90],
    "পল্লবী": [30, 20, 20, 0, 20, 20, 20, 30, 30, 40, 50, 50, 60, 60, 70, 80, 80],
    "মিরপুর-১১": [30, 20, 20, 20, 0, 20, 20, 20, 30, 40, 40, 50, 60, 60, 70, 70, 80],
    "মিরপুর-১০": [40, 30, 30, 20, 20, 0, 20, 20, 20, 30, 30, 40, 50, 50, 60, 60,70],
    "কাজীপাড়া": [40, 40, 30, 20, 20, 20, 0, 20, 20, 20, 30, 40, 40, 50, 50, 60, 70],  
    "শেওড়াপাড়া": [50, 40, 40, 30, 20, 20,20, 0, 20, 20, 20, 30, 40, 40, 50, 50, 60],
    "আগারগাঁও": [60, 50, 40, 30, 30, 20, 20, 20, 0, 20, 20, 20, 30, 30, 40, 50, 50],
    "বিজয় সরণি": [60, 60, 50, 40, 40, 30, 20, 20,20, 0, 20, 20, 20,  30, 40, 40, 50],
    "ফার্মগেট": [70, 60, 60, 50, 40, 30, 30, 20, 20,20, 0, 20, 20, 20, 30, 30, 40],
    "কারওয়ান বাজার": [80, 70, 60, 50, 50, 40, 40, 30, 20, 20, 20, 0, 20, 20, 20, 30, 30],
    "শাহবাগ": [80, 80, 70, 60, 50, 50, 40, 40, 30, 20, 20, 20, 0, 20, 20, 20, 30],
    "ঢাকা বিশ্ববিদ্যালয়": [90, 80, 70, 60, 60, 50, 50, 40, 30, 30, 20, 20, 20, 0, 20, 20, 20],
    "বাংলাদেশ সচিবালয়": [90, 90, 80, 70, 70,  60, 50, 50, 40, 40, 30, 20, 20, 20, 0, 20, 20],
    "মতিঝিল": [100, 90, 90, 80, 70, 60, 60, 50, 50, 40, 30, 30, 20, 20, 20, 0, 20],
    "কমলাপুর": [100, 100, 90, 80, 80, 70, 70, 60, 50, 50, 40, 30, 30, 20, 20, 20, 0]
};

function calculateFare(fromStation, toStation) {
    const fromIndex = Object.keys(fareMatrix).indexOf(fromStation);
    const toIndex = Object.keys(fareMatrix).indexOf(toStation);
    
    if (fromIndex === -1 || toIndex === -1) {
        return "Invalid station selected.";
    }

    const fare = fareMatrix[fromStation][toIndex];
    return fare;
}

document.addEventListener('DOMContentLoaded', function() {
    const fromSelect = document.getElementById('from-station');
    const toSelect = document.getElementById('to-station');
    const fareDisplay = document.getElementById('fare-result');

    
    Object.keys(fareMatrix).forEach(station => {
        fromSelect.add(new Option(station, station));
        toSelect.add(new Option(station, station));
    });

    
    function updateFare() {
        const from = fromSelect.value;
        const to = toSelect.value;
        
        if (from && to) {
            const fare = calculateFare(from, to);
            fareDisplay.textContent = `Starting Point: ${from} | Destination: ${to} | Fare: ${fare} TK/=`;
        } else {
            fareDisplay.textContent = ""; 
        }
    }

    fromSelect.addEventListener('change', updateFare);
    toSelect.addEventListener('change', updateFare);
});
