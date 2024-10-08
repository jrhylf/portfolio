// import Swal from 'sweetalert2';

function previewResume() {
    // Replace with the actual link to your resume file
    const resumeUrl = '/resume/John_Rhyl_Fernandez_Resume.pdf'; // Path to your PDF file

    // Open the resume in a new tab
    window.open(resumeUrl, '_blank');



    // ! for future purposes
    // Swal.fire({
    //     title: 'View Resume',
    //     text: 'This will open the resume in a new tab. Do you want to continue?',
    //     icon: 'info',
    //     showCancelButton: true,
    //     confirmButtonText: 'Yes, continue',
    //     cancelButtonText: 'No, cancel'
    // }).then((result) => {
    //     if (result.isConfirmed) {
    //         // Replace with the actual link to your resume file
    //         const resumeUrl = '/resume/John_Rhyl_Fernandez_Resume.pdf'; // Path to your PDF file

    //         // Open the resume in a new tab
    //         window.open(resumeUrl, '_blank');
    //     } else if (result.dismiss === Swal.DismissReason.cancel) {
    //         Swal.fire(
    //             'Cancelled',
    //             'The resume was not opened.',
    //             'error'
    //         );
    //     }
    // });
}

export default previewResume;

