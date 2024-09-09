// function downloadResume() {
//     Swal.fire({
//         title: 'Are you sure you want to download the resume?',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Yes, download it!',
//         cancelButtonText: 'No, cancel!',
//     }).then((result) => {
//         if (result.isConfirmed) {
//             // Replace with the actual link to your resume file
//             const link = document.createElement('a');
//             link.href = 'personal/resume/John_Rhyl_Fernandez_Resume.pdf'; // Path to your PDF file
//             link.download = 'John_Rhyl_Fernandez_Resume.pdf'; // The name of the file when downloaded
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);

//             setTimeout(() => {
//                 Swal.fire(
//                     'Downloaded!',
//                     'The resume has been downloaded.',
//                     'success'
//                 );
//             }, 500);
//         } else if (result.dismiss === Swal.DismissReason.cancel) {
//             Swal.fire(
//                 'Cancelled',
//                 'Failed to download the resume.',
//                 'error'
//             );
//         }
//     });
// }

function previewResume() {
    Swal.fire({
        title: 'Open Resume in a New Tab',
        text: 'This will open the resume in a new tab. Do you want to continue?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Yes, continue',
        cancelButtonText: 'No, cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            // Replace with the actual link to your resume file
            const resumeUrl = 'personal/resume/John_Rhyl_Fernandez_Resume.pdf'; // Path to your PDF file

            // Open the resume in a new tab
            window.open(resumeUrl, '_blank');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Cancelled',
                'The resume was not opened.',
                'error'
            );
        }
    });
}

