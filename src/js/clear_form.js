import Swal from 'sweetalert2';

function clearForm(event) {
    event.preventDefault(); // Prevent the default button action

    // Initialize Toast
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    // Show the confirmation dialog
    Swal.fire({
        title: 'Are you sure?',
        // TODO: Fix this. The Bullet is on the right side of the modal.
        html: `
            <p class="swal-p">This will clear the following fields:</p>
            <ul class="swal-ul">
                <li class="swal-li">Name</li>
                <li class="swal-li">Email</li>
                <li class="swal-li">Subject</li>
                <li class="swal-li">Message</li>
            </ul>
        `,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, clear it!',
        cancelButtonText: 'No, keep it'
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById('contact_form').reset();
            Toast.fire({
                icon: "success",
                title: "Form cleared"
            });
        } else if (result.isDismissed) {
            Toast.fire({
                icon: "info",
                title: "Form not cleared"
            });
        }
    });
}

export default clearForm;

