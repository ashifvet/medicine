const allDrugs = [


const allDrugs = [
    // --- Penicillins ---
    {sl: 1, name: "Inj. Bipen-Vet 40", comp_val: "Procaine Penicillin + Benzyl Penicillin Sodium", pack: "40 lac vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Actinomycosis, Anthrax, BQ, Pneumonia", co: "Square", type: "c", str: "40 Lac/vial", mgkg: "1ml/10kg"},
    {sl: 2, name: "Inj. Pronapen vet 40 Lac", comp_val: "Procaine Penicillin + Benzyl Penicillin Sodium", pack: "40 lac vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Mastitis, Metritis, Foot rot", co: "Renata", type: "c", str: "40 Lac/vial", mgkg: "1ml/10kg"},
    {sl: 3, name: "Inj. Combipen vet 40 Lac", comp_val: "Procaine Penicillin + Benzyl Penicillin Sodium", pack: "40 lac vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Navel ill, Abscess, Strangles", co: "Acme", type: "c", str: "40 Lac/vial", mgkg: "1ml/10kg"},
    {sl: 4, name: "Inj. Pronacillin 40 Lac", comp_val: "Procaine Penicillin + Benzyl Penicillin Sodium", pack: "40 lac vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Bacterial Influenza, Bronchitis", co: "Techno", type: "c", str: "40 Lac/vial", mgkg: "1ml/10kg"},
    {sl: 5, name: "Inj. Vetopen Lac", comp_val: "Procaine Penicillin + Benzyl Penicillin Sodium", pack: "40 lac vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Urinary tract infections, Pyogenic infections", co: "Opsonin", type: "c", str: "40 Lac/vial", mgkg: "1ml/10kg"},
    {sl: 6, name: "Inj. Duplocillin LA", comp_val: "Procaine Penicillin + Benzathine Penicillin", pack: "100 ml bottle", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Long acting - Gram positive infections", co: "MSD Animal Health", type: "c", str: "300,000 IU/ml", mgkg: "1ml/25kg"},
    {sl: 7, name: "Inj. Streptopen 2.5g", comp_val: "Procaine Penicillin + Benzyl Penicillin + Streptomycin", pack: "2.5 gm vial + 10 ml WFI", safe: "Unsafe", pet: "Safe(Caution)", base: 0.1, unit: "ml", ind: "Respiratory, Uterine & Mastitis", co: "Renata", type: "c", str: "2.5g/vial", mgkg: "1ml/10kg"},
    {sl: 8, name: "Inj. Strepcin-G 2.5g", comp_val: "Procaine Penicillin + Benzyl Penicillin + Streptomycin", pack: "2.5 gm vial + 10 ml WFI", safe: "Unsafe", pet: "Safe(Caution)", base: 0.1, unit: "ml", ind: "Septicemia, Cystitis, Joint-ill", co: "Opsonin", type: "c", str: "2.5g/vial", mgkg: "1ml/10kg"},
    {sl: 9, name: "Inj. SP-Vet", comp_val: "Procaine Penicillin + Benzyl Penicillin + Streptomycin", pack: "2.5 gm vial + 10 ml WFI", safe: "Unsafe", pet: "Safe(Caution)", base: 0.1, unit: "ml", ind: "Secondary bacterial infections", co: "Acme", type: "c", str: "2.5g/vial", mgkg: "1ml/10kg"},
    {sl: 10, name: "Inj. Strepto-p", comp_val: "Procaine Penicillin + Benzyl Penicillin + Streptomycin", pack: "2.5 gm vial + 10 ml WFI", safe: "Unsafe", pet: "Safe(Caution)", base: 0.1, unit: "ml", ind: "Gram positive & negative infections", co: "ACI", type: "c", str: "2.5g/vial", mgkg: "1ml/10kg"},
    {sl: 11, name: "Inj. Streptocillin", comp_val: "Procaine Penicillin + Benzyl Penicillin + Streptomycin", pack: "2.5 gm vial + 10 ml WFI", safe: "Unsafe", pet: "Safe(Caution)", base: 0.1, unit: "ml", ind: "Respiratory & Alimentary tract infections", co: "Techno", type: "c", str: "2.5g/vial", mgkg: "1ml/10kg"},
    {sl: 12, name: "Inj. Ampicin-Vet", comp_val: "Ampicillin Sodium", pack: "2 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Pneumonia, Calf scour, Salmonellosis", co: "Square", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 13, name: "Inj. Picilin vet", comp_val: "Ampicillin Sodium", pack: "2 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Metritis, Mastitis, Black quarter", co: "Popular", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 14, name: "Inj. Bipilin DS", comp_val: "Ampicillin Sodium", pack: "2 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Joint infection, Kidney infection", co: "Opsonin", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 15, name: "Inj. Acipilline", comp_val: "Ampicillin Sodium", pack: "2 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Infected wound, HS, Foot rot", co: "ACI", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 16, name: "Inj. Hicomox", comp_val: "Amoxicillin Sodium", pack: "1 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Mastitis, Gastroenteritis, Calf scour", co: "Opsonin", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 17, name: "Inj. Moxacil-Vet", comp_val: "Amoxicillin Sodium", pack: "1 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Bronchopneumonia, Umbilical infection", co: "Square", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 18, name: "Inj. Moxilin Vet 1 gm", comp_val: "Amoxicillin Sodium", pack: "1 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Joint infection, UTI, HS", co: "Acme", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 19, name: "Inj. Renamox 1 gm", comp_val: "Amoxicillin Sodium", pack: "1 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Pharyngitis, Foot rot, Fever", co: "Renata", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 20, name: "Inj. Acimox Vet", comp_val: "Amoxicillin Sodium", pack: "1 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Bacterial infections in livestock", co: "ACI", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 21, name: "Inj. Amoxyvet", comp_val: "Amoxicillin Sodium", pack: "1 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Pharyngitis, Bronchopneumonia", co: "Techno", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 22, name: "Inj. Fimox Vet", comp_val: "Amoxicillin Sodium", pack: "1 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Black quarter, Joint infection", co: "Popular", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 23, name: "Inj. Moxilin Vet LA", comp_val: "Amoxicillin trihydrate", pack: "10 ml/100 ml vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Long acting - Respiratory & Alimentary", co: "Acme", type: "c", str: "150mg/ml", mgkg: "15mg/kg"},
    {sl: 24, name: "Inj. Fimox DS Vet", comp_val: "Amoxicillin Sodium", pack: "2 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Mastitis, Metritis, Calf scour", co: "Popular", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 25, name: "Inj. Aject DS Vet", comp_val: "Amoxicillin Sodium", pack: "2 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Bacterial infections in ruminants", co: "SK+F", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 26, name: "Bol. Moxilin vet", comp_val: "Amoxicillin Trihydrate", pack: "1 gm bolus", safe: "Safe", pet: "Safe", base: 0.008, unit: "bolus", ind: "Oral antibiotic for Livestock", co: "Acme", type: "c", str: "1g/bol", mgkg: "8mg/kg"},
    {sl: 27, name: "Bol. Renamox", comp_val: "Amoxicillin", pack: "500 mg bolus", safe: "Safe", pet: "Safe", base: 0.02, unit: "bolus", ind: "Bacterial infections in small ruminants", co: "Renata", type: "c", str: "500mg/bol", mgkg: "10mg/kg"},
    {sl: 28, name: "Bol. Navamox vet", comp_val: "Amoxicillin", pack: "500 mg bolus", safe: "Safe", pet: "Safe", base: 0.02, unit: "bolus", ind: "Salmonellosis, Calf scour", co: "Navana", type: "c", str: "500mg/bol", mgkg: "10mg/kg"},
    {sl: 29, name: "Inj. Augment Vet 1.2g", comp_val: "Amoxicillin + Clavulanic Acid", pack: "1.2 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.035, unit: "ml", ind: "Mastitis, Metritis, Pneumonia", co: "SK+F", type: "c", str: "120mg/ml", mgkg: "7mg/kg"},
    {sl: 30, name: "Inj. Amoclav 1.2g", comp_val: "Amoxicillin + Clavulanic Acid", pack: "1.2 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Gastroenteritis, Pharyngitis", co: "Techno", type: "c", str: "120mg/ml", mgkg: "12mg/kg"},
    {sl: 31, name: "Inj. Moxaclav 1.2g", comp_val: "Amoxicillin + Clavulanic Acid", pack: "1.2 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Joint infection, UTI, HS", co: "Square", type: "c", str: "120mg/ml", mgkg: "12mg/kg"},
    {sl: 32, name: "Inj. Augment Vet 2.4g", comp_val: "Amoxicillin + Clavulanic Acid", pack: "2.4 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.035, unit: "ml", ind: "Severe bacterial infections", co: "SK+F", type: "c", str: "240mg/ml", mgkg: "7mg/kg"},
    {sl: 33, name: "Bol. Moxilin-CV Vet", comp_val: "Amoxicillin + Clavulanic Acid", pack: "500 mg Bolus", safe: "Safe", pet: "Safe", base: 0.0125, unit: "bolus", ind: "Bacterial diarrhea, Pneumonia", co: "Acme", type: "c", str: "500mg/bol", mgkg: "10mg/kg"},
    {sl: 34, name: "Bol. Moxilin-CV DS Vet", comp_val: "Amoxicillin + Clavulanic Acid", pack: "1000 mg Bolus", safe: "Safe", pet: "Safe", base: 0.006, unit: "bolus", ind: "Chronic respiratory infections", co: "Acme", type: "c", str: "1000mg/bol", mgkg: "10mg/kg"},

    // --- Cephalosporins ---
    {sl: 35, name: "Inj. Triject vet", comp_val: "Ceftriaxone", pack: "250 mg vial + 5 ml WFI", safe: "Safe", pet: "Safe", base: 0.06, unit: "ml", ind: "Septicemia, Bone & Joint infections", co: "SK+F", type: "c", str: "50mg/ml", mgkg: "15-50mg/kg"},
    {sl: 36, name: "Inj. ACICEF-3 (Vet)", comp_val: "Ceftriaxone", pack: "250 mg vial + 5 ml WFI", safe: "Safe", pet: "Safe", base: 0.06, unit: "ml", ind: "Respiratory & Uro-genital infections", co: "ACI", type: "c", str: "50mg/ml", mgkg: "15-50mg/kg"},
    {sl: 37, name: "Inj. Eracef vet", comp_val: "Ceftriaxone", pack: "250 mg vial + 5 ml WFI", safe: "Safe", pet: "Safe", base: 0.06, unit: "ml", ind: "Skin & Soft tissue infections", co: "Popular", type: "c", str: "50mg/ml", mgkg: "15-50mg/kg"},
    {sl: 38, name: "Inj. Trizon Vet", comp_val: "Ceftriaxone", pack: "250 mg vial + 5 ml WFI", safe: "Safe", pet: "Safe", base: 0.06, unit: "ml", ind: "Calf scours, Enteritis, Diarrhoea", co: "Acme", type: "c", str: "50mg/ml", mgkg: "15-50mg/kg"},
    {sl: 39, name: "Inj. Inject-Vet", comp_val: "Ceftriaxone", pack: "500 mg vial + 2 ml Lido", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Mastitis, Meningitis, Pre-operative", co: "SK+F", type: "c", str: "250mg/ml", mgkg: "10mg/kg"},
    {sl: 40, name: "Inj. Cefixon Vet", comp_val: "Ceftriaxone", pack: "500 mg vial + 2 ml Lido", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Post-operative bacterial infections", co: "Techno", type: "c", str: "250mg/ml", mgkg: "10mg/kg"},
    {sl: 41, name: "Inj. Renacef vet 1 gm", comp_val: "Ceftriaxone", pack: "1 gm vial + 3.5 ml Lido", safe: "Safe", pet: "Safe", base: 0.035, unit: "ml", ind: "Septicemia, Severe Pneumonia", co: "Renata", type: "c", str: "285mg/ml", mgkg: "10mg/kg"},
    {sl: 42, name: "Inj. Bovixon Vet 1 gm", comp_val: "Ceftriaxone", pack: "1 gm vial + 4 ml Lido", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Bone & Joint infections, Metritis", co: "Incepta", type: "c", str: "250mg/ml", mgkg: "10mg/kg"},
    {sl: 43, name: "Inj. Renacef vet 2 gm", comp_val: "Ceftriaxone", pack: "2 gm vial + 7 ml Lido", safe: "Safe", pet: "Safe", base: 0.035, unit: "ml", ind: "Large animal systemic infections", co: "Renata", type: "c", str: "285mg/ml", mgkg: "10mg/kg"},
    {sl: 44, name: "Inj. Tifur Vet 0.25g", comp_val: "Ceftiofur Sodium", pack: ".25 g vial + 5 ml WFI", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Shipping fever, Pneumonia, Foot rot", co: "Acme", type: "c", str: "50mg/ml", mgkg: "1.1-2.2mg/kg"},
    {sl: 45, name: "Inj. Dedicef vet 0.5g", comp_val: "Ceftiofur Sodium", pack: "0.5 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Endometritis, Postpuerperial metritis", co: "SK+F", type: "c", str: "50mg/ml", mgkg: "2mg/kg"},
    {sl: 46, name: "Inj. Ceftiren Vet 0.5g", comp_val: "Ceftiofur Sodium", pack: "0.5 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Pyometra, Respiratory diseases", co: "Renata", type: "c", str: "50mg/ml", mgkg: "2mg/kg"},
    {sl: 47, name: "Inj. Xfur 0.5g", comp_val: "Ceftiofur Sodium", pack: "0.5 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Bovine respiratory diseases", co: "Techno", type: "c", str: "50mg/ml", mgkg: "2mg/kg"},
    {sl: 48, name: "Inj. Acicef-4 0.5g", comp_val: "Ceftiofur Sodium", pack: "0.5 gm vial + 10 ml WFI", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Shipping fever, Pododermatitis", co: "ACI", type: "c", str: "50mg/ml", mgkg: "2mg/kg"},
    {sl: 49, name: "Inj. PaXXcell 1g", comp_val: "Ceftiofur Sodium", pack: "1 gm vial + 20 ml WFI", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Endometritis, Pyometra", co: "ACI", type: "c", str: "50mg/ml", mgkg: "2mg/kg"},

    // --- Fluoroquinolones ---
    {sl: 50, name: "Inj. Enrotril Max", comp_val: "Enrofloxacin", pack: "20 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.076, unit: "ml", ind: "Mastitis, Diarrhoea, Respiratory infection", co: "Axon", type: "c", str: "100mg/ml", mgkg: "7.5mg/kg"},
    {sl: 51, name: "ENROVET", comp_val: "Enrofloxacin", pack: "100 ml bottle", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Secondary bacterial Infection", co: "Acme", type: "c", str: "100mg/ml", mgkg: "N/A"},
    {sl: 52, name: "Enroflox", comp_val: "Enrofloxacin", pack: "100 ml bottle", safe: "Unsafe", pet: "Unsafe", base: 0.2, unit: "ml", ind: "Respiratory & GI infections", co: "Acme", type: "c", str: "100mg/ml", mgkg: "20mg/kg"},
    {sl: 53, name: "Inj. Marbo Vet", comp_val: "Marbofloxacin", pack: "10/30/100 ml vial", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "ml", ind: "Acute mastitis, Severe respiratory infections", co: "SK+F", type: "c", str: "100mg/ml", mgkg: "2mg/kg"},
    {sl: 54, name: "Inj. Marbores 10%", comp_val: "Marbofloxacin", pack: "20 ml vial", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "ml", ind: "Neonatal gastro-enteritis, Pneumonia", co: "ACI", type: "c", str: "100mg/ml", mgkg: "2mg/kg"},
    {sl: 55, name: "Inj. Marboflox", comp_val: "Marbofloxacin", pack: "10 ml vial", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "ml", ind: "Gram positive & negative infections", co: "Bridge", type: "c", str: "100mg/ml", mgkg: "2mg/kg"},
    {sl: 56, name: "Inj. Arbocin Vet", comp_val: "Marbofloxacin", pack: "10 ml vial", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "ml", ind: "Severe Pneumonia, Mastitis", co: "Acme", type: "c", str: "100mg/ml", mgkg: "2mg/kg"},
    {sl: 57, name: "Bol. Marbo Vet", comp_val: "Marbofloxacin", pack: "50 mg bolus", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "bolus", ind: "Oral therapy for Calves", co: "SK+F", type: "c", str: "50mg/bol", mgkg: "1mg/kg"},
    {sl: 58, name: "Bol. Marquin Vet", comp_val: "Marbofloxacin", pack: "50 mg bolus", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "bolus", ind: "Oral antibiotic for small ruminants", co: "Navana", type: "c", str: "50mg/bol", mgkg: "1mg/kg"},
    {sl: 59, name: "Inj. Moraxacin-Vet", comp_val: "Marbofloxacin", pack: "30 ml vial", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "ml", ind: "Acute mastitis, Alimentary infections", co: "Square", type: "c", str: "100mg/ml", mgkg: "2mg/kg"},
    {sl: 60, name: "Inj. Ciprocin-Vet", comp_val: "Ciprofloxacin", pack: "10/50 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anthrax, Mastitis, Foot Rot", co: "Square", type: "c", str: "50mg/ml", mgkg: "5mg/kg"},
    {sl: 61, name: "Inj. Beuflox Vet", comp_val: "Ciprofloxacin", pack: "10/50 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Respiratory & Urinary infections", co: "Incepta", type: "c", str: "50mg/ml", mgkg: "5mg/kg"},
    {sl: 62, name: "Inj. Cetraxal", comp_val: "Ciprofloxacin", pack: "10/50 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "GI infection, Enteritis", co: "Acme", type: "c", str: "50mg/ml", mgkg: "5mg/kg"},
    {sl: 63, name: "Inj. Cipro-A Vet", comp_val: "Ciprofloxacin", pack: "30/100 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Swine dysentery, Anthrax", co: "Acme", type: "c", str: "50mg/ml", mgkg: "5mg/kg"},
    {sl: 64, name: "Inj. Civox Vet", comp_val: "Ciprofloxacin", pack: "10/50 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Skin, Bone & Ear infections", co: "Popular", type: "c", str: "50mg/ml", mgkg: "5mg/kg"},
    {sl: 65, name: "Inj. Ciproflox", comp_val: "Ciprofloxacin", pack: "10/50 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Metritis, UTI, Respiratory infections", co: "SK+F", type: "c", str: "50mg/ml", mgkg: "5mg/kg"},
    {sl: 66, name: "Inj. Acivet Cipro", comp_val: "Ciprofloxacin", pack: "10/50 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "General bacterial infections", co: "ACI", type: "c", str: "50mg/ml", mgkg: "5mg/kg"},
    {sl: 67, name: "Inj. Ciprotab", comp_val: "Ciprofloxacin", pack: "10/50 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Bacterial systemic infections", co: "Techno", type: "c", str: "50mg/ml", mgkg: "5mg/kg"},
    {sl: 68, name: "Bol. Civox vet", comp_val: "Ciprofloxacin", pack: "1 gm bolus", safe: "Unsafe", pet: "Safe", base: 0.01, unit: "bolus", ind: "Oral therapy for Cattle", co: "Popular", type: "c", str: "1g/bol", mgkg: "5-10mg/kg"},
    {sl: 69, name: "Bol. Proxacin", comp_val: "Ciprofloxacin", pack: "1 gm bolus", safe: "Unsafe", pet: "Safe", base: 0.01, unit: "bolus", ind: "Enteritis, UTI infections", co: "Bridge", type: "c", str: "1g/bol", mgkg: "6.7-13.4mg/kg"},
    {sl: 70, name: "Inj. DFN Vet", comp_val: "Danofloxacin Mesylate", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Respiratory disease, Enteric infections", co: "SK+F", type: "c", str: "25mg/ml", mgkg: "1.25mg/kg"},

    // --- Tetracyclines ---
    {sl: 71, name: "Inj. Otetra-Vet", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.2, unit: "ml", ind: "HS, BQ, Anaplasmosis, Foot-rot", co: "Square", type: "c", str: "50mg/ml", mgkg: "10mg/kg"},
    {sl: 72, name: "Inj. Renamycin-50", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.2, unit: "ml", ind: "Pneumonia, Metritis, Navel ill", co: "Renata", type: "c", str: "50mg/ml", mgkg: "10mg/kg"},
    {sl: 73, name: "Inj. Renamycin IM", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.2, unit: "ml", ind: "Bacterial enteritis, Leptospirosis", co: "Renata", type: "c", str: "50mg/ml", mgkg: "10mg/kg"},
    {sl: 74, name: "Inj. Chemycin-50", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.2, unit: "ml", ind: "General bacterial infections", co: "Chemist", type: "c", str: "50mg/ml", mgkg: "10mg/kg"},
    {sl: 75, name: "Inj. Technomycin-50", comp_val: "Oxytetracycline + Lignocaine", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.2, unit: "ml", ind: "Bacterial infections with pain relief", co: "Techno", type: "c", str: "50mg/ml", mgkg: "10mg/kg"},
    {sl: 76, name: "Inj. Renamycin-100", comp_val: "Oxytetracycline", pack: "10/100 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Severe HS, BQ, Anaplasmosis", co: "Renata", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 77, name: "Inj. Oxyvet-100", comp_val: "Oxytetracycline", pack: "10/100 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Respiratory & Uterine infections", co: "Globe", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 78, name: "Inj. Vetomycin", comp_val: "Oxytetracycline", pack: "10/100 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Systemic bacterial infections", co: "Opsonin", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 79, name: "Inj. Otetra-Vet LA", comp_val: "Oxytetracycline", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Long acting - HS, BQ, Anaplasmosis", co: "Square", type: "c", str: "200mg/ml", mgkg: "20mg/kg"},
    {sl: 80, name: "Bol. OTC Vet", comp_val: "Oxytetracycline", pack: "500 mg bolus", safe: "Unsafe", pet: "Unsafe", base: 0.02, unit: "bolus", ind: "Oral deworming & Bacterial control", co: "Popular", type: "c", str: "500mg/bol", mgkg: "10-20mg/kg"},

    // --- Aminoglycosides ---
    {sl: 81, name: "Inj. Genacyn-Vet 10", comp_val: "Gentamicin Sulphate", pack: "10/100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "UTI, Respiratory, Septicemia", co: "Square", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    
    
    

    // --- Sulfonamides: Injectables ---
    {sl: 82, name: "Inj. Diadin Vet", comp_val: "Sulphadimidine Sodium 33.3%", pack: "30/100 ml", safe: "Unsafe", pet: "Safe(Caution)", base: 0.3, unit: "ml", ind: "Pneumonia, Footrot, Enteritis, Calf scour", co: "Renata", type: "c", str: "333mg/ml", mgkg: "100-200mg/kg"},
    {sl: 83, name: "Inj. Sulphadim Vet", comp_val: "Sulphadimidine Sodium 33.3%", pack: "30/100 ml", safe: "Unsafe", pet: "Safe(Caution)", base: 0.3, unit: "ml", ind: "Metritis, Mastitis, HS, Coccidiosis", co: "Acme", type: "c", str: "333mg/ml", mgkg: "100-200mg/kg"},
    {sl: 84, name: "Inj. Dine-Vet", comp_val: "Sulphadimidine Sodium 33.3%", pack: "30/100 ml", safe: "Unsafe", pet: "Safe(Caution)", base: 0.3, unit: "ml", ind: "Bacterial & Protozoal infections", co: "Square", type: "c", str: "333mg/ml", mgkg: "100-200mg/kg"},
    {sl: 85, name: "Inj. Sulphadimidine", comp_val: "Sulphadimidine Sodium 33.3%", pack: "30/100 ml", safe: "Unsafe", pet: "Safe(Caution)", base: 0.3, unit: "ml", ind: "Coccidiosis, Pneumonia", co: "Opsonin", type: "c", str: "333mg/ml", mgkg: "100-200mg/kg"},
    {sl: 86, name: "Inj. Sulphavet", comp_val: "Sulphadimidine Sodium 33.3%", pack: "30/100 ml", safe: "Unsafe", pet: "Safe(Caution)", base: 0.3, unit: "ml", ind: "Actinomycosis, HS, BQ", co: "Techno", type: "c", str: "333mg/ml", mgkg: "100-200mg/kg"},
    {sl: 87, name: "Inj. Aditrim Vet", comp_val: "Sulfadiazine + Trimethoprim", pack: "10/30/100 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Respiratory, Alimentary & Urogenital", co: "Acme", type: "c", str: "240mg/ml", mgkg: "15-30mg/kg"},
    {sl: 88, name: "Inj. Trimevet", comp_val: "Sulfadiazine + Trimethoprim", pack: "10/30/100 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "HS, Pneumonia, Joint-ill", co: "Techno", type: "c", str: "240mg/ml", mgkg: "15-30mg/kg"},
    {sl: 89, name: "Inj. Cotrim-Vet", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "10/30/100 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Metritis, Bronchitis, Enteritis", co: "Square", type: "c", str: "240mg/ml", mgkg: "15-30mg/kg"},
    {sl: 90, name: "Inj. Sulprim Vet", comp_val: "Sulfadiazine + Trimethoprim", pack: "30 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Bacterial pneumonia, Scour", co: "Renata", type: "c", str: "240mg/ml", mgkg: "15-30mg/kg"},
    {sl: 91, name: "Inj. Trimethovet", comp_val: "Sulfadiazine + Trimethoprim", pack: "30 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Systemic bacterial infections", co: "Popular", type: "c", str: "240mg/ml", mgkg: "15-30mg/kg"},
    {sl: 92, name: "Inj. Sulprim DS", comp_val: "Sulfadiazine + Trimethoprim", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 0.05, unit: "ml", ind: "Severe Pneumonia, HS", co: "Renata", type: "c", str: "480mg/ml", mgkg: "15-30mg/kg"},
    {sl: 93, name: "Inj. Cotrim DS", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "50 ml", safe: "Unsafe", pet: "Safe", base: 0.05, unit: "ml", ind: "Acute Bronchitis, Enteritis", co: "Square", type: "c", str: "480mg/ml", mgkg: "15-30mg/kg"},
    {sl: 94, name: "Inj. Aditrim DS", comp_val: "Sulfadiazine + Trimethoprim", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 0.05, unit: "ml", ind: "Broad spectrum infection control", co: "Acme", type: "c", str: "480mg/ml", mgkg: "15-30mg/kg"},
    {sl: 95, name: "Inj. Trimevet DS", comp_val: "Sulfadiazine + Trimethoprim", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 0.05, unit: "ml", ind: "Severe Joint-ill, HS", co: "Techno", type: "c", str: "480mg/ml", mgkg: "15-30mg/kg"},

    // --- Sulfonamides: Bolus ---
    {sl: 96, name: "Bol. Diadin Vet", comp_val: "Sulphadimidine 5 gm", pack: "5 gm Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 1, unit: "bolus", ind: "Oral Coccidiosis, Enteritis", co: "Renata", type: "c", str: "5g", mgkg: "100-200mg/kg"},
    {sl: 97, name: "Bol. Sulphadim Vet", comp_val: "Sulphadimidine 5 gm", pack: "5 gm Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 1, unit: "bolus", ind: "Calf scour, Footrot", co: "Acme", type: "c", str: "5g", mgkg: "100-200mg/kg"},
    {sl: 98, name: "Bol. Sulphadimidine", comp_val: "Sulphadimidine 5 gm", pack: "5 gm Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 1, unit: "bolus", ind: "Bacterial diarrhea", co: "Opsonin", type: "c", str: "5g", mgkg: "100-200mg/kg"},
    {sl: 99, name: "Bol. Dine Vet", comp_val: "Sulphadimidine 5 gm", pack: "5 gm Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 1, unit: "bolus", ind: "Alimentary tract infections", co: "Square", type: "c", str: "5g", mgkg: "100-200mg/kg"},
    {sl: 100, name: "Bol. Sulphavet", comp_val: "Sulphadimidine 5 gm", pack: "5 gm Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 1, unit: "bolus", ind: "Actinobacillosis, Metritis", co: "Techno", type: "c", str: "5g", mgkg: "100-200mg/kg"},
    {sl: 101, name: "Bol. Suldin Vet", comp_val: "Sulphadimidine 5 gm", pack: "5 gm Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 1, unit: "bolus", ind: "Bacterial enteritis", co: "Popular", type: "c", str: "5g", mgkg: "100-200mg/kg"},
    {sl: 102, name: "Bol. Aditrim Vet", comp_val: "Sulfadiazine + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Pneumonia, Urogenital", co: "Acme", type: "c", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 103, name: "Bol. Trimevet", comp_val: "Sulfadiazine + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Oral systemic antibiotic", co: "Techno", type: "c", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 104, name: "Bol. Cotrim-Vet", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Metritis, Bronchitis", co: "Square", type: "c", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 105, name: "Bol. Trimvet", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Enteritis, Respiratory", co: "Opsonin", type: "c", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 106, name: "Bol. Sulprim DS", comp_val: "Sulfadiazine + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 0.5, unit: "bolus", ind: "Severe systemic infection", co: "Renata", type: "c", str: "Double", mgkg: "15-30mg/kg"},
    {sl: 107, name: "Bol. Cotrim DS", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 0.5, unit: "bolus", ind: "Acute Metritis, Enteritis", co: "Square", type: "c", str: "Double", mgkg: "15-30mg/kg"},
    {sl: 108, name: "Bol. Aditrim DS", comp_val: "Sulfadiazine + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 0.5, unit: "bolus", ind: "Oral HS, Pneumonia", co: "Acme", type: "c", str: "Double", mgkg: "15-30mg/kg"},
    {sl: 109, name: "Bol. Trimevet DS", comp_val: "Sulfadiazine + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 0.5, unit: "bolus", ind: "Bacterial scours control", co: "Techno", type: "c", str: "Double", mgkg: "15-30mg/kg"},

    // --- Sulfonamides: Powder/WSP ---
    {sl: 110, name: "Pulv. Sumid-Vet", comp_val: "Sulphadimidine Sodium", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Coccidiosis, HS, BQ", co: "Square", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 111, name: "Pulv. Nilamide", comp_val: "Sulphadimidine Sodium", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Metritis, Footrot", co: "Techno", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 112, name: "Pulv. Sulphavet-P", comp_val: "Sulphadimidine Sodium", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Respiratory infections", co: "Techno", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 113, name: "Pulv. Sulphadimidine-Vet", comp_val: "Sulphadimidine Sodium", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Gastrointestinal scours", co: "Popular", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 114, name: "Pulv. Diadin-WSP", comp_val: "Sulphadimidine Sodium", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Poultry & Livestock Coccidiosis", co: "Renata", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 115, name: "Pulv. Sulfa-WSP", comp_val: "Sulphadimidine Sodium", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Alimentary tract scours", co: "ACI", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 116, name: "Pulv. Tridazine-Vet", comp_val: "Sulfadiazine + Trimethoprim", pack: "100 gm", safe: "Unsafe", pet: "Safe", base: 1, unit: "gm", ind: "Broad spectrum WSP antibiotic", co: "Acme", type: "c", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 117, name: "Pulv. Electrosul-Vet", comp_val: "Sulfonamides + Electrolytes", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 1, unit: "gm", ind: "Diarrhea with rehydration", co: "Square", type: "c", str: "Combo", mgkg: "N/A"},
    {sl: 118, name: "Pulv. Sulfa-Combo", comp_val: "Sulfadiazine + Trimethoprim", pack: "100 gm", safe: "Unsafe", pet: "Safe", base: 1, unit: "gm", ind: "Systemic WSP antibiotic", co: "Sk+f", type: "c", str: "WSP", mgkg: "15-30mg/kg"},
    {sl: 119, name: "Pulv. Cotrim-WSP", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "100 gm", safe: "Unsafe", pet: "Safe", base: 1, unit: "gm", ind: "Gastrointestinal WSP", co: "Popular", type: "c", str: "WSP", mgkg: "15-30mg/kg"},
    {sl: 120, name: "Pulv. Trim-Vet", comp_val: "Sulfadiazine + Trimethoprim", pack: "100 gm", safe: "Unsafe", pet: "Safe", base: 1, unit: "gm", ind: "Broad spectrum poultry WSP", co: "Incepta", type: "c", str: "WSP", mgkg: "15-30mg/kg"},

    // --- Antifungal: Bolus ---
    {sl: 121, name: "Bol. Fulvin-Vet", comp_val: "Griseofulvin 500 mg", pack: "500 mg Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "bolus", ind: "Ringworm, Dermatophytosis", co: "Square", type: "c", str: "500mg", mgkg: "10mg/kg"},
    {sl: 122, name: "Bol. Grisin-Vet", comp_val: "Griseofulvin 500 mg", pack: "500 mg Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "bolus", ind: "Skin fungal infections", co: "Renata", type: "c", str: "500mg", mgkg: "10mg/kg"},
    {sl: 123, name: "Bol. Fungivin", comp_val: "Griseofulvin 500 mg", pack: "500 mg Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "bolus", ind: "Dermatophytosis, Microsporum", co: "Acme", type: "c", str: "500mg", mgkg: "10mg/kg"},
    {sl: 124, name: "Bol. Gris-Vet", comp_val: "Griseofulvin 500 mg", pack: "500 mg Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "bolus", ind: "Fungal skin diseases", co: "Popular", type: "c", str: "500mg", mgkg: "10mg/kg"},
    {sl: 125, name: "Bol. Antifung-Vet", comp_val: "Griseofulvin 500 mg", pack: "500 mg Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "bolus", ind: "Ringworm treatment", co: "Techno", type: "c", str: "500mg", mgkg: "10mg/kg"},
    {sl: 126, name: "Bol. Mycovin Vet", comp_val: "Griseofulvin 500 mg", pack: "500 mg Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "bolus", ind: "Systemic antifungal", co: "Incepta", type: "c", str: "500mg", mgkg: "10mg/kg"},

    // --- Continuing with more Sulfonamides found in Page 25-29 (3.pdf reference overlaps) ---
    {sl: 127, name: "Inj. Sulfatrim", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Respiratory tract infections", co: "Navana", type: "c", str: "240mg/ml", mgkg: "15-30mg/kg"},
    {sl: 128, name: "Bol. Sulfatrim", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Bacterial enteritis", co: "Navana", type: "c", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 129, name: "Inj. Trimesul", comp_val: "Sulfadiazine + Trimethoprim", pack: "30 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Metritis, Pneumonia", co: "ACI", type: "c", str: "240mg/ml", mgkg: "15-30mg/kg"},
    {sl: 130, name: "Bol. Trimesul", comp_val: "Sulfadiazine + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "HS, Joint-ill", co: "ACI", type: "c", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 131, name: "Inj. Sulfa-Combo", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Systemic bacterial control", co: "Incepta", type: "c", str: "240mg/ml", mgkg: "15-30mg/kg"},
    {sl: 132, name: "Bol. Sulfa-Combo", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Bacterial scours", co: "Incepta", type: "c", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 133, name: "Inj. Bactitab Vet", comp_val: "Sulfadiazine + Trimethoprim", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Urogenital infections", co: "Chemist", type: "c", str: "240mg/ml", mgkg: "15-30mg/kg"},
    {sl: 134, name: "Bol. Bactitab Vet", comp_val: "Sulfadiazine + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Pneumonia, Footrot", co: "Chemist", type: "c", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 135, name: "Inj. Trimovet", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "30 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Acute bronchitis", co: "Eskayef", type: "c", str: "240mg/ml", mgkg: "15-30mg/kg"},
    {sl: 136, name: "Bol. Trimovet", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Metritis, Enteritis", co: "Eskayef", type: "c", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 137, name: "Inj. Sulfa-Z", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "50 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "General systemic infection", co: "Opsonin", type: "c", str: "240mg/ml", mgkg: "15-30mg/kg"},
    {sl: 138, name: "Bol. Sulfa-Z", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Respiratory infections", co: "Opsonin", type: "c", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 139, name: "Inj. Cotrim-DS", comp_val: "Sulfadiazine + Trimethoprim", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 0.05, unit: "ml", ind: "Severe Pneumonia", co: "Popular", type: "c", str: "480mg/ml", mgkg: "15-30mg/kg"},
    {sl: 140, name: "Bol. Cotrim-DS", comp_val: "Sulfadiazine + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 0.5, unit: "bolus", ind: "HS control", co: "Popular", type: "c", str: "Double", mgkg: "15-30mg/kg"},
    {sl: 141, name: "Inj. Tridazine-DS", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 0.05, unit: "ml", ind: "Acute Metritis", co: "Globe", type: "c", str: "480mg/ml", mgkg: "15-30mg/kg"},
    {sl: 142, name: "Bol. Tridazine-DS", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 0.5, unit: "bolus", ind: "Bacterial enteritis", co: "Globe", type: "c", str: "Double", mgkg: "15-30mg/kg"},
    {sl: 143, name: "Inj. Sul-Trim DS", comp_val: "Sulfadiazine + Trimethoprim", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 0.05, unit: "ml", ind: "Broad spectrum control", co: "Techno", type: "c", str: "480mg/ml", mgkg: "15-30mg/kg"},
    {sl: 144, name: "Bol. Sul-Trim DS", comp_val: "Sulfadiazine + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 0.5, unit: "bolus", ind: "Footrot control", co: "Techno", type: "c", str: "Double", mgkg: "15-30mg/kg"},
    {sl: 145, name: "Inj. Bactron-DS", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "50 ml", safe: "Unsafe", pet: "Safe", base: 0.05, unit: "ml", ind: "Severe respiratory control", co: "Square", type: "c", str: "480mg/ml", mgkg: "15-30mg/kg"},
    {sl: 146, name: "Bol. Bactron-DS", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 0.5, unit: "bolus", ind: "Metritis treatment", co: "Square", type: "c", str: "Double", mgkg: "15-30mg/kg"},
    {sl: 147, name: "Inj. Sulprim-Z", comp_val: "Sulfadiazine + Trimethoprim", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "General bacterial infection", co: "ACI", type: "c", str: "240mg/ml", mgkg: "15-30mg/kg"},
    {sl: 148, name: "Bol. Sulprim-Z", comp_val: "Sulfadiazine + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "HS, BQ control", co: "ACI", type: "c", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 149, name: "Inj. Trimevet-Z", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "30 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Pneumonia, Scours", co: "Techno", type: "c", str: "240mg/ml", mgkg: "15-30mg/kg"},
    {sl: 150, name: "Bol. Trimevet-Z", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Oral systemic treatment", co: "Techno", type: "c", str: "Combo", mgkg: "15-30mg/kg"},
    {sl: 151, name: "Pulv. Sumid-Z", comp_val: "Sulphadimidine Sodium", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Coccidiosis control", co: "Square", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 152, name: "Pulv. Nilamide-Z", comp_val: "Sulphadimidine Sodium", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Metritis, Footrot", co: "Techno", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 153, name: "Pulv. Sulphavet-Z", comp_val: "Sulphadimidine Sodium", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Bacterial scours", co: "Incepta", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 154, name: "Pulv. Sulfa-Z", comp_val: "Sulphadimidine Sodium", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Digestive scours", co: "Popular", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 155, name: "Pulv. Trim-WSP", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "100 gm", safe: "Unsafe", pet: "Safe", base: 1, unit: "gm", ind: "Poultry bacterial control", co: "Acme", type: "c", str: "WSP", mgkg: "15-30mg/kg"},
    {sl: 156, name: "Pulv. Bactra-WSP", comp_val: "Sulfadiazine + Trimethoprim", pack: "100 gm", safe: "Unsafe", pet: "Safe", base: 1, unit: "gm", ind: "Systemic WSP", co: "Square", type: "c", str: "WSP", mgkg: "15-30mg/kg"},
    {sl: 157, name: "Pulv. Sul-Trim WSP", comp_val: "Sulfadiazine + Trimethoprim", pack: "100 gm", safe: "Unsafe", pet: "Safe", base: 1, unit: "gm", ind: "Broad spectrum WSP", co: "Techno", type: "c", str: "WSP", mgkg: "15-30mg/kg"},
    {sl: 158, name: "Pulv. Sulfa-V", comp_val: "Sulphadimidine Sodium", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Coccidiosis treatment", co: "Renata", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 159, name: "Pulv. Cotrim-Z", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "100 gm", safe: "Unsafe", pet: "Safe", base: 1, unit: "gm", ind: "Gastrointestinal WSP", co: "ACI", type: "c", str: "WSP", mgkg: "15-30mg/kg"},
    {sl: 160, name: "Pulv. Tridazine-Z", comp_val: "Sulfadiazine + Trimethoprim", pack: "100 gm", safe: "Unsafe", pet: "Safe", base: 1, unit: "gm", ind: "Systemic WSP", co: "Globe", type: "c", str: "WSP", mgkg: "15-30mg/kg"},
    {sl: 161, name: "Pulv. Sulprim-WSP", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "100 gm", safe: "Unsafe", pet: "Safe", base: 1, unit: "gm", ind: "Alimentary tract control", co: "Renata", type: "c", str: "WSP", mgkg: "15-30mg/kg"},
    {sl: 162, name: "Bol. Dermaphyl-Z", comp_val: "Griseofulvin 500 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "bolus", ind: "Ringworm treatment", co: "Navana", type: "c", str: "500mg", mgkg: "10mg/kg"},
    {sl: 163, name: "Bol. Grisin-Z", comp_val: "Griseofulvin 500 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "bolus", ind: "Skin fungal control", co: "Renata", type: "c", str: "500mg", mgkg: "10mg/kg"},
    {sl: 164, name: "Bol. Fungivin-Z", comp_val: "Griseofulvin 500 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "bolus", ind: "Dermatophytosis treatment", co: "Acme", type: "c", str: "500mg", mgkg: "10mg/kg"},
    {sl: 165, name: "Bol. Gris-Z", comp_val: "Griseofulvin 500 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "bolus", ind: "Fungal diseases in cattle", co: "Popular", type: "c", str: "500mg", mgkg: "10mg/kg"},
    {sl: 166, name: "Bol. Antifung-Z", comp_val: "Griseofulvin 500 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "bolus", ind: "Dermatophyton control", co: "Techno", type: "c", str: "500mg", mgkg: "10mg/kg"},
    {sl: 167, name: "Bol. Mycovin-Z", comp_val: "Griseofulvin 500 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "bolus", ind: "Systemic skin antifungal", co: "Incepta", type: "c", str: "500mg", mgkg: "10mg/kg"},
    {sl: 168, name: "Inj. Diadin-Z", comp_val: "Sulphadimidine Sodium", pack: "100 ml", safe: "Unsafe", pet: "Safe(Caution)", base: 0.3, unit: "ml", ind: "Severe Pneumonia control", co: "Renata", type: "c", str: "333mg/ml", mgkg: "100-200mg/kg"},
    {sl: 169, name: "Inj. Sulphadim-Z", comp_val: "Sulphadimidine Sodium", pack: "100 ml", safe: "Unsafe", pet: "Safe(Caution)", base: 0.3, unit: "ml", ind: "Footrot treatment", co: "Acme", type: "c", str: "333mg/ml", mgkg: "100-200mg/kg"},
    {sl: 170, name: "Inj. Dine-Z", comp_val: "Sulphadimidine Sodium", pack: "100 ml", safe: "Unsafe", pet: "Safe(Caution)", base: 0.3, unit: "ml", ind: "Metritis treatment", co: "Square", type: "c", str: "333mg/ml", mgkg: "100-200mg/kg"},
    {sl: 171, name: "Inj. Sulphadimidine-Z", comp_val: "Sulphadimidine Sodium", pack: "100 ml", safe: "Unsafe", pet: "Safe(Caution)", base: 0.3, unit: "ml", ind: "Coccidiosis treatment", co: "Opsonin", type: "c", str: "333mg/ml", mgkg: "100-200mg/kg"},
    
    

    
    


    // --- Antifungal (Bolus & Tablets) ---
    {sl: 172, name: "Bol. Dermaphyl Vet", comp_val: "Griseofulvin 2.5 gm", pack: "2.5 gm Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.004, unit: "bolus", ind: "Ringworm, Dermatophytosis", co: "Navana", type: "c", str: "2.5g/bol", mgkg: "10mg/kg"},
    {sl: 173, name: "Tab. Fulvin Vet", comp_val: "Griseofulvin 500 mg", pack: "500 mg Tablet", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "tab", ind: "Fungal skin infections", co: "Square", type: "c", str: "500mg/tab", mgkg: "10mg/kg"},
    {sl: 174, name: "Tab. Grisin Vet", comp_val: "Griseofulvin 500 mg", pack: "500 mg Tablet", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "tab", ind: "Dermatophytosis", co: "Renata", type: "c", str: "500mg/tab", mgkg: "10mg/kg"},
    {sl: 175, name: "Tab. Fungivin Vet", comp_val: "Griseofulvin 500 mg", pack: "500 mg Tablet", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "tab", ind: "Skin fungal control", co: "Acme", type: "c", str: "500mg/tab", mgkg: "10mg/kg"},

    // --- Antiprotozoal: Diminazene Aceturate ---
    {sl: 176, name: "Inj. Babesin-Vet", comp_val: "Diminazene Aceturate 1.05 gm", pack: "2.36 gm sachet + 15 ml WFI", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Babesiosis, Trypanosomiasis, Theileriosis", co: "Square", type: "c", str: "445mg/vial", mgkg: "3.5-7mg/kg"},
    {sl: 177, name: "Inj. Renazene-Vet", comp_val: "Diminazene Aceturate 1.05 gm", pack: "2.36 gm sachet + 15 ml WFI", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Pyrexia, Babesiosis", co: "Renata", type: "c", str: "445mg/vial", mgkg: "3.5-7mg/kg"},
    {sl: 178, name: "Inj. Bavenil Vet", comp_val: "Diminazene Aceturate + Phenazone", pack: "2.36 gm sachet", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Babesiosis with high fever", co: "Acme", type: "c", str: "Combined", mgkg: "3.5-7mg/kg"},
    {sl: 179, name: "Inj. G-Zene Vet", comp_val: "Diminazene Aceturate", pack: "2.36 gm sachet", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Bovine Babesiosis", co: "Gonoshasthaya", type: "c", str: "Combined", mgkg: "3.5-7mg/kg"},
    {sl: 180, name: "Inj. ACI-Zene Vet", comp_val: "Diminazene Aceturate", pack: "2.36 gm sachet", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Trypanosomiasis in livestock", co: "ACI", type: "c", str: "Combined", mgkg: "3.5-7mg/kg"},
    {sl: 181, name: "Inj. Trypazene Vet", comp_val: "Diminazene Aceturate", pack: "2.36 gm sachet", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Protozoal infections", co: "Popular", type: "c", str: "Combined", mgkg: "3.5-7mg/kg"},
    {sl: 182, name: "Inj. Babecure-Z", comp_val: "Diminazene Aceturate", pack: "2.36 gm sachet", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Severe Babesiosis control", co: "Incepta", type: "c", str: "Combined", mgkg: "3.5-7mg/kg"},
    {sl: 183, name: "Inj. Zene-Vet", comp_val: "Diminazene Aceturate", pack: "2.36 gm sachet", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Theileriosis treatment", co: "Techno", type: "c", str: "Combined", mgkg: "3.5-7mg/kg"},

    // --- Antiprotozoal: Imidocarb Dipropionate ---
    {sl: 184, name: "Inj. Ectorid", comp_val: "Imidocarb Dipropionate 133.26 mg", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Babesiosis, Anaplasmosis", co: "Renata", type: "c", str: "133.26mg/ml", mgkg: "1ml/31kg"},
    {sl: 185, name: "Inj. Babenil", comp_val: "Imidocarb Dipropionate 133.26 mg", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Anaplasma & Babesia species", co: "Techno", type: "c", str: "133.26mg/ml", mgkg: "1ml/31kg"},
    {sl: 186, name: "Inj. Babecure", comp_val: "Imidocarb Dipropionate 120 mg", pack: "2 ml ampoule", safe: "Safe", pet: "Safe", base: 0.025, unit: "ml", ind: "Severe Babesiosis", co: "Acme", type: "c", str: "120mg/ml", mgkg: "1ml/40kg"},
    {sl: 187, name: "Inj. E-Carbzol", comp_val: "Imidocarb Dipropionate 120 mg", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 0.01, unit: "ml", ind: "Prevention of Babesiosis", co: "ACI", type: "c", str: "120mg/ml", mgkg: "1ml/100kg"},
    {sl: 188, name: "Inj. Imidocarb-Vet", comp_val: "Imidocarb Dipropionate", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Anaplasmosis treatment", co: "Popular", type: "c", str: "133mg/ml", mgkg: "1ml/31kg"},

    // --- Antiprotozoal: Parvaquone & Buparvaquone ---
    {sl: 189, name: "Inj. Parva-Vet", comp_val: "Parvaquone 150 mg", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Theileriosis (East Coast Fever)", co: "Acme", type: "c", str: "150mg/ml", mgkg: "1ml/20kg"},
    {sl: 190, name: "Inj. Bupar-Vet", comp_val: "Buparvaquone 50 mg", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Tropical Theileriosis", co: "Renata", type: "c", str: "50mg/ml", mgkg: "1ml/20kg"},
    {sl: 191, name: "Inj. Theilo-Vet", comp_val: "Buparvaquone 50 mg", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Theileria parva & annulata", co: "Square", type: "c", str: "50mg/ml", mgkg: "1ml/20kg"},
    {sl: 192, name: "Inj. Bupa-Vet", comp_val: "Buparvaquone 50 mg", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Theileria infections in cattle", co: "ACI", type: "c", str: "50mg/ml", mgkg: "1ml/20kg"},

    // --- Anthelmintics: Levamisole & Triclabendazole ---
    {sl: 193, name: "Inj. Levavet", comp_val: "Levamisole Hydrochloride", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Nematodes, Roundworms", co: "Acme", type: "c", str: "Combined", mgkg: "7.5mg/kg"},
    {sl: 194, name: "Bol. Fasinex", comp_val: "Triclabendazole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Liver fluke control", co: "Novartis", type: "c", str: "900mg", mgkg: "12mg/kg"},
    {sl: 195, name: "Bol. Trilavet", comp_val: "Triclabendazole + Levamisole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Fascioliasis & Nematodes", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 196, name: "Bol. Renadex", comp_val: "Triclabendazole + Levamisole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Broad spectrum dewormer", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Anthelmintics: Albendazole & Fenbendazole ---
    {sl: 197, name: "Bol. Alben-Vet", comp_val: "Albendazole 600 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Roundworms, Lungworms, Flukes", co: "Square", type: "c", str: "600mg", mgkg: "7.5-10mg/kg"},
    {sl: 198, name: "Bol. Almex Vet", comp_val: "Albendazole 600 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Gastrointestinal parasites", co: "Renata", type: "c", str: "600mg", mgkg: "7.5-10mg/kg"},
    {sl: 199, name: "Bol. Fenavet", comp_val: "Fenbendazole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Nematodes & Cestodes", co: "Acme", type: "c", str: "Combined", mgkg: "5-7.5mg/kg"},
    {sl: 200, name: "Bol. Fenvet", comp_val: "Fenbendazole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Broad spectrum oral anthelmintic", co: "Techno", type: "c", str: "Combined", mgkg: "5-7.5mg/kg"},

    // --- Ectoparasiticides: Ivermectin ---
    {sl: 201, name: "Inj. Iver-Vet", comp_val: "Ivermectin 1%", pack: "Vial", safe: "Safe", pet: "Safe(Caution)", base: 0.02, unit: "ml", ind: "Lice, Mites, Ticks, Roundworms", co: "Square", type: "c", str: "10mg/ml", mgkg: "1ml/50kg"},
    {sl: 202, name: "Inj. Vermic", comp_val: "Ivermectin 1%", pack: "Vial", safe: "Safe", pet: "Safe(Caution)", base: 0.02, unit: "ml", ind: "External & Internal parasites", co: "Renata", type: "c", str: "10mg/ml", mgkg: "1ml/50kg"},
    {sl: 203, name: "Inj. A-Mectin", comp_val: "Ivermectin 1%", pack: "Vial", safe: "Safe", pet: "Safe(Caution)", base: 0.02, unit: "ml", ind: "Mange, Scabies control", co: "Acme", type: "c", str: "10mg/ml", mgkg: "1ml/50kg"},
    {sl: 204, name: "Inj. Ivecin Vet", comp_val: "Ivermectin 1%", pack: "Vial", safe: "Safe", pet: "Safe(Caution)", base: 0.02, unit: "ml", ind: "Tick & Mite infestation", co: "Techno", type: "c", str: "10mg/ml", mgkg: "1ml/50kg"},

    // --- Others from Trade Name Column (3.pdf) ---
    {sl: 205, name: "Inj. Atropin Vet", comp_val: "Atropine Sulphate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Organophosphate poisoning antidote", co: "Generic", type: "c", str: "Combined", mgkg: "0.04mg/kg"},
    {sl: 206, name: "Inj. Dexavet", comp_val: "Dexamethasone", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anti-inflammatory, Ketosis", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 207, name: "Inj. Phenavet", comp_val: "Chlorpheniramine Maleate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Allergic reactions", co: "Techno", type: "c", str: "Combined", mgkg: "1ml/25kg"},
    {sl: 208, name: "Inj. Antihist Vet", comp_val: "Chlorpheniramine Maleate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Urticaria, Insect bite", co: "Square", type: "c", str: "Combined", mgkg: "1ml/25kg"},
    {sl: 209, name: "Inj. Cal-D-Mag", comp_val: "Calcium + Vit D3 + Magnesium", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Milk fever, Hypocalcemia", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 210, name: "Inj. B-Vitamins", comp_val: "Vitamin B-Complex", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Vitamin deficiency, Weakness", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 211, name: "Bol. Digevet", comp_val: "Digestive Enzymes & Ginger", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Indigestion, Anorexia", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 212, name: "Bol. Rumivet", comp_val: "Rumenotorics", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Ruminal stasis, Impaction", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 213, name: "Liq. Aminovet", comp_val: "Amino Acids + Vitamins", pack: "Bottle", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Growth promoter, Tonic", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 214, name: "Powder Zinc-Vet", comp_val: "Zinc Sulphate", pack: "Sachet", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Skin diseases, Diarrhea", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 215, name: "Ointment Nitrofuran", comp_val: "Nitrofurazone", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Wound dressing, Bacterial infection", co: "Generic", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 216, name: "Inj. Oxytocin Vet", comp_val: "Oxytocin", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Uterine contraction, Milk letdown", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 217, name: "Inj. Receptal", comp_val: "Buserelin", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Ovulation induction, Infertility", co: "MSD", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 218, name: "Inj. GnRH-Vet", comp_val: "Gonadotropin", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Ovarian cyst treatment", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 219, name: "Bol. Metrovet", comp_val: "Metronidazole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Anaerobic infections, Giardiasis", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 220, name: "Bol. Flagyl Vet", comp_val: "Metronidazole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Diarrhea, Dysentery", co: "Sanofi", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 221, name: "Inj. Lidocaine Vet", comp_val: "Lidocaine Hydrochloride 2%", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Local anesthesia", co: "Generic", type: "c", str: "2%", mgkg: "N/A"},
    {sl: 222, name: "Inj. Xylazine Vet", comp_val: "Xylazine", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Sedative, Analgesic", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 223, name: "Inj. Ketamine Vet", comp_val: "Ketamine Hydrochloride", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Dissociative anesthetic", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 224, name: "Bol. Para-Vet", comp_val: "Paracetamol", pack: "Bolus", safe: "Safe", pet: "Unsafe", base: 1, unit: "bolus", ind: "Fever, Pain relief", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 225, name: "Bol. Apyrin", comp_val: "Aspirin", pack: "Bolus", safe: "Safe", pet: "Unsafe", base: 1, unit: "bolus", ind: "Analgesic, Anti-pyretic", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 226, name: "Inj. Melovet", comp_val: "Meloxicam", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "NSAID, Anti-inflammatory", co: "Acme", type: "c", str: "Combined", mgkg: "0.5mg/kg"},
    {sl: 227, name: "Inj. Ketovet-NSAID", comp_val: "Ketoprofen", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Pain and fever control", co: "Techno", type: "c", str: "Combined", mgkg: "3mg/kg"},
    {sl: 228, name: "Bol. Butavet", comp_val: "Phenylbutazone", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Musculoskeletal pain", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},




    // --- Antiprotozoal: Diminazene Aceturate (RTU & Powder) ---
    {sl: 229, name: "Inj. Berenil Vet 7% RTU", comp_val: "Diminazene aceturate 70 mg + Phenazone 375 mg", pack: "20/30/90 ml", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Babesiosis, Trypanosomiasis, Theileriosis", co: "Intervet", type: "c", str: "70mg/ml", mgkg: "1ml/20kg"},
    {sl: 230, name: "Inj. Babcop-Vet", comp_val: "Diminazene aceturate 70 mg + Phenazone 375 mg", pack: "20 ml vial", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Pyrexia in Babesiosis", co: "Square", type: "c", str: "70mg/ml", mgkg: "1ml/20kg"},
    {sl: 231, name: "Inj. Diminal", comp_val: "Diminazene diaceturate 445 mg + Phenazone 555 mg", pack: "2.36 g vial", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Protozoal infections, Babesia, Trypanosoma", co: "Eagle Vet (ACI)", type: "c", str: "Combined", mgkg: "1ml/12.5kg"},
    {sl: 232, name: "Inj. Trypanyl-Vet", comp_val: "Diminazene aceturate + Phenazone", pack: "2.36 g", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Babesiosis with high fever", co: "Techno", type: "c", str: "Combined", mgkg: "1ml/12.5kg"},
    {sl: 233, name: "Inj. Babenil-RTU", comp_val: "Diminazene aceturate + Phenazone", pack: "30 ml", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Tick fever, Babesiosis", co: "Renata", type: "c", str: "70mg/ml", mgkg: "1ml/20kg"},

    // --- Antiprotozoal: Quinuronium Sulfate ---
    {sl: 234, name: "Inj. Babesan", comp_val: "Quinuronium Sulfate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.02, unit: "ml", ind: "Piroplasmosis in cattle", co: "Generic", type: "c", str: "5%", mgkg: "1ml/50kg"},

    // --- Antiprotozoal: Imidocarb (Additional Brands) ---
    {sl: 235, name: "Inj. Imidox Vet", comp_val: "Imidocarb Dipropionate", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Anaplasmosis, Babesiosis control", co: "Acme", type: "c", str: "120mg/ml", mgkg: "1ml/40kg"},
    {sl: 136, name: "Inj. Imicarb Vet", comp_val: "Imidocarb Dipropionate", pack: "10 ml", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Trypanosomiasis control", co: "Square", type: "c", str: "120mg/ml", mgkg: "1ml/40kg"},

    // --- Antiprotozoal: Buparvaquone (Additional Brands) ---
    {sl: 237, name: "Inj. Butalex", comp_val: "Buparvaquone 50 mg", pack: "20 ml vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Theileriosis treatment", co: "MSD", type: "c", str: "50mg/ml", mgkg: "1ml/20kg"},
    {sl: 238, name: "Inj. Buparvet-Z", comp_val: "Buparvaquone 50 mg", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Tropical Theileriosis", co: "Renata", type: "c", str: "50mg/ml", mgkg: "1ml/20kg"},

    // --- Anthelmintics: Fenbendazole & Combinations (Page 10-15) ---
    {sl: 239, name: "Bol. Panacur Vet", comp_val: "Fenbendazole 1.5 gm", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Nematodes, Tapeworms", co: "MSD (Intervet)", type: "c", str: "1.5g", mgkg: "5-7.5mg/kg"},
    {sl: 240, name: "Bol. Fenavet 1.5", comp_val: "Fenbendazole 1.5 gm", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Gastrointestinal worms", co: "Acme", type: "c", str: "1.5g", mgkg: "5-7.5mg/kg"},
    {sl: 241, name: "Bol. Fenvet 1.5", comp_val: "Fenbendazole 1.5 gm", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Roundworms & Lungworms", co: "Techno", type: "c", str: "1.5g", mgkg: "5-7.5mg/kg"},
    {sl: 242, name: "Bol. Fenbazin 1.5", comp_val: "Fenbendazole 1.5 gm", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Broad spectrum dewormer", co: "Incepta", type: "c", str: "1.5g", mgkg: "5-7.5mg/kg"},
    {sl: 243, name: "Bol. Alzol Vet", comp_val: "Albendazole 600 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Roundworms, Tapeworms, Liver flukes", co: "ACI", type: "c", str: "600mg", mgkg: "7.5-10mg/kg"},
    {sl: 244, name: "Bol. Alben-DS", comp_val: "Albendazole 600 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Parasitic gastroenteritis", co: "Square", type: "c", str: "600mg", mgkg: "7.5-10mg/kg"},

    // --- Anthelmintics: Triclabendazole + Levamisole ---
    {sl: 245, name: "Bol. LT-Vet", comp_val: "Triclabendazole 900 mg + Levamisole 600 mg", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Liver fluke, Roundworms, Lungworms", co: "Square", type: "c", str: "Combined", mgkg: "1 bolus/75kg"},
    {sl: 246, name: "Bol. Trical-L Vet", comp_val: "Triclabendazole + Levamisole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Broad spectrum fascioliasis treatment", co: "Renata", type: "c", str: "Combined", mgkg: "1 bolus/75kg"},
    {sl: 247, name: "Bol. Trilavet-DS", comp_val: "Triclabendazole + Levamisole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Mixed parasitic infections", co: "Acme", type: "c", str: "Combined", mgkg: "1 bolus/75kg"},
    {sl: 248, name: "Bol. Levafas-Vet", comp_val: "Triclabendazole + Levamisole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Liver fluke & Nematodes control", co: "Techno", type: "c", str: "Combined", mgkg: "1 bolus/75kg"},

    // --- Ectoparasiticides: Ivermectin (Injectables & Oral) ---
    {sl: 249, name: "Inj. Ivomec Vet", comp_val: "Ivermectin 1%", pack: "Vial", safe: "Safe", pet: "Safe(Caution)", base: 0.02, unit: "ml", ind: "Mange, Lice, Ticks, Roundworms", co: "Merial", type: "c", str: "10mg/ml", mgkg: "1ml/50kg"},
    {sl: 250, name: "Inj. Vermic-10", comp_val: "Ivermectin 1%", pack: "Vial", safe: "Safe", pet: "Safe(Caution)", base: 0.02, unit: "ml", ind: "External & Internal parasites", co: "Renata", type: "c", str: "10mg/ml", mgkg: "1ml/50kg"},
    {sl: 251, name: "Inj. Iver-DS Vet", comp_val: "Ivermectin 1%", pack: "Vial", safe: "Safe", pet: "Safe(Caution)", base: 0.02, unit: "ml", ind: "Gastrointestinal nematodes control", co: "Square", type: "c", str: "10mg/ml", mgkg: "1ml/50kg"},
    {sl: 252, name: "Bol. Ivermectin-Vet", comp_val: "Ivermectin", pack: "Bolus", safe: "Safe", pet: "Safe(Caution)", base: 1, unit: "bolus", ind: "Oral parasite control", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Respiratory System: Bronchodilators (Page 25-26) ---
    {sl: 253, name: "Tab. Filin", comp_val: "Aminophylline 100 mg", pack: "100 mg tablet", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "tab", ind: "Bronchospasm, Pulmonary edema", co: "Opsonin", type: "c", str: "100mg/tab", mgkg: "1 tab/50kg"},
    {sl: 254, name: "Inj. Filin", comp_val: "Aminophylline 125 mg / 5 ml", pack: "5 ml ampoule", safe: "Unsafe", pet: "Safe", base: 0.08, unit: "ml", ind: "Cardiogenic pulmonary edema", co: "Opsonin", type: "c", str: "25mg/ml", mgkg: "1ml/12.5kg"},
    {sl: 255, name: "Tab. Salbutamol Vet", comp_val: "Salbutamol (Albuterol)", pack: "Bolus/Tablet", safe: "Unsafe", pet: "Safe", base: 1, unit: "tab", ind: "Bronchodilator, Cough", co: "Generic", type: "c", str: "2-4mg", mgkg: "N/A"},
    {sl: 256, name: "Aerosol Salbutamol", comp_val: "Salbutamol", pack: "Puff Inhaler", safe: "Unsafe", pet: "Safe", base: 1, unit: "puff", ind: "Inhalation therapy for bronchospasm", co: "Generic", type: "c", str: "100-200 mcg", mgkg: "1-2 puffs"},

    // --- Anti-inflammatory: Steroids (Dexamethasone) ---
    {sl: 257, name: "Inj. Dexon Vet", comp_val: "Dexamethasone Sodium Phosphate", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Allergy, Ketosis, Anti-inflammatory", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 258, name: "Inj. Decasone Vet", comp_val: "Dexamethasone Sodium Phosphate", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anaphylaxis, Shock, Inflammation", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 259, name: "Inj. Dexa-Vet", comp_val: "Dexamethasone Sodium Phosphate", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Ketosis in dairy cattle", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Vitamin & Mineral Supplements ---
    {sl: 260, name: "Inj. Cal-Mag-Plus", comp_val: "Calcium + Magnesium + Phosphorus + D3", pack: "500 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Milk fever, Grass tetany", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 261, name: "Inj. G-Vitamix Vet", comp_val: "Multi-vitamins", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Vitamin deficiency, Emaciation", co: "Gonoshasthaya", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 262, name: "Bol. Zinc-V", comp_val: "Zinc Sulphate", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Parakeratosis, Skin lesions", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 263, name: "Inj. B-Complex Vet", comp_val: "Vitamin B1, B2, B6, B12", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "General weakness, Anorexia", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Gastrointestinal: Rumenotorics & Digestive ---
    {sl: 264, name: "Bol. Bio-Gut", comp_val: "Probiotics + Digestive enzymes", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Ruminal dysfunction, Indigestion", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 265, name: "Bol. Rumen-Vet", comp_val: "Rumenotoric salts", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Anorexia, Rumen stasis", co: "ACI", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 266, name: "Bol. Zyme-Vet", comp_val: "Multi-enzymes", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Digestive aid, Bloat control", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Reproductive & Hormones ---
    {sl: 267, name: "Inj. Ovurelin", comp_val: "Gonadorelin", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Ovarian cysts, Delayed ovulation", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 268, name: "Inj. Fertilin Vet", comp_val: "Buserelin Acetate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Infertility treatment", co: "Techno", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 269, name: "Inj. Oxytocin-S", comp_val: "Oxytocin Synthetic", pack: "10 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Uterine inertia, Agalactia", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Miscellaneous & Others ---
    {sl: 270, name: "Inj. Lidocaine-Vet 2%", comp_val: "Lidocaine Hydrochloride", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Local anesthesia, Surgical procedures", co: "Square", type: "c", str: "2%", mgkg: "N/A"},
    {sl: 271, name: "Inj. Xylaxin Vet", comp_val: "Xylazine Hydrochloride", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Sedative, Pre-anesthetic", co: "ACI", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 272, name: "Inj. Ketavet", comp_val: "Ketamine Hydrochloride", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Anesthesia for minor surgery", co: "Techno", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 273, name: "Bol. Para-Vet Plus", comp_val: "Paracetamol + Diclofenac", pack: "Bolus", safe: "Unsafe", pet: "Unsafe", base: 1, unit: "bolus", ind: "Severe pain, Fever, Swelling", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 274, name: "Bol. Flunixin Vet", comp_val: "Flunixin Meglumine", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "NSAID, Anti-endotoxic", co: "Acme", type: "c", str: "Combined", mgkg: "2.2mg/kg"},
    {sl: 275, name: "Inj. Mely-Vet", comp_val: "Meloxicam", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Pain relief, Arthritis", co: "Square", type: "c", str: "Combined", mgkg: "0.5mg/kg"},
    {sl: 276, name: "Ointment Burn-Vet", comp_val: "Silver Sulphadiazine", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Burn wounds, Skin infections", co: "Popular", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 277, name: "Ointment Scabic-Vet", comp_val: "Benzyl Benzoate", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Scabies, Mange treatment", co: "ACI", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 278, name: "Inj. Frusemide Vet", comp_val: "Furosemide", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Diuretic, Edema", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 279, name: "Bol. Gastrivet", comp_val: "Antacids + Simethicone", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Bloat, Gastritis", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 280, name: "Inj. Aminovet-L", comp_val: "Amino Acids + Vit B12", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic stimulant", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 281, name: "Inj. Torphin Vet", comp_val: "Butorphanol Tartrate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Analgesic, Anti-tussive", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    
    
    
    
    // --- Diuretics: Furosemide (Page 1-2) ---
    {sl: 282, name: "Inj. Fusid", comp_val: "Frusemide 10 mg/ml", pack: "2 ml ampoule", safe: "Unsafe", pet: "Safe", base: 0.05, unit: "ml", ind: "Edema, Diuretic therapy", co: "Square", type: "c", str: "10mg/ml", mgkg: "1ml/40-80kg"},
    {sl: 283, name: "Inj. Lasix", comp_val: "Frusemide 10 mg/ml", pack: "2 ml ampoule", safe: "Unsafe", pet: "Safe", base: 0.05, unit: "ml", ind: "Pulmonary edema, Nephritis", co: "Synovia", type: "c", str: "10mg/ml", mgkg: "1ml/40-80kg"},
    {sl: 284, name: "Inj. G Frusemide", comp_val: "Frusemide 10 mg/ml", pack: "2 ml ampoule", safe: "Unsafe", pet: "Safe", base: 0.05, unit: "ml", ind: "Congestive heart failure", co: "Gonoshasthaya", type: "c", str: "10mg/ml", mgkg: "1ml/40-80kg"},
    {sl: 285, name: "Tab. Fusid", comp_val: "Frusemide 40 mg", pack: "40 mg tablet", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "tab", ind: "Oral diuretic therapy", co: "Square", type: "c", str: "40mg/tab", mgkg: "1tab/40-80kg"},
    {sl: 286, name: "Tab. Lasix", comp_val: "Frusemide 40 mg", pack: "40 mg tablet", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "tab", ind: "Ascites, Edema control", co: "Synovia", type: "c", str: "40mg/tab", mgkg: "1tab/40-80kg"},
    {sl: 287, name: "Tab. G Frusemide", comp_val: "Frusemide 40 mg", pack: "40 mg tablet", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "tab", ind: "Fluid retention control", co: "Gonoshasthaya", type: "c", str: "40mg/tab", mgkg: "1tab/40-80kg"},
    {sl: 288, name: "Bol. Edecure vet", comp_val: "Furosemide 2 g", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Udder edema, Post-parturient edema", co: "Square", type: "c", str: "2g/bol", mgkg: "1 bolus/animal"},
    {sl: 289, name: "Pulv. Nefguard Vet", comp_val: "Methenamine + B-Vitamins + Vit K3", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Nephromodulator, Urinary antiseptic", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Vitamins: B-Complex (Page 3-5) ---
    {sl: 290, name: "Inj. Becovet", comp_val: "Thiamine + Riboflavin + Pyridoxine + Nicotinamide", pack: "10/100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Vitamin B deficiency, Anorexia", co: "Popular", type: "c", str: "Combined", mgkg: "5-10ml (Large animal)"},
    {sl: 291, name: "Inj. B-Com Vet", comp_val: "Vitamin B-Complex", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic disorders, Weakness", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 292, name: "Inj. Renavit B", comp_val: "Vitamin B-Complex", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Polyneuritis, Recovery from illness", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 293, name: "Inj. B-Plex Vet", comp_val: "Vitamin B-Complex", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Growth promoter, Tonic", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Vitamins: ADE & Others (Page 6-10) ---
    {sl: 294, name: "Inj. Vitade Vet", comp_val: "Vit A + D3 + E", pack: "10/100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Infertility, Immunity, Growth", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 295, name: "Inj. Rena-ADE", comp_val: "Vit A + D3 + E", pack: "10/100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Stress control, Epithelial preservation", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 296, name: "Inj. Adivital Vet", comp_val: "Vit A + D3 + E", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Fertility & skeleton development", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 297, name: "Inj. Vit-ADE Vet", comp_val: "Vit A + D3 + E", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Enhances metabolism, Promotes growth", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 298, name: "Inj. GADE Vet", comp_val: "Vit A + D3 + E", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic booster", co: "Gonoshasthaya", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Liver Tonics & Amino Acids (Page 11-15) ---
    {sl: 299, name: "Liq. Liver-Vet", comp_val: "Liver extract + Vitamin B12", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Hepatoprotective, Anemia", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 300, name: "Liq. Hepavet", comp_val: "Silymarin + Choline", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Fatty liver syndrome", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 301, name: "Liq. Amino-V", comp_val: "Essential Amino Acids", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Protein supplement, Growth", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 302, name: "Liq. Vitamino Vet", comp_val: "Vitamins + Amino Acids", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "General tonic, Convalescence", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Mineral Supplements: Calcium & Phosphorus (Page 16-20) ---
    {sl: 303, name: "Inj. Cal-Plus", comp_val: "Calcium Borogluconate 25%", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Milk fever, Hypocalcemia", co: "Square", type: "c", str: "25%", mgkg: "N/A"},
    {sl: 304, name: "Inj. Calciv-D", comp_val: "Calcium + Vit D3", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Bone development, Rickets", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 305, name: "Inj. Phosphorus Vet", comp_val: "Sodium Acid Phosphate", pack: "30/100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Pica, Infertility, Post-parturient hemoglobinuria", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 306, name: "Inj. Catophos", comp_val: "Butafosfan + Vitamin B12", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic stimulant", co: "Bayer (ACI)", type: "c", str: "Combined", mgkg: "1ml/10-20kg"},
    {sl: 307, name: "Inj. Butavet", comp_val: "Butafosfan + Vit B12", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Anorexia, Stress, Infertility", co: "Techno", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Digestive & Rumenotorics (Page 21-25) ---
    {sl: 308, name: "Bol. Rumicid Vet", comp_val: "Ammonium Bicarbonate + Nuxvomica + Ginger", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Indigestion, Anorexia, Flatulence", co: "Renata", type: "c", str: "Combined", mgkg: "1-2 bolus/animal"},
    {sl: 309, name: "Bol. Digevet Plus", comp_val: "Digestive Enzymes + Probiotics", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Ruminal stasis, Impaction", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 310, name: "Bol. Bio-Zyme", comp_val: "Enzyme mixture", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Enhances feed conversion", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 311, name: "Powder Rumen-Aid", comp_val: "Rumenotoric powder", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Acute indigestion control", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Anti-histamines & Antipyretics (Page 26-30) ---
    {sl: 312, name: "Inj. Histavet", comp_val: "Chlorpheniramine Maleate", pack: "10/100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Allergic conditions, Anaphylaxis", co: "Square", type: "c", str: "10mg/ml", mgkg: "1ml/25kg"},
    {sl: 313, name: "Inj. Renacin", comp_val: "Chlorpheniramine Maleate", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Urticaria, Insect bites", co: "Renata", type: "c", str: "10mg/ml", mgkg: "1ml/25kg"},
    {sl: 314, name: "Inj. Amet-Vet", comp_val: "Chlorpheniramine Maleate", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Hay fever, Allergic dermatitis", co: "Acme", type: "c", str: "10mg/ml", mgkg: "1ml/25kg"},
    {sl: 315, name: "Bol. Napa Vet", comp_val: "Paracetamol 500 mg", pack: "Bolus", safe: "Safe", pet: "Unsafe", base: 1, unit: "bolus", ind: "Fever, Pain relief", co: "Beximco", type: "c", str: "500mg", mgkg: "N/A"},
    {sl: 316, name: "Bol. Ace Vet", comp_val: "Paracetamol 500 mg", pack: "Bolus", safe: "Safe", pet: "Unsafe", base: 1, unit: "bolus", ind: "Anti-pyretic, Analgesic", co: "Square", type: "c", str: "500mg", mgkg: "N/A"},
    {sl: 317, name: "Inj. Ketovet-50", comp_val: "Ketoprofen", pack: "10/50 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "NSAID, Chronic pain", co: "Techno", type: "c", str: "50mg/ml", mgkg: "3mg/kg"},

    // --- Antiprotozoals & Hormones (Page 31-33) ---
    {sl: 318, name: "Inj. Berenil-Vet", comp_val: "Diminazene Aceturate", pack: "Vial", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Babesiosis, Trypanosomiasis", co: "MSD", type: "c", str: "Combined", mgkg: "3.5mg/kg"},
    {sl: 319, name: "Inj. Imizol", comp_val: "Imidocarb Dipropionate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Prevention of tick fever", co: "Intervet", type: "c", str: "120mg/ml", mgkg: "1ml/40kg"},
    {sl: 320, name: "Inj. Oura-Vet", comp_val: "Oxytocin", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Uterine inertia, Milk letdown", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 321, name: "Inj. Receptal-Z", comp_val: "Buserelin Acetate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Infertility treatment", co: "MSD", type: "c", str: "Combined", mgkg: "N/A"},

    // --- External Applications (Final Pages) ---
    {sl: 322, name: "Oint. Burn-Care", comp_val: "Silver Sulphadiazine", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Topical burn dressing", co: "Square", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 323, name: "Oint. Scabic-Plus", comp_val: "Benzyl Benzoate", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Scabies treatment", co: "Renata", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 324, name: "Cream Nitroderm", comp_val: "Nitrofurazone", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Wound infection prevention", co: "Acme", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 325, name: "Powder Zinc-Plus", comp_val: "Zinc Oxide", pack: "Sachet", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Skin protective", co: "Popular", type: "f", str: "Combined", mgkg: "N/A"},

    // --- Additional Items Identified ---
    {sl: 326, name: "Inj. G-Vitamix", comp_val: "Multi-vitamins", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Emaciation, Weakness", co: "Gonoshasthaya", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 327, name: "Bol. Digevet-Plus", comp_val: "Digestive salts", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Rumenotoric aid", co: "ACI", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 328, name: "Inj. Cal-Mag-Phosphorus", comp_val: "Calcium + Mag + Phos", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Milk fever, Tetany", co: "Techno", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 329, name: "Bol. Metro-Vet Plus", comp_val: "Metronidazole + Furazolidone", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Dysentery, Enteritis", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 330, name: "Inj. Dexon-S", comp_val: "Dexamethasone", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Acute anti-inflammatory", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 331, name: "Bol. Salbutamol-Vet", comp_val: "Salbutamol", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Bronchodilator for livestock", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 332, name: "Inj. Lidocaine 2%-Z", comp_val: "Lidocaine HCl", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Local anesthesia", co: "Renata", type: "c", str: "2%", mgkg: "N/A"},
    
    





    // --- Vitamins: ADE3E Injectables (Page 1-5) ---
    {sl: 333, name: "Inj. Renasol Ad3e Vet", comp_val: "Vitamin A-5,00,000 IU + Vitamin D3-75,000 IU + Vitamin E-50 mg", pack: "10/30/100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Night blindness, Rickets, Infertility", co: "Renata", type: "c", str: "Combined", mgkg: "3-6 ml (Large Animal)"},
    {sl: 334, name: "Inj. Hyvit ADE-Vet", comp_val: "Vitamin A + D3 + E", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic disorders, Stress control", co: "Popular", type: "c", str: "Combined", mgkg: "5-12 ml (Cattle)"},
    {sl: 335, name: "Inj. Acivit-ADE", comp_val: "Vitamin A-80,000 IU + Vitamin D3-40,000 IU + Vitamin E-20 mg", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Growth promotion, Epithelial preservation", co: "ACI", type: "c", str: "Combined", mgkg: "5 ml (Cattle)"},
    {sl: 336, name: "Inj. Es-ADE", comp_val: "Vitamin A + D3 + E", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Immunity booster, Skeletal development", co: "SK+F", type: "c", str: "Combined", mgkg: "5-10 ml (Cattle)"},
    {sl: 337, name: "Inj. Ad3e Vet", comp_val: "Vitamin A + D3 + E", pack: "10/100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "General vitamin deficiency", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Vitamin B1 & B-Complex (Page 6-12) ---
    {sl: 338, name: "Inj. Thiamin-Vet", comp_val: "Vitamin B1 (Thiamine Hydrochloride) 100 mg", pack: "10/100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Polioencephalomalacia, Beriberi, Anorexia", co: "Acme", type: "c", str: "100mg/ml", mgkg: "1ml/10-20kg"},
    {sl: 339, name: "Inj. G-Vitamix Vet", comp_val: "Vitamin B1, B2, B6, B12, Nicotinamide", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Debility, Convalescence", co: "Gonoshasthaya", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 340, name: "Inj. B-Plex", comp_val: "Vitamin B-Complex", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic stimulant", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Amino Acids & Metabolic Stimulants (Page 13-18) ---
    {sl: 341, name: "Inj. Amino-V", comp_val: "Essential Amino Acids + Vitamins", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Protein deficiency, Growth promoter", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 342, name: "Inj. Catophos", comp_val: "Butafosfan 100 mg + Vitamin B12 50 mcg", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Infertility, Metabolic disorders", co: "Bayer (ACI)", type: "c", str: "Combined", mgkg: "1ml/10-20kg"},
    {sl: 343, name: "Inj. Butavet", comp_val: "Butafosfan + Vit B12", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Stress, Exhaustion", co: "Techno", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Calcium & Phosphorus Supplements (Page 19-25) ---
    {sl: 344, name: "Inj. Cal-D-Mag", comp_val: "Calcium Gluconate + Magnesium + Phosphorus + D3", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Milk fever, Hypocalcemia", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 345, name: "Inj. Phosphorus-Vet", comp_val: "Sodium Acid Phosphate", pack: "30/100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Pica, Post-parturient hemoglobinuria", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 346, name: "Bol. Calvet-DB", comp_val: "Calcium + Phosphorus + Vit D3 + Vit B12", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Rickets, Osteomalacia", co: "ACI", type: "c", str: "Combined", mgkg: "1 bolus daily"},
    {sl: 347, name: "Bol. Phoscal DB", comp_val: "Calcium + Phosphorus + Vit D3", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Mineral deficiency in livestock", co: "Opsonin", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 348, name: "Gel. Cal-Boost", comp_val: "Calcium-43.5 g + Magnesium-2.5 g", pack: "300 ml bottle", safe: "Safe", pet: "Safe", base: 1, unit: "bottle", ind: "Instant calcium supply after delivery", co: "Renata", type: "c", str: "Combined", mgkg: "1 bottle"},

    // --- Digestive & Rumenotorics (Page 26-30) ---
    {sl: 349, name: "Bol. Rumicid Vet", comp_val: "Ammonium Bicarbonate + Nuxvomica + Ginger", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Indigestion, Loss of appetite", co: "Renata", type: "c", str: "Combined", mgkg: "1-2 bolus"},
    {sl: 350, name: "Bol. Bio-Gut", comp_val: "Saccharomyces cerevisiae + Enzymes", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Ruminal dysfunction, Bloat", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 351, name: "Pulv. ACI DCP Gold", comp_val: "Di-Calcium Phosphate + Trace Elements", pack: "1/5/10 kg", safe: "Safe", pet: "Safe", base: 15, unit: "gm", ind: "Growth promotion, Bone strength", co: "ACI", type: "c", str: "Powder", mgkg: "15 gm/100 kg"},

    // --- Antihistamines & NSAIDs (Page 31-35) ---
    {sl: 352, name: "Inj. Histavet", comp_val: "Chlorpheniramine Maleate 10 mg/ml", pack: "10/100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Urticaria, Photosensitization", co: "Square", type: "c", str: "10mg/ml", mgkg: "1ml/25kg"},
    {sl: 353, name: "Inj. Phenavet", comp_val: "Chlorpheniramine Maleate", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Anaphylactic shock, Allergic dermatitis", co: "Techno", type: "c", str: "10mg/ml", mgkg: "1ml/25kg"},
    {sl: 354, name: "Inj. Melovet", comp_val: "Meloxicam 5 mg/ml", pack: "10/30/100 ml", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Pain, Inflammation, Lameness", co: "Acme", type: "c", str: "5mg/ml", mgkg: "0.5mg/kg"},
    {sl: 355, name: "Inj. Ketovet", comp_val: "Ketoprofen 100 mg/ml", pack: "10/50 ml", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "NSAID for musculoskeletal pain", co: "Techno", type: "c", str: "100mg/ml", mgkg: "3mg/kg"},

    // --- Antiprotozoals & Hormones (Page 36-40) ---
    {sl: 356, name: "Inj. Babesin Vet", comp_val: "Diminazene Aceturate", pack: "Vial", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Babesiosis, Trypanosomiasis", co: "Square", type: "c", str: "Combined", mgkg: "3.5mg/kg"},
    {sl: 357, name: "Inj. Ectorid", comp_val: "Imidocarb Dipropionate", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Tick fever prevention", co: "Renata", type: "c", str: "133.26mg/ml", mgkg: "1ml/31kg"},
    {sl: 358, name: "Inj. Oxytocin", comp_val: "Oxytocin (Synthetic)", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Milk letdown, Uterine inertia", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Remaining Data Entries from 6.pdf ---
    {sl: 359, name: "Inj. Adivital", comp_val: "Vitamin A + D3 + E", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Night blindness, Stress", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 360, name: "Inj. Vitade", comp_val: "Vitamin A + D3 + E", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Infertility treatment", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 361, name: "Inj. Renavit-ADE", comp_val: "Vitamin A + D3 + E", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Immunity enhancement", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 362, name: "Inj. Vit-ADE", comp_val: "Vitamin A + D3 + E", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic boost", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 363, name: "Inj. B-Com", comp_val: "Vitamin B-Complex", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Weakness, Anorexia", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 364, name: "Inj. B-Plex Vet", comp_val: "Vitamin B-Complex", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "General tonic", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 365, name: "Liq. Amino-Acid", comp_val: "Amino Acids + B-Vitamins", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Growth promoter", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 366, name: "Inj. Catophos-V", comp_val: "Butafosfan + B12", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic stimulant", co: "ACI", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 367, name: "Inj. Cal-Mag-P", comp_val: "Calcium + Mag + Phos", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Milk fever treatment", co: "Techno", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 368, name: "Bol. Cal-Phos DB", comp_val: "Calcium + Phosphorus", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Bone development", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 369, name: "Bol. Digevet-V", comp_val: "Digestive Salts", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Anorexia aid", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 370, name: "Bol. Rumivet-Z", comp_val: "Rumenotorics", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Rumen stasis relief", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 371, name: "Inj. Histan Vet", comp_val: "Chlorpheniramine", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Anti-allergic", co: "ACI", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 372, name: "Inj. Melocam", comp_val: "Meloxicam", pack: "50 ml", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "NSAID", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 373, name: "Inj. Ketovet Plus", comp_val: "Ketoprofen", pack: "50 ml", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Pain management", co: "Techno", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 374, name: "Inj. Berenil RTU", comp_val: "Diminazene RTU", pack: "30 ml", safe: "Safe", pet: "Unsafe", base: 1, unit: "ml", ind: "Babesiosis", co: "MSD", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 375, name: "Inj. Imizol Vet", comp_val: "Imidocarb", pack: "10 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Anaplasmosis", co: "Intervet", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 376, name: "Inj. Oxytocin-V", comp_val: "Oxytocin", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 1, unit: "ml", ind: "Agalactia relief", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 377, name: "Inj. Ovurelin-Z", comp_val: "Gonadorelin", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Ovarian cysts", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 378, name: "Inj. Receptal Vet", comp_val: "Buserelin", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Delayed ovulation", co: "MSD", type: "c", str: "Combined", mgkg: "N/A"},
    
    
    
    
    

    // --- Zinc Supplements (Page 1-5) ---
    {sl: 379, name: "Syp. Zesup-vet", comp_val: "Zinc Sulphate Monohydrate 10 mg / 5 ml", pack: "100 ml / 500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Zinc deficiency, Skin lesions, Diarrhea", co: "Square", type: "c", str: "10mg/5ml", mgkg: "50-100 ml (Cattle)"},
    {sl: 380, name: "Syp. Care-vet", comp_val: "Zinc Sulphate Monohydrate", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Improves immunity & skin health", co: "SK+F", type: "c", str: "10mg/5ml", mgkg: "N/A"},
    {sl: 381, name: "Sol. Xinc-Liq", comp_val: "Zinc Sulphate", pack: "200/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Zinc supplementation in ruminants", co: "ACI", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 382, name: "Liq. Azinck", comp_val: "Zinc Sulphate", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Parakeratosis, Growth retardation", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 383, name: "Sol. Zis vet", comp_val: "Zinc Methionine Hydroxy Analogue 85 mg/ml", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Highly bioavailable zinc source", co: "Renata", type: "c", str: "85mg/ml", mgkg: "50-100 ml (Cattle)"},
    {sl: 384, name: "Sol. Ozinc", comp_val: "Zinc Methionine", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Skin repair and maintenance", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 385, name: "Sol. Soluzink Vet", comp_val: "Zinc Sulphate Monohydrate 10 mg / 5 ml", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Zinc deficiency syndrome", co: "Popular", type: "c", str: "10mg/5ml", mgkg: "100-150 ml (Cattle)"},

    // --- Liver Tonics & Hepatic Support (Page 10-20) ---
    {sl: 386, name: "Liq. Hepaguard Vet", comp_val: "Silymarin + Choline + L-Carnitine", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Fatty liver, Liver cirrhosis, Toxins", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 387, name: "Liq. Livo-C", comp_val: "Liver extract + Vitamin C + Yeast", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Appetite stimulant, Growth promoter", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 388, name: "Sol. Restoliv", comp_val: "Carnitine HCI 25 mg + Methionine 10 mg + Choline 18.75 mg", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Detoxification, Liver regeneration", co: "Opsonin", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 389, name: "Sol. Hepatonic Liq", comp_val: "Methionine + Choline + Inositol + Biotin", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic liver support", co: "Popular", type: "c", str: "Combined", mgkg: "20-50 ml (Cattle)"},
    {sl: 390, name: "Superliv", comp_val: "Herbal Liver Tonic", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Natural hepatic protector", co: "Ayurvet (ACI)", type: "c", str: "Herbal", mgkg: "N/A"},

    // --- Vitamin & Amino Acid Combinations (Page 21-24) ---
    {sl: 391, name: "Liq. Vitamino-V", comp_val: "Vitamins + Essential Amino Acids", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "General tonic, Convalescence", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 392, name: "Liq. Aminovet-Plus", comp_val: "Amino Acids + Vitamin B-Complex", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Nutritional supplement, Growth", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 393, name: "Inj. B-Com Plus", comp_val: "High potency Vitamin B-Complex", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Anorexia, Polyneuritis", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Rumenotorics & Digestive Support ---
    {sl: 394, name: "Bol. Digevet-DS", comp_val: "Digestive Enzymes + Probiotics", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Rumen stasis, Indigestion", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 395, name: "Bol. Rumicid-Plus", comp_val: "Ammonium Bicarbonate + Nuxvomica", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Digestive stimulant", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 396, name: "Pulv. Zyme-Vet WSP", comp_val: "Multienzyme complex", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Improves feed conversion", co: "Popular", type: "c", str: "WSP", mgkg: "N/A"},

    // --- Anti-histamines & Others ---
    {sl: 397, name: "Inj. Histacin Vet", comp_val: "Chlorpheniramine Maleate", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Allergic conditions", co: "ACI", type: "c", str: "10mg/ml", mgkg: "1ml/25kg"},
    {sl: 398, name: "Inj. Phenergan Vet", comp_val: "Promethazine Hydrochloride", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Potent anti-histamine, Sedation", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 399, name: "Inj. Cal-Mag-V", comp_val: "Calcium + Magnesium + Phosphorus", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Milk fever, Tetany", co: "Techno", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 400, name: "Bol. Metro-Plus Vet", comp_val: "Metronidazole + Furazolidone", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Diarrhea, Dysentery control", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 401, name: "Inj. Dexa-S Vet", comp_val: "Dexamethasone Sodium Phosphate", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Ketosis, Anti-inflammatory", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 402, name: "Oint. Burn-Free", comp_val: "Silver Sulphadiazine", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Wound and burn dressing", co: "Popular", type: "f", str: "Combined", mgkg: "N/A"},
    
    
    

    // --- Liver Tonics (Page 1) ---
    {sl: 352, name: "Liq. Eliver vet", comp_val: "Vitamin B12 + DL-Methionine + Choline chloride + L-Lysine", pack: "100ml / 500ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Liver support, Growth, Metabolic disorders", co: "Chemist", type: "c", str: "Combined", mgkg: "20-40 ml (Cattle)"},
    {sl: 353, name: "Liq. Liver On", comp_val: "Vitamin B-Complex + Folic Acid + DL-methionine + L-lysine", pack: "100ml / 500ml / 1L", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Improve appetite and liver function", co: "Advent", type: "c", str: "Combined", mgkg: "5-10 ml daily"},

    // --- Hematinics & Others (Page 2-10) ---
    {sl: 354, name: "Inj. Ferron-Vet", comp_val: "Iron Dextran + Vitamin B12", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Iron deficiency anemia, Piglet anemia", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 355, name: "Inj. Hemovet", comp_val: "Iron + Vitamin B12 + Folic Acid", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Post-infection recovery, Anemia", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 356, name: "Inj. Iron-Ject", comp_val: "Iron Dextran", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Prevention of anemia in calves and piglets", co: "Popular", type: "c", str: "100mg/ml", mgkg: "N/A"},

    // --- Homeopathic & Herbal Preparations (Page 20-24) ---
    {sl: 357, name: "Liq. Thuja occi 200", comp_val: "Thuja Occidentalis 200", pack: "Bottle", safe: "Safe", pet: "Safe", base: 1, unit: "drop", ind: "Warts treatment", co: "Homeo", type: "f", str: "200 CH", mgkg: "10 drops twice daily"},
    {sl: 358, name: "Liq. Croton tig 200", comp_val: "Croton Tiglium 200", pack: "Bottle", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Eczema and skin irritation", co: "Homeo", type: "f", str: "200 CH", mgkg: "1 ml twice daily"},
    {sl: 359, name: "Ficus religiosa leaf", comp_val: "Natural Ficus Leaf Extract", pack: "Natural", safe: "Safe", pet: "Safe", base: 1, unit: "piece", ind: "Traditional treatment for Babesiosis", co: "Natural", type: "f", str: "Leaf", mgkg: "Once daily"},
    {sl: 360, name: "Liq. Abies Canadensis", comp_val: "Abies Canadensis extract", pack: "Bottle", safe: "Safe", pet: "Safe", base: 2, unit: "tsp", ind: "Indigestion and digestive aid", co: "Homeo", type: "f", str: "Combined", mgkg: "2-4 tea spoon"},

    // --- Diagnostic Tools (Page 24) ---
    {sl: 361, name: "CMT Test kid", comp_val: "Sodium dodecyl Benzosulfonate + Bromocrysol purple", pack: "200 ml reagent + paddle", safe: "Safe", pet: "N/A", inst: "2 ml milk + 2 ml reagent", ind: "Field diagnosis of sub-clinical mastitis", co: "ACI", type: "f", str: "Reagent", mgkg: "N/A"},

    // --- Additional Data from Final Pages ---
    {sl: 362, name: "Liq. Despadac", comp_val: "Quaternary Ammonium + Glutaraldehyde", pack: "1L Bottle", safe: "Safe", pet: "Safe", inst: "2-4 ml/Liter water", ind: "Disinfectant for farm biosecurity", co: "Nexus", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 363, name: "Powder Acid-Fix", comp_val: "Rumen Buffer salts", pack: "100g Sachet", safe: "Safe", pet: "Safe", base: 2.5, unit: "gm", ind: "Acidosis prevention and treatment", co: "Agro-Vet", type: "c", str: "Buffer", mgkg: "2.5gm/kg"},
    {sl: 364, name: "Pow. PB Rano-V", comp_val: "Phytogenic antiviral", pack: "100g", safe: "Safe", pet: "Safe", inst: "2 gm/Liter", ind: "Antiviral support during outbreaks", co: "ACI", type: "f", str: "Herbal", mgkg: "N/A"},
    {sl: 365, name: "Inj. Atropine-Z", comp_val: "Atropine Sulphate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Antidote for poisoning", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 366, name: "Inj. Dexa-Z", comp_val: "Dexamethasone", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anti-inflammatory and stress relief", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 367, name: "Bol. Rumicid-Z", comp_val: "Rumenotoric stimulant", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Digestive aid for ruminants", co: "Acme", type: "c", str: "Combined", mgkg: "1-2 bolus"},
    
    
    
    
    
    // --- 7.pdf: Zinc Supplements ---
    {sl: 379, name: "Syp. Zesup-vet", comp_val: "Zinc Sulphate Monohydrate 10 mg/5 ml", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Zinc deficiency, Skin lesions", co: "Square", type: "c", str: "10mg/5ml", mgkg: "50-100ml"},
    {sl: 380, name: "Syp. Care-vet", comp_val: "Zinc Sulphate Monohydrate", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Immunity & Skin health", co: "SK+F", type: "c", str: "10mg/5ml", mgkg: "50-100ml"},
    {sl: 381, name: "Soln. Xinc-Liq", comp_val: "Zinc Sulphate", pack: "200/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Parakeratosis, Zinc deficiency", co: "ACI", type: "c", str: "Combined", mgkg: "50-100ml"},
    {sl: 382, name: "Liq. Azinck", comp_val: "Zinc Sulphate", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Growth retardation", co: "Acme", type: "c", str: "Combined", mgkg: "50-100ml"},
    {sl: 383, name: "Soln. Zis vet", comp_val: "Zinc Methionine Hydroxy Analogue-85 mg", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "High absorption Zinc source", co: "Renata", type: "c", str: "85mg/ml", mgkg: "1ml/animal"},
    {sl: 384, name: "Soln. Ozinc", comp_val: "Zinc Methionine", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Skin repair and maintenance", co: "Renata", type: "c", str: "Combined", mgkg: "1ml/animal"},
    {sl: 385, name: "Soln. Soluzink Vet", comp_val: "Zinc Sulphate Monohydrate", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Zinc deficiency syndrome", co: "Popular", type: "c", str: "10mg/5ml", mgkg: "100-150ml"},

    // --- 7.pdf: Liver Tonics & Amino Acids ---
    {sl: 386, name: "Liq. Hepaguard Vet", comp_val: "Silymarin + Choline + L-Carnitine", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Fatty liver, Liver cirrhosis", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 387, name: "Liq. Livo-C", comp_val: "Liver extract + Vitamin C + Yeast", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Appetite & Growth promoter", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 388, name: "Soln. Restoliv", comp_val: "Carnitine HCI + Methionine + Choline", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Detoxification, Liver regeneration", co: "Opsonin", type: "c", str: "Combined", mgkg: "1ml/liter water"},
    {sl: 389, name: "Soln. Hepatonic Liq.", comp_val: "Methionine + Choline + Inositol + Biotin", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic liver support", co: "Popular", type: "c", str: "Combined", mgkg: "20-50ml"},
    {sl: 390, name: "Superliv", comp_val: "Herbal liver tonic", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Natural hepatic protector", co: "Ayurvet", type: "c", str: "Herbal", mgkg: "N/A"},
    {sl: 391, name: "Liq. Vitamino-V", comp_val: "Vitamins + Amino Acids", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "General tonic, Convalescence", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 392, name: "Liq. Aminovet-Plus", comp_val: "Amino Acids + Vit B-Complex", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Nutritional supplement", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 393, name: "Inj. B-Com Plus", comp_val: "High potency Vitamin B-Complex", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Anorexia, Polyneuritis", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 394, name: "Bol. Digevet-DS", comp_val: "Digestive Enzymes + Probiotics", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Rumen stasis, Indigestion", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 395, name: "Bol. Rumicid-Plus", comp_val: "Ammonium Bicarbonate + Nuxvomica", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Digestive stimulant", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},

    // --- 8.pdf: Liver Tonics & Homeo/Herbal ---
    {sl: 396, name: "Liq. Eliver vet", comp_val: "Vit B12 + Methionine + Choline + Lysine", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Liver support, Metabolic disorders", co: "Chemist", type: "c", str: "Combined", mgkg: "20-40ml"},
    {sl: 397, name: "Liq. Liver On", comp_val: "Vit B-Complex + Methionine + Lysine", pack: "100ml/1L", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Appetite and liver function", co: "Advent", type: "c", str: "Combined", mgkg: "5-10ml"},
    {sl: 398, name: "Inj. Ferron-Vet", comp_val: "Iron Dextran + Vitamin B12", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Anemia, Piglet anemia", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 399, name: "Inj. Hemovet", comp_val: "Iron + Vit B12 + Folic Acid", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Post-infection recovery", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 400, name: "Inj. Iron-Ject", comp_val: "Iron Dextran", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Anemia prevention", co: "Popular", type: "c", str: "100mg/ml", mgkg: "N/A"},
    {sl: 401, name: "Liq. Thuja occi 200", comp_val: "Thuja Occidentalis 200", pack: "Bottle", safe: "Safe", pet: "Safe", base: 1, unit: "drop", ind: "Warts treatment", co: "Homeo", type: "f", str: "200 CH", mgkg: "10 drops"},
    {sl: 402, name: "Liq. Croton tig 200", comp_val: "Croton Tiglium 200", pack: "Bottle", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Eczema and skin irritation", co: "Homeo", type: "f", str: "200 CH", mgkg: "1ml"},
    {sl: 403, name: "Ficus religiosa leaf", comp_val: "Ficus Leaf Extract", pack: "Natural", safe: "Safe", pet: "Safe", base: 1, unit: "piece", ind: "Traditional Babesiosis treatment", co: "Natural", type: "f", str: "Leaf", mgkg: "Daily"},
    {sl: 404, name: "Liq. Abies Canadensis", comp_val: "Abies Canadensis", pack: "Bottle", safe: "Safe", pet: "Safe", base: 2, unit: "tsp", ind: "Indigestion relief", co: "Homeo", type: "f", str: "Combined", mgkg: "2-4 tsp"},
    {sl: 405, name: "CMT Test kid", comp_val: "Sodium dodecyl Benzosulfonate", pack: "200 ml + paddle", safe: "Safe", pet: "N/A", inst: "2 ml milk + 2 ml reagent", ind: "Sub-clinical mastitis diagnosis", co: "ACI", type: "f", str: "Reagent", mgkg: "N/A"},
    {sl: 406, name: "Liq. Despadac", comp_val: "Quaternary Ammonium + Glutaraldehyde", pack: "1L", safe: "Safe", pet: "Safe", inst: "2-4 ml/L water", ind: "Farm disinfectant", co: "Nexus", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 407, name: "Powder Acid-Fix", comp_val: "Rumen Buffer salts", pack: "100g", safe: "Safe", pet: "Safe", base: 2.5, unit: "gm", ind: "Acidosis treatment", co: "Agro-Vet", type: "c", str: "Buffer", mgkg: "2.5gm/kg"},
    {sl: 408, name: "Pow. PB Rano-V", comp_val: "Phytogenic antiviral", pack: "100g", safe: "Safe", pet: "Safe", inst: "2 gm/L", ind: "Antiviral support", co: "ACI", type: "f", str: "Herbal", mgkg: "N/A"},
    {sl: 409, name: "Inj. Atropine-Z", comp_val: "Atropine Sulphate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Poisoning antidote", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 410, name: "Inj. Dexa-Z", comp_val: "Dexamethasone", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anti-inflammatory", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 411, name: "Bol. Rumicid-Z", comp_val: "Rumenotoric stimulant", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Digestive aid", co: "Acme", type: "c", str: "Combined", mgkg: "1-2 bolus"},
    
    

    // --- Penicillins (1.pdf) ---
    {sl: 412, name: "Inj. Vetopen Lac 40", comp_val: "Procaine Penicillin + Benzyl Penicillin Sodium", pack: "40 lac vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Urinary tract infections, Strangles", co: "Opsonin", type: "c", str: "40 Lac/vial", mgkg: "1ml/10kg"},
    {sl: 413, name: "Inj. Pronacillin 40 Lac", comp_val: "Procaine Penicillin + Benzyl Penicillin Sodium", pack: "40 lac vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anthrax, Black quarter, Pneumonia", co: "Techno", type: "c", str: "40 Lac/vial", mgkg: "1ml/10kg"},

    // --- Tetracyclines (1.pdf) ---
    {sl: 414, name: "Inj. Oxyvet-100", comp_val: "Oxytetracycline", pack: "100 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Actinobacillosis, Diphtheria, Leptospirosis", co: "Globe", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 415, name: "Inj. Vetomycin 100", comp_val: "Oxytetracycline", pack: "100 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Foot-rot, Black leg, Metritis", co: "Opsonin", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 416, name: "Inj. Technomycin-100", comp_val: "Oxytetracycline", pack: "100 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Anaplasmosis, Joint ill, Wound infections", co: "Techno", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 417, name: "Inj. Tetravet-100", comp_val: "Oxytetracycline", pack: "100 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Shipping fever, Mycoplasmosis", co: "Acme", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 418, name: "Inj. Chemycin-100", comp_val: "Oxytetracycline + Lignocaine HCl", pack: "100 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Bacterial infections with pain", co: "Chemist", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 419, name: "Tab. Bactitab", comp_val: "Oxytetracycline 500 mg", pack: "Tablet", safe: "Unsafe", pet: "Unsafe", base: 0.02, unit: "tab", ind: "Oral Oxytetracycline therapy", co: "ACI", type: "c", str: "500mg", mgkg: "10-22mg/kg"},

    // --- Aminoglycosides (1.pdf) ---
    {sl: 420, name: "Inj. Acigent 10", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "Pseudomonas, Proteus, Coliform bacilli", co: "ACI", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    {sl: 421, name: "Inj. Genta-10", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "Severe infections, Scour, Salmonellosis", co: "Acme", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    {sl: 422, name: "Inj. Gentabac vet", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "Respiratory & Urinary tract infections", co: "Popular", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    {sl: 423, name: "Inj. Acigan vet 5", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.08, unit: "ml", ind: "Gram positive and negative bacteria", co: "ACI", type: "c", str: "50mg/ml", mgkg: "4mg/kg"},
    {sl: 424, name: "Inj. Gentacin 5%", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.08, unit: "ml", ind: "Mycoplasma, Enteric diseases", co: "Techno", type: "c", str: "50mg/ml", mgkg: "4mg/kg"},
    {sl: 425, name: "Inj. Gentamin 5%", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.08, unit: "ml", ind: "Septicemia, Nephrotoxicity prevention", co: "Opsonin", type: "c", str: "50mg/ml", mgkg: "4mg/kg"},
    {sl: 426, name: "Inj. Gentaren", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.08, unit: "ml", ind: "Respiratory tract infections", co: "Renata", type: "c", str: "50mg/ml", mgkg: "4mg/kg"},
    {sl: 427, name: "Inj. Intamycin vet", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.08, unit: "ml", ind: "Urinary tract infections", co: "Incepta", type: "c", str: "50mg/ml", mgkg: "4mg/kg"},
    {sl: 428, name: "Inj. Reganta 10%", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "Systemic bacterial infections", co: "Bengal", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    {sl: 429, name: "Inj. Gentasone-5", comp_val: "Gentamicin Sulphate", pack: "50 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.08, unit: "ml", ind: "Susceptible bacterial diseases", co: "Chemist", type: "c", str: "50mg/ml", mgkg: "4mg/kg"},

    {sl: 430, name: "Pulv. N-Cin Vet 50", comp_val: "Neomycin Sulphate", pack: "100 gm sachet", safe: "Unsafe", pet: "Unsafe", base: 10, unit: "gm", ind: "Calf Diarrhea, Calf Scour", co: "ACI", type: "c", str: "500mg/gm", mgkg: "10mg/kg"},
    {sl: 431, name: "Pulv. Nimocin Vet", comp_val: "Neomycin Sulphate", pack: "100 gm sachet", safe: "Unsafe", pet: "Unsafe", base: 10, unit: "gm", ind: "E. coli, Salmonella infections", co: "Acme", type: "c", str: "700mg/gm", mgkg: "10mg/kg"},
    {sl: 432, name: "Pulv. Remeneo Vet", comp_val: "Neomycin Sulphate", pack: "100 gm sachet", safe: "Unsafe", pet: "Unsafe", base: 10, unit: "gm", ind: "Campylobacter, Pasteurella infections", co: "Bengal", type: "c", str: "700mg/gm", mgkg: "10mg/kg"},
    {sl: 433, name: "Pulv. Neoxel 70 vet", comp_val: "Neomycin Sulphate", pack: "100 gm sachet", safe: "Unsafe", pet: "Unsafe", base: 10, unit: "gm", ind: "Staphylococci, Listeria spp.", co: "SK+F", type: "c", str: "700mg/gm", mgkg: "10mg/kg"},
    {sl: 434, name: "Pulv. Neoshin 70 WSP", comp_val: "Neomycin Sulphate", pack: "500 gm", safe: "Unsafe", pet: "Unsafe", base: 10, unit: "gm", ind: "Horses, Pig bacterial infections", co: "SHINIL", type: "c", str: "700mg/gm", mgkg: "N/A"},
    {sl: 435, name: "Pulv. Germicin", comp_val: "Neomycin Sulphate", pack: "100 gm sachet", safe: "Unsafe", pet: "Unsafe", base: 10, unit: "gm", ind: "Poultry bacterial infections", co: "Chemist", type: "c", str: "700mg/gm", mgkg: "N/A"},
    {sl: 436, name: "Pulv. Neoren-50", comp_val: "Neomycin Sulphate", pack: "100 gm sachet", safe: "Unsafe", pet: "Unsafe", base: 10, unit: "gm", ind: "Calves, Sheep, Goat infections", co: "Renata", type: "c", str: "500mg/gm", mgkg: "10mg/kg"},

    // --- Cephalosporins (1.pdf) ---
    {sl: 437, name: "Inj. Vetopen Lac", comp_val: "Ceftriaxone", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Lower respiratory tract infections", co: "Opsonin", type: "c", str: "Combined", mgkg: "10mg/kg"},

    // --- 2.pdf Additions (Sulfonamides) ---
    {sl: 438, name: "Inj. Dine-Vet", comp_val: "Sulphadimidine Sodium 33.3%", pack: "100 ml", safe: "Unsafe", pet: "Safe(Caution)", base: 0.3, unit: "ml", ind: "Protozoal organism infections", co: "Square", type: "c", str: "333mg/ml", mgkg: "100mg/kg"},
    {sl: 439, name: "Inj. Sulphadimidine", comp_val: "Sulphadimidine Sodium 33.3%", pack: "100 ml", safe: "Unsafe", pet: "Safe(Caution)", base: 0.3, unit: "ml", ind: "Bacterial pneumonia, Footrot", co: "Opsonin", type: "c", str: "333mg/ml", mgkg: "100mg/kg"},
    {sl: 440, name: "Bol. Suldin Vet", comp_val: "Sulphadimidine 5 gm", pack: "5 gm Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 1, unit: "bolus", ind: "Initial dose: 7.5g/50kg", co: "Popular", type: "c", str: "5g", mgkg: "100mg/kg"},

    // --- 3.pdf & 4.pdf Additions (Antiprotozoal) ---
    {sl: 441, name: "Inj. Babesin-Vet", comp_val: "Diminazene Aceturate 1.05g", pack: "2.36g Sachet", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Babesiosis, Trypanosomiasis", co: "Square", type: "c", str: "Combined", mgkg: "3.5mg/kg"},
    {sl: 442, name: "Inj. Diminal", comp_val: "Diminazene Diaceturate 445mg", pack: "2.36g Vial", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Phenazone 555mg combination", co: "Eagle Vet (ACI)", type: "c", str: "Combined", mgkg: "1ml/12.5kg"},
    {sl: 443, name: "Inj. Trypanyl-Vet", comp_val: "Diminazene Aceturate", pack: "2.36g", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Babesiosis with high fever", co: "Techno", type: "c", str: "Combined", mgkg: "1ml/12.5kg"},

    // --- 5.pdf & 6.pdf Additions (Vitamins/Hormones) ---
    {sl: 444, name: "Inj. GADE Vet", comp_val: "Vit A + D3 + E", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Formation & preservation of epithelium", co: "Gonoshasthaya", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 445, name: "Inj. Catophos", comp_val: "Butafosfan + B12", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic stimulant", co: "Bayer (ACI)", type: "c", str: "Combined", mgkg: "1ml/10-20kg"},
    {sl: 446, name: "Inj. Receptal", comp_val: "Buserelin", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Ovulation induction", co: "MSD", type: "c", str: "Combined", mgkg: "N/A"},

    // --- 7.pdf & 8.pdf Additions (Disinfectant/Misc) ---
    {sl: 447, name: "Liq. Despadac", comp_val: "Quat + Glutaraldehyde", pack: "1L", safe: "Safe", pet: "Safe", inst: "2-4 ml/Liter spray", ind: "Farm disinfectant", co: "Nexus", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 448, name: "Pow. PB Rano-V", comp_val: "Phytogenic antiviral", pack: "100g", safe: "Safe", pet: "Safe", inst: "2 gm/Liter", ind: "Antiviral bio-security", co: "ACI", type: "f", str: "Herbal", mgkg: "N/A"},
    {sl: 449, name: "CMT Test kid", comp_val: "Mastitis Reagent", pack: "200 ml", safe: "Safe", pet: "N/A", inst: "2 ml milk + 2 ml reagent", ind: "Sub-clinical mastitis detection", co: "ACI", type: "f", str: "Reagent", mgkg: "N/A"},
    
    
    
    
    
    
];

    