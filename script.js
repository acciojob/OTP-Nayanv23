//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.code');
    
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
        
        // Handle backspace/delete: move to previous if empty
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' || e.key === 'Delete') {
                if (!e.target.value && index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
        
        // Select all on focus
        input.addEventListener('focus', function() {
            this.select();
        });
    });
    
    // Auto-focus first input
    inputs[0].focus();
});

