let count = 1;
let generatedBlob = null;

// Add new medicine fields up to 20
function addMedicine() {
  if (count >= 20) {
    alert("আপনি সর্বোচ্চ ২০টি ওষুধ যুক্ত করতে পারবেন।");
    return;
  }
  count++;

  const medicineList = document.getElementById('medicineList');
  const div = document.createElement('div');
  div.className = 'medicine-row';
  div.setAttribute('data-index', count);

  div.innerHTML = `
    <span class="med-num">${count}.</span>
    <input type="text" class="med-name" placeholder="Name of the drug">
    <input type="text" class="med-dose" placeholder="Dose">
    <input type="text" class="med-duration" placeholder="Duration">
  `;

  medicineList.appendChild(div);
}

// Dynamic Signature File Preview
function previewSignature(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('digitalSignatureImg').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// Generate Prescription and Canvas Rendering
function generatePrescription() {
  // Inputs
  const owner = document.getElementById('ownerName').value;
  const species = document.getElementById('species').value;
  const gender = document.getElementById('gender').value;
  const age = document.getElementById('age').value;
  const weight = document.getElementById('weight').value;
  const inputDate = document.getElementById('prescriptionDate').value;

  // Formatting Date
  let formattedDate = "";
  if (inputDate) {
    const d = new Date(inputDate);
    formattedDate = d.toLocaleDateString('en-GB'); // DD/MM/YYYY
  } else {
    formattedDate = new Date().toLocaleDateString('en-GB');
  }

  // Set Pad Fields
  document.getElementById('outOwner').innerText = owner;
  document.getElementById('outSpeciesGender').innerText = `${species} ${gender ? '(' + gender + ')' : ''}`;
  document.getElementById('outAge').innerText = age;
  document.getElementById('outWeight').innerText = weight;
  document.getElementById('outDate').innerText = formattedDate;
  document.getElementById('sigOutDate').innerText = formattedDate;

  // Set Medicines
  const rxContainer = document.getElementById('rxMedicines');
  rxContainer.innerHTML = '';

  const rows = document.querySelectorAll('.medicine-row');
  rows.forEach((row, index) => {
    const name = row.querySelector('.med-name').value;
    const dose = row.querySelector('.med-dose').value;
    const duration = row.querySelector('.med-duration').value;

    if (name.trim() !== '') {
      const item = document.createElement('div');
      item.className = 'rx-item';
      item.innerHTML = `
        <div class="med-title">${index + 1}. ${name}</div>
        <div class="sig">Sig: ${dose} ${duration}</div>
      `;
      rxContainer.appendChild(item);
    }
  });

  // Render HTML Pad to Canvas/Image
  const padElement = document.getElementById('prescriptionPad');
  html2canvas(padElement, { scale: 2 }).then(canvas => {
    canvas.toBlob(blob => {
      generatedBlob = blob;
      document.getElementById('shareBtn').style.display = 'block';
      alert("প্রেসক্রিপশন সফলভাবে জেনারেট হয়েছে!");
    }, 'image/png');
  });
}

// Web Share API for Mobile/Browser Sharing
async function sharePrescriptionImage() {
  if (!generatedBlob) return;

  const file = new File([generatedBlob], "prescription.png", { type: "image/png" });

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        title: 'Prescription',
        text: 'Prescription from Dr. Md. Ashif Iqbal',
        files: [file]
      });
    } catch (err) {
      console.log('Share error or cancelled:', err);
    }
  } else {
    // Fallback Download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(generatedBlob);
    link.download = 'prescription.png';
    link.click();
  }
}
