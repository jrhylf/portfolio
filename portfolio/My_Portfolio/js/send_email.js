(function() {
    emailjs.init("7RpCOcm3XUomdgvyI");
})();

document.getElementById('contact_form').addEventListener('submit', function(event) {
    event.preventDefault();

    Swal.fire({
        title: 'Are you sure you want to send your message?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, send it!',
        cancelButtonText: 'No, cancel!',
    }).then((result) => {
        if (result.isConfirmed) {
            // TODO: Send email function
            const serviceID = 'service_bh80amj';
            const templateID = 'template_5khpau2';

            emailjs.sendForm(serviceID, templateID, this)
                sendEmail().then((response) => {
                    Swal.fire(
                        'Message Sent!',
                        'Your message has been sent successfully. We will get back to you shortly.',
                        'success'
                    );
                }).catch(() => {
                    Swal.fire(
                        'Failed to Send',
                        'There was an error sending your message. Please try again later.',
                        'error'
                    );
                });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Cancelled',
                'Your message has not been sent. You can continue editing or try sending it later.',
                'error'
            );
        }
    });

    function sendEmail() {
        return new Promise((resolve, reject) => {
            // Simulate asynchronous email sending
            setTimeout(() => {
                // Simulate success (resolve) or failure (reject)
                const isSuccess = true; // Change to false to simulate failure
                if (isSuccess) {
                    resolve();
                    console.log("Email sent");
                } else {
                    reject();
                    console.log("Email not sent");
                }
            }, 1000);
        });
    }
});
