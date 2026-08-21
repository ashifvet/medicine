const mBody = document.getElementById('mainBody');
const wInput = document.getElementById('weight');
const sInput = document.getElementById('search');
const sIndInput = document.getElementById('searchInd');
const showQuarantinedInput = document.getElementById('showQuarantined'); // optional checkbox

function esc(value) {
    return String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
}

function render() {
    if (!mBody || !wInput || !sInput || !sIndInput || !Array.isArray(allDrugs)) return;
    const weight = Number.parseFloat(wInput.value) || 0;
    const search = String(sInput.value || '').toLowerCase();
    const searchInd = String(sIndInput.value || '').toLowerCase();
    const showQuarantined = Boolean(showQuarantinedInput && showQuarantinedInput.checked);
    let rowsHtml = '';

    allDrugs.forEach(d => {
        if (d.active === false && !showQuarantined) return;
        const name = String(d.name || '');
        const comp = String(d.comp_val || '');
        const indication = String(d.ind || '');
        const isMatchName = name.toLowerCase().includes(search) || comp.toLowerCase().includes(search);
        const isMatchInd = indication.toLowerCase().includes(searchInd);
        if (!isMatchName || !isMatchInd) return;

        let doseDisplay = '';
        const canCalculate = d.type === 'c' && d.dose_verification_status === 'verified' && Number.isFinite(Number(d.base)) && weight > 0;
        if (canCalculate) {
            doseDisplay = `<span class="dose-highlight">${(Number(d.base) * weight).toFixed(2)} ${esc(d.unit)}</span>`;
        } else {
            const instruction = d.inst || 'Follow current registered label / veterinarian';
            doseDisplay = `<span style="color:#666;font-size:11px">${esc(instruction)}</span>`;
        }

        const verification = String(d.verification_status || 'unverified');
        const marketStatus = String(d.market_status || 'market status unknown');
        const safetyStatus = String(d.safety_verification_status || 'unverified');
        const safetySuffix = safetyStatus === 'label_verified' ? '' : ' [unverified]';
        const warning = d.flag || d.review_reason || '';
        const statusBadge = `<small class="verification-badge" title="${esc(warning)}">${esc(verification)} · ${esc(marketStatus)}</small>`;
        const rowClass = d.active === false ? 'quarantined-row' : '';
        rowsHtml += `<tr class="${rowClass}">
            <td>${esc(d.sl)}</td>
            <td><b>${esc(name)}</b><br>${statusBadge}</td>
            <td class="comp-col">${esc(comp)}</td>
            <td>${esc(d.pack)}</td>
            <td>${doseDisplay}</td>
            <td><span title="${esc(safetyStatus)}">${esc(d.safe)}${esc(safetySuffix)}</span></td>
            <td><span title="${esc(safetyStatus)}">${esc(d.pet)}${esc(safetySuffix)}</span></td>
            <td>${esc(indication)}${warning ? `<br><small title="${esc(warning)}">⚠ review note</small>` : ''}</td>
            <td>${esc(d.co)}</td>
            <td>${esc(d.str)}</td>
            <td>${esc(d.mgkg)}</td>
        </tr>`;
    });
    mBody.innerHTML = rowsHtml;
}

let debounceTimer;
const debounceRender = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(render, 300);
};

if (wInput) wInput.oninput = debounceRender;
if (sInput) sInput.oninput = debounceRender;
if (sIndInput) sIndInput.oninput = debounceRender;
if (showQuarantinedInput) showQuarantinedInput.onchange = render;
render();
