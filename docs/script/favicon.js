async function getJsonData(key) {
    try {
        const response = await fetch('https://mcengine.github.io/cdn/data.json');
        const data = await response.json();
        const imgLogo = data[key];
        return imgLogo;
    } catch (error) {
        console.error('Error fetching JSON:', error);
        throw error; // Optional: Re-throw the error for further handling
    }
}

// Create a link element for the favicon
const faviconContent = document.createElement('link');
  
// Set the attributes for the favicon link element
faviconContent.rel = 'icon';
faviconContent.type = 'image/x-icon';
(async () => {
    const logo = await getJsonData('logo');
    faviconContent.href = logo;
})();

// Add the favicon link element to the document's head
document.head.appendChild(faviconContent);