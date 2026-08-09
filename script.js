/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenu =
    document.getElementById("mobileMenu");

const navigation =
    document.getElementById("navigation");


if (mobileMenu && navigation) {

    mobileMenu.addEventListener("click", () => {

        const opened =
            navigation.classList.toggle("open");

        mobileMenu.setAttribute(
            "aria-expanded",
            opened
        );

    });


    navigation
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("open");

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

}


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();


            const phone =
                document
                    .getElementById("phone")
                    .value
                    .trim();


            const service =
                document
                    .getElementById("service")
                    .value
                    .trim();


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            const subject =
                encodeURIComponent(
                    `New website enquiry - ${name}`
                );


            const body =
                encodeURIComponent(

`Hello Ajit,

I found your website and would like to discuss a project.

Name:
${name}

Email:
${email}

Phone:
${phone}

Service:
${service}

Project details:
${message}

Thank you.`

                );


            if (formStatus) {

                formStatus.textContent =
                    "Opening your email application...";

            }


            window.location.href =
                `mailto:ajitujagare4143@gmail.com?subject=${subject}&body=${body}`;

        }
    );

}


/* =====================================================
   CURRENT YEAR
===================================================== */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}