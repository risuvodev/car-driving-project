AOS.init();
$(document).ready(function() {
    $(".tab-btn").click(function () {
        $(".tab-btn").removeClass("active");
        $(this).addClass("active");
    });
});

function typeWriter(
    selector_target,
    text_list,
    placeholder = false,
    i = 0,
    text_list_i = 0,
    delay_ms = 130
) {
    if (!i) {
        if (placeholder) {
            Array.from(document.querySelectorAll(selector_target)).forEach(
                (element) => (element.placeholder = "")
            );
            // document.querySelectorAll(selector_target).placeholder = "";
        } else {
            Array.from(document.querySelectorAll(selector_target)).forEach(
                (element) => (element.innerHTML = "")
            );
            // document.querySelectorAll(selector_target).innerHTML = "";
        }
    }
    txt = text_list[text_list_i];
    if (i < txt.length) {
        if (placeholder) {
            // document.querySelectorAll(selector_target).placeholder +=
            //   txt.charAt(i);

            Array.from(document.querySelectorAll(selector_target)).forEach(
                (element) => (element.placeholder += txt.charAt(i))
            );
        } else {
            // document.querySelectorAll(selector_target).innerHTML +=
            //   txt.charAt(i);

            Array.from(document.querySelectorAll(selector_target)).forEach(
                (element) => (element.innerHTML += txt.charAt(i))
            );
        }
        i++;
        setTimeout(
            typeWriter,
            delay_ms,
            selector_target,
            text_list,
            placeholder,
            i,
            text_list_i
        );
    } else {
        text_list_i++;
        if (typeof text_list[text_list_i] === "undefined") {
            setTimeout(
                typeWriter,
                delay_ms * 5,
                selector_target,
                text_list,
                placeholder
            );
        } else {
            i = 0;
            setTimeout(
                typeWriter,
                delay_ms * 3,
                selector_target,
                text_list,
                placeholder,
                i,
                text_list_i
            );
        }
    }
}

text_list = ["Enter your suburb...", " "];

return_value = typeWriter("#suburb-input", text_list, true);

function choosePkg(packageType) {
    if (packageType === "driving only") {
        document
            .querySelector(".choose_packages")
            .children[0].classList.add("choose_packages-click-green");

        document
            .querySelector(".choose_packages")
            .children[1].classList.remove("choose_packages-click-blue");

        document.querySelector(".choosed-container").classList.remove("d-none");
        document.querySelector(".choose-2").classList.add("d-none");
        document.querySelector(".choose-1").classList.remove("d-none");
    }
    if (packageType === "driving test") {
        document
            .querySelector(".choose_packages")
            .children[1].classList.add("choose_packages-click-blue");

        document
            .querySelector(".choose_packages")
            .children[0].classList.remove("choose_packages-click-green");

        document.querySelector(".choosed-container").classList.remove("d-none");
        document.querySelector(".choose-2").classList.remove("d-none");
        document.querySelector(".choose-1").classList.add("d-none");
    }
}


