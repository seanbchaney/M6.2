function showSelection() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        alert(`You selected: ${selectedOption.value}`);
    } else {
        alert("Please select an option.");
    }
}
