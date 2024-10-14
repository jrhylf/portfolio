import Swal from "sweetalert2";

let viewDBF = document.getElementById("dbf_btn");
let viewSAP = document.getElementById("sap_btn");
let viewWebDev = document.getElementById("webDev_btn");
let viewWebDesign = document.getElementById("webDesign_btn");
let viewNWF = document.getElementById("nwf_btn");

// Ternary for shorter code
let viewDBF_result = viewDBF ? viewDBF.addEventListener('click', databaseFoundations) : null;
let viewSAP_result = viewSAP ? viewSAP.addEventListener('click', sapBasics) : null;
let viewWebDev_result = viewWebDev ? viewWebDev.addEventListener('click', webDevelopment) : null;
let viewWebDesign_result = viewWebDesign ? viewWebDesign.addEventListener('click', webDesign) : null;
let viewNWF_result = viewNWF ? viewNWF.addEventListener('click', networkFoundations) : null;

// if else for readable code
// if (viewDBF) {
//     viewDBF.addEventListener('click', databaseFoundations);
// }
// else if (viewSAP) {
//     viewSAP.addEventListener('click', sapBasics);
// }
// else if (viewWebDev) {
//     viewSAP.addEventListener('click', webDevelopment);
// }
// else if (viewWebDesign) {
//     viewSAP.addEventListener('click', webDesign);
// }
// else if (viewNWF) {
//     viewSAP.addEventListener('click', networkFoundations);
// }

function databaseFoundations() {
    Swal.fire({
        // imageUrl: "https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg",
        imageUrl: "static/media/Database Foundations.fd16b70a19010d0f36ee.png",
        imageAlt: "Database Foundations Certificate",
        html: `
            <span class="description">Database Foundations</span>
            <p class='subText'>STI College Alabang, in partnership with Oracle</p>
        `,
    });
    return viewDBF_result;
}

function sapBasics() {
    Swal.fire({
        imageUrl: "static/media/SAP Basics.314cead2395fbc80c67d.png",
        imageAlt: "SAP Basics Certificate",
        html: `
            <span class="description">SAP Basics</span>
            <p class='subText'>STI College Alabang, in partnership with FIT Academy</p>
        `,
    });
    return viewSAP_result;
}

function webDevelopment() {
    Swal.fire({
        imageUrl: "static/media/Udemy_CSS_JS_Bootstrap_Course_Completion_Certificate.19b45698900c129d0aff.jpg",
        imageAlt: "Web Development Certificate",
        html: `
            <span class="description">Web Development</span>
            <p class='subText'>Udemy</p>
        `,
    });
    return viewWebDev_result;
}

function webDesign() {
    Swal.fire({
        imageUrl: "static/media/freeCodeCamp Responsive Web Design Certification.c4edd5f719d5a5968447.png",
        imageAlt: "Responsive Web Design Certificate",
        html: `
            <span class="description">Responsive Web Design</span>
            <p class='subText'>freeCodeCamp</p>
        `,
    });
    return viewWebDesign_result;
}

function networkFoundations() {
    Swal.fire({
        imageUrl: "static/media/Network Foundations.2959454e8f7ddf2143d0.png",
        imageAlt: "Network Foundations Certificate",
        html: `
            <span class="description">Network Foundations</span>
            <p class='subText'>STI College Alabang, in partnership with Huawei</p>
        `,
    });
    return viewNWF_result;
}

export { databaseFoundations, sapBasics, webDevelopment, webDesign, networkFoundations };