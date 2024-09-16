import Swal from 'sweetalert2';

function privacyPolicy() {
    document.getElementById('privacy_policy').addEventListener('change', function() {
        if (this.checked) {
            Swal.fire({
                title: 'Privacy Policy',
                text: "By checking this box, you agree to provide your name and email address, which will be used by a third-party service, EmailJS, for communication purposes. We are committed to protecting your privacy and will not share your information with any other parties without your explicit consent.",
                icon: 'info',
                confirmButtonText: 'OK'
            });
        }
    });
}

export default privacyPolicy;

