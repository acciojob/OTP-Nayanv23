document.addEventListener('DOMContentLoaded', function() {
    const inputs = Array.from(document.querySelectorAll('.code'));
    
    // Auto-focus first input
    inputs[0].focus();
    
    inputs.forEach((input, index) => {
        // Handle input: only numbers, auto-focus next
        input.addEventListener('input', function(e) {
            let value = e.target.value;
            // Keep only first digit
            value = value.replace(/\D/g, '').slice(0, 1);
            e.target.value = value;
            
            // Move to next input if value entered
            if (value && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });
        
        // Handle keydown for backspace
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace') {
                // Clear current input first
                e.target.value = '';
                
                // If this was the first input or previous has value, stay here
                if (index > 0 && !inputs[index - 1].value) {
                    e.preventDefault();
                    inputs[index - 1].focus();
                }
            }
        });
        
        // Select all on focus
        input.addEventListener('focus', function() {
            this.select();
        });
    });
});
