function calculateAge() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value || Date.now());
    if (!startDate) return document.getElementById('result').innerText = "Please enter a valid start date.";

    let years = endDate.getFullYear() - startDate.getFullYear();
    const months = endDate.getMonth() - startDate.getMonth();
    if (months < 0 || (months === 0 && endDate.getDate() < startDate.getDate())) years--;

    const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    const hours = new Date(endDate - startDate).getUTCHours();
    document.getElementById('result').innerText = `Age: ${years} years, ${totalDays} days, and ${hours} hours.`;
}