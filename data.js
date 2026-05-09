// Vet Master Directory Data - Part 1 (1-100)
// Compiled by Dr. Md. Ashif Iqbal

const allDrugs = [
    // --- Penicillins ---
    {sl: 1, name: "Inj. Bipen-Vet 40", comp_val: "Procaine Penicillin + Benzyl Penicillin Sodium", pack: "40 lac vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anthrax, BQ, Pneumonia", co: "Square", type: "c", str: "40 Lac/vial", mgkg: "1ml/10kg"},
    {sl: 2, name: "Inj. Pronapen vet 40 Lac", comp_val: "Procaine Penicillin + Benzyl Penicillin Sodium", pack: "40 lac vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Mastitis, Metritis, Foot rot", co: "Renata", type: "c", str: "40 Lac/vial", mgkg: "1ml/10kg"},
    {sl: 3, name: "Inj. Combipen vet 40 Lac", comp_val: "Procaine Penicillin + Benzyl Penicillin Sodium", pack: "40 lac vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Navel ill, Abscess, Strangles", co: "Acme", type: "c", str: "40 Lac/vial", mgkg: "1ml/10kg"},
    {sl: 4, name: "Inj. Pronacillin 40 Lac", comp_val: "Procaine Penicillin + Benzyl Penicillin Sodium", pack: "40 lac vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Bacterial Influenza, Bronchitis", co: "Techno", type: "c", str: "40 Lac/vial", mgkg: "1ml/10kg"},
    {sl: 5, name: "Inj. Vetopen Lac", comp_val: "Procaine Penicillin + Benzyl Penicillin Sodium", pack: "40 lac vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Urinary tract infections, Pyogenic infections", co: "Opsonin", type: "c", str: "40 Lac/vial", mgkg: "1ml/10kg"},
    {sl: 6, name: "Inj. Duplocillin LA", comp_val: "Procaine Penicillin + Benzathine Penicillin", pack: "100 ml bottle", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Long acting - Gram positive infections", co: "MSD Animal Health", type: "c", str: "300,000 IU/ml", mgkg: "1ml/25kg"},
    {sl: 7, name: "Inj. Streptopen 2.5g", comp_val: "Procaine Penicillin + Benzyl Penicillin + Streptomycin", pack: "2.5 gm vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.1, unit: "ml", ind: "Respiratory, Uterine & Mastitis", co: "Renata", type: "c", str: "2.5g/vial", mgkg: "1ml/10kg"},
    {sl: 8, name: "Inj. Strepcin-G 2.5g", comp_val: "Procaine Penicillin + Benzyl Penicillin + Streptomycin", pack: "2.5 gm vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.1, unit: "ml", ind: "Septicemia, Cystitis, Joint-ill", co: "Opsonin", type: "c", str: "2.5g/vial", mgkg: "1ml/10kg"},
    {sl: 9, name: "Inj. SP-Vet", comp_val: "Procaine Penicillin + Benzyl Penicillin + Streptomycin", pack: "2.5 gm vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.1, unit: "ml", ind: "Secondary bacterial infections", co: "Acme", type: "c", str: "2.5g/vial", mgkg: "1ml/10kg"},
    {sl: 10, name: "Inj. Strepto-p", comp_val: "Procaine Penicillin + Benzyl Penicillin + Streptomycin", pack: "2.5 gm vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.1, unit: "ml", ind: "Gram positive & negative infections", co: "ACI", type: "c", str: "2.5g/vial", mgkg: "1ml/10kg"},
    {sl: 11, name: "Inj. Streptocillin", comp_val: "Procaine Penicillin + Benzyl Penicillin + Streptomycin", pack: "2.5 gm vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.1, unit: "ml", ind: "Respiratory & Alimentary tract infections", co: "Techno", type: "c", str: "2.5g/vial", mgkg: "1ml/10kg"},
    {sl: 12, name: "Inj. Ampicin-Vet", comp_val: "Ampicillin Sodium", pack: "2 gm vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Pneumonia, Calf scour, Salmonellosis", co: "Square", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 13, name: "Inj. Picilin vet", comp_val: "Ampicillin Sodium", pack: "2 gm vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Metritis, Mastitis, Black quarter", co: "Popular", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 14, name: "Inj. Bipilin DS", comp_val: "Ampicillin Sodium", pack: "2 gm vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Joint infection, Kidney infection", co: "Opsonin", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 15, name: "Inj. Acipilline", comp_val: "Ampicillin Sodium", pack: "2 gm vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Infected wound, HS, Foot rot", co: "ACI", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 16, name: "Inj. Hicomox", comp_val: "Amoxicillin Sodium", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Mastitis, Gastroenteritis, Calf scour", co: "Opsonin", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 17, name: "Inj. Moxacil-Vet", comp_val: "Amoxicillin Sodium", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Bronchopneumonia, Umbilical infection", co: "Square", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 18, name: "Inj. Moxilin Vet 1 gm", comp_val: "Amoxicillin Sodium", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Joint infection, UTI, HS", co: "Acme", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 19, name: "Inj. Renamox 1 gm", comp_val: "Amoxicillin Sodium", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Pharyngitis, Foot rot, Fever", co: "Renata", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 20, name: "Inj. Acimox Vet", comp_val: "Amoxicillin Sodium", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Bacterial infections in livestock", co: "ACI", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 21, name: "Inj. Amoxyvet", comp_val: "Amoxicillin Sodium", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Pharyngitis, Bronchopneumonia", co: "Techno", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 22, name: "Inj. Fimox Vet", comp_val: "Amoxicillin Sodium", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Black quarter, Joint infection", co: "Popular", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 23, name: "Inj. Moxilin Vet LA", comp_val: "Amoxicillin trihydrate", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Long acting - Respiratory & Alimentary", co: "Acme", type: "c", str: "150mg/ml", mgkg: "15mg/kg"},
    {sl: 24, name: "Inj. Fimox DS Vet", comp_val: "Amoxicillin Sodium", pack: "2 gm vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Mastitis, Metritis, Calf scour", co: "Popular", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 25, name: "Inj. Aject DS Vet", comp_val: "Amoxicillin Sodium", pack: "2 gm vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Bacterial infections in ruminants", co: "SK+F", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 26, name: "Bol. Moxilin vet", comp_val: "Amoxicillin Trihydrate", pack: "1 gm bolus", safe: "Safe", pet: "Safe", base: 0.008, unit: "bolus", ind: "Oral antibiotic for Livestock", co: "Acme", type: "c", str: "1g/bol", mgkg: "8mg/kg"},
    {sl: 27, name: "Bol. Renamox", comp_val: "Amoxicillin", pack: "500 mg bolus", safe: "Safe", pet: "Safe", base: 0.02, unit: "bolus", ind: "Bacterial infections in small ruminants", co: "Renata", type: "c", str: "500mg/bol", mgkg: "10mg/kg"},
    {sl: 28, name: "Bol. Navamox vet", comp_val: "Amoxicillin", pack: "500 mg bolus", safe: "Safe", pet: "Safe", base: 0.02, unit: "bolus", ind: "Salmonellosis, Calf scour", co: "Navana", type: "c", str: "500mg/bol", mgkg: "10mg/kg"},
    {sl: 29, name: "Inj. Augment Vet 1.2g", comp_val: "Amoxicillin + Clavulanic Acid", pack: "1.2 gm vial", safe: "Safe", pet: "Safe", base: 0.035, unit: "ml", ind: "Mastitis, Metritis, Pneumonia", co: "SK+F", type: "c", str: "120mg/ml", mgkg: "7mg/kg"},
    {sl: 30, name: "Inj. Amoclav 1.2g", comp_val: "Amoxicillin + Clavulanic Acid", pack: "1.2 gm vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Gastroenteritis, Pharyngitis", co: "Techno", type: "c", str: "120mg/ml", mgkg: "12mg/kg"},
    {sl: 31, name: "Inj. Moxaclav 1.2g", comp_val: "Amoxicillin + Clavulanic Acid", pack: "1.2 gm vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Joint infection, UTI, HS", co: "Square", type: "c", str: "120mg/ml", mgkg: "12mg/kg"},
    {sl: 32, name: "Inj. Augment Vet 2.4g", comp_val: "Amoxicillin + Clavulanic Acid", pack: "2.4 gm vial", safe: "Safe", pet: "Safe", base: 0.035, unit: "ml", ind: "Severe bacterial infections", co: "SK+F", type: "c", str: "240mg/ml", mgkg: "7mg/kg"},
    {sl: 33, name: "Bol. Moxilin-CV Vet", comp_val: "Amoxicillin + Clavulanic Acid", pack: "500 mg Bolus", safe: "Safe", pet: "Safe", base: 0.0125, unit: "bolus", ind: "Bacterial diarrhea, Pneumonia", co: "Acme", type: "c", str: "500mg/bol", mgkg: "10mg/kg"},
    {sl: 34, name: "Bol. Moxilin-CV DS Vet", comp_val: "Amoxicillin + Clavulanic Acid", pack: "1000 mg Bolus", safe: "Safe", pet: "Safe", base: 0.006, unit: "bolus", ind: "Chronic respiratory infections", co: "Acme", type: "c", str: "1000mg/bol", mgkg: "10mg/kg"},
    {sl: 35, name: "Inj. Triject vet", comp_val: "Ceftriaxone", pack: "250 mg vial", safe: "Safe", pet: "Safe", base: 0.06, unit: "ml", ind: "Septicemia, Bone & Joint infections", co: "SK+F", type: "c", str: "50mg/ml", mgkg: "15-50mg/kg"},
    {sl: 36, name: "Inj. ACICEF-3 (Vet)", comp_val: "Ceftriaxone", pack: "250 mg vial", safe: "Safe", pet: "Safe", base: 0.06, unit: "ml", ind: "Respiratory & Uro-genital infections", co: "ACI", type: "c", str: "50mg/ml", mgkg: "15-50mg/kg"},
    {sl: 37, name: "Inj. Eracef vet", comp_val: "Ceftriaxone", pack: "250 mg vial", safe: "Safe", pet: "Safe", base: 0.06, unit: "ml", ind: "Skin & Soft tissue infections", co: "Popular", type: "c", str: "50mg/ml", mgkg: "15-50mg/kg"},
    {sl: 38, name: "Inj. Trizon Vet", comp_val: "Ceftriaxone", pack: "250 mg vial", safe: "Safe", pet: "Safe", base: 0.06, unit: "ml", ind: "Calf scours, Enteritis, Diarrhoea", co: "Acme", type: "c", str: "50mg/ml", mgkg: "15-50mg/kg"},
    {sl: 39, name: "Inj. Inject-Vet", comp_val: "Ceftriaxone", pack: "500 mg vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Mastitis, Meningitis, Pre-operative", co: "SK+F", type: "c", str: "250mg/ml", mgkg: "10mg/kg"},
    {sl: 40, name: "Inj. Cefixon Vet", comp_val: "Ceftriaxone", pack: "500 mg vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Post-operative bacterial infections", co: "Techno", type: "c", str: "250mg/ml", mgkg: "10mg/kg"},
    {sl: 41, name: "Inj. Renacef vet 1 gm", comp_val: "Ceftriaxone", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.035, unit: "ml", ind: "Septicemia, Severe Pneumonia", co: "Renata", type: "c", str: "285mg/ml", mgkg: "10mg/kg"},
    {sl: 42, name: "Inj. Bovixon Vet 1 gm", comp_val: "Ceftriaxone", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Bone & Joint infections, Metritis", co: "Incepta", type: "c", str: "250mg/ml", mgkg: "10mg/kg"},
    {sl: 43, name: "Inj. Renacef vet 2 gm", comp_val: "Ceftriaxone", pack: "2 gm vial", safe: "Safe", pet: "Safe", base: 0.035, unit: "ml", ind: "Large animal systemic infections", co: "Renata", type: "c", str: "285mg/ml", mgkg: "10mg/kg"},
    {sl: 44, name: "Inj. Tifur Vet 0.25g, 0.5g", comp_val: "Ceftiofur Sodium", pack: "0.25 g vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Shipping fever, Pneumonia, Foot rot", co: "Acme", type: "c", str: "50mg/ml", mgkg: "1.1-2.2mg/kg"},
    {sl: 45, name: "Inj. Dedicef vet 0.5g", comp_val: "Ceftiofur Sodium", pack: "0.5 gm vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Endometritis, Postpuerperial metritis", co: "SK+F", type: "c", str: "50mg/ml", mgkg: "2mg/kg"},
    {sl: 46, name: "Inj. Ceftiren Vet 0.5g", comp_val: "Ceftiofur Sodium", pack: "0.5 gm vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Pyometra, Respiratory diseases", co: "Renata", type: "c", str: "50mg/ml", mgkg: "2mg/kg"},
    {sl: 47, name: "Inj. Xfur 0.5g", comp_val: "Ceftiofur Sodium", pack: "0.5 gm vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Bovine respiratory diseases", co: "Techno", type: "c", str: "50mg/ml", mgkg: "2mg/kg"},
    {sl: 48, name: "Inj. Acicef-4 0.5g", comp_val: "Ceftiofur Sodium", pack: "0.5 gm vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Bovine respiratory diseases", co: "ACI", type: "c", str: "50mg/ml", mgkg: "2mg/kg"},
    {sl: 49, name: "Inj. PaXXcell 1g", comp_val: "Ceftiofur Sodium", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Endometritis, Pyometra", co: "ACI", type: "c", str: "50mg/ml", mgkg: "2mg/kg"},
    {sl: 50, name: "Inj. Enrotril Max", comp_val: "Enrofloxacin", pack: "20 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.076, unit: "ml", ind: "Mastitis, Diarrhoea, Respiratory infection", co: "Axon", type: "c", str: "100mg/ml", mgkg: "7.5mg/kg"},
    {sl: 51, name: "ENROVET", comp_val: "Enrofloxacin", pack: "100 ml bottle", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Secondary bacterial Infection", co: "Acme", type: "c", str: "100mg/ml", mgkg: "N/A"},
    {sl: 52, name: "Enroflox", comp_val: "Enrofloxacin", pack: "100 ml bottle", safe: "Unsafe", pet: "Unsafe", base: 0.2, unit: "ml", ind: "Respiratory & GI infections", co: "Acme", type: "c", str: "100mg/ml", mgkg: "20mg/kg"},

    {sl: 53, name: "Inj. Marbo Vet", comp_val: "Marbofloxacin", pack: "30 ml vial", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "ml", ind: "Acute mastitis, Severe respiratory infections", co: "SK+F", type: "c", str: "100mg/ml", mgkg: "2mg/kg"},
    {sl: 54, name: "Inj. Marbores 10%", comp_val: "Marbofloxacin", pack: "20 ml vial", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "ml", ind: "Neonatal gastro-enteritis, Pneumonia", co: "ACI", type: "c", str: "100mg/ml", mgkg: "2mg/kg"},
    {sl: 55, name: "Inj. Marboflox", comp_val: "Marbofloxacin", pack: "10 ml vial", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "ml", ind: "Gram positive & negative infections", co: "Bridge", type: "c", str: "100mg/ml", mgkg: "2mg/kg"},
    {sl: 56, name: "Inj. Arbocin Vet", comp_val: "Marbofloxacin", pack: "10 ml vial", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "ml", ind: "Severe Pneumonia, Mastitis", co: "Acme", type: "c", str: "100mg/ml", mgkg: "2mg/kg"},
    {sl: 57, name: "Bol. Marbo Vet", comp_val: "Marbofloxacin", pack: "50 mg bolus", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "bolus", ind: "Oral therapy for Calves", co: "SK+F", type: "c", str: "50mg/bol", mgkg: "1mg/kg"},
    {sl: 58, name: "Bol. Marquin Vet", comp_val: "Marbofloxacin", pack: "50 mg bolus", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "bolus", ind: "Oral antibiotic for small ruminants", co: "Navana", type: "c", str: "50mg/bol", mgkg: "1mg/kg"},
    {sl: 59, name: "Inj. Moraxacin-Vet", comp_val: "Marbofloxacin", pack: "30 ml vial", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "ml", ind: "Acute mastitis, Alimentary infections", co: "Square", type: "c", str: "100mg/ml", mgkg: "2mg/kg"},
 
    {sl: 60, name: "Inj. Ciprocin-Vet", comp_val: "Ciprofloxacin", pack: "50 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anthrax, Mastitis, Foot Rot", co: "Square", type: "c", str: "50mg/ml", mgkg: "5mg/kg"},
    {sl: 61, name: "Inj. Beuflox Vet", comp_val: "Ciprofloxacin", pack: "50 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Respiratory & Urinary infections", co: "Incepta", type: "c", str: "50mg/ml", mgkg: "5mg/kg"},
    {sl: 62, name: "Inj. Cetraxal", comp_val: "Ciprofloxacin", pack: "50 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "GI infection, Enteritis", co: "Acme", type: "c", str: "50mg/ml", mgkg: "5mg/kg"},
    {sl: 63, name: "Inj. Cipro-A Vet", comp_val: "Ciprofloxacin", pack: "100 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Swine dysentery, Anthrax", co: "Acme", type: "c", str: "50mg/ml", mgkg: "5mg/kg"},
    {sl: 64, name: "Inj. Civox Vet", comp_val: "Ciprofloxacin", pack: "50 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Skin, Bone & Ear infections", co: "Popular", type: "c", str: "50mg/ml", mgkg: "5mg/kg"},
    {sl: 65, name: "Inj. Ciproflox", comp_val: "Ciprofloxacin", pack: "50 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Metritis, UTI, Respiratory infections", co: "SK+F", type: "c", str: "50mg/ml", mgkg: "5mg/kg"},
    {sl: 66, name: "Inj. Acivet Cipro", comp_val: "Ciprofloxacin", pack: "50 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "General bacterial infections", co: "ACI", type: "c", str: "50mg/ml", mgkg: "5mg/kg"},
    {sl: 67, name: "Inj. Ciprotab", comp_val: "Ciprofloxacin", pack: "50 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Bacterial systemic infections", co: "Techno", type: "c", str: "50mg/ml", mgkg: "5mg/kg"},
    {sl: 68, name: "Bol. Civox vet", comp_val: "Ciprofloxacin", pack: "1 gm bolus", safe: "Unsafe", pet: "Safe", base: 0.01, unit: "bolus", ind: "Oral therapy for Cattle", co: "Popular", type: "c", str: "1g/bol", mgkg: "5-10mg/kg"},
    {sl: 69, name: "Bol. Cipro-A vet", comp_val: "Ciprofloxacin", pack: "1 gm bolus", safe: "Unsafe", pet: "Safe", base: 0.01, unit: "bolus", ind: "Oral therapy for Cattle", co: "ACME", type: "c", str: "1g/bol", mgkg: "5-10mg/kg"},
    {sl: 70, name: "Bol. Ciprocin vet", comp_val: "Ciprofloxacin", pack: "1 gm bolus", safe: "Unsafe", pet: "Safe", base: 0.01, unit: "bolus", ind: "Oral therapy for Cattle", co: "Popular", type: "c", str: "1g/bol", mgkg: "5-10mg/kg"},
    {sl: 71, name: "Bol. Proxacin", comp_val: "Ciprofloxacin", pack: "1 gm bolus", safe: "Unsafe", pet: "Safe", base: 0.01, unit: "bolus", ind: "Enteritis, UTI infections", co: "Bridge", type: "c", str: "1g/bol", mgkg: "6.7-13.4mg/kg"},
    {sl: 72, name: "Inj. DFN Vet", comp_val: "Danofloxacin Mesylate", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Respiratory disease, Enteric infections", co: "SK+F", type: "c", str: "25mg/ml", mgkg: "1.25mg/kg"},
  
    {sl: 73, name: "Inj. Otetra-Vet", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.2, unit: "ml", ind: "HS, BQ, Anaplasmosis, Foot-rot", co: "Square", type: "c", str: "50mg/ml", mgkg: "10mg/kg"},
    {sl: 74, name: "Inj. Renamycin-50", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.2, unit: "ml", ind: "Pneumonia, Metritis, Navel ill", co: "Renata", type: "c", str: "50mg/ml", mgkg: "10mg/kg"},
    {sl: 75, name: "Inj. Renamycin IM", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.2, unit: "ml", ind: "Bacterial enteritis, Leptospirosis", co: "Renata", type: "c", str: "50mg/ml", mgkg: "10mg/kg"},
    {sl: 76, name: "Inj. Chemycin-50", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.2, unit: "ml", ind: "General bacterial infections", co: "Chemist", type: "c", str: "50mg/ml", mgkg: "10mg/kg"},
    {sl: 77, name: "Inj. Technomycin-50", comp_val: "Oxytetracycline + Lignocaine", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.2, unit: "ml", ind: "Bacterial infections with pain relief", co: "Techno", type: "c", str: "50mg/ml", mgkg: "10mg/kg"},
    {sl: 78, name: "Inj. Renamycin-100", comp_val: "Oxytetracycline", pack: "100 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Severe HS, BQ, Anaplasmosis", co: "Renata", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 79, name: "Inj. Oxyvet-100", comp_val: "Oxytetracycline", pack: "100 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Respiratory & Uterine infections", co: "Globe", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 80, name: "Inj. Vetomycin", comp_val: "Oxytetracycline", pack: "100 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Systemic bacterial infections", co: "Opsonin", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 81, name: "Inj. Otetra-Vet LA", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Long acting - HS, BQ, Anaplasmosis", co: "Square", type: "c", str: "200mg/ml", mgkg: "20mg/kg"},
    {sl: 82, name: "Inj. Chemycin LA", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Long acting - HS, BQ, Anaplasmosis", co: "Chemist", type: "c", str: "200mg/ml", mgkg: "20mg/kg"},
    {sl: 83, name: "Inj. Renamycin LA", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Long acting - HS, BQ, Anaplasmosis", co: "Renata", type: "c", str: "200mg/ml", mgkg: "20mg/kg"},
    {sl: 84, name: "Inj. Technomycin LA", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Long acting - HS, BQ, Anaplasmosis", co: "Techno", type: "c", str: "200mg/ml", mgkg: "20mg/kg"},
    {sl: 85, name: "Inj. TetraVet LA", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Long acting - HS, BQ, Anaplasmosis", co: "ACME", type: "c", str: "200mg/ml", mgkg: "20mg/kg"},
    {sl: 86, name: "Inj. Eskamycin LA", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.2, unit: "ml", ind: "HS, BQ, Anaplasmosis, Foot-rot", co: "SK+F", type: "c", str: "50mg/ml", mgkg: "10mg/kg"},
    {sl: 87, name: "Bol. Chemycin", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Long acting - HS, BQ, Anaplasmosis", co: "Chemist", type: "c", str: "200mg/ml", mgkg: "20mg/kg"},
    {sl: 88, name: "Bol. Vetomycin", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Long acting - HS, BQ, Anaplasmosis", co: "Opsonin", type: "c", str: "200mg/ml", mgkg: "20mg/kg"},
    {sl: 89, name: "Bol. OTC Vet", comp_val: "Oxytetracycline", pack: "500 mg bolus", safe: "Unsafe", pet: "Unsafe", base: 0.02, unit: "bolus", ind: "Oral deworming & Bacterial control", co: "Popular", type: "c", str: "500mg/bol", mgkg: "10-20mg/kg"},
    {sl: 90, name: "Bol. Technomycin", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Long acting - HS, BQ, Anaplasmosis", co: "Techno", type: "c", str: "200mg/ml", mgkg: "20mg/kg"},
    {sl: 91, name: "Bol. Tetravet", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Long acting - HS, BQ, Anaplasmosis", co: "Acme", type: "c", str: "200mg/ml", mgkg: "20mg/kg"},
    {sl: 92, name: "Inj. Genacyn-Vet 10", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "UTI, Respiratory, Septicemia", co: "Square", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    {sl: 93, name: "Inj. Acigent-10", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "UTI, Respiratory, Septicemia", co: "ACI", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    {sl: 94, name: "Inj. Genta-10", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "UTI, Respiratory, Septicemia", co: "ACME", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    {sl: 95, name: "Inj. Gentabac Vet", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "UTI, Respiratory, Septicemia", co: "Popular", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    {sl: 96, name: "Inj. Acigan vet 5", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "UTI, Respiratory, Septicemia", co: "ACI", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    {sl: 97, name: "Inj. Gentacin 5%", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "UTI, Respiratory, Septicemia", co: "Techno", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    {sl: 98, name: "Inj. Gentamin 5%", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "UTI, Respiratory, Septicemia", co: "Opsonin", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    {sl: 99, name: "Inj. Gentaren", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "UTI, Respiratory, Septicemia", co: "Renata", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    {sl: 100, name: "Inj. Intamycin", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "UTI, Respiratory, Septicemia", co: "Incepta", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    {sl: 101, name: "Inj. Reganta 10%", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "UTI, Respiratory, Septicemia", co: "Bengal", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    {sl: 102, name: "Inj. Gentasone-5", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "UTI, Respiratory, Septicemia", co: "Chemist", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},

    {sl: 103, name: "Pulv. Neoxel Vet", comp_val: "Neomycin Sulphate USP 500 mg.", pack: "10 gm, 100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Salmonellosis, Campylobacteriosis, Pasturellosis, Listeriosis, Staphylococcosis", co: "SK+F", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 104, name: "Pulv. N-cin Vet", comp_val: "Neomycin Sulphate USP 500 mg.", pack: "10 gm, 100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Salmonellosis, Campylobacteriosis, Pasturellosis, Listeriosis, Staphylococcosis", co: "ACI", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 105, name: "Pulv. NeoVet", comp_val: "Neomycin Sulphate USP 500 mg.", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Salmonellosis, Campylobacteriosis, Pasturellosis, Listeriosis, Staphylococcosis", co: "Techno", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 106, name: "Pulv. Nimocin Vet", comp_val: "Neomycin Sulphate USP 500 mg.", pack: "10 gm, 100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Salmonellosis, Campylobacteriosis, Pasturellosis, Listeriosis, Staphylococcosis", co: "ACME", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 107, name: "Pulv. Neoren", comp_val: "Neomycin Sulphate USP 500 mg.", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Salmonellosis, Campylobacteriosis, Pasturellosis, Listeriosis, Staphylococcosis", co: "Renata", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 108, name: "Inj. Prycin Vet", comp_val: "Apramycincin Sulphate BP 200mg", pack: "10 ml, 30 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: " bacterial enteritis, colibacillosis, salmonellosis, respiratory infections", co: "ACME", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
 
    {sl: 109, name: "Inj. Diadin Vet", comp_val: "Sulphadimidine Sodium 33.3%", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.3, unit: "ml", ind: "Pneumonia, Footrot, Enteritis", co: "Renata", type: "c", str: "333mg/ml", mgkg: "100-200mg/kg"},
    {sl: 110, name: "Inj. Dimidin Vet", comp_val: "Sulphadimidine Sodium 33.3%", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.3, unit: "ml", ind: "Pneumonia, Footrot, Enteritis", co: "Techno", type: "c", str: "333mg/ml", mgkg: "100-200mg/kg"},
    {sl: 111, name: "Inj. Dimi Vet", comp_val: "Sulphadimidine Sodium 33.3%", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.3, unit: "ml", ind: "Pneumonia, Footrot, Enteritis", co: "Square", type: "c", str: "333mg/ml", mgkg: "100-200mg/kg"},
    {sl: 112, name: "Inj. Sulfasol-Vet", comp_val: "Sulphadimidine Sodium 33.3%", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.3, unit: "ml", ind: "Pneumonia, Footrot, Enteritis", co: "ACME", type: "c", str: "333mg/ml", mgkg: "100-200mg/kg"},

    {sl: 113, name: "Bol. Diadin Vet", comp_val: "Sulphadimidine 5 gm", pack: "5 gm Bolus", safe: "Unsafe", pet: "Safe(Caution)", inst: "Initial dose: 1 bol/50kg", ind: "Oral Coccidiosis, Enteritis", co: "Renata", type: "f", str: "5g", mgkg: "100-200mg/kg"},
    {sl: 114, name: "Bol. Sulfasol-Vet", comp_val: "Sulphadimidine 5 gm", pack: "5 gm Bolus", safe: "Unsafe", pet: "Safe(Caution)", inst: "Initial dose: 1 bol/50kg", ind: "Oral Coccidiosis, Enteritis", co: "ACME", type: "f", str: "5g", mgkg: "100-200mg/kg"},
    {sl: 115, name: "Bol. Salmid", comp_val: "Sulphadimidine 5 gm", pack: "5 gm Bolus", safe: "Unsafe", pet: "Safe(Caution)", inst: "Initial dose: 1 bol/50kg", ind: "Oral Coccidiosis, Enteritis", co: "Opsonin", type: "f", str: "5g", mgkg: "100-200mg/kg"},
    
    {sl: 116, name: "Bol. Sulpha 3", comp_val: "Sulphadiazine-1.666 gm, Sulphadimidine-1.666 gm, Sulphapyridine-1.666 gm", pack: "10 x 2 Bolus", safe: "Unsafe", pet: "Safe(Caution)", inst: "1 bolus per 50kg", ind: "Calf scour, Footrot", co: "Renata", type: "f", str: "5g", mgkg: "100-200mg/kg"},
    {sl: 117, name: "Bol. Sulpha Plus", comp_val: "Sulphadiazine-1.666 gm, Sulphadimidine-1.666 gm, Sulphapyridine-1.666 gm", pack: "10 x 2 Bolus", safe: "Unsafe", pet: "Safe(Caution)", inst: "1 bolus per 50kg", ind: "Calf scour, Footrot", co: "Renata", type: "f", str: "5g", mgkg: "100-200mg/kg"},
    {sl: 118, name: "Bol. Triplex vet", comp_val: "Sulphadiazine-1.666 gm, Sulphadimidine-1.666 gm, Sulphapyridine-1.666 gm", pack: "10 x 2 Bolus", safe: "Unsafe", pet: "Safe(Caution)", inst: "1 bolus per 50kg", ind: "Calf scour, Footrot", co: "Square", type: "f", str: "5g", mgkg: "100-200mg/kg"},
    {sl: 119, name: "Bol. Bactrim", comp_val: "Sulphadiazine-1.666 gm, Sulphadimidine-1.666 gm, Sulphapyridine-1.666 gm", pack: "10 x 2 Bolus", safe: "Unsafe", pet: "Safe(Caution)", inst: "1 bolus per 50kg", ind: "Calf scour, Footrot", co: "ACI", type: "f", str: "5g", mgkg: "100-200mg/kg"},
    {sl: 120, name: "Bol. Trisulpha", comp_val: "Sulphadiazine-1.666 gm, Sulphadimidine-1.666 gm, Sulphapyridine-1.666 gm", pack: "10 x 2 Bolus", safe: "Unsafe", pet: "Safe(Caution)", inst: "1 bolus per 50kg", ind: "Calf scour, Footrot", co: "Novartis", type: "f", str: "5g", mgkg: "100-200mg/kg"},
    {sl: 121, name: "Bol. Sulphadin vet", comp_val: "Sulphadiazine-1.666 gm, Sulphadimidine-1.666 gm, Sulphapyridine-1.666 gm", pack: "10 x 2 Bolus", safe: "Unsafe", pet: "Safe(Caution)", inst: "1 bolus per 50kg", ind: "Calf scour, Footrot", co: "ACME", type: "f", str: "5g", mgkg: "100-200mg/kg"},
    {sl: 122, name: "Bol. Sulfon", comp_val: "Sulphadiazine-1.666 gm, Sulphadimidine-1.666 gm, Sulphapyridine-1.666 gm", pack: "10 x 2 Bolus", safe: "Unsafe", pet: "Safe(Caution)", inst: "1 bolus per 50kg", ind: "Calf scour, Footrot", co: "Opsonin", type: "f", str: "5g", mgkg: "100-200mg/kg"},
    {sl: 123, name: "Bol. 3 Sulfa", comp_val: "Sulphadiazine-1.666 gm, Sulphadimidine-1.666 gm, Sulphapyridine-1.666 gm", pack: "10 x 2 Bolus", safe: "Unsafe", pet: "Safe(Caution)", inst: "1 bolus per 50kg", ind: "Calf scour, Footrot", co: "Popular", type: "f", str: "5g", mgkg: "100-200mg/kg"},
    {sl: 124, name: "Bol. Sulfamide-3", comp_val: "Sulphadiazine-1.666 gm, Sulphadimidine-1.666 gm, Sulphapyridine-1.666 gm", pack: "10 x 2 Bolus", safe: "Unsafe", pet: "Safe(Caution)", inst: "1 bolus per 50kg", ind: "Calf scour, Footrot", co: "SK+F", type: "f", str: "5g", mgkg: "100-200mg/kg"},
    {sl: 125, name: "Bol. Sulphadin", comp_val: "Sulphadiazine-1.666 gm, Sulphadimidine-1.666 gm, Sulphapyridine-1.666 gm", pack: "10 x 2 Bolus", safe: "Unsafe", pet: "Safe(Caution)", inst: "1 bolus per 50kg", ind: "Calf scour, Footrot", co: "ACME", type: "f", str: "5g", mgkg: "100-200mg/kg"},

    {sl: 126, name: "Bol. Remetrim Vet", comp_val: "Sulfadiazine + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", inst: "1 bolus per 30-40kg", ind: "Pneumonia, Urogenital", co: "Bengal", type: "f", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 127, name: "Bol. Renatrim Vet", comp_val: "Sulfadiazine + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", inst: "1 bolus per 30-40kg", ind: "Pneumonia, Urogenital", co: "Renata", type: "f", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 128, name: "Bol. Sulphatrim", comp_val: "Sulfadiazine + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", inst: "1 bolus per 30-40kg", ind: "Pneumonia, Urogenital", co: "Techno", type: "f", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 129, name: "Bol. Eskatrim", comp_val: "Sulfadiazine + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", inst: "1 bolus per 30-40kg", ind: "Pneumonia, Urogenital", co: "SK+F", type: "f", str: "Combo", mgkg: "15-30mg/kg"},


    
    {sl: 130, name: "Bol. Cotrim-Vet", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", inst: "1 bolus per 30-40kg", ind: "Metritis, Bronchitis", co: "Square", type: "f", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 131, name: "Bol. Politrim Vet", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", inst: "1 bolus per 30-40kg", ind: "Metritis, Bronchitis", co: "ACME", type: "f", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 132, name: "Bol. Cidacot Vet", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", inst: "1 bolus per 30-40kg", ind: "Metritis, Bronchitis", co: "Opsonin", type: "f", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 133, name: "Bol. Remetrim Vet", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", inst: "1 bolus per 30-40kg", ind: "Metritis, Bronchitis", co: "Bengal", type: "f", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 134, name: "Bol. Incotim Vet", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", inst: "1 bolus per 30-40kg", ind: "Metritis, Bronchitis", co: "Incepta", type: "f", str: "Combo", mgkg: "15-30mg/kg"},



    {sl: 135, name: "Susp. A-Mycin", comp_val: "Erythromycin: 25 mg/m", pack: "100 ml Bottle", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Gram Positive Infections", co: "Aristopharma", type: "c", str: "5%", mgkg: "12mg/kg"},
    {sl: 136, name: "Susp. Eromycin", comp_val: "Erythromycin: 25 mg/m", pack: "100 ml Bottle", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Gram Positive Infections", co: "Square", type: "c", str: "5%", mgkg: "12mg/kg"},
    {sl: 137, name: "Pediatric drop A Mycin", comp_val: "Erythromycin: 25 mg/m", pack: "60 ml Bottle", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Gram Positive Infections", co: "Aristopharma", type: "c", str: "5%", mgkg: "12mg/kg"},
    {sl: 138, name: "Pediatric drop Eromycin", comp_val: "Erythromycin: 25 mg/m", pack: "60 ml Bottle", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Gram Positive Infections", co: "Square", type: "c", str: "5%", mgkg: "12mg/kg"},
    {sl: 139, name: "ERYTHROMYCIN 20%", comp_val: "Erythromycin: 25 mg/m", pack: "500g Plastic Jar, Aluminium Sachet 100g", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Gram Positive Infections", co: "Univet", type: "c", str: "5%", mgkg: "12mg/kg"},


    {sl: 140, name: "Pulv. TyloVet", comp_val: "Tylosin Tartrate 200 mg", pack: "100gm, 1kg", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "mg", ind: "Chronic respiratory diseases", co: "ACME", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 141, name: "Pulv. Tylochem", comp_val: "Tylosin Tartrate 200 mg", pack: "10g, 100gm, 1kg", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "mg", ind: "Chronic respiratory diseases", co: "Chemist", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 142, name: "Pulv. Tylosef", comp_val: "Tylosin Tartrate 200 mg", pack: "10g, 100gm, 1kg", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "mg", ind: "Chronic respiratory diseases", co: "SK+F", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 143, name: "Pulv. Tylorest", comp_val: "Tylosin Tartrate 200 mg", pack: "100gm, 1kg", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "mg", ind: "Chronic respiratory diseases", co: "Incepta", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 144, name: "Pulv. Tylosin", comp_val: "Tylosin Tartrate 200 mg", pack: "100gm, 500 gm", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "mg", ind: "Chronic respiratory diseases", co: "Techno", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 145, name: "Pulv. Tam-Vet", comp_val: "Tylosin Tartrate 200 mg", pack: "100gm, 500gm", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "mg", ind: "Chronic respiratory diseases", co: "Square", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 146, name: "Inj. Tylobac Vet", comp_val: "Tylosin Tartrate 200 mg", pack: "100 ml vial", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Chronic respiratory diseases", co: "Bot Plus", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 147, name: "Inj. TYLO-PC Gold", comp_val: "Tylosin tartrate- 57.5 mg, Thiamphenicol- 200 mg, Prednisolone acetate- 5mg,", pack: "50ml, 100 ml Vial", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Pneumonia and foot rot treatment", co: "ACI", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 148, name: "Pulv. Doty Vet", comp_val: "Tylosin+Doxycycline(20%+10%)", pack: "100gm", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "mg", ind: "Chronic respiratory diseases", co: "Popular", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},

    

    {sl: 149, name: "Sol. Tilmibac", comp_val: "Tilmicosin Phosphate 250 mg", pack: "100 ml, 250 ml, 500 ml", safe: "Safe", pet: "Unknown", inst: "1 ml per 20 kg twice daily for 5 days", ind: "Mannheimia haemolytica, Pasteurella multocida, Mycoplasma bovis, M. dispar, Actinobacillus spp.,Actinomyces spp.", co: "Popular", type: "f", str: "High", mgkg: "N/A"},
    {sl: 150, name: "Sol. Tilmisin vet", comp_val: "Tilmicosin Phosphate 250 mg", pack: "100 ml, 250 ml, 500 ml", safe: "Safe", pet: "Unknown", inst: "1 ml per 20 kg twice daily for 5 days", ind: "Mannheimia haemolytica, Pasteurella multocida, Mycoplasma bovis, M. dispar, Actinobacillus spp.,Actinomyces spp.", co: "Renata", type: "f", str: "High", mgkg: "N/A"},
    {sl: 151, name: "Sol. Acmetil vet", comp_val: "Tilmicosin Phosphate 250 mg", pack: "100 ml, 250 ml, 500 ml", safe: "Safe", pet: "Unknown", inst: "1 ml per 20 kg twice daily for 5 days", ind: "Mannheimia haemolytica, Pasteurella multocida, Mycoplasma bovis, M. dispar, Actinobacillus spp.,Actinomyces spp.", co: "ACME", type: "f", str: "High", mgkg: "N/A"},
    {sl: 152, name: "Sol. Tilcosin", comp_val: "Tilmicosin Phosphate 250 mg", pack: "100 ml, 250 ml, 500 ml", safe: "Safe", pet: "Unknown", inst: "1 ml per 20 kg twice daily for 5 days", ind: "Mannheimia haemolytica, Pasteurella multocida, Mycoplasma bovis, M. dispar, Actinobacillus spp.,Actinomyces spp.", co: "Square", type: "f", str: "High", mgkg: "N/A"},
    {sl: 153, name: "Sol. Tilvet", comp_val: "Tilmicosin Phosphate 250 mg", pack: "100 ml, 250 ml, 500 ml", safe: "Safe", pet: "Unknown", inst: "1 ml per 20 kg twice daily for 5 days", ind: "Mannheimia haemolytica, Pasteurella multocida, Mycoplasma bovis, M. dispar, Actinobacillus spp.,Actinomyces spp.", co: "Al-Madina", type: "f", str: "High", mgkg: "N/A"},
    {sl: 154, name: "Sol. Avitil", comp_val: "Tilmicosin Phosphate 250 mg", pack: "100 ml, 250 ml, 500 ml", safe: "Safe", pet: "Unknown", inst: "1 ml per 20 kg twice daily for 5 days", ind: "Mannheimia haemolytica, Pasteurella multocida, Mycoplasma bovis, M. dispar, Actinobacillus spp.,Actinomyces spp.", co: "Incepta", type: "f", str: "High", mgkg: "N/A"},
    {sl: 155, name: "Sol. Tilmac", comp_val: "Tilmicosin Phosphate 250 mg", pack: "100 ml, 250 ml, 500 ml", safe: "Safe", pet: "Unknown", inst: "1 ml per 20 kg twice daily for 5 days", ind: "Mannheimia haemolytica, Pasteurella multocida, Mycoplasma bovis, M. dispar, Actinobacillus spp.,Actinomyces spp.", co: "Bridge", type: "f", str: "High", mgkg: "N/A"},
    {sl: 156, name: "Sol. Qtill-S vet", comp_val: "Tilmicosin Phosphate 250 mg", pack: "100 ml, 250 ml, 500 ml", safe: "Safe", pet: "Unknown", inst: "1 ml per 20 kg twice daily for 5 days", ind: "Mannheimia haemolytica, Pasteurella multocida, Mycoplasma bovis, M. dispar, Actinobacillus spp.,Actinomyces spp.", co: "SK+F", type: "f", str: "High", mgkg: "N/A"},
    {sl: 157, name: "Sol. Hytil", comp_val: "Tilmicosin Phosphate 250 mg", pack: "100 ml, 250 ml, 500 ml", safe: "Safe", pet: "Unknown", inst: "1 ml per 20 kg twice daily for 5 days", ind: "Mannheimia haemolytica, Pasteurella multocida, Mycoplasma bovis, M. dispar, Actinobacillus spp.,Actinomyces spp.", co: "Shinil", type: "f", str: "High", mgkg: "N/A"},
    {sl: 158, name: "Sol. Timicosin Phosphate", comp_val: "Tilmicosin Phosphate 250 mg", pack: "100 ml, 250 ml, 500 ml", safe: "Safe", pet: "Unknown", inst: "1 ml per 20 kg twice daily for 5 days", ind: "Mannheimia haemolytica, Pasteurella multocida, Mycoplasma bovis, M. dispar, Actinobacillus spp.,Actinomyces spp.", co: "Popular", type: "f", str: "High", mgkg: "N/A"},



    {sl: 159, name: "Inj. Tulavet", comp_val: "Tulathromycin INN 100 mg/ml", pack: "5 ml, 10 ml", safe: "Safe", pet: "Unknown", inst: "1 ml per 40 kg single dose, repeat @48h IM/SC", ind: "respiratory diseases, infectious keratoconjunctivitis and foot rot", co: "ACME", type: "f", str: "High", mgkg: "N/A"},
    {sl: 160, name: "Inj. Respicon", comp_val: "Tulathromycin INN 100 mg/ml", pack: "5 ml, 10 ml", safe: "Safe", pet: "Unknown", inst: "1 ml per 40 kg single dose, repeat @48h IM/SC", ind: "respiratory diseases, infectious keratoconjunctivitis and foot rot", co: "Navana", type: "f", str: "High", mgkg: "N/A"},




    {sl: 161, name: "Inj. Metro IV", comp_val: "Metronidazole", pack: "100 ml", safe: "N/A", pet: "Safe", base: 1.0, unit: "ml", ind: "Protozoal & Anaerobic infections", co: "OPSO saline", type: "c", str: "5mg/ml", mgkg: "5-10mg/kg"},
    {sl: 162, name: "Inj. Flagyl IV", comp_val: "Metronidazole", pack: "100 ml", safe: "N/A", pet: "Safe", base: 1.0, unit: "ml", ind: "Protozoal & Anaerobic infections", co: "Synovia", type: "c", str: "5mg/ml", mgkg: "5-10mg/kg"},
    {sl: 163, name: "Inj. Filmet IV", comp_val: "Metronidazole", pack: "100 ml", safe: "N/A", pet: "Safe", base: 1.0, unit: "ml", ind: "Protozoal & Anaerobic infections", co: "Beximco", type: "c", str: "5mg/ml", mgkg: "5-10mg/kg"},
    {sl: 164, name: "Bol. Amodis-Vet", comp_val: "Metronidazole BP", pack: "2 gm bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Amoebiasis, Giardiasis, Trichomoniasis", co: "SQUARE", type: "c", str: "2000mg", mgkg: "40-50mg/kg"},
    {sl: 165, name: "Bol. Dirovet", comp_val: "Metronidazole BP", pack: "2 gm bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Amoebiasis, Giardiasis, Trichomoniasis", co: "ACME", type: "c", str: "2000mg", mgkg: "40-50mg/kg"},
    {sl: 166, name: "Bol. Remenid", comp_val: "Metronidazole BP", pack: "2 gm bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Amoebiasis, Giardiasis, Trichomoniasis", co: "Bengal", type: "c", str: "2000mg", mgkg: "40-50mg/kg"},
    {sl: 167, name: "Bol. Metrovet", comp_val: "Metronidazole BP", pack: "2 gm bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Amoebiasis, Giardiasis, Trichomoniasis", co: "TECHNO", type: "c", str: "2000mg", mgkg: "40-50mg/kg"},
    {sl: 168, name: "Bol. Metonid", comp_val: "Metronidazole BP", pack: "2 gm bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Amoebiasis, Giardiasis, Trichomoniasis", co: "POPULAR", type: "c", str: "2000mg", mgkg: "40-50mg/kg"},
    {sl: 169, name: "Bol. Renamet", comp_val: "Metronidazole BP", pack: "2 gm bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Amoebiasis, Giardiasis, Trichomoniasis", co: "RENATA", type: "c", str: "2000mg", mgkg: "40-50mg/kg"},
    {sl: 170, name: "Bol. Zonabac", comp_val: "Metronidazole BP", pack: "2 gm bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Amoebiasis, Giardiasis, Trichomoniasis", co: "OPSONIN", type: "c", str: "2000mg", mgkg: "40-50mg/kg"},
    {sl: 171, name: "Bol. Metrodon", comp_val: "Metronidazole BP", pack: "2 gm bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Amoebiasis, Giardiasis, Trichomoniasis", co: "Chemist", type: "c", str: "2000mg", mgkg: "40-50mg/kg"},
    {sl: 172, name: "Pulv. Dirovet", comp_val: "Metronidazole BP", pack: "100 gm Sachet", safe: "Safe", pet: "N/A", base: 4.0, unit: "gm", ind: "Amoebiasis, Black head, Giardiasis", co: "Acme", type: "c", str: "300mg/gm", mgkg: "48mg/kg"},
    {sl: 173, name: "Pulv. Acimetro vet", comp_val: "Metronidazole BP", pack: "100 gm Sachet", safe: "Safe", pet: "N/A", base: 4.0, unit: "gm", ind: "Amoebiasis, Black head, Giardiasis", co: "ACI", type: "c", str: "300mg/gm", mgkg: "48mg/kg"},


    {sl: 174, name: "Inj. Uni-Flo 30", comp_val: "Florfenicol BP", pack: "100 ml", safe: "Unsafe", pet: "N/A", base: 1.0, unit: "ml", ind: "Respiratory tract infections, Foot rot", co: "ACI", type: "c", str: "300mg/ml", mgkg: "20mg/kg"},
    {sl: 175, name: "Inj. Amflor Vet", comp_val: "Florfenicol BP", pack: "10/30 ml", safe: "Unsafe", pet: "N/A", base: 1.0, unit: "ml", ind: "Respiratory tract infections, Foot rot", co: "Acme", type: "c", str: "300mg/ml", mgkg: "20-40mg/kg"},
    {sl: 176, name: "Inj. Amflor Vet Plus", comp_val: "Florfenicol INN + Flunixin Meglumine", pack: "10/30 ml", safe: "Unsafe", pet: "N/A", base: 1.0, unit: "ml", ind: "BRD with fever or inflammation", co: "Acme", type: "c", str: "300mg+16.5mg/ml", mgkg: "40mg/kg"},
    {sl: 177, name: "Renaflor Vet", comp_val: "Florfenicol INN", pack: "100/500 ml", safe: "Unsafe", pet: "N/A", base: 1.0, unit: "ml", ind: "Poultry respiratory diseases", co: "Renata", type: "c", str: "200mg/ml", mgkg: "30mg/kg"},


    {sl: 178, name: "Inj. Linospin", comp_val: "Lincomycin Hydrochloride + Spectinomycin Sulfate", pack: "50 ml, 100 ml", safe: "Unsafe", pet: "Safe", base: 1.0, unit: "ml", ind: "Respiratory & Gastrointestinal infections", co: "Bridge", type: "c", str: "50mg+100mg/ml", mgkg: "15mg/kg"},
    {sl: 179, name: "Pulv. FRA C12", comp_val: "1-monolaurin and essential oils", pack: "100 gm, 500 gm", safe: "Safe", pet: "N/A", base: 1.0, unit: "gm", ind: "Antibacterial, Antiviral & Immune booster", co: "ACI", type: "c", str: "Balanced mixture", mgkg: "1gm/10kg feed"},
    {sl: 180, name: "Tube: Neomast-forte", comp_val: "Sulfadimezina + Erythromycin + Chinosol + Prednisolone + Trimecaine", pack: "1 gm syringe/tube", safe: "Safe", pet: "N/A", base: 1.0, unit: "syringe", ind: "Mastitis", co: "TECHNO", type: "c", str: "Multi-component", mgkg: "1 syringe/teat"},
    {sl: 181, name: "Syringe. Mastilex", comp_val: "Cephalexin monohydrate + Gentamicin sulfate", pack: "10 ml syringe", safe: "Safe", pet: "N/A", base: 1.0, unit: "syringe", ind: "Mastitis (Gram-positive & Gram-negative)", co: "ACI", type: "c", str: "35mg+3.5mg/ml", mgkg: "1 syringe/quarter"},
    {sl: 182, name: "Tube. Mastijet Forte", comp_val: "Tetracycline + Neomycin + Bacitracin + Prednisolone", pack: "8 gm tube", safe: "Safe", pet: "N/A", base: 1.0, unit: "tube", ind: "Mastitis in lactating cattle", co: "Intervet", type: "c", str: "Multi-component", mgkg: "1 injector/quarter"},
    {sl: 183, name: "Syringe Gentamast", comp_val: "Gentamicin sulfate", pack: "7.5 gm syringe", safe: "Safe", pet: "N/A", base: 1.0, unit: "syringe", ind: "Mastitis", co: "Arifs", type: "c", str: "170mg", mgkg: "1 syringe/quarter"},
    {sl: 184, name: "Mastipra", comp_val: "Erythromycin + Sulphamethoxin + Trimethoprim", pack: "100 ml", safe: "Safe", pet: "N/A", base: 1.0, unit: "tube", ind: "Mastitis", co: "HIPRA", type: "c", str: "50mg+125mg+25mg", mgkg: "1 tube/teat"},
    {sl: 185, name: "Neomast", comp_val: "Procaine penicillin + Neomycin sulfate", pack: "6 gm Prefilled syringe", safe: "Safe", pet: "N/A", base: 1.0, unit: "syringe", ind: "Mastitis", co: "TECHNO", type: "c", str: "500mg+300mg", mgkg: "1 syringe/teat"},
    {sl: 186, name: "Neomas-ripra JR-5", comp_val: "Procaine Benzyl penicillin + Polymixin B + Streptomycin + Neomycin + Sulfadimidin Na + Sulfathiazone + Hydrocortison", pack: "4 tube box", safe: "Safe", pet: "N/A", base: 1.0, unit: "tube", ind: "Acute & Chronic Mastitis", co: "HIPRA", type: "c", str: "Multi-component", mgkg: "1 tube/quarter"},
    {sl: 187, name: "Inj. Mastilex", comp_val: "Cephalixn monohydeate + Gentamycin SO4", pack: "10g/syringe", safe: "Safe", pet: "N/A", base: 1.0, unit: "syringe", ind: "Mastitis", co: "ACI", type: "c", str: "350mg+350mg", mgkg: "1 syringe/teat"},
    {sl: 188, name: "Oint. Mastinil", comp_val: "Gentamicin", pack: "7.5g/syringe", safe: "Safe", pet: "N/A", base: 1.0, unit: "syringe", ind: "Mastitis", co: "TECHNO", type: "c", str: "100mg", mgkg: "1 syringe/teat"},
    {sl: 189, name: "Oint. Gentamast", comp_val: "Gentamicin sulfate", pack: "7.5 gm/syringe", safe: "Safe", pet: "N/A", base: 1.0, unit: "syringe", ind: "Mastitis", co: "Arifs", type: "c", str: "170mg", mgkg: "1 syringe/quarter"},
    {sl: 190, name: "Pulv. Mastinor", comp_val: "Tri Sodium Citrate + Vitamin A, D3, E, H, K + Selenium + Potassium Iodide + Copper, Cobalt, Zinc, Manganese Sulphate + Lactic Acid Bacillus + Live Yeast + Serratiopeptidase + Bromelain + Amino acids", pack: "60 gm sachet", safe: "Safe", pet: "N/A", base: 60.0, unit: "gm", ind: "Prevention and Control of Clinical Mastitis", co: "Popular", type: "c", str: "Multi-nutrient & Enzyme", mgkg: "60gm/day"},
    {sl: 191, name: "Pulv. Masticare plus", comp_val: "Vitamin A + Lactobacillus + Amino Nitrogen + Fortified calcinated base", pack: "100 gm container", safe: "Safe", pet: "N/A", base: 100.0, unit: "gm", ind: "Mastitis management in pregnant and lactating cows", co: "SQUARE", type: "c", str: "Multi-nutrient", mgkg: "30gm BID"},
    {sl: 192, name: "Pulv. No-Masti plus", comp_val: "Bacillus subtilis + 1-Monolaurin + Nano zinc oxide + Sweet chestnut extract + DL-methionine + Calcium carbonate + Essential oil", pack: "100 gm Sachet", safe: "Safe", pet: "Safe", base: 100.0, unit: "gm", ind: "Prevents and controls all types of mastitis in all mammals", co: "ACI", type: "c", str: "Multi-component", mgkg: "25-30gm BID"},
    {sl: 193, name: "Pulv. Masti 29+", comp_val: "29 ingredients for mastitis care", pack: "50gm sachet", safe: "Safe", pet: "N/A", base: 50.0, unit: "gm", ind: "Mastitis care", co: "SK+F", type: "c", str: "Complex mixture", mgkg: "N/A"},
    {sl: 194, name: "Pulv. PROMAST VET", comp_val: "Lactobacillus sp + Live yeast + Serratiopeptidase + Bromelain + Trisodium citrate + Methionine + L-Lysine + Multi-vitamins & Minerals", pack: "120 gm container", safe: "Safe", pet: "N/A", base: 120.0, unit: "gm", ind: "Prevention & supportive therapy of Mastitis", co: "Acme", type: "c", str: "Probiotic, enzyme & mineral combo", mgkg: "60gm daily"},


    {sl: 195, name: "Drop. Civodex vet", comp_val: "Dexamethasone + Ciprofloxacin Hydrochloride", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Eye/Ear infections and inflammation", co: "POPULAR", type: "c", str: "1mg+3mg/ml", mgkg: "2-3 drops"},
    {sl: 196, name: "Drop. Silver Nitrate 1%", comp_val: "AgNO3", pack: "10 ml", safe: "Safe", pet: "N/A", base: 1.0, unit: "drop", ind: "Eye infections/Antiseptic", co: "CHEMIST", type: "c", str: "10mg/ml", mgkg: "2-3 drops"},
    {sl: 197, name: "Drop. Optabac", comp_val: "Chloramphenicol", pack: "10 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Bacterial conjunctivitis", co: "POPULAR", type: "h", str: "5mg/ml", mgkg: "2-3 drops"},
    {sl: 198, name: "Drop. Cipro-A", comp_val: "Ciprofloxacin", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Corneal ulcers/Eye infections", co: "ACME", type: "h", str: "3mg/ml", mgkg: "2-3 drops"},
    {sl: 199, name: "Drop. Genta", comp_val: "Gentamicin", pack: "10 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Bacterial eye infections", co: "RENATA", type: "h", str: "3mg/ml", mgkg: "2-3 drops"},
    {sl: 200, name: "Drop. Genmax HC", comp_val: "Gentamicin + Hydrocortisone Acetate", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Infectious inflammation of eye/ear", co: "OSL Pharma", type: "h", str: "0.3%+1%", mgkg: "2-3 drops"},
    {sl: 201, name: "Drop. Chlorodex", comp_val: "Dexamethasone + Chloramphenicol", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Steroid-responsive eye infections", co: "NIPA", type: "h", str: "1mg+5mg/ml", mgkg: "2-3 drops"},
    {sl: 202, name: "Drop. Dexonex-C", comp_val: "Dexamethasone + Chloramphenicol", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Steroid-responsive eye infections", co: "Square", type: "h", str: "1mg+5mg/ml", mgkg: "2-3 drops"},
    {sl: 203, name: "Drop. Iventi-D", comp_val: "Moxifloxacin + Dexamethasone Phosphate", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Post-operative eye inflammation/infection", co: "Square", type: "h", str: "5mg+0.1mg/ml", mgkg: "2-3 drops"},
    {sl: 204, name: "Drop. Intobac", comp_val: "Tobramycin", pack: "10 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "External eye infections", co: "Incepta", type: "h", str: "3mg/ml", mgkg: "2-3 drops"},
    {sl: 205, name: "Drop. Cinarex", comp_val: "Tobramycin", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "External eye infections", co: "Beximco", type: "h", str: "3mg/ml", mgkg: "2-3 drops"},
    {sl: 206, name: "Drop. Povisep", comp_val: "Povidone Iodine", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Antiseptic for eye surgery/infection", co: "Jayson", type: "h", str: "1.25%", mgkg: "2-3 drops"},
    {sl: 207, name: "Drop. Bludrop", comp_val: "Povidone Iodine", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Antiseptic for eye surgery/infection", co: "Healthcare", type: "h", str: "1.25%", mgkg: "2-3 drops"},


    {sl: 208, name: "Drop. Brimodin plus", comp_val: "Brimonidine Tartrate & Timolol maleate", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Glaucoma / Elevated intraocular pressure", co: "Incepta", type: "h", str: "2mg+5mg/ml", mgkg: "1 drop BID"},
    {sl: 209, name: "Drop. Timodin", comp_val: "Brimonidine Tartrate & Timolol maleate", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Glaucoma / Elevated intraocular pressure", co: "Opso saline", type: "h", str: "2mg+5mg/ml", mgkg: "1 drop BID"},
    {sl: 210, name: "Drop. Cinarex", comp_val: "Tobramycin .3%", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "External bacterial infections of the eye", co: "Beximco", type: "h", str: "3mg/ml", mgkg: "2 drops every 4h"},
    {sl: 211, name: "Drop. Benozol", comp_val: "Brinzolamide 1%", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Elevated intraocular pressure", co: "Popular", type: "h", str: "10mg/ml", mgkg: "1 drop TID"},
    {sl: 212, name: "Drop. Bimaprost", comp_val: "Bimatoprost .03%", pack: "3 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Open-angle glaucoma / Ocular hypertension", co: "Popular", type: "h", str: "0.3mg/ml", mgkg: "1 drop at night"},


    {sl: 213, name: "Drop. Cipro-A", comp_val: "Ciprofloxacin", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Otitis media, Otitis externa", co: "ACME", type: "h", str: "3mg/ml", mgkg: "2-4 drops BID"},
    {sl: 214, name: "Drop. Aprodex", comp_val: "Dexamethasone + Ciprofloxacin Hydrochloride", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Otitis media, Otitis externa", co: "Aristopharma", type: "h", str: "1mg+3mg/ml", mgkg: "2-4 drops BID"},
    {sl: 215, name: "Drop. Beuflox-d", comp_val: "Dexamethasone + Ciprofloxacin Hydrochloride", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Otitis media, Otitis externa", co: "Incepta", type: "h", str: "1mg+3mg/ml", mgkg: "2-4 drops BID"},
    {sl: 216, name: "Drop. Civodex", comp_val: "Dexamethasone + Ciprofloxacin Hydrochloride", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Otitis media, Otitis externa", co: "Popular", type: "h", str: "1mg+3mg/ml", mgkg: "2-4 drops BID"},
    {sl: 217, name: "Drop. Genacyn", comp_val: "Gentamicin", pack: "10 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Otitis media, Otitis externa", co: "Square", type: "h", str: "3mg/ml", mgkg: "2-4 drops BID"},
    {sl: 218, name: "Drop. Obactin", comp_val: "Ofloxacin", pack: "5 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Otitis media, Otitis externa", co: "Ibn sina", type: "h", str: "3mg/ml", mgkg: "2-4 drops BID"},
    {sl: 219, name: "Drop. Gen HC", comp_val: "Gentamicin + Hydrocortisone acetate", pack: "10 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "drop", ind: "Otitis media, Otitis externa", co: "Ibn sina", type: "h", str: "0.3%+1%", mgkg: "2-4 drops 3-4 times daily"},
    {sl: 220, name: "Oint. Renamycin", comp_val: "Oxytetracycline + Polymyxin B-sulphate", pack: "5 gm", safe: "Safe", pet: "Safe", base: 1.0, unit: "apply", ind: "Infected wounds, burns, skin grafts", co: "RENATA", type: "h", str: "3mg+10,000 units/gm", mgkg: "2-3 times daily"},
    {sl: 221, name: "Oint. Povin", comp_val: "Povidone Iodine", pack: "10 gm", safe: "Safe", pet: "Safe", base: 1.0, unit: "apply", ind: "Infected wounds, burns", co: "OPSONIN", type: "h", str: "5%", mgkg: "2-3 times daily"},
    {sl: 222, name: "Oint. Betadine", comp_val: "Povidone Iodine", pack: "10 gm", safe: "Safe", pet: "Safe", base: 1.0, unit: "apply", ind: "Infected wounds, burns", co: "Mundipharma", type: "h", str: "5%", mgkg: "2-3 times daily"},
    {sl: 223, name: "Oint. Viodin", comp_val: "Povidone Iodine", pack: "10 gm", safe: "Safe", pet: "Safe", base: 1.0, unit: "apply", ind: "Infected wounds, burns", co: "Square", type: "h", str: "5%", mgkg: "2-3 times daily"},
    {sl: 224, name: "Oint. Nebanol", comp_val: "Neomycin sulphate + Bacitracin zinc", pack: "10 gm", safe: "Safe", pet: "Safe", base: 1.0, unit: "apply", ind: "Skin infections, minor cuts", co: "SQUARE", type: "h", str: "5mg+500 IU/gm", mgkg: "2-3 times daily"},
    {sl: 225, name: "Oint. Neotracin", comp_val: "Neomycin sulphate + Bacitracin zinc", pack: "10gm", safe: "Safe", pet: "Safe", base: 1.0, unit: "apply", ind: "Skin infections, minor cuts", co: "Acme", type: "h", str: "5mg+500 IU/gm", mgkg: "2-3 times daily"},
    {sl: 226, name: "Oint. Nebanol Plus", comp_val: "Neomycin Sulphate + Bacitracin Zinc + Polymyxin B Sulphate", pack: "10 gm", safe: "Safe", pet: "Safe", base: 1.0, unit: "apply", ind: "Broad spectrum bacterial skin infections", co: "Square", type: "h", str: "3.5mg+400 IU+5000 IU/gm", mgkg: "2-3 times daily"},
    {sl: 227, name: "Oint. Neobet 5", comp_val: "Neomycin sulphate + Betamethasone", pack: "10 gm", safe: "Safe", pet: "Safe", base: 1.0, unit: "apply", ind: "Infected eczema or inflammatory skin conditions", co: "ACME", type: "h", str: "5mg+1mg/gm", mgkg: "2-3 times daily"},
    {sl: 228, name: "Oint. Bactrocin 2%", comp_val: "Mupirocin", pack: "10 gm", safe: "Safe", pet: "Safe", base: 1.0, unit: "apply", ind: "Bacterial skin infections (Impetigo, Folliculitis)", co: "Square", type: "h", str: "100mg/gm", mgkg: "2-3 times daily"},
    {sl: 229, name: "Oint. Genacyn", comp_val: "Gentamicin", pack: "10 gm", safe: "Safe", pet: "Safe", base: 1.0, unit: "apply", ind: "Primary and secondary skin infections", co: "Square", type: "h", str: "1mg/gm (0.1%)", mgkg: "2-3 times daily"},

    {sl: 230, name: "Pulv. Sulphavet", comp_val: "Sulphanilamide", pack: "10 gm sachet", safe: "Safe", pet: "N/A", base: 1.0, unit: "gm", ind: "Wound infection, foot rot, and bacterial infections", co: "ACME", type: "c", str: "1gm/gm", mgkg: "200mg/kg (Initial)"},
    {sl: 231, name: "Pulv. Sumid-Vet", comp_val: "Sulphanilamide", pack: "10 gm sachet", safe: "Safe", pet: "N/A", base: 1.0, unit: "gm", ind: "Wound infection, foot rot, and bacterial infections", co: "SQUARE", type: "c", str: "1gm/gm", mgkg: "200mg/kg (Initial)"},
    {sl: 232, name: "Pulv. Nilamide", comp_val: "Sulphanilamide", pack: "10 gm sachet", safe: "Safe", pet: "N/A", base: 1.0, unit: "gm", ind: "Wound infection, foot rot, and bacterial infections", co: "TECHNO", type: "c", str: "1gm/gm", mgkg: "200mg/kg (Initial)"},

    {sl: 233, name: "Bol. Dermaphyl Vet", comp_val: "Griseofulvin", pack: "2.5 gm bolus", safe: "N/A", pet: "N/A", base: 1.0, unit: "bolus", ind: "Fungal infections (Dermatophytosis)", co: "Navana", type: "c", str: "2.5 gm", mgkg: "10 mg/kg"},
    {sl: 234, name: "Tab. Ketoral", comp_val: "Ketoconazole", pack: "200 mg tablet", safe: "N/A", pet: "Safe", base: 1.0, unit: "tablet", ind: "Systemic mycoses, Candidiasis", co: "SQUARE", type: "h", str: "200 mg", mgkg: "10 mg/kg"},
    {sl: 235, name: "Tab. Ketocon", comp_val: "Ketoconazole", pack: "200 mg tablet", safe: "N/A", pet: "Safe", base: 1.0, unit: "tablet", ind: "Systemic mycoses, Candidiasis", co: "OPSONIN", type: "h", str: "200 mg", mgkg: "10 mg/kg"},
    {sl: 236, name: "Tab. Canazole", comp_val: "Fluconazole", pack: "200 mg tablet", safe: "N/A", pet: "Safe", base: 1.0, unit: "tablet", ind: "Cryptococcal meningitis, Blastomycosis, Histoplasmosis", co: "Aci", type: "h", str: "200 mg", mgkg: "5 mg/kg"},
    {sl: 237, name: "Tab. Flucon", comp_val: "Fluconazole", pack: "200 mg tablet", safe: "N/A", pet: "Safe", base: 1.0, unit: "tablet", ind: "Cryptococcal meningitis, Blastomycosis, Histoplasmosis", co: "Opsonin", type: "h", str: "200 mg", mgkg: "5 mg/kg"},
    {sl: 238, name: "Tab. Flugal", comp_val: "Fluconazole", pack: "200 mg tablet", safe: "N/A", pet: "Safe", base: 1.0, unit: "tablet", ind: "Cryptococcal meningitis, Blastomycosis, Histoplasmosis", co: "Square", type: "h", str: "200 mg", mgkg: "5 mg/kg"},
    {sl: 239, name: "Susp. Flugal", comp_val: "Fluconazole", pack: "35 ml", safe: "N/A", pet: "Safe", base: 1.0, unit: "ml", ind: "Superficial candidiasis, Dermatophytosis", co: "Square", type: "h", str: "10 mg/ml", mgkg: "5 mg/kg"},
    {sl: 240, name: "Susp. Lucan", comp_val: "Fluconazole", pack: "35 ml", safe: "N/A", pet: "Safe", base: 1.0, unit: "ml", ind: "Superficial candidiasis, Dermatophytosis", co: "Renata", type: "h", str: "10 mg/ml", mgkg: "5 mg/kg"},
    {sl: 241, name: "Susp. Fluconal", comp_val: "Fluconazole", pack: "35 ml", safe: "N/A", pet: "Safe", base: 1.0, unit: "ml", ind: "Superficial candidiasis, Dermatophytosis", co: "Acme", type: "h", str: "10 mg/ml", mgkg: "5 mg/kg"},
    {sl: 242, name: "Cap. Itra", comp_val: "Itraconazole", pack: "200 mg tablet", safe: "N/A", pet: "Safe", base: 1.0, unit: "tablet", ind: "Aspergillosis, Cryptococcal meningitis, Blastomycosis", co: "SQUARE", type: "h", str: "200 mg", mgkg: "3 mg/kg"},
    {sl: 243, name: "Cap. Itracon", comp_val: "Itraconazole", pack: "200 mg tablet", safe: "N/A", pet: "Safe", base: 1.0, unit: "tablet", ind: "Aspergillosis, Cryptococcal meningitis, Blastomycosis", co: "Navana", type: "h", str: "200 mg", mgkg: "3 mg/kg"},


    {sl: 244, name: "Tab. Nystat", comp_val: "Nystatin", pack: "5 lac unit tablet", safe: "Safe", pet: "N/A", base: 1.0, unit: "tablet", ind: "Fungal infections", co: "ACME", type: "h", str: "500,000 IU", mgkg: "1 tab/ 50-100 kg"},
    {sl: 245, name: "Tab. Canstat", comp_val: "Nystatin", pack: "5 lac unit tablet", safe: "Safe", pet: "N/A", base: 1.0, unit: "tablet", ind: "Fungal infections", co: "JAYSON", type: "h", str: "500,000 IU", mgkg: "1 tab/ 50-100 kg"},
    {sl: 246, name: "Tab. Mycocin", comp_val: "Nystatin", pack: "5 lac unit tablet", safe: "Safe", pet: "N/A", base: 1.0, unit: "tablet", ind: "Fungal infections", co: "Ibn sina", type: "h", str: "500,000 IU", mgkg: "1 tab/ 50-100 kg"},
    {sl: 247, name: "Susp. Nystat", comp_val: "Nystatin", pack: "30 ml", safe: "Safe", pet: "N/A", base: 1.0, unit: "ml", ind: "Fungal infections", co: "ACME", type: "h", str: "100,000 IU/ml", mgkg: "1 ml/ 20 kg"},
    {sl: 248, name: "Susp. Candex", comp_val: "Nystatin", pack: "30 ml", safe: "Safe", pet: "N/A", base: 1.0, unit: "ml", ind: "Fungal infections", co: "SQUARE", type: "h", str: "100,000 IU/ml", mgkg: "1 ml/ 20 kg"},
    {sl: 249, name: "Susp. Fungistin", comp_val: "Nystatin", pack: "30 ml", safe: "Safe", pet: "N/A", base: 1.0, unit: "ml", ind: "Fungal infections", co: "Beximco", type: "h", str: "100,000 IU/ml", mgkg: "1 ml/ 20 kg"},
    {sl: 250, name: "Oint. Dermin", comp_val: "Benzoic acid + Salicylic acid + Vaseline", pack: "25 gm tube", safe: "Safe", pet: "N/A", base: 1.0, unit: "apply", ind: "Hyperkeratosis, parakeratosis, fungal dermatitis", co: "JAYSON", type: "h", str: "6%+3%+91%", mgkg: "2-3 times/day"},
    {sl: 251, name: "Oint. Whitfield", comp_val: "Benzoic acid + Salicylic acid + Vaseline", pack: "25 gm tube", safe: "Safe", pet: "N/A", base: 1.0, unit: "apply", ind: "Hyperkeratosis, parakeratosis, fungal dermatitis", co: "Asiatic", type: "h", str: "6%+3%+91%", mgkg: "2-3 times/day"},
    {sl: 252, name: "Oint. Bensal", comp_val: "Benzoic acid + Salicylic acid + Vaseline", pack: "25 gm tube", safe: "Safe", pet: "N/A", base: 1.0, unit: "apply", ind: "Hyperkeratosis, parakeratosis, fungal dermatitis", co: "G.A.", type: "h", str: "6%+3%+91%", mgkg: "2-3 times/day"},
    {sl: 253, name: "Oint.BS", comp_val: "Benzoic acid + Salicylic acid + Vaseline", pack: "25 gm tube", safe: "Safe", pet: "N/A", base: 1.0, unit: "apply", ind: "Hyperkeratosis, parakeratosis, fungal dermatitis", co: "ACME Laboratories", type: "h", str: "6%+3%+91%", mgkg: "2-3 times/day"},
    {sl: 254, name: "Oint. Ensal", comp_val: "Benzoic acid + Salicylic acid + Vaseline", pack: "25 gm tube", safe: "Safe", pet: "N/A", base: 1.0, unit: "apply", ind: "Hyperkeratosis, parakeratosis, fungal dermatitis", co: "Reneta Limited", type: "h", str: "6%+3%+91%", mgkg: "2-3 times/day"},


    {sl: 255, name: "Pulv. Piper-Vet", comp_val: "Piperazine Citrate USP 100%", pack: "100 gm, 500 gm pack", safe: "Safe", pet: "Safe", base: 1.0, unit: "gm", ind: "Anthelmintic (Deworming)", co: "Square", type: "c", str: "100%", mgkg: "250-500 mg/kg"},
    {sl: 256, name: "Pulv. Razinmax Vet", comp_val: "Piperazine Citrate USP 100%", pack: "100 gm, 500 gm pack", safe: "Safe", pet: "Safe", base: 1.0, unit: "gm", ind: "Anthelmintic (Deworming)", co: "Incepta", type: "c", str: "100%", mgkg: "250-500 mg/kg"},
    {sl: 257, name: "Pulv. Peravet", comp_val: "Piperazine Citrate USP 100%", pack: "10 gm, 100 gm, 500 gm", safe: "Safe", pet: "Safe", base: 1.0, unit: "gm", ind: "Anthelmintic (Deworming)", co: "Acme", type: "c", str: "100%", mgkg: "250-500 mg/kg"},
    {sl: 258, name: "Pulv. Perazin", comp_val: "Piperazine Citrate USP 100%", pack: "100 gm, 500 gm pack", safe: "Safe", pet: "Safe", base: 1.0, unit: "gm", ind: "Anthelmintic (Deworming)", co: "Techno", type: "c", str: "100%", mgkg: "250-500 mg/kg"},
    {sl: 259, name: "Pulv. Eskapar", comp_val: "Piperazine Citrate USP 100%", pack: "100 gm, 500 gm pack", safe: "Safe", pet: "Safe", base: 1.0, unit: "gm", ind: "Anthelmintic (Deworming)", co: "Sk+F", type: "c", str: "100%", mgkg: "250-500 mg/kg"},
    {sl: 260, name: "Pulv. Helmacid Vet", comp_val: "Piperazine Citrate USP 100%", pack: "20 gm, 100 gm, 500 gm", safe: "Safe", pet: "Safe", base: 1.0, unit: "gm", ind: "Anthelmintic (Deworming)", co: "Al-Madina", type: "c", str: "100%", mgkg: "100-250 mg/kg"},



    {sl: 261, name: "Bol. Almex vet", comp_val: "Albendazole USP", pack: "600 mg bolus", safe: "Unsafe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Broad spectrum Anthelmintic", co: "SQUARE", type: "c", str: "600 mg", mgkg: "10 mg/kg"},
    {sl: 262, name: "Bol. Helmex", comp_val: "Albendazole USP", pack: "600 mg bolus", safe: "Unsafe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Broad spectrum Anthelmintic", co: "RENATA", type: "c", str: "600 mg", mgkg: "10 mg/kg"},
    {sl: 263, name: "Bol. Alben vet", comp_val: "Albendazole USP", pack: "600 mg bolus", safe: "Unsafe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Broad spectrum Anthelmintic", co: "SK+F", type: "c", str: "600 mg", mgkg: "10 mg/kg"},
    {sl: 264, name: "Bol. Aldazole", comp_val: "Albendazole USP", pack: "600 mg bolus", safe: "Unsafe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Broad spectrum Anthelmintic", co: "TECHNO", type: "c", str: "600 mg", mgkg: "10 mg/kg"},
    {sl: 265, name: "Bol. Benazole", comp_val: "Albendazole USP", pack: "600 mg bolus", safe: "Unsafe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Broad spectrum Anthelmintic", co: "ACME", type: "c", str: "600 mg", mgkg: "10 mg/kg"},
    {sl: 266, name: "Bol. Alrex vet", comp_val: "Albendazole USP", pack: "600 mg bolus", safe: "Unsafe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Broad spectrum Anthelmintic", co: "Gentry", type: "c", str: "600 mg", mgkg: "10 mg/kg"},
    {sl: 267, name: "Bol. Bre-Zol", comp_val: "Albendazole USP", pack: "600 mg bolus", safe: "Unsafe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Broad spectrum Anthelmintic", co: "bridge", type: "c", str: "600 mg", mgkg: "10 mg/kg"},
    {sl: 268, name: "Bol. Relaben Vet", comp_val: "Albendazole USP", pack: "600 mg bolus", safe: "Unsafe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Broad spectrum Anthelmintic", co: "Bengal", type: "c", str: "600 mg", mgkg: "10 mg/kg"},
    {sl: 269, name: "Susp. Alben Vet", comp_val: "Albendazole BP", pack: "20, 100, 500 ml bottle", safe: "Unsafe", pet: "Safe", base: 1.0, unit: "ml", ind: "Round worm, Tape worm", co: "SK+F", type: "c", str: "100 mg/ml", mgkg: "10-20 mg/kg"},
    {sl: 270, name: "Bol. S-ZOL", comp_val: "Albendazole BP", pack: "600 mg bolus", safe: "Unsafe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Round worm, Tape worm", co: "SHINIL Pharma", type: "c", str: "600 mg", mgkg: "10-20 mg/kg"},
    {sl: 271, name: "Susp. Wormozole", comp_val: "Albendazole BP", pack: "N/A", safe: "Unsafe", pet: "Safe", base: 1.0, unit: "ml", ind: "Round worm, Tape worm", co: "N/A", type: "c", str: "100 mg/ml", mgkg: "10-20 mg/kg"},


    {sl: 272, name: "Bol. Peraclear", comp_val: "Fenbendazole", pack: "250 mg bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Broad-spectrum anthelmintic", co: "TECHNO", type: "c", str: "250 mg", mgkg: "5 mg/kg"},
{sl: 273, name: "Bol. Fenazol vet", comp_val: "Fenbendazole", pack: "250 mg bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Broad-spectrum anthelmintic", co: "ACME", type: "c", str: "250 mg", mgkg: "5 mg/kg"},
{sl: 274, name: "Bol. Refenda Vet", comp_val: "Fenbendazole", pack: "250 mg bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Broad-spectrum anthelmintic", co: "Bengal", type: "c", str: "250 mg", mgkg: "5 mg/kg"},
{sl: 275, name: "Liq. Fenazol vet", comp_val: "Fenbendazole BP", pack: "100 ml, 500 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Broad-spectrum anthelmintic", co: "ACME", type: "c", str: "200 mg/ml", mgkg: "5-10 mg/kg"},
{sl: 276, name: "Bol. Nemadex", comp_val: "Mebendazole", pack: "750 mg bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Active against nematode, trematode & Cestode", co: "Super power", type: "c", str: "750 mg", mgkg: "5-15 mg/kg"},


{sl: 277, name: "Inj. Acimec 1%", comp_val: "Ivermectin", pack: "N/A", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Internal and external parasites", co: "ACI", type: "c", str: "10 mg/ml", mgkg: "0.2 mg/kg"},
{sl: 278, name: "Inj. A-mectin Vet", comp_val: "Ivermectin", pack: "N/A", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Internal and external parasites", co: "ACME", type: "c", str: "10 mg/ml", mgkg: "0.2 mg/kg"},
{sl: 279, name: "Inj. Parakil vet", comp_val: "Ivermectin", pack: "N/A", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Internal and external parasites", co: "Incepta", type: "c", str: "10 mg/ml", mgkg: "0.2 mg/kg"},
{sl: 280, name: "Inj. Vetmectin", comp_val: "Ivermectin", pack: "5 ml, 10 ml, 30 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Internal and external parasites", co: "Albion", type: "c", str: "10 mg/ml", mgkg: "0.2 mg/kg"},
{sl: 281, name: "Inj. Invet", comp_val: "Ivermectin", pack: "N/A", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Internal and external parasites", co: "Popular", type: "c", str: "10 mg/ml", mgkg: "0.2 mg/kg"},
{sl: 282, name: "Inj. Vermishin", comp_val: "Ivermectin", pack: "5 ml, 10 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Internal and external parasites", co: "Shinil", type: "c", str: "10 mg/ml", mgkg: "0.2 mg/kg"},
{sl: 283, name: "A-mectin vet (Pour on)", comp_val: "Ivermectin", pack: "15 ml dropper bottle", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "External parasites (Lice, Mites, Ticks)", co: "ACME", type: "c", str: "5 mg/ml", mgkg: "0.5 mg/kg"},
{sl: 284, name: "I-POUR", comp_val: "Ivermectin", pack: "N/A", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "External parasites (Lice, Mites, Ticks)", co: "Albion", type: "c", str: "5 mg/ml", mgkg: "0.5 mg/kg"},
{sl: 285, name: "Normectin", comp_val: "Ivermectin", pack: "250 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "External parasites (Lice, Mites, Ticks)", co: "SQUARE", type: "c", str: "5 mg/ml", mgkg: "0.5 mg/kg"},


{sl: 286, name: "Bol. Tremacid", comp_val: "Oxyclozanide", pack: "1 gm bolus", safe: "Unsafe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Liver fluke, Paramphistomum spp", co: "RENATA", type: "c", str: "1000 mg", mgkg: "10 mg/kg"},
{sl: 287, name: "Bol. Levanid Vet", comp_val: "Tetramisole + Oxyclozanide", pack: "5 x 4 Bolus", safe: "Unsafe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Liver fluke, Roundworm, Lungworm, Whipworm", co: "ACME", type: "c", str: "2 gm + 1.4 gm", mgkg: "13.3-20 mg/kg"},
{sl: 288, name: "Bol. Trox", comp_val: "Tetramisole + Oxyclozanide", pack: "5 x 4 Bolus", safe: "Unsafe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Liver fluke, Roundworm, Lungworm, Whipworm", co: "CHEMIST", type: "c", str: "2 gm + 1.4 gm", mgkg: "13.3-20 mg/kg"},
{sl: 289, name: "Bol. Tetranid", comp_val: "Tetramisole + Oxyclozanide", pack: "5 x 4 Bolus", safe: "Unsafe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Liver fluke, Roundworm, Lungworm, Whipworm", co: "TECHNO", type: "c", str: "2 gm + 1.4 gm", mgkg: "13.3-20 mg/kg"},
{sl: 290, name: "Bol. O-TVET", comp_val: "Tetramisole + Oxyclozanide", pack: "5 x 4 Bolus", safe: "Unsafe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Liver fluke, Roundworm, Lungworm, Whipworm", co: "Bridge", type: "c", str: "2 gm + 1.4 gm", mgkg: "13.3-20 mg/kg"},


{sl: 291, name: "Inj. Nitrox-A", comp_val: "Nitroxynil BP (Vet)", pack: "10 ml", safe: "Safe", pet: "N/A", base: 1.5, unit: "ml", ind: "Fascioliasis, Haemonchosis, Oestrosis", co: "ACME", type: "c", str: "340 mg/ml", mgkg: "10 mg/kg"},
{sl: 292, name: "Inj. Nitronex 34%", comp_val: "Nitroxynil BP (Vet)", pack: "10 ml, 30 ml", safe: "Safe", pet: "N/A", base: 1.5, unit: "ml", ind: "Fascioliasis, Haemonchosis, Oestrosis", co: "RENATA", type: "c", str: "340 mg/ml", mgkg: "10 mg/kg"},
{sl: 293, name: "Inj. Bentronil Vet", comp_val: "Nitroxynil BP (Vet)", pack: "10 ml, 30 ml", safe: "Safe", pet: "N/A", base: 1.5, unit: "ml", ind: "Fascioliasis, Haemonchosis, Oestrosis", co: "Bengal", type: "c", str: "340 mg/ml", mgkg: "10 mg/kg"},
{sl: 294, name: "Inj. Navet", comp_val: "Nitroxynil BP", pack: "10 ml, 50 ml", safe: "Safe", pet: "N/A", base: 1.0, unit: "ml", ind: "Fascioliasis, Haemonchosis, Oestrosis", co: "POPULAR", type: "c", str: "250 mg/ml", mgkg: "10 mg/kg"},
{sl: 295, name: "Inj. Oxynil", comp_val: "Nitroxynil BP", pack: "10 ml, 50 ml", safe: "Safe", pet: "N/A", base: 1.0, unit: "ml", ind: "Fascioliasis, Haemonchosis, Oestrosis", co: "TECHNO", type: "c", str: "250 mg/ml", mgkg: "10 mg/kg"},
{sl: 296, name: "Inj. Niloxin", comp_val: "Nitroxynil BP", pack: "10 ml, 50 ml", safe: "Safe", pet: "N/A", base: 1.0, unit: "ml", ind: "Fascioliasis, Haemonchosis, Oestrosis", co: "SK+F", type: "c", str: "250 mg/ml", mgkg: "10 mg/kg"},


{sl: 297, name: "Bol. Acinex", comp_val: "Triclabendazole", pack: "900 mg bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Fascioliasis (Liver fluke)", co: "ACI", type: "c", str: "900 mg", mgkg: "12-21.9 mg/kg"},
{sl: 298, name: "Bol. Fasinex", comp_val: "Triclabendazole", pack: "900 mg bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Fascioliasis (Liver fluke)", co: "Novartis", type: "c", str: "900 mg", mgkg: "12-21.9 mg/kg"},
{sl: 299, name: "Bol. Fasinil", comp_val: "Triclabendazole", pack: "900 mg bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Fascioliasis (Liver fluke)", co: "TECHNO", type: "c", str: "900 mg", mgkg: "12-21.9 mg/kg"},
{sl: 300, name: "Bol. Flucide", comp_val: "Triclabendazole", pack: "900 mg bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Fascioliasis (Liver fluke)", co: "F&F", type: "c", str: "900 mg", mgkg: "12-21.9 mg/kg"},
{sl: 301, name: "Bol. Claben", comp_val: "Triclabendazole", pack: "900 mg bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Fascioliasis (Liver fluke)", co: "Globe", type: "c", str: "900 mg", mgkg: "12-21.9 mg/kg"},



{sl: 302, name: "Bol. Niclovet", comp_val: "Niclosamide", pack: "1 gm bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Tapeworm infections", co: "FnF", type: "c", str: "1000 mg", mgkg: "50 mg/kg"},
{sl: 303, name: "Bol. Mensonil", comp_val: "Niclosamide", pack: "1 gm bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Tapeworm infections", co: "Super power", type: "c", str: "1000 mg", mgkg: "50 mg/kg"},
{sl: 304, name: "Bol. Niclosam", comp_val: "Niclosamide", pack: "1 gm bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Tapeworm infections", co: "CHEMIST", type: "c", str: "1000 mg", mgkg: "50 mg/kg"},
{sl: 305, name: "Bol. Niclosam Plus", comp_val: "Levamisole + Niclosamide", pack: "75 mg + 1 gm/ bolus", safe: "N/A", pet: "N/A", base: 1.0, unit: "bolus", ind: "Broad spectrum anthelmintic (Roundworm & Tapeworm)", co: "Chemist", type: "c", str: "75 mg + 1000 mg", mgkg: "5 mg/kg (as Levamisole)"},
{sl: 306, name: "Bol. Niclovet PLUS", comp_val: "Levamisole + Niclosamide", pack: "75 mg + 1 gm/ bolus", safe: "N/A", pet: "N/A", base: 1.0, unit: "bolus", ind: "Broad spectrum anthelmintic (Roundworm & Tapeworm)", co: "FnF", type: "c", str: "75 mg + 1000 mg", mgkg: "5 mg/kg (as Levamisole)"},


{sl: 307, name: "Tab. Prazitel Plus", comp_val: "Praziquantel + Pyrantel Pamoate", pack: "2-20 tablets blister", safe: "Safe", pet: "Safe", base: 1.0, unit: "tablet", ind: "Tapeworm and Roundworm infections", co: "Square", type: "c", str: "18.2mg+72.6mg", mgkg: "0.18-0.72mg/kg"},
{sl: 308, name: "Delentin", comp_val: "Pyrantel pamoate", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Roundworm and Hookworm infections", co: "Reneta", type: "c", str: "50mg/ml", mgkg: "Information on manufacturer's product"},
{sl: 309, name: "Melphin", comp_val: "Pyrantel pamoate", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Roundworm and Hookworm infections", co: "Beximco", type: "c", str: "50mg/ml", mgkg: "Information on manufacturer's product"},

{sl: 310, name: "Bol. Endex", comp_val: "Triclabendazole INN + Levamisole BP", pack: "1500 mg bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Broad spectrum anthelmintic (Liver fluke & Roundworm)", co: "Novartis", type: "c", str: "900mg+600mg", mgkg: "19.5mg/kg"},
{sl: 311, name: "Bol. Renadex", comp_val: "Triclabendazole + Levamisole", pack: "1500 mg bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Broad spectrum anthelmintic", co: "RENATA", type: "c", str: "900mg+600mg", mgkg: "19.5mg/kg"},
{sl: 312, name: "Bol. An-Worm", comp_val: "Triclabendazole + Levamisole", pack: "1500 mg bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Broad spectrum anthelmintic", co: "Al-madina", type: "c", str: "900mg+600mg", mgkg: "19.5mg/kg"},
{sl: 313, name: "Bol. Trilev-vet", comp_val: "Triclabendazole + Levamisole", pack: "1500 mg bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Broad spectrum anthelmintic", co: "SQUARE", type: "c", str: "900mg+600mg", mgkg: "19.5mg/kg"},
{sl: 314, name: "Bol. Antiworm", comp_val: "Triclabendazole + Levamisole", pack: "1500 mg bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Broad spectrum anthelmintic", co: "ACI", type: "c", str: "900mg+600mg", mgkg: "19.5mg/kg"},
{sl: 315, name: "Bol. LT Vet", comp_val: "Triclabendazole + Levamisole", pack: "1500 mg bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Broad spectrum anthelmintic", co: "ACME", type: "c", str: "900mg+600mg", mgkg: "19.5mg/kg"},
{sl: 316, name: "Bol. Ltzol vet", comp_val: "Triclabendazole + Levamisole", pack: "1500 mg bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Broad spectrum anthelmintic", co: "POPULAR", type: "c", str: "900mg+600mg", mgkg: "19.5mg/kg"},
{sl: 317, name: "Bol. L-Trivet", comp_val: "Triclabendazole + Levamisole", pack: "1500 mg bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Broad spectrum anthelmintic", co: "Bridge", type: "c", str: "900mg+600mg", mgkg: "19.5mg/kg"},
{sl: 318, name: "Bol. ALBIDEX 1500", comp_val: "Triclabendazole + Levamisole", pack: "1500 mg bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Broad spectrum anthelmintic", co: "Albion", type: "c", str: "900mg+600mg", mgkg: "19.5mg/kg"},
{sl: 319, name: "Bol. Doubledex", comp_val: "Triclabendazole BP + Levamisole Hydrochloride", pack: "1800 mg + 1200 mg bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Broad spectrum anthelmintic (Double strength)", co: "SK+F", type: "c", str: "1800mg+1200mg", mgkg: "19.5mg/kg"},
{sl: 320, name: "Bol. LT Vet DS", comp_val: "Triclabendazole + Levamisole", pack: "1800 mg + 1200 mg bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Broad spectrum anthelmintic", co: "ACME", type: "c", str: "1800mg+1200mg", mgkg: "19.5mg/kg"},
{sl: 321, name: "Bol. Duozol DS Vet", comp_val: "Triclabendazole + Levamisole", pack: "1800 mg + 1200 mg bolus", safe: "Safe", pet: "N/A", base: 1.0, unit: "bolus", ind: "Broad spectrum anthelmintic", co: "Incepta", type: "c", str: "1800mg+1200mg", mgkg: "19.5mg/kg"},


{sl: 322, name: "Inj. A-mectin plus vet", comp_val: "Ivermectin + Clorsulon", pack: "5 ml, 30 ml", safe: "Safe", pet: "N/A", base: 1.0, unit: "ml", ind: "Adult flukicide & Internal/External parasites", co: "ACME", type: "c", str: "10 mg + 100 mg", mgkg: "0.2 mg + 2 mg"},
{sl: 323, name: "Inj. Iveclor", comp_val: "Ivermectin + Clorsulon", pack: "5 ml", safe: "Safe", pet: "N/A", base: 1.0, unit: "ml", ind: "Adult flukicide & Internal/External parasites", co: "RENATA", type: "c", str: "10 mg + 100 mg", mgkg: "0.2 mg + 2 mg"},
{sl: 324, name: "Suspension. Iverzol-Vet", comp_val: "Ivermectin BP + Triclabendazole INN", pack: "50 ml", safe: "Safe", pet: "N/A", base: 1.0, unit: "ml", ind: "Adult and immature liver flukes, lung worms, and nematodes", co: "Square", type: "c", str: "2 mg + 120 mg", mgkg: "0.2 mg + 12 mg"},


{sl: 325, name: "Pulv. Negovet", comp_val: "Trichlorfon USP", pack: "10 gm, 20 gm sachet", safe: "Safe", pet: "Safe", base: 1.0, unit: "gm", ind: "Hump sore, Ticks, Mites, Lice & Fleas", co: "Bridge", type: "c", str: "100%", mgkg: "5 gm with oil or 2 gm/L water"},
{sl: 326, name: "Pulv. Negotox", comp_val: "Trichlorfon USP", pack: "10 gm, 20 gm sachet", safe: "Safe", pet: "Safe", base: 1.0, unit: "gm", ind: "Hump sore, Ticks, Mites, Lice & Fleas", co: "CHEMIST", type: "c", str: "100%", mgkg: "5 gm with oil or 2 gm/L water"},
{sl: 327, name: "Pulv. Ticofon vet", comp_val: "Trichlorfon USP", pack: "10 gm", safe: "Safe", pet: "Safe", base: 1.0, unit: "gm", ind: "Hump sore, Ticks, Mites, Lice & Fleas", co: "Acme", type: "c", str: "100%", mgkg: "10 gm/0.5L water or with Vaseline"},
{sl: 328, name: "Pulv. Negosite", comp_val: "Trichlorfon USP", pack: "null", safe: "Safe", pet: "Safe", base: 1.0, unit: "gm", ind: "Hump sore, Ticks, Mites, Lice & Fleas", co: "Techno", type: "c", str: "100%", mgkg: "10 gm/0.5L water"},
{sl: 329, name: "Pulv. Nagavon Plus (Vet)", comp_val: "Metrifonate (Trichlorfon)", pack: "20 gm sachet", safe: "Safe", pet: "Safe", base: 1.0, unit: "gm", ind: "Lice, mites, fleas, flies, ticks, hump sore and roundworms", co: "ALBION", type: "c", str: "1.00 gm/gm", mgkg: "50-75 mg/kg (Oral)"},
{sl: 330, name: "Pulv. Ectonil Vet", comp_val: "Metrifonate USP (Trichlorfon)", pack: "10 gm sachet", safe: "Safe", pet: "Safe", base: 1.0, unit: "gm", ind: "Wash or spray treatment for external parasites", co: "SQUARE", type: "c", str: "1.00 gm/gm", mgkg: "1.5 gm/L water"},
{sl: 331, name: "Pulv. Metrifon", comp_val: "Metrifonate USP (Trichlorfon)", pack: "10 gm sachet", safe: "Safe", pet: "Safe", base: 1.0, unit: "gm", ind: "Wash or spray treatment for external parasites", co: "Ethical", type: "c", str: "1.00 gm/gm", mgkg: "1.5 gm/L water"},



{sl: 332, name: "Emulsion: L.T.M Killer-EC", comp_val: "Cypermethrin USP", pack: "100 ml, 500 ml, 1 L bottle", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Lice, Ticks, Mites, Flies & Mosquitos", co: "Super power", type: "c", str: "20 gm/100 ml", mgkg: "10-50 ml per 10-18L water"},
{sl: 333, name: "Soln. Superkiller-E", comp_val: "Cypermethrin USP", pack: "1 litter, 4 litter container", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "House flies, Mosquitos, Ticks (Mites)", co: "PHARMA & FIRM", type: "c", str: "20 gm/100 ml", mgkg: "15-50 mL per 10-18L water"},
{sl: 334, name: "Oint. Dressgel-FR vet", comp_val: "Nim oil + Marigold oil", pack: "50 gm tube", safe: "Safe", pet: "Safe", base: 1.0, unit: "apply", ind: "Herbal Antiseptic & Fly Repellent", co: "ACME", type: "c", str: "5.0 g + 1.0 g per 50 gm", mgkg: "Apply to the affected area"},


{sl: 335, name: "Inj. Anthiomat", comp_val: "Lithium Antimony Thiomalate", pack: "50 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Nasal granuloma (Schistosomiasis), Papillomatosis, Filariasis, Leishmaniasis", co: "TECHNO", type: "c", str: "6% w/v (12 mg Antimony Trioxide/ml)", mgkg: "1.2-2.2 mg/kg"},



{sl: 336, name: "Inj. Ectorid", comp_val: "Imidocarb Dipropionate", pack: "10 ml", safe: "N/A", pet: "Safe", base: 1.0, unit: "ml", ind: "Babesiosis, Anaplasmosis", co: "RENATA", type: "c", str: "133.26 mg/ml", mgkg: "3 mg/kg"},
{sl: 337, name: "Inj. Babenil", comp_val: "Imidocarb Dipropionate", pack: "2 ml, 10 ml vial", safe: "N/A", pet: "Safe", base: 1.0, unit: "ml", ind: "Babesiosis, Anaplasmosis", co: "TECHNO", type: "c", str: "133.26 mg/ml", mgkg: "3 mg/kg"},
{sl: 338, name: "Inj. Babecure", comp_val: "Imidocarb Dipropionate INN", pack: "2 ml ampoule", safe: "N/A", pet: "Safe", base: 1.0, unit: "ml", ind: "Babesiosis, Anaplasmosis", co: "ACME", type: "c", str: "120 mg/ml", mgkg: "3 mg/kg"},
{sl: 339, name: "Inj. E-Carbzol", comp_val: "Imidocarb dipropionate + Methyl parahydroxybenzoate + Propyl parahydroxybenzoate", pack: "100 ml Vial", safe: "N/A", pet: "Safe", base: 1.0, unit: "ml", ind: "Treatment and prevention of Babesiosis, Anaplasmosis", co: "ACI", type: "c", str: "120 mg + 0.45 mg + 0.05 mg per ml", mgkg: "1-2.5 ml per 100 kg BW"},



{sl: 340, name: "Inj. Berenil Vet 7% RTU", comp_val: "Diminazene aceturate + Phenazone BP", pack: "20 ml, 30 ml, 90 ml", safe: "Safe", pet: "N/A", base: 1.0, unit: "ml", ind: "Trypanosomiasis, Babesiosis", co: "INTERVET", type: "c", str: "70 mg + 375.0 mg per ml", mgkg: "3.5 mg/kg (as Diminazene)"},
{sl: 341, name: "Inj. Babcop-Vet", comp_val: "Diminazene aceturate + Phenazone BP", pack: "20 ml vial", safe: "Safe", pet: "N/A", base: 1.0, unit: "ml", ind: "Trypanosomiasis, Babesiosis", co: "SQUARE", type: "c", str: "70 mg + 375.0 mg per ml", mgkg: "3.5 mg/kg (as Diminazene)"},
{sl: 342, name: "Inj. Diminal", comp_val: "Diminazenediaceturate + Phenazone", pack: "2.36 g, 23.6 g", safe: "Safe", pet: "N/A", base: 1.0, unit: "ml", ind: "Trypanosomiasis, Babesiosis", co: "Eagle Vet. Tech (ACI)", type: "c", str: "445 mg + 555 mg per g", mgkg: "3.5 mg/kg (as Diminazene)"},


{sl: 343, name: "Inj. Albu-Vet", comp_val: "Buparvaquone BP", pack: "50 ml vial", safe: "N/A", pet: "N/A", base: 1.0, unit: "ml", ind: "Theileriosis (East Coast Fever, Tropical Theileriosis)", co: "Al-Madina", type: "c", str: "50 mg/ml", mgkg: "2.5 mg/kg"},
{sl: 344, name: "Inj. Butec", comp_val: "Buparvaquone BP", pack: "10 ml", safe: "N/A", pet: "N/A", base: 1.0, unit: "ml", ind: "Theileriosis (East Coast Fever, Tropical Theileriosis)", co: "Techno", type: "c", str: "50 mg/ml", mgkg: "2.5 mg/kg"},
{sl: 345, name: "Inj. Buparvet", comp_val: "Buparvaquone BP", pack: "10 ml, 50 ml", safe: "N/A", pet: "N/A", base: 1.0, unit: "ml", ind: "Theileriosis (East Coast Fever, Tropical Theileriosis)", co: "Bridge", type: "c", str: "50 mg/ml", mgkg: "2.5 mg/kg"},
{sl: 346, name: "Inj. Ticknil", comp_val: "Buparvaquone", pack: "10 ml", safe: "N/A", pet: "N/A", base: 1.0, unit: "ml", ind: "Theileriosis (East Coast Fever, Tropical Theileriosis)", co: "Renata Ltd", type: "c", str: "50 mg/ml", mgkg: "2.5 mg/kg"},


{sl: 347, name: "Soln. Amprol L", comp_val: "Amprolium Hydrochloride", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Coccidiosis", co: "SK+F", type: "c", str: "200 mg/ml", mgkg: "25-300 mg/kg"},
{sl: 348, name: "Pulv. Remecox Vet", comp_val: "Amprolium Hydrochloride USP + Sulphaquinoxaline Sodium USP + Vitamin K", pack: "100 gm, 500 gm", safe: "Safe", pet: "N/A", base: 1.0, unit: "gm", ind: "Coccidiosis", co: "Bengal", type: "c", str: "17 gm + 17 gm + 0.10 gm per 100 gm", mgkg: "1 gm/ 50 kg"},
{sl: 349, name: "Pulv. Amprol EP", comp_val: "Amprolium hydrochloride + Ethopabate BP + Sulphaquinoxaline USP + Vit K3 + Vit C", pack: "6 gm, 100 gm pack", safe: "Safe", pet: "N/A", base: 1.0, unit: "gm", ind: "Coccidiosis", co: "SK+F", type: "c", str: "100 mg + 5 mg + 60 mg + 2 mg + 20 mg per gm", mgkg: "1 gm/ 10 kg"},
{sl: 350, name: "Pulv. Coctreat-EP", comp_val: "Amprolium hydrochloride + Ethopabate BP + Sulphaquinoxaline USP + Vit K3 + Vit C", pack: "100 gm", safe: "Safe", pet: "N/A", base: 1.0, unit: "gm", ind: "Coccidiosis", co: "Square", type: "c", str: "100 mg + 5 mg + 60 mg + 2 mg + 20 mg per gm", mgkg: "1 gm/ 10 kg"},
{sl: 351, name: "Amprium vet powder", comp_val: "Amprolium HCl 20%", pack: "100 gm", safe: "Safe", pet: "N/A", base: 2.0, unit: "gm", ind: "Coccidiosis", co: "Square", type: "c", str: "200 mg/gm", mgkg: "50 mg/kg"},
{sl: 352, name: "Pulv.Ampro vet", comp_val: "Amprolium HCl 20%", pack: "100 gm", safe: "Safe", pet: "N/A", base: 2.0, unit: "gm", ind: "Coccidiosis", co: "Agrovet", type: "c", str: "200 mg/gm", mgkg: "50 mg/kg"},
{sl: 353, name: "Pulv.coccinil 20", comp_val: "Amprolium HCl 20%", pack: "100 gm", safe: "Safe", pet: "N/A", base: 2.0, unit: "gm", ind: "Coccidiosis", co: "Techno", type: "c", str: "200 mg/gm", mgkg: "50 mg/kg"},
{sl: 354, name: "Pulv.Rollium 20", comp_val: "Amprolium HCl 20%", pack: "100 gm", safe: "Safe", pet: "N/A", base: 2.0, unit: "gm", ind: "Coccidiosis", co: "Super power", type: "c", str: "200 mg/gm", mgkg: "50 mg/kg"},
{sl: 355, name: "Pulv.Amolium 20% vet", comp_val: "Amprolium HCl 20%", pack: "100 gm", safe: "Safe", pet: "N/A", base: 2.0, unit: "gm", ind: "Coccidiosis", co: "Albion", type: "c", str: "200 mg/gm", mgkg: "50 mg/kg"},
{sl: 356, name: "Prolium oral powder", comp_val: "Amprolium Hydrochloride 20gm/100gm", pack: "100gm & 500gm pack", safe: "Safe", pet: "N/A", base: 1.5, unit: "gm", ind: "Coccidiosis", co: "SHINIL Pharma Ltd", type: "c", str: "200 mg/gm", mgkg: "1.5 gm/ 5L water"},




{sl: 357, name: "Soln. Toltacox Vet", comp_val: "Toltrazuril INN", pack: "100 ml, 500 ml", safe: "Safe", pet: "N/A", base: 0.8, unit: "ml", ind: "Coccidiosis", co: "Incepta", type: "c", str: "25 mg/ml", mgkg: "20 mg/kg"},
{sl: 358, name: "Soln. Xmeria", comp_val: "Toltrazuril INN", pack: "100 ml", safe: "Safe", pet: "N/A", base: 0.8, unit: "ml", ind: "Coccidiosis", co: "SK+F", type: "c", str: "25 mg/ml", mgkg: "20 mg/kg"},
{sl: 359, name: "Soln. Anticoc", comp_val: "Toltrazuril INN", pack: "100 ml, 500 ml", safe: "Safe", pet: "N/A", base: 0.8, unit: "ml", ind: "Coccidiosis", co: "Acme", type: "c", str: "25 mg/ml", mgkg: "20 mg/kg"},
{sl: 360, name: "Soln. Coxitril Vet", comp_val: "Toltrazuril INN", pack: "100 ml, 500 ml", safe: "Safe", pet: "N/A", base: 0.8, unit: "ml", ind: "Coccidiosis", co: "Square", type: "c", str: "25 mg/ml", mgkg: "20 mg/kg"},
{sl: 361, name: "Soln. Tolicox", comp_val: "Toltrazuril INN", pack: "100 ml, 500 ml", safe: "Safe", pet: "N/A", base: 0.8, unit: "ml", ind: "Coccidiosis", co: "Popular", type: "c", str: "25 mg/ml", mgkg: "20 mg/kg"},
{sl: 362, name: "Liquid. Agrocox", comp_val: "Toltrazuril INN", pack: "100ml, 500 ml", safe: "Safe", pet: "N/A", base: 1.0, unit: "ml", ind: "Coccidiosis", co: "Agrovet pharma", type: "c", str: "25 mg/ml", mgkg: "7 mg/kg"},
{sl: 363, name: "Sol. Cox zero", comp_val: "Toltrazuril INN", pack: "100ml", safe: "Safe", pet: "N/A", base: 1.0, unit: "ml", ind: "Coccidiosis", co: "Eon", type: "c", str: "25 mg/ml", mgkg: "7 mg/kg"},
{sl: 364, name: "Sol. Coxguard vet", comp_val: "Toltrazuril INN", pack: "100ml", safe: "Safe", pet: "N/A", base: 1.0, unit: "ml", ind: "Coccidiosis", co: "Guardian healthcare", type: "c", str: "25 mg/ml", mgkg: "7 mg/kg"},
{sl: 365, name: "Sus. coxi-vet", comp_val: "Toltrazuril INN", pack: "100ml, 500 ml", safe: "Safe", pet: "N/A", base: 1.0, unit: "ml", ind: "Coccidiosis", co: "Kemiko", type: "c", str: "25 mg/ml", mgkg: "7 mg/kg"},
{sl: 366, name: "Sol. Renazuril", comp_val: "Toltrazuril INN", pack: "100ml, 500 ml", safe: "Safe", pet: "N/A", base: 1.0, unit: "ml", ind: "Coccidiosis", co: "Renata", type: "c", str: "25 mg/ml", mgkg: "7 mg/kg"},
{sl: 367, name: "Sol. Cocci-zione", comp_val: "Toltrazuril", pack: "100ml bottle", safe: "Safe", pet: "N/A", base: 0.8, unit: "ml", ind: "Coccidiosis", co: "SHINIL Pharma LTD", type: "c", str: "25 mg/ml", mgkg: "20 mg/kg"},




{sl: 368, name: "Inj. Antihista vet", comp_val: "Pheniramine Maleate BP", pack: "10 ml, 100 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Allergic conditions", co: "SQUARE", type: "c", str: "22.75 mg/ml", mgkg: "0.25-0.5 mg/kg"},
{sl: 369, name: "Inj. Histavet", comp_val: "Pheniramine Maleate BP", pack: "10 ml, 100 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Allergic conditions", co: "ACI", type: "c", str: "22.75 mg/ml", mgkg: "0.25-0.5 mg/kg"},
{sl: 370, name: "Inj. Astavet", comp_val: "Pheniramine Maleate BP", pack: "10 ml, 100 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Allergic conditions", co: "ACME", type: "c", str: "22.75 mg/ml", mgkg: "0.25-0.5 mg/kg"},
{sl: 371, name: "Inj. Niravet", comp_val: "Pheniramine Maleate BP", pack: "10 ml, 100 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Allergic conditions", co: "OPSONIN", type: "c", str: "22.75 mg/ml", mgkg: "0.25-0.5 mg/kg"},
{sl: 372, name: "Inj. Alarvet", comp_val: "Pheniramine Maleate BP", pack: "10 ml, 100 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Allergic conditions", co: "POPULAR", type: "c", str: "22.75 mg/ml", mgkg: "0.25-0.5 mg/kg"},
{sl: 373, name: "Inj. Alerin", comp_val: "Pheniramine Maleate BP", pack: "10 ml, 100 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Allergic conditions", co: "SK+F", type: "c", str: "22.75 mg/ml", mgkg: "0.25-0.5 mg/kg"},
{sl: 374, name: "Inj. Asta vet", comp_val: "Pheniramine Maleate BP", pack: "10 ml, 100 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Allergic conditions", co: "Acme", type: "c", str: "22.75 mg/ml", mgkg: "0.25-0.5 mg/kg"},
{sl: 375, name: "Inj. Phenavet", comp_val: "Pheniramine Maleate BP", pack: "10 ml, 100 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Allergic conditions", co: "Eon", type: "c", str: "22.75 mg/ml", mgkg: "0.25-0.5 mg/kg"},
{sl: 376, name: "Inj. Phenadryl vet", comp_val: "Pheniramine Maleate BP", pack: "10 ml, 100 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Allergic conditions", co: "ACME", type: "c", str: "22.75 mg/ml", mgkg: "0.25-0.5 mg/kg"},



{sl: 377, name: "Inj. Histacin vet", comp_val: "Chlorpheniramine maleate", pack: "10 ml, 100 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Allergic conditions", co: "Jayson", type: "c", str: "10 mg/ml", mgkg: "0.5 mg/kg"},
{sl: 378, name: "Inj. Renacin vet", comp_val: "Chlorpheniramine maleate", pack: "10 ml, 100 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Allergic conditions", co: "Renata", type: "c", str: "10 mg/ml", mgkg: "0.5 mg/kg"},
{sl: 379, name: "Inj. Fenarvet", comp_val: "Chlorpheniramine maleate", pack: "10 ml, 100 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Allergic conditions", co: "Techno", type: "c", str: "10 mg/ml", mgkg: "0.5 mg/kg"},




{sl: 380, name: "Inj. Phenadryl vet", comp_val: "Diphenhydramine Hydrochloride", pack: "10 ml, 30 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Allergic conditions, Sedation", co: "ACME", type: "c", str: "20 mg/ml", mgkg: "1 mg/kg"},
{sl: 381, name: "Bol. Phenadryl vet", comp_val: "Diphenylhydramine HCL", pack: "500mg bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Allergic conditions, Sedation", co: "ACME", type: "c", str: "500 mg", mgkg: "2-4 mg/kg"},



{sl: 382, name: "Inj. Dellergen", comp_val: "Promethazine hydrochloride USP", pack: "10 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Allergic conditions, Travel sickness", co: "RENATA", type: "c", str: "50 mg/ml", mgkg: "1.5-2 mg/kg"},
{sl: 383, name: "Inj. Phenerax vet", comp_val: "Promethazine hydrochloride USP", pack: "10 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Allergic conditions", co: "JAYSON", type: "c", str: "50 mg/ml", mgkg: "1.5-2 mg/kg"},
{sl: 384, name: "Inj. Flugan", comp_val: "Promethazine hydrochloride USP", pack: "10 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Allergic conditions", co: "TECHNO", type: "c", str: "50 mg/ml", mgkg: "1.5-2 mg/kg"},
{sl: 385, name: "Inj. Promodin vet", comp_val: "Promethazine hydrochloride USP", pack: "10 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Allergic conditions", co: "CHEMIST", type: "c", str: "50 mg/ml", mgkg: "1.5-2 mg/kg"},
{sl: 386, name: "Bol. Dellergen vet", comp_val: "Promethazine hydrochloride", pack: "150 mg bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Allergic conditions", co: "RENATA", type: "c", str: "150 mg", mgkg: "1.5 mg/kg"},
{sl: 387, name: "Bol. Prom-AL vet", comp_val: "Promethazine hydrochloride", pack: "150 mg bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Allergic conditions", co: "Albion", type: "c", str: "150 mg", mgkg: "1.5 mg/kg"},
{sl: 388, name: "Bol. Prozin Vet", comp_val: "Promethazine hydrochloride", pack: "150 mg bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Allergic conditions", co: "ACI", type: "c", str: "150 mg", mgkg: "1.5 mg/kg"},




{sl: 389, name: "Bol. Fast vet", comp_val: "Paracetamol BP", pack: "2 gm bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Fever, Pain", co: "ACME", type: "c", str: "2 g", mgkg: "15 mg/kg"},
{sl: 390, name: "Tab. Pyralgin vet", comp_val: "Paracetamol BP", pack: "2 gm bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Fever, Pain", co: "RENATA", type: "c", str: "2 g", mgkg: "15 mg/kg"},
{sl: 391, name: "Bol. Ace vet", comp_val: "Paracetamol BP", pack: "2 gm bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Fever, Pain", co: "SQUARE", type: "c", str: "2 g", mgkg: "15 mg/kg"},
{sl: 392, name: "Bol. P-tamol vet", comp_val: "Paracetamol BP", pack: "2 gm bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Fever, Pain", co: "NAVANA", type: "c", str: "2 g", mgkg: "15 mg/kg"},
{sl: 393, name: "Bol. Remedy Vet", comp_val: "Paracetamol BP", pack: "2 gm bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Fever, Pain", co: "Bengal", type: "c", str: "2 g", mgkg: "15 mg/kg"},
{sl: 394, name: "Bol. Paracetamol", comp_val: "Paracetamol BP", pack: "2 gm bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Fever, Pain", co: "Bridge", type: "c", str: "2 g", mgkg: "15 mg/kg"},
{sl: 395, name: "Bol. Para C", comp_val: "Paracetamol BP", pack: "2 gm bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Fever, Pain", co: "Chemist Lab.", type: "c", str: "2 g", mgkg: "15 mg/kg"},
{sl: 396, name: "Bol Acemol vet", comp_val: "Paracetamol BP", pack: "2 gm bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Fever, Pain", co: "SQUARE", type: "c", str: "2 g", mgkg: "15 mg/kg"},
{sl: 397, name: "Bol. Para-AL (Vet)", comp_val: "Paracetamol BP", pack: "2 gm bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Fever, Pain", co: "Albion", type: "c", str: "2 g", mgkg: "20 mg/kg"},



{sl: 398, name: "Inj. Camlox Vet", comp_val: "Meloxicam BP", pack: "10 ml, 30 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Pain, Inflammation, Fever", co: "Popular", type: "c", str: "5 mg/ml", mgkg: "0.5 mg/kg"},
{sl: 399, name: "Inj. Melvet", comp_val: "Meloxicam BP", pack: "10 ml, 30 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Pain, Inflammation, Fever", co: "ACME", type: "c", str: "5 mg/ml", mgkg: "0.5 mg/kg"},
{sl: 400, name: "Inj. Melovet", comp_val: "Meloxicam BP", pack: "10 ml, 30 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Pain, Inflammation, Fever", co: "Techno", type: "c", str: "5 mg/ml", mgkg: "0.5 mg/kg"},
{sl: 401, name: "Inj. Loxikam", comp_val: "Meloxicam BP", pack: "10 ml, 30 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Pain, Inflammation, Fever", co: "OPSONIN", type: "c", str: "5 mg/ml", mgkg: "0.5 mg/kg"},
{sl: 402, name: "Inj. M-Pain Vet", comp_val: "Meloxicam BP", pack: "10 ml, 30 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Pain, Inflammation, Fever", co: "ACI", type: "c", str: "5 mg/ml", mgkg: "0.5 mg/kg"},
{sl: 403, name: "Inj. Melocam Vet", comp_val: "Meloxicam BP", pack: "10 ml, 30 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Pain, Inflammation, Fever", co: "RENATA", type: "c", str: "5 mg/ml", mgkg: "0.5 mg/kg"},
{sl: 404, name: "Inj. Mel-Vet plus", comp_val: "Meloxicam BP + Paracetamol BP", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Severe Pain and High Fever", co: "ACME", type: "c", str: "20 mg + 150 mg per ml", mgkg: "0.5 mg/kg (as Meloxicam)"},
{sl: 405, name: "Inj. Loxikam plus", comp_val: "Meloxicam BP + Paracetamol BP", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Severe Pain and High Fever", co: "Opsonin", type: "c", str: "20 mg + 150 mg per ml", mgkg: "0.5 mg/kg (as Meloxicam)"},
{sl: 406, name: "Inj. Action 3 vet", comp_val: "Meloxicam BP + Paracetamol BP", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "Severe Pain and High Fever", co: "Incepta", type: "c", str: "20 mg + 150 mg per ml", mgkg: "0.5 mg/kg (as Meloxicam)"},
{sl: 407, name: "Bol. Mel-vet", comp_val: "Meloxicam BP", pack: "100 mg bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Inflammatory conditions", co: "ACME", type: "c", str: "100 mg", mgkg: "1 mg/kg"},
{sl: 408, name: "Bol. Loxikam", comp_val: "Meloxicam BP", pack: "100 mg bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Inflammatory conditions", co: "OPSONIN", type: "c", str: "100 mg", mgkg: "1 mg/kg"},
{sl: 409, name: "Bol. M-Pain Vet", comp_val: "Meloxicam BP", pack: "100 mg bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Inflammatory conditions", co: "ACI", type: "c", str: "100 mg", mgkg: "1 mg/kg"},
{sl: 410, name: "Tab. Melvet plus", comp_val: "Meloxicam BP + Paracetamol BP", pack: "100 mg + 1500 mg bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "Musculoskeletal disorders, Fever", co: "Acme", type: "c", str: "100 mg + 1500 mg", mgkg: "0.5 mg/kg (as Meloxicam)"},





{sl: 411, name: "Inj. Tamic Vet", comp_val: "Tolfenamic Acid", pack: "10 ml, 30 ml vial", safe: "N/A", pet: "N/A", base: 1.0, unit: "ml", ind: "Pneumonia, Acute Mastitis", co: "Acme", type: "c", str: "40 mg/ml", mgkg: "2-4 mg/kg"},
{sl: 412, name: "Inj. Tolfavet", comp_val: "Tolfenamic Acid", pack: "10 ml, 30 ml vial", safe: "N/A", pet: "N/A", base: 1.0, unit: "ml", ind: "Pneumonia, Acute Mastitis", co: "TECHNO", type: "c", str: "40 mg/ml", mgkg: "2-4 mg/kg"},
{sl: 413, name: "Inj. Tufnil Vet", comp_val: "Tolfenamic Acid", pack: "10 ml, 30 ml vial", safe: "N/A", pet: "N/A", base: 1.0, unit: "ml", ind: "Pneumonia, Acute Mastitis", co: "SK+F", type: "c", str: "40 mg/ml", mgkg: "2-4 mg/kg"},
{sl: 414, name: "Inj. Fevenil", comp_val: "Tolfenamic Acid", pack: "10 ml", safe: "N/A", pet: "N/A", base: 1.0, unit: "ml", ind: "Pneumonia, Acute Mastitis", co: "RENATA", type: "c", str: "40 mg/ml", mgkg: "2-4 mg/kg"},
{sl: 415, name: "Inj. Set 101 Vet", comp_val: "Tolfenamic Acid", pack: "10 ml, 30 ml vial", safe: "N/A", pet: "N/A", base: 1.0, unit: "ml", ind: "Pneumonia, Acute Mastitis", co: "Incepta", type: "c", str: "40 mg/ml", mgkg: "2-4 mg/kg"},
{sl: 416, name: "Inj. Tolfamin", comp_val: "Tolfenamic Acid", pack: "50 ml", safe: "N/A", pet: "N/A", base: 1.0, unit: "ml", ind: "Inflammatory conditions", co: "GENTRY", type: "c", str: "40 mg/ml", mgkg: "2 mg/kg"},
{sl: 417, name: "Bol. Tamic Vet-200", comp_val: "Tolfenamic Acid", pack: "200 mg bolus", safe: "N/A", pet: "N/A", base: 1.0, unit: "bolus", ind: "Fever, Pain, Inflammation", co: "Acme", type: "c", str: "200 mg", mgkg: "2 mg/kg"},
{sl: 418, name: "Bol. Tufnil vet", comp_val: "Tolfenamic Acid", pack: "200 mg bolus", safe: "N/A", pet: "N/A", base: 1.0, unit: "bolus", ind: "Fever, Pain, Inflammation", co: "SK+F", type: "c", str: "200 mg", mgkg: "2 mg/kg"},
{sl: 419, name: "Bol. Tolfavet", comp_val: "Tolfenamic Acid", pack: "200 mg bolus", safe: "N/A", pet: "N/A", base: 1.0, unit: "bolus", ind: "Fever, Pain, Inflammation", co: "TECHNO", type: "c", str: "200 mg", mgkg: "2 mg/kg"},



{sl: 420, name: "Inj. Pif R vet", comp_val: "Flunixin Meglumine", pack: "10 ml, 30 ml vial", safe: "N/A", pet: "N/A", base: 2.0, unit: "ml", ind: "NSAID (Pain and inflammation)", co: "SK+F", type: "c", str: "50 mg/ml", mgkg: "2.2 mg/kg"},
{sl: 421, name: "Inj. Meglunix Vet", comp_val: "Flunixin Meglumine", pack: "10 ml, 30 ml vial", safe: "N/A", pet: "N/A", base: 2.0, unit: "ml", ind: "NSAID (Pain and inflammation)", co: "Popular", type: "c", str: "50 mg/ml", mgkg: "2.2 mg/kg"},
{sl: 422, name: "Inj. Fixin Vet", comp_val: "Flunixin Meglumine", pack: "10 ml, 25 ml vial", safe: "N/A", pet: "N/A", base: 2.0, unit: "ml", ind: "NSAID (Pain and inflammation)", co: "ACI", type: "c", str: "50 mg/ml", mgkg: "2.2 mg/kg"},
{sl: 423, name: "Inj. Lega Vet", comp_val: "Flunixin Meglumine", pack: "10 ml, 30 ml vial", safe: "N/A", pet: "N/A", base: 2.0, unit: "ml", ind: "NSAID (Pain and inflammation)", co: "Acme", type: "c", str: "50 mg/ml", mgkg: "2.2 mg/kg"},
{sl: 424, name: "Inj. Flumixine vet", comp_val: "Flunixin Meglumine", pack: "10 ml vial", safe: "N/A", pet: "N/A", base: 2.0, unit: "ml", ind: "NSAID (Pain and inflammation)", co: "Reneta", type: "c", str: "50 mg/ml", mgkg: "2.2 mg/kg"},
{sl: 425, name: "Inj. Flunixin vet", comp_val: "Flunixin Meglumine", pack: "10 ml, 30 ml vial", safe: "N/A", pet: "N/A", base: 2.0, unit: "ml", ind: "NSAID (Pain and inflammation)", co: "Bengal", type: "c", str: "50 mg/ml", mgkg: "2.2 mg/kg"},



{sl: 426, name: "Inj. D-Pron", comp_val: "Sulpyrine (Metamizole)", pack: "50 ml vial", safe: "Contraindicated in late pregnancy", pet: "Safe", base: 5.0, unit: "ml", ind: "Strong NSAID (Antipyretic and Analgesic)", co: "GENTRY", type: "c", str: "400 mg/ml", mgkg: "40-50 mg/kg"},



{sl: 427, name: "Inj. PK5", comp_val: "Carprofen USP", pack: "10 ml", safe: "Safe", pet: "Safe", base: 1.0, unit: "ml", ind: "NSAID (Analgesic and Anti-inflammatory)", co: "SK+F", type: "c", str: "50 mg/ml", mgkg: "0.7-1.4 mg/kg"},
{sl: 428, name: "Bol. PK5", comp_val: "Carprofen BP", pack: "500 mg bolus", safe: "Safe", pet: "Safe", base: 1.0, unit: "bolus", ind: "NSAID (Analgesic and Anti-inflammatory)", co: "SK+F", type: "c", str: "500 mg", mgkg: "0.7-1.4 mg/kg"},
{sl: 429, name: "Pulv. Renaspirin", comp_val: "Carbasalate Calcium BP + Sodium Ascorbate USP", pack: "10 gm, 50 gm sachet", safe: "Safe", pet: "Safe", base: 1.0, unit: "gm", ind: "Antipyretic, analgesic and anti-inflammatory", co: "Renata", type: "c", str: "76.32 gm + 7.48 gm per 100 gm", mgkg: "0.5-30 gm (based on BW)"},
{sl: 430, name: "Pulv. Bcox-Vet", comp_val: "Carbasalate Calcium + Sodium Ascorbate", pack: "10 gm", safe: "Safe", pet: "Safe", base: 3.0, unit: "gm", ind: "Antipyretic, analgesic and anti-inflammatory", co: "Square", type: "c", str: "Same as Renaspirin", mgkg: "3-8 gm per liter water"},

// until SAID...

];
