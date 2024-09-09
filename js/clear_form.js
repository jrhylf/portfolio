document.querySelector('.clear_btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default button action

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

    Swal.fire({
        title: 'Are you sure?',
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
                title: "Form cleared!"
            });
        } else {
            Toast.fire({
                icon: "error",
                title: "Form not cleared!"
            });
        }
    });
});