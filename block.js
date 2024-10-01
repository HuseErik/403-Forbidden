document.addEventListener('DOMContentLoaded', function() {
    // Event listener for 'proceed' button
    const proceedButton = document.getElementById('proceed');
    if (proceedButton) {
        proceedButton.addEventListener('click', function() {
            Swal.fire({
                title: "Warning!",
                text: "You are about to go to a restricted page.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: 'Proceed Anyway',
                cancelButtonText: 'No, stay here'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'block1.html'; 
                }
            });
        });
    }

    // Event listener for 'return' button
    const returnButton = document.getElementById('return');
    if (returnButton) {
        returnButton.addEventListener('click', function() {
            window.history.back();
        });
    }

    // Event listener for 'return1' button
    const returnButton1 = document.getElementById('return1');
    if (returnButton1) {
        returnButton1.addEventListener('click', function() {
            window.history.back();
        });
    }
});
