const mBody = document.getElementById('mainBody');
const wInput = document.getElementById('weight');
const sInput = document.getElementById('search');
const sIndInput = document.getElementById('searchInd');

function render() {
    const weight = parseFloat(wInput.value) || 0;
    const search = sInput.value.toLowerCase();
    const searchInd = sIndInput.value.toLowerCase();
    
    mBody.innerHTML = '';

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

        mBody.innerHTML += `<tr>
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
}

wInput.oninput = render;
sInput.oninput = render;
sIndInput.oninput = render;
render();
