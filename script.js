const mBody = document.getElementById('mainBody');
const wInput = document.getElementById('weight');
const sInput = document.getElementById('search');
const sIndInput = document.getElementById('searchInd');

// পারফরম্যান্স বাড়ানোর জন্য রেন্ডার ফাংশন আপডেট করা হয়েছে
function render() {
    const weight = parseFloat(wInput.value) || 0;
    const search = sInput.value.toLowerCase();
    const searchInd = sIndInput.value.toLowerCase();
    
    // একটি স্ট্রিং-এ সব ডেটা জমা রাখা হচ্ছে
    let rowsHtml = '';

    allDrugs.forEach(d => {
        const isMatchName = d.name.toLowerCase().includes(search) || d.comp_val.toLowerCase().includes(search);
        const isMatchInd = d.ind && d.ind.toLowerCase().includes(searchInd);
        
        if (!isMatchName || !isMatchInd) return;

        let doseDisplay = "";
        if (d.type === 'c') {
            const calculated = (d.base * weight).toFixed(2);
            doseDisplay = `<span class="dose-highlight">${calculated} ${d.unit}</span>`;
        } else {
            doseDisplay = `<span style="color: #666; font-size: 11px;">${d.inst || 'See Pack'}</span>`;
        }

        const pregClass = d.safe === "Safe" ? "safe-val" : "unsafe-val";
        const petClass = d.pet === "Safe" || d.pet === "Highly Safe" ? "safe-val" : (d.pet.includes("Caution") ? "caution-val" : "unsafe-val");

        // স্ট্রিং কনক্যাটিনেশন (বারবার DOM আপডেট করার চেয়ে এটি দ্রুত)
        rowsHtml += `<tr>
            <td>${d.sl}</td>
            <td><b>${d.name}</b></td>
            <td class="comp-col">${d.comp_val}</td>
            <td>${d.pack}</td>
            <td>${doseDisplay}</td>
            <td><span class="${pregClass}">${d.safe === "Safe" ? "নিরাপদ" : "অনিরাপদ"}</span></td>
            <td><span class="${petClass}">${d.pet}</span></td>
            <td>${d.ind}</td>
            <td>${d.co}</td>
            <td>${d.str}</td>
            <td>${d.mgkg}</td>
        </tr>`;
    });

    // শেষে একবার মেইন টেবিল বডি আপডেট করা হচ্ছে
    mBody.innerHTML = rowsHtml;
}

// Debounce ফাংশন: টাইপ করার সময় সার্চ যেন আটকে না যায়
let timeout = null;
function debounceRender() {
    clearTimeout(timeout);
    timeout = setTimeout(render, 300); // ৩০০ মিলিসেকেন্ড পর রেন্ডার হবে
}

wInput.oninput = debounceRender;
sInput.oninput = debounceRender;
sIndInput.oninput = debounceRender;

// প্রথমবার লোড হওয়ার জন্য সরাসরি কল
render();
