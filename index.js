// WhatsApp Redirection Function
function redirectToWhatsApp(planName) {
    // IMPORTANT: Replace with your actual WhatsApp number in international format (e.g., 1XXXXXXXXXX for USA)
    const phoneNumber = "+254798357397"; 

    let message = `Hello CoolFix Air, I'm interested in the ${planName} plan. Please provide more details.`;

    // Encode the message for use in a URL
    const encodedMessage = encodeURIComponent(message);

    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/<span class="math-inline">\{phoneNumber\}?text\=</span>{encodedMessage}`;

    // Redirect the user to WhatsApp
    window.open(whatsappURL, '_blank'); // Opens in a new tab, generally better UX for external links
}