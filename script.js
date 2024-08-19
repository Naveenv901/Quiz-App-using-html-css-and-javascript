function checkAnswer(selectedOption, correctId) {
    // Get all options in the same question
    const options = selectedOption.parentElement.querySelectorAll('.option');
    
    // Remove previous styles
    options.forEach(option => {
        option.classList.remove('correct', 'incorrect');
    });
    
    // Add correct and incorrect classes based on selection
    options.forEach(option => {
        if (option.id === correctId) {
            option.classList.add('correct');
        } else if (option === selectedOption) {
            option.classList.add('incorrect');
        }
    });
}
