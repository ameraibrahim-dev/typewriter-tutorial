const logo = document.querySelectorAll("#logo path");

// Calculates individual path lengths per letter
for(let i=0; i<logo.length;i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}