// Calculate and display current age
function calculateAge() {
    const birthDate = new Date(2000, 6, 4); // July 4, 2000 (month is 0-indexed)
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    document.getElementById('age').textContent = age;
}

// Call on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', calculateAge);
} else {
    calculateAge();
}
