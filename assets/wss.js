window.addEventListener("DOMContentLoaded", (event) => {
    // Wrapping all submenu items in a level 4 heading
    // const submenuItems = document.querySelectorAll(".navigation_submenu-item");
    //
    // submenuItems.forEach((item) => {
    //     const anchorTag = item.querySelector("a");
    //     if (anchorTag) {
    //         const h4Tag = document.createElement("h4");
    //         h4Tag.appendChild(anchorTag.cloneNode(true));
    //         item.innerHTML = "";
    //         item.appendChild(h4Tag);
    //     }
    // });

    // Find all elements with class disclosure-list__option
    const disclosureListOptions = document.querySelectorAll('.disclosure-list__option');

    disclosureListOptions.forEach(element => {
        // Get the value of the data-value attribute
        const dataValue = element.getAttribute('data-value');

        // If the data-value attribute is "uk"
        if (dataValue === 'uk') {
            // Remove fs-body-75 class
            element.classList.remove('fs-body-75');
            // Add fs-body-50 class
            element.classList.add('fs-body-50');
        }
    });

    // Translation for dynamic checkout buttons
    function modifyElementText() {
        let shopifyPaymentParent = document.querySelector(".shopify-payment-button");
        if (shopifyPaymentParent) {
            let paymentButton = shopifyPaymentParent.querySelector(".shopify-payment-button__button");
            paymentButton.textContent = 'Купити зараз';
        }
    }

    let intervalId = setInterval(() => {
        modifyElementText();

        // Check if the desired condition is met (element text is modified)
        let shopifyPaymentParent = document.querySelector(".shopify-payment-button");
        if (shopifyPaymentParent) {
            let paymentButton = shopifyPaymentParent.querySelector(".shopify-payment-button__button");
            if (paymentButton.textContent === 'Купити зараз') {
                clearInterval(intervalId); // Stop the interval once the condition is met
            }
        }
    }, 2000);


    /*    function checkForElement() {
            let shopifyPaymentParent = document.querySelector(".shopify-payment-button");
            if (shopifyPaymentParent) {
                let paymentButton = shopifyPaymentParent.querySelector(".shopify-payment-button__button");
                paymentButton.textContent = 'Купити зараз';
            } else {
                // Element not found, recheck after a delay
                setTimeout(checkForElement, 500);
            }
        }

        checkForElement();*/

});