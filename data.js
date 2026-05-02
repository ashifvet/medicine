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
    
    
    

    // --- Cephalosporins (Advanced Generation) ---
    {sl: 450, name: "Inj. Cefaprin", comp_val: "Ceftriaxone Sodium", pack: "1 gm vial + 10ml DW", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Severe respiratory & urogenital infections", co: "Incepta", type: "c", str: "1g/10ml", mgkg: "10-20mg/kg"},
    {sl: 451, name: "Inj. Cefquinome-V", comp_val: "Cefquinome Sulfate", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Acute mastitis, Foot rot, MMA syndrome", co: "Popular", type: "c", str: "25mg/ml", mgkg: "1mg/kg"},
    {sl: 452, name: "Inj. Cobactan 2.5%", comp_val: "Cefquinome Sulfate", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Bovine respiratory disease (BRD)", co: "MSD", type: "c", str: "25mg/ml", mgkg: "1mg/kg"},

    // --- Fluoroquinolones ---
    {sl: 453, name: "Inj. Moxiflox-V", comp_val: "Moxifloxacin", pack: "20 ml vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Severe Gram-positive & Anaerobic infections", co: "Square", type: "c", str: "100mg/ml", mgkg: "5mg/kg"},
    {sl: 454, name: "Inj. Levoflox-Vet", comp_val: "Levofloxacin", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Respiratory tract infections, Mycoplasmosis", co: "Acme", type: "c", str: "100mg/ml", mgkg: "10mg/kg"},
    {sl: 455, name: "Inj. Enrovet-LA", comp_val: "Enrofloxacin", pack: "100 ml", safe: "Unsafe", pet: "Safe(Caution)", base: 0.1, unit: "ml", ind: "Long acting - Bronchopneumonia, Scours", co: "Renata", type: "c", str: "100mg/ml", mgkg: "7.5-10mg/kg"},

    // --- Macrolides & Lincosamides ---
    {sl: 456, name: "Inj. Tylosin-V 200", comp_val: "Tylosin Tartrate", pack: "100 ml vial", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Mycoplasmosis, Metritis, Foot rot", co: "ACI", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 457, name: "Inj. Tilmicosin-Vet", comp_val: "Tilmicosin Phosphate", pack: "50 ml", safe: "Safe", pet: "Unsafe", base: 0.03, unit: "ml", ind: "Pneumonia, Pasteurellosis", co: "Techno", type: "c", str: "300mg/ml", mgkg: "10mg/kg"},
    {sl: 458, name: "Inj. Micotil 300", comp_val: "Tilmicosin", pack: "50 ml vial", safe: "Safe", pet: "Unsafe", base: 0.03, unit: "ml", ind: "Severe Bovine respiratory disease", co: "Elanco", type: "c", str: "300mg/ml", mgkg: "10mg/kg"},

    // --- Antiprotozoals ---
    {sl: 459, name: "Inj. Trypazene", comp_val: "Diminazene Aceturate", pack: "2.36g sachet", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Trypanosomiasis, Babesiosis", co: "Popular", type: "c", str: "Combined", mgkg: "3.5-7mg/kg"},
    {sl: 460, name: "Inj. Samorin", comp_val: "Isometamidium Chloride", pack: "1 gm sachet", safe: "Safe", pet: "Unsafe", base: 1, unit: "vial", ind: "Long term Trypanosoma prevention", co: "Ceva", type: "c", str: "1g/vial", mgkg: "1mg/kg"},

    // --- Anthelmintics (Modern) ---
    {sl: 461, name: "Bol. Iver-A", comp_val: "Ivermectin + Albendazole", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Broad spectrum oral parasite control", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 462, name: "Inj. Closantel-V", comp_val: "Closantel", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Liver fluke, Nematodes, Ectoparasites", co: "Renata", type: "c", str: "50mg/ml", mgkg: "5-10mg/kg"},

    // --- Anti-inflammatory & Pain (NSAIDs) ---
    {sl: 463, name: "Inj. Tolfedine 4%", comp_val: "Tolfenamic Acid", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Acute mastitis, Respiratory disease", co: "Vetoquinol", type: "c", str: "40mg/ml", mgkg: "2mg/kg"},
    {sl: 464, name: "Inj. Finadyne", comp_val: "Flunixin Meglumine", pack: "50 ml", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Fever in BRD, Endotoxic shock", co: "MSD", type: "c", str: "50mg/ml", mgkg: "2.2mg/kg"},
    {sl: 465, name: "Inj. Flunixin-V", comp_val: "Flunixin Meglumine", pack: "50 ml", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "NSAID for colic and inflammation", co: "Square", type: "c", str: "50mg/ml", mgkg: "2.2mg/kg"},

    // --- Vitamins & Metabolic Stimulants ---
    {sl: 466, name: "Inj. Coforta", comp_val: "Butafosfan", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Stress management, Metabolic stimulant", co: "Bayer", type: "c", str: "100mg/ml", mgkg: "1ml/10-20kg"},
    {sl: 467, name: "Inj. Neuro-B", comp_val: "Vit B1 + B6 + B12", pack: "Ampoule", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Nerve disorder, Paralysis, Anorexia", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 468, name: "Inj. B12-V", comp_val: "Cyanocobalamin", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Vitamin B12 deficiency, Growth boost", co: "Generic", type: "c", str: "1000mcg/ml", mgkg: "N/A"},

    // --- Digestive & Rumenotorics ---
    {sl: 469, name: "Bol. Bio-Digestion", comp_val: "Live Yeast + Enzymes", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Restoring ruminal flora after antibiotic therapy", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 470, name: "Bol. Rumen-Plus", comp_val: "Probiotics + Ginger + Cobalt", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Indigestion, Ruminal atony", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Hormones & Reproductive ---
    {sl: 471, name: "Inj. Chorulon", comp_val: "hCG (Human Chorionic Gonadotrophin)", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "vial", ind: "Ovarian cysts, Nymphomania", co: "MSD", type: "c", str: "1500 IU", mgkg: "N/A"},
    {sl: 472, name: "Inj. Folligon", comp_val: "PMSG (Pregnant Mare Serum Gonadotrophin)", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "vial", ind: "Superovulation, Oestrus induction", co: "Intervet", type: "c", str: "1000 IU", mgkg: "N/A"},

    // --- Liver Support ---
    {sl: 473, name: "Liq. Silymarin-V", comp_val: "Silymarin + Choline + B-Vit", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Liver cirrhosis, Jaundice recovery", co: "Incepta", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 474, name: "Liq. Hepatocare", comp_val: "Herbal liver tonic", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Natural hepatic stimulant", co: "Renata", type: "c", str: "Herbal", mgkg: "N/A"},

    // --- Miscellaneous ---
    {sl: 475, name: "Oint. Nitro-Vet", comp_val: "Nitrofurazone", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Wound infection prevention", co: "Square", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 476, name: "Inj. Dexon-S", comp_val: "Dexamethasone Sodium Phosphate", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Shock, Acute inflammation", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 477, name: "Inj. Fertilin-V", comp_val: "Buserelin Acetate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Ovarian follicular cysts", co: "Techno", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Continue Part 12 (478-500) ---
    {sl: 478, name: "Inj. Sulfatrim DS", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 0.05, unit: "ml", ind: "Systemic bacterial control", co: "Navana", type: "c", str: "480mg/ml", mgkg: "15-30mg/kg"},
    {sl: 479, name: "Bol. Sulfatrim DS", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Oral systemic treatment", co: "Navana", type: "c", str: "Combined", mgkg: "15-30mg/kg"},
    {sl: 480, name: "Inj. Trimesul-V", comp_val: "Sulfadiazine + Trimethoprim", pack: "30 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Pneumonia, Calf scour", co: "ACI", type: "c", str: "240mg/ml", mgkg: "15-30mg/kg"},
    {sl: 481, name: "Bol. Trimesul-V", comp_val: "Sulfadiazine + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Secondary bacterial infections", co: "ACI", type: "c", str: "Combined", mgkg: "15-30mg/kg"},
    {sl: 482, name: "Inj. Sulfa-Z", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "50 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Respiratory & GI infections", co: "Opsonin", type: "c", str: "240mg/ml", mgkg: "15-30mg/kg"},
    {sl: 483, name: "Bol. Sulfa-Z", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Metritis, Bronchitis", co: "Opsonin", type: "c", str: "Combined", mgkg: "15-30mg/kg"},
    {sl: 484, name: "Inj. Bactron-DS", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "50 ml", safe: "Unsafe", pet: "Safe", base: 0.05, unit: "ml", ind: "Severe bacterial pneumonia", co: "Square", type: "c", str: "480mg/ml", mgkg: "15-30mg/kg"},
    {sl: 485, name: "Bol. Bactron-DS", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 0.5, unit: "bolus", ind: "Metritis, Enteritis", co: "Square", type: "c", str: "Combined", mgkg: "15-30mg/kg"},
    {sl: 486, name: "Inj. Sul-Trim DS", comp_val: "Sulfadiazine + Trimethoprim", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 0.05, unit: "ml", ind: "HS, BQ, Pneumonia", co: "Techno", type: "c", str: "480mg/ml", mgkg: "15-30mg/kg"},
    {sl: 487, name: "Bol. Sul-Trim DS", comp_val: "Sulfadiazine + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 0.5, unit: "bolus", ind: "Severe systemic infection", co: "Techno", type: "c", str: "Combined", mgkg: "15-30mg/kg"},
    {sl: 488, name: "Inj. Sulprim-Z", comp_val: "Sulfadiazine + Trimethoprim", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Urinary tract infections", co: "ACI", type: "c", str: "240mg/ml", mgkg: "15-30mg/kg"},
    {sl: 489, name: "Bol. Sulprim-Z", comp_val: "Sulfadiazine + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Mixed bacterial infections", co: "ACI", type: "c", str: "Combined", mgkg: "15-30mg/kg"},
    {sl: 490, name: "Inj. Trimevet-Z", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "30 ml", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Respiratory infections, Scours", co: "Techno", type: "c", str: "240mg/ml", mgkg: "15-30mg/kg"},
    {sl: 491, name: "Bol. Trimevet-Z", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Systemic oral antibiotic", co: "Techno", type: "c", str: "Combined", mgkg: "15-30mg/kg"},
    {sl: 492, name: "Pulv. Sumid-Z", comp_val: "Sulphadimidine Sodium", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Coccidiosis, HS, BQ", co: "Square", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 493, name: "Pulv. Nilamide-Z", comp_val: "Sulphadimidine Sodium", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Bacterial enteritis, Foot rot", co: "Techno", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 494, name: "Pulv. Sulphavet-Z", comp_val: "Sulphadimidine Sodium", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Calf scours, Metritis", co: "Incepta", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 495, name: "Pulv. Sulfa-Z", comp_val: "Sulphadimidine Sodium", pack: "100 gm", safe: "Unsafe", pet: "Safe(Caution)", base: 10, unit: "gm", ind: "Bacterial scours", co: "Popular", type: "c", str: "WSP", mgkg: "100-200mg/kg"},
    {sl: 496, name: "Bol. Dermaphyl-Z", comp_val: "Griseofulvin 500 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "bolus", ind: "Dermatophytosis, Ringworm", co: "Navana", type: "c", str: "500mg", mgkg: "10mg/kg"},
    {sl: 497, name: "Bol. Grisin-Z", comp_val: "Griseofulvin 500 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "bolus", ind: "Fungal skin diseases", co: "Renata", type: "c", str: "500mg", mgkg: "10mg/kg"},
    {sl: 498, name: "Bol. Fungivin-Z", comp_val: "Griseofulvin 500 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "bolus", ind: "Skin fungal infections", co: "Acme", type: "c", str: "500mg", mgkg: "10mg/kg"},
    {sl: 499, name: "Bol. Gris-Z", comp_val: "Griseofulvin 500 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "bolus", ind: "Trichophyton species infections", co: "Popular", type: "c", str: "500mg", mgkg: "10mg/kg"},
    {sl: 500, name: "Bol. Antifung-Z", comp_val: "Griseofulvin 500 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe(Caution)", base: 0.02, unit: "bolus", ind: "Ringworm treatment", co: "Techno", type: "c", str: "500mg", mgkg: "10mg/kg"},
    
    
    
    

    // --- Antiprotozoal (Babesiosis & Trypanosomiasis) ---
    {sl: 501, name: "Inj. Berenil RTU 7%", comp_val: "Diminazene Aceturate 7.0g + Phenazone 37.5g", pack: "30/90 ml vial", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Babesiosis, Trypanosomiasis, Theileriosis", co: "Intervet (MSD)", type: "c", str: "70mg/ml", mgkg: "1ml/20kg"},
    {sl: 502, name: "Inj. Babesin Vet", comp_val: "Diminazene Aceturate 1.05g", pack: "2.36g Sachet", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Protozoal infections with fever", co: "Square", type: "c", str: "Combined", mgkg: "1ml/12.5kg"},
    {sl: 503, name: "Inj. Imizol", comp_val: "Imidocarb Dipropionate 12%", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Treatment and prevention of Anaplasmosis", co: "Intervet", type: "c", str: "120mg/ml", mgkg: "1ml/40kg"},
    {sl: 504, name: "Inj. E-Carbzol", comp_val: "Imidocarb Dipropionate", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 0.01, unit: "ml", ind: "Babesia and Anaplasma prevention", co: "ACI", type: "c", str: "120mg/ml", mgkg: "1ml/100kg"},
    {sl: 505, name: "Inj. Butalex", comp_val: "Buparvaquone 50 mg/ml", pack: "20 ml vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Theileriosis (East Coast Fever)", co: "MSD", type: "c", str: "50mg/ml", mgkg: "1ml/20kg"},

    // --- Antihistamines (Allergy & Shock) ---
    {sl: 506, name: "Inj. Avil Vet", comp_val: "Pheniramine Maleate 22.7 mg/ml", pack: "10/33/100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Urticaria, Anaphylactic shock, Hay fever", co: "Sanofi", type: "c", str: "22.7mg/ml", mgkg: "1ml/25kg"},
    {sl: 507, name: "Inj. Antihist Vet", comp_val: "Chlorpheniramine Maleate 10 mg/ml", pack: "10/100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Insect bites, Photosensitization, Allergy", co: "Square", type: "c", str: "10mg/ml", mgkg: "1ml/25kg"},
    {sl: 508, name: "Inj. Histacin-V", comp_val: "Chlorpheniramine Maleate", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Allergic rhinitis, General allergy", co: "ACI", type: "c", str: "10mg/ml", mgkg: "1ml/25kg"},
    {sl: 509, name: "Inj. Promethazine-V", comp_val: "Promethazine Hydrochloride", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Severe allergic reactions, Sedative effect", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},

    // --- NSAIDs (Pain, Fever & Inflammation) ---
    {sl: 510, name: "Inj. Melocam Vet", comp_val: "Meloxicam 5 mg/ml", pack: "10/50 ml vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Mastitis, Arthritis, Lameness, Post-surgery", co: "Popular", type: "c", str: "5mg/ml", mgkg: "0.5mg/kg"},
    {sl: 511, name: "Inj. Melovet", comp_val: "Meloxicam 5 mg/ml", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Pain and inflammation in respiratory infection", co: "Acme", type: "c", str: "5mg/ml", mgkg: "0.5mg/kg"},
    {sl: 512, name: "Inj. Ketovet 100", comp_val: "Ketoprofen 100 mg/ml", pack: "10/50 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Musculoskeletal disorders, Chronic pain", co: "Techno", type: "c", str: "100mg/ml", mgkg: "3mg/kg"},
    {sl: 513, name: "Inj. Flunixin-V", comp_val: "Flunixin Meglumine 50 mg/ml", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Colic, Endotoxic shock, Fever in BRD", co: "Square", type: "c", str: "50mg/ml", mgkg: "2.2mg/kg"},
    {sl: 514, name: "Inj. Tolfen Vet", comp_val: "Tolfenamic Acid 40 mg/ml", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Acute mastitis, Bovine respiratory disease", co: "Techno", type: "c", str: "40mg/ml", mgkg: "2mg/kg"},
    {sl: 515, name: "Bol. Para-Vet Plus", comp_val: "Paracetamol + Diclofenac Sodium", pack: "Bolus", safe: "Unsafe", pet: "Unsafe", base: 1, unit: "bolus", ind: "Severe pain, Fever, Swelling", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 516, name: "Bol. Ace-Vet 500", comp_val: "Paracetamol 500 mg", pack: "Bolus", safe: "Safe", pet: "Unsafe", base: 1, unit: "bolus", ind: "Anti-pyretic for livestock", co: "Square", type: "c", str: "500mg", mgkg: "N/A"},

    // --- Vitamins & Metabolic Stimulants ---
    {sl: 517, name: "Inj. Catophos", comp_val: "Butafosfan 100 mg + Vitamin B12 50 mcg", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Phosphorus metabolism stimulus, Infertility", co: "Bayer (ACI)", type: "c", str: "Combined", mgkg: "1ml/10-20kg"},
    {sl: 518, name: "Inj. Butavet-V", comp_val: "Butafosfan + Vitamin B12", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic disorder, Stress, Fatigue", co: "Techno", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 519, name: "Inj. Vitade Vet", comp_val: "Vitamin A + D3 + E", pack: "10/100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Growth, Immunity, Epithelial health", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 520, name: "Inj. Rena-ADE", comp_val: "Vitamin A + D3 + E", pack: "10/100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Fertility boost, Stress prevention", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Digestive & Rumenotorics ---
    {sl: 521, name: "Bol. Rumicid Vet", comp_val: "Ammonium Bicarbonate + Nuxvomica + Ginger", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Indigestion, Anorexia, Ruminal atony", co: "Renata", type: "c", str: "Combined", mgkg: "1-2 bolus/animal"},
    {sl: 522, name: "Bol. Bio-Gut", comp_val: "Probiotics + Saccharomyces cerevisiae", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Bloat, Ruminal pH balancing", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 523, name: "Pulv. Zyme-Vet", comp_val: "Multienzyme complex", pack: "100 gm sachet", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Digestive aid, Feed conversion improvement", co: "Popular", type: "c", str: "WSP", mgkg: "N/A"},

    // --- Liver Support ---
    {sl: 524, name: "Liq. Hepaguard Vet", comp_val: "Silymarin + Choline + L-Carnitine", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Fatty liver, Jaundice, Hepatic cirrhosis", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 525, name: "Liq. Livo-C", comp_val: "Liver extract + Vitamin B12 + C", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Hepatoprotective tonic", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Reproductive Hormones ---
    {sl: 526, name: "Inj. Receptal", comp_val: "Buserelin Acetate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Delayed ovulation, Ovarian cysts", co: "MSD", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 527, name: "Inj. Ovurelin", comp_val: "Gonadorelin", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Cystic ovaries, Oestrus synchronization", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 528, name: "Inj. Oxytocin-V", comp_val: "Oxytocin (Synthetic)", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Uterine inertia, Agalactia", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Anthelmintics (Dewormers) ---
    {sl: 529, name: "Bol. Almex Vet", comp_val: "Albendazole 600 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Roundworms, Lungworms, Liver flukes", co: "Renata", type: "c", str: "600mg", mgkg: "7.5-10mg/kg"},
    {sl: 530, name: "Bol. LT-Vet", comp_val: "Triclabendazole 900 mg + Levamisole 600 mg", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Broad spectrum fascioliasis treatment", co: "Square", type: "c", str: "Combined", mgkg: "1bolus/75kg"},
    {sl: 531, name: "Inj. Vermic-10", comp_val: "Ivermectin 1%", pack: "Vial", safe: "Safe", pet: "Safe(Caution)", base: 0.02, unit: "ml", ind: "Endo & Ectoparasite control", co: "Renata", type: "c", str: "10mg/ml", mgkg: "1ml/50kg"},

    // --- Additional Items ---
    {sl: 532, name: "Inj. B-Com Vet", comp_val: "Vitamin B1+B2+B6+B12", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "B-vitamin deficiency, Weakness", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 533, name: "Liq. Amino-Acid", comp_val: "Essential Amino Acids + Vitamins", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Growth promoter, Convalescence tonic", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 534, name: "Inj. G-Vitamix", comp_val: "Multivitamins", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "General metabolic boost", co: "Gonoshasthaya", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 535, name: "Liq. Povisep Vet", comp_val: "Povidone Iodine 10%", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Antiseptic for surgical site and wounds", co: "JMI", type: "f", str: "10%", mgkg: "N/A"},
    {sl: 536, name: "Inj. Lidocaine-V 2%", comp_val: "Lidocaine HCl", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Local anesthesia, Surgical procedures", co: "Square", type: "c", str: "2%", mgkg: "N/A"},

    // --- More Recent Market Entries ---
    {sl: 537, name: "Inj. Ceftio-V 1g", comp_val: "Ceftiofur Sodium", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Acute BRD, Foot rot, Shipping fever", co: "Popular", type: "c", str: "50mg/ml", mgkg: "1.1-2.2mg/kg"},
    {sl: 538, name: "Inj. Melofen", comp_val: "Meloxicam + Paracetamol", pack: "100 ml vial", safe: "Safe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Severe fever and inflammation", co: "Techno", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 539, name: "Liq. Digex", comp_val: "Digestive Enzymes Liquid", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Indigestion and ruminal stasis in calves", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 540, name: "Pulv. Electromin", comp_val: "Electrolytes + Minerals", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Heat stress and rehydration", co: "Square", type: "c", str: "WSP", mgkg: "N/A"},
    {sl: 541, name: "Inj. B1+B6+B12", comp_val: "Neurotropic Vitamins", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Nerve tone booster, Paralysis support", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 542, name: "Inj. Cal-Bor", comp_val: "Calcium Borogluconate 25%", pack: "500 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Milk fever emergency", co: "Techno", type: "c", str: "25%", mgkg: "N/A"},
    {sl: 543, name: "Bol. Metro-A 2g", comp_val: "Metronidazole 2000 mg", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Amoebiasis and Giardiasis in cattle", co: "Acme", type: "c", str: "2g", mgkg: "N/A"},
    {sl: 544, name: "Oint. Nitrofur-V", comp_val: "Nitrofurazone 0.2%", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Infected surface wounds", co: "Popular", type: "f", str: "0.2%", mgkg: "N/A"},
    {sl: 545, name: "Inj. Frusemide-10", comp_val: "Furosemide", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Post-calving udder edema", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 546, name: "Liq. Liver-G", comp_val: "Herbal Liver Protector", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Liver conditioning and detoxification", co: "Gonoshasthaya", type: "c", str: "Herbal", mgkg: "N/A"},
    {sl: 547, name: "Inj. Dexazone", comp_val: "Dexamethasone Sodium Phosphate", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anaphylaxis relief", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 548, name: "Inj. Oxytocin-A", comp_val: "Oxytocin Synthetic", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 1, unit: "ml", ind: "Milk ejection stimulant", co: "ACI", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 549, name: "Inj. Lidocaine-Z", comp_val: "Lidocaine HCl 2%", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Local nerve block", co: "Generic", type: "c", str: "2%", mgkg: "N/A"},
    {sl: 550, name: "Bol. Paracet-V", comp_val: "Paracetamol", pack: "Bolus", safe: "Safe", pet: "Unsafe", base: 1, unit: "bolus", ind: "General pain and fever reduction", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    
    
    
    
    const allDrugsPart13 = [
    // --- Antiprotozoal (Babesiosis & Trypanosomiasis) ---
    {sl: 501, name: "Inj. Berenil RTU 7%", comp_val: "Diminazene Aceturate 7.0g + Phenazone 37.5g", pack: "30/90 ml vial", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Babesiosis, Trypanosomiasis, Theileriosis", co: "Intervet (MSD)", type: "c", str: "70mg/ml", mgkg: "1ml/20kg"},
    {sl: 502, name: "Inj. Babesin Vet", comp_val: "Diminazene Aceturate 1.05g", pack: "2.36g Sachet", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Protozoal infections with fever", co: "Square", type: "c", str: "Combined", mgkg: "1ml/12.5kg"},
    {sl: 503, name: "Inj. Imizol", comp_val: "Imidocarb Dipropionate 12%", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Treatment and prevention of Anaplasmosis", co: "Intervet", type: "c", str: "120mg/ml", mgkg: "1ml/40kg"},
    {sl: 504, name: "Inj. E-Carbzol", comp_val: "Imidocarb Dipropionate", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 0.01, unit: "ml", ind: "Babesia and Anaplasma prevention", co: "ACI", type: "c", str: "120mg/ml", mgkg: "1ml/100kg"},
    {sl: 505, name: "Inj. Butalex", comp_val: "Buparvaquone 50 mg/ml", pack: "20 ml vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Theileriosis (East Coast Fever)", co: "MSD", type: "c", str: "50mg/ml", mgkg: "1ml/20kg"},

    // --- Antihistamines (Allergy & Shock) ---
    {sl: 506, name: "Inj. Avil Vet", comp_val: "Pheniramine Maleate 22.7 mg/ml", pack: "10/33/100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Urticaria, Anaphylactic shock, Hay fever", co: "Sanofi", type: "c", str: "22.7mg/ml", mgkg: "1ml/25kg"},
    {sl: 507, name: "Inj. Antihist Vet", comp_val: "Chlorpheniramine Maleate 10 mg/ml", pack: "10/100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Insect bites, Photosensitization, Allergy", co: "Square", type: "c", str: "10mg/ml", mgkg: "1ml/25kg"},
    {sl: 508, name: "Inj. Histacin-V", comp_val: "Chlorpheniramine Maleate", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Allergic rhinitis, General allergy", co: "ACI", type: "c", str: "10mg/ml", mgkg: "1ml/25kg"},
    {sl: 509, name: "Inj. Promethazine-V", comp_val: "Promethazine Hydrochloride", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Severe allergic reactions, Sedative effect", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},

    // --- NSAIDs (Pain, Fever & Inflammation) ---
    {sl: 510, name: "Inj. Melocam Vet", comp_val: "Meloxicam 5 mg/ml", pack: "10/50 ml vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Mastitis, Arthritis, Lameness, Post-surgery", co: "Popular", type: "c", str: "5mg/ml", mgkg: "0.5mg/kg"},
    {sl: 511, name: "Inj. Melovet", comp_val: "Meloxicam 5 mg/ml", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Pain and inflammation in respiratory infection", co: "Acme", type: "c", str: "5mg/ml", mgkg: "0.5mg/kg"},
    {sl: 512, name: "Inj. Ketovet 100", comp_val: "Ketoprofen 100 mg/ml", pack: "10/50 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Musculoskeletal disorders, Chronic pain", co: "Techno", type: "c", str: "100mg/ml", mgkg: "3mg/kg"},
    {sl: 513, name: "Inj. Flunixin-V", comp_val: "Flunixin Meglumine 50 mg/ml", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Colic, Endotoxic shock, Fever in BRD", co: "Square", type: "c", str: "50mg/ml", mgkg: "2.2mg/kg"},
    {sl: 514, name: "Inj. Tolfen Vet", comp_val: "Tolfenamic Acid 40 mg/ml", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Acute mastitis, Bovine respiratory disease", co: "Techno", type: "c", str: "40mg/ml", mgkg: "2mg/kg"},
    {sl: 515, name: "Bol. Para-Vet Plus", comp_val: "Paracetamol + Diclofenac Sodium", pack: "Bolus", safe: "Unsafe", pet: "Unsafe", base: 1, unit: "bolus", ind: "Severe pain, Fever, Swelling", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 516, name: "Bol. Ace-Vet 500", comp_val: "Paracetamol 500 mg", pack: "Bolus", safe: "Safe", pet: "Unsafe", base: 1, unit: "bolus", ind: "Anti-pyretic for livestock", co: "Square", type: "c", str: "500mg", mgkg: "N/A"},

    // --- Vitamins & Metabolic Stimulants ---
    {sl: 517, name: "Inj. Catophos", comp_val: "Butafosfan 100 mg + Vitamin B12 50 mcg", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Phosphorus metabolism stimulus, Infertility", co: "Bayer (ACI)", type: "c", str: "Combined", mgkg: "1ml/10-20kg"},
    {sl: 518, name: "Inj. Butavet-V", comp_val: "Butafosfan + Vitamin B12", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic disorder, Stress, Fatigue", co: "Techno", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 519, name: "Inj. Vitade Vet", comp_val: "Vitamin A + D3 + E", pack: "10/100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Growth, Immunity, Epithelial health", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 520, name: "Inj. Rena-ADE", comp_val: "Vitamin A + D3 + E", pack: "10/100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Fertility boost, Stress prevention", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Digestive & Rumenotorics ---
    {sl: 521, name: "Bol. Rumicid Vet", comp_val: "Ammonium Bicarbonate + Nuxvomica + Ginger", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Indigestion, Anorexia, Ruminal atony", co: "Renata", type: "c", str: "Combined", mgkg: "1-2 bolus/animal"},
    {sl: 522, name: "Bol. Bio-Gut", comp_val: "Probiotics + Saccharomyces cerevisiae", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Bloat, Ruminal pH balancing", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 523, name: "Pulv. Zyme-Vet", comp_val: "Multienzyme complex", pack: "100 gm sachet", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Digestive aid, Feed conversion improvement", co: "Popular", type: "c", str: "WSP", mgkg: "N/A"},

    // --- Liver Support ---
    {sl: 524, name: "Liq. Hepaguard Vet", comp_val: "Silymarin + Choline + L-Carnitine", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Fatty liver, Jaundice, Hepatic cirrhosis", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 525, name: "Liq. Livo-C", comp_val: "Liver extract + Vitamin B12 + C", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Hepatoprotective tonic", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Reproductive Hormones ---
    {sl: 526, name: "Inj. Receptal", comp_val: "Buserelin Acetate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Delayed ovulation, Ovarian cysts", co: "MSD", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 527, name: "Inj. Ovurelin", comp_val: "Gonadorelin", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Cystic ovaries, Oestrus synchronization", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 528, name: "Inj. Oxytocin-V", comp_val: "Oxytocin (Synthetic)", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Uterine inertia, Agalactia", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Anthelmintics (Dewormers) ---
    {sl: 529, name: "Bol. Almex Vet", comp_val: "Albendazole 600 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Roundworms, Lungworms, Liver flukes", co: "Renata", type: "c", str: "600mg", mgkg: "7.5-10mg/kg"},
    {sl: 530, name: "Bol. LT-Vet", comp_val: "Triclabendazole 900 mg + Levamisole 600 mg", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Broad spectrum fascioliasis treatment", co: "Square", type: "c", str: "Combined", mgkg: "1bolus/75kg"},
    {sl: 531, name: "Inj. Vermic-10", comp_val: "Ivermectin 1%", pack: "Vial", safe: "Safe", pet: "Safe(Caution)", base: 0.02, unit: "ml", ind: "Endo & Ectoparasite control", co: "Renata", type: "c", str: "10mg/ml", mgkg: "1ml/50kg"},

    // --- Additional Items ---
    {sl: 532, name: "Inj. B-Com Vet", comp_val: "Vitamin B1+B2+B6+B12", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "B-vitamin deficiency, Weakness", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 533, name: "Liq. Amino-Acid", comp_val: "Essential Amino Acids + Vitamins", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Growth promoter, Convalescence tonic", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 534, name: "Inj. G-Vitamix", comp_val: "Multivitamins", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "General metabolic boost", co: "Gonoshasthaya", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 535, name: "Liq. Povisep Vet", comp_val: "Povidone Iodine 10%", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Antiseptic for surgical site and wounds", co: "JMI", type: "f", str: "10%", mgkg: "N/A"},
    {sl: 536, name: "Inj. Lidocaine-V 2%", comp_val: "Lidocaine HCl", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Local anesthesia, Surgical procedures", co: "Square", type: "c", str: "2%", mgkg: "N/A"},

    // --- More Recent Market Entries ---
    {sl: 537, name: "Inj. Ceftio-V 1g", comp_val: "Ceftiofur Sodium", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Acute BRD, Foot rot, Shipping fever", co: "Popular", type: "c", str: "50mg/ml", mgkg: "1.1-2.2mg/kg"},
    {sl: 538, name: "Inj. Melofen", comp_val: "Meloxicam + Paracetamol", pack: "100 ml vial", safe: "Safe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Severe fever and inflammation", co: "Techno", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 539, name: "Liq. Digex", comp_val: "Digestive Enzymes Liquid", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Indigestion and ruminal stasis in calves", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 540, name: "Pulv. Electromin", comp_val: "Electrolytes + Minerals", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Heat stress and rehydration", co: "Square", type: "c", str: "WSP", mgkg: "N/A"},
    {sl: 541, name: "Inj. B1+B6+B12", comp_val: "Neurotropic Vitamins", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Nerve tone booster, Paralysis support", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 542, name: "Inj. Cal-Bor", comp_val: "Calcium Borogluconate 25%", pack: "500 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Milk fever emergency", co: "Techno", type: "c", str: "25%", mgkg: "N/A"},
    {sl: 543, name: "Bol. Metro-A 2g", comp_val: "Metronidazole 2000 mg", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Amoebiasis and Giardiasis in cattle", co: "Acme", type: "c", str: "2g", mgkg: "N/A"},
    {sl: 544, name: "Oint. Nitrofur-V", comp_val: "Nitrofurazone 0.2%", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Infected surface wounds", co: "Popular", type: "f", str: "0.2%", mgkg: "N/A"},
    {sl: 545, name: "Inj. Frusemide-10", comp_val: "Furosemide", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Post-calving udder edema", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 546, name: "Liq. Liver-G", comp_val: "Herbal Liver Protector", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Liver conditioning and detoxification", co: "Gonoshasthaya", type: "c", str: "Herbal", mgkg: "N/A"},
    {sl: 547, name: "Inj. Dexazone", comp_val: "Dexamethasone Sodium Phosphate", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anaphylaxis relief", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 548, name: "Inj. Oxytocin-A", comp_val: "Oxytocin Synthetic", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 1, unit: "ml", ind: "Milk ejection stimulant", co: "ACI", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 549, name: "Inj. Lidocaine-Z", comp_val: "Lidocaine HCl 2%", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Local nerve block", co: "Generic", type: "c", str: "2%", mgkg: "N/A"},
    {sl: 550, name: "Bol. Paracet-V", comp_val: "Paracetamol", pack: "Bolus", safe: "Safe", pet: "Unsafe", base: 1, unit: "bolus", ind: "General pain and fever reduction", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    
    
    
    
    
  
    // --- Macrolide Antibiotics (শ্বাসতন্ত্র ও চর্মরোগের জন্য উন্নত অ্যান্টিবায়োটিক) ---
    {sl: 551, name: "Inj. Tylosin-V 200", comp_val: "Tylosin Tartrate 200 mg/ml", pack: "10/100 ml vial", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Mycoplasmosis, Foot rot, Mastitis, Metritis", co: "ACI", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 552, name: "Inj. Tylan 200", comp_val: "Tylosin", pack: "100 ml vial", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Pneumonia, Diphtheria in cattle", co: "Elanco", type: "c", str: "200mg/ml", mgkg: "10mg/kg"},
    {sl: 553, name: "Inj. Tilmicosin Vet", comp_val: "Tilmicosin Phosphate", pack: "50 ml vial", safe: "Safe", pet: "Unsafe", base: 0.03, unit: "ml", ind: "Bovine respiratory disease (BRD)", co: "Techno", type: "c", str: "300mg/ml", mgkg: "10mg/kg"},
    {sl: 554, name: "Inj. Micotil 300", comp_val: "Tilmicosin 300 mg/ml", pack: "50 ml vial", safe: "Safe", pet: "Unsafe", base: 0.03, unit: "ml", ind: "Severe Pneumonia, Pasteurellosis", co: "Elanco", type: "c", str: "300mg/ml", mgkg: "10mg/kg"},
    {sl: 555, name: "Inj. Tulathromycin-V", comp_val: "Tulathromycin", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.025, unit: "ml", ind: "Single dose BRD treatment", co: "Generic", type: "c", str: "100mg/ml", mgkg: "2.5mg/kg"},

    // --- Digestive & Laxatives (হজম ও কোষ্ঠকাঠিন্য নিরোধক) ---
    {sl: 556, name: "Liq. Paraffin Vet", comp_val: "Liquid Paraffin (Medicinal)", pack: "500 ml bottle", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Constipation, Ruminal impaction", co: "Generic", type: "c", str: "100%", mgkg: "N/A"},
    {sl: 557, name: "Liq. Castor-V", comp_val: "Castor Oil", pack: "100 ml", safe: "Safe", pet: "Safe", base: 10, unit: "ml", ind: "Laxative for calves and small animals", co: "Generic", type: "c", str: "100%", mgkg: "N/A"},
    {sl: 558, name: "Pulv. Epsom Salt", comp_val: "Magnesium Sulphate", pack: "100/500 gm", safe: "Safe", pet: "Safe", base: 10, unit: "gm", ind: "Saline purgative for impaction", co: "Generic", type: "c", str: "Pure", mgkg: "N/A"},
    {sl: 559, name: "Bol. Lax-Aid", comp_val: "Laxative Salts + Ginger", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Mild constipation and indigestion", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 560, name: "Bol. Gas-Free", comp_val: "Simethicone + Antacids", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Bloat and flatulence in ruminants", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},

    // --- NSAIDs & Advanced Pain Relief (ব্যথানাশক) ---
    {sl: 561, name: "Inj. Tolfedine 4%", comp_val: "Tolfenamic Acid", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Anti-inflammatory, Analgesic, Mastitis", co: "Vetoquinol", type: "c", str: "40mg/ml", mgkg: "2mg/kg"},
    {sl: 562, name: "Inj. Flunixin-V", comp_val: "Flunixin Meglumine 50 mg/ml", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Colic pain, Endotoxic shock", co: "Square", type: "c", str: "50mg/ml", mgkg: "2.2mg/kg"},
    {sl: 563, name: "Inj. Finadyne", comp_val: "Flunixin Meglumine", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Fever and acute inflammation in BRD", co: "MSD", type: "c", str: "50mg/ml", mgkg: "2.2mg/kg"},
    {sl: 564, name: "Inj. Ketovet 100", comp_val: "Ketoprofen 100 mg/ml", pack: "10/50 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Musculoskeletal pain, Fever reduction", co: "Techno", type: "c", str: "100mg/ml", mgkg: "3mg/kg"},

    // --- Hormones & Steroids (হরমোন ও স্টেরয়েড) ---
    {sl: 565, name: "Inj. Chorulon", comp_val: "hCG (Human Chorionic Gonadotrophin)", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "vial", ind: "Infertility, Follicular cysts in cows", co: "MSD", type: "c", str: "1500 IU", mgkg: "N/A"},
    {sl: 566, name: "Inj. Folligon", comp_val: "PMSG", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "vial", ind: "Superovulation induction", co: "Intervet", type: "c", str: "1000 IU", mgkg: "N/A"},
    {sl: 567, name: "Inj. Estrumate", comp_val: "Cloprostenol Sodium", pack: "Vial", safe: "Unsafe", pet: "Unsafe", base: 1, unit: "ml", ind: "Luteolysis, Heat synchronization", co: "MSD", type: "c", str: "250mcg/ml", mgkg: "2ml/cow"},
    {sl: 568, name: "Inj. Prednisolone-V", comp_val: "Prednisolone", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Ketosis, Allergic dermatitis", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Anthelmintics: Modern Combinations (উন্নত কৃমিনাশক) ---
    {sl: 569, name: "Bol. Iver-A", comp_val: "Ivermectin + Albendazole", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Endo & Ectoparasite control", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 570, name: "Bol. Closavet", comp_val: "Closantel", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Liver fluke, Haemonchosis", co: "Techno", type: "c", str: "Combined", mgkg: "10mg/kg"},
    {sl: 571, name: "Inj. Closantel-V", comp_val: "Closantel", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Nematodes and larval stages", co: "Renata", type: "c", str: "50mg/ml", mgkg: "5-10mg/kg"},

    // --- Hematinics & Iron (রক্তাল্পতা রোধক) ---
    {sl: 572, name: "Inj. Iron-DS", comp_val: "Iron Dextran + Vitamin B12", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Piglet anemia prevention", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 573, name: "Inj. Hemovet", comp_val: "Iron + B12 + Folic Acid", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Anemia during recovery", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 574, name: "Inj. Ferron-V", comp_val: "Iron Dextran", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "General iron deficiency", co: "Acme", type: "c", str: "100mg/ml", mgkg: "N/A"},

    // --- Liver Support (লিভার সুরক্ষা) ---
    {sl: 575, name: "Liq. Silymarin-Plus", comp_val: "Silymarin + Choline + B-Vit", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Hepatic cirrhosis, Fatty liver", co: "Incepta", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 576, name: "Liq. Hepatocare", comp_val: "Herbal liver tonic", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Detoxification and appetite stimulant", co: "Renata", type: "c", str: "Herbal", mgkg: "N/A"},

    // --- Diagnostic & Antiseptic (রোগ নির্ণয় ও জীবাণুনাশক) ---
    {sl: 577, name: "CMT Test Kit", comp_val: "Reagent Solution", pack: "200 ml + Paddle", safe: "Safe", pet: "N/A", inst: "2ml milk + 2ml reagent", ind: "Field detection of sub-clinical mastitis", co: "ACI", type: "f", str: "Reagent", mgkg: "N/A"},
    {sl: 578, name: "Liq. TH4 Plus", comp_val: "Quat + Glutaraldehyde", pack: "1L Bottle", safe: "Safe", pet: "Safe", inst: "2-4 ml/Liter water", ind: "Powerful farm disinfectant", co: "Sodexo (Renata)", type: "f", str: "Liquid", mgkg: "N/A"},
    {sl: 579, name: "Spray Oxytetra", comp_val: "Oxytetracycline", pack: "Aerosol", safe: "Safe", pet: "Safe", base: 1, unit: "spray", ind: "Wound healing and foot rot", co: "Generic", type: "f", str: "Combined", mgkg: "N/A"},

    // --- Feed Additives & Vitamins (খাদ্য সম্পূরক) ---
    {sl: 580, name: "Pulv. Megavit-DB", comp_val: "Vit + Min + Amino Acids", pack: "1 kg", safe: "Safe", pet: "Safe", base: 10, unit: "gm", ind: "Boosts milk yield and growth", co: "Acme", type: "c", str: "Powder", mgkg: "10-20g daily"},
    {sl: 581, name: "Pulv. ACI DCP Gold", comp_val: "Calcium + Phosphorus + Trace Elements", pack: "1 kg", safe: "Safe", pet: "Safe", base: 15, unit: "gm", ind: "Bone skeletal development", co: "ACI", type: "c", str: "Powder", mgkg: "15g/100kg"},
    {sl: 582, name: "Liq. Vit-E Plus Selenium", comp_val: "Vitamin E + Selenium", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Prevents muscular dystrophy", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Additional Antibiotics & Antiprotozoals ---
    {sl: 583, name: "Inj. Diminal", comp_val: "Diminazene diaceturate + Phenazone", pack: "2.36g vial", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Babesia & Trypanosoma control", co: "ACI (Eagle Vet)", type: "c", str: "Combined", mgkg: "1ml/12.5kg"},
    {sl: 584, name: "Inj. Babcop-Vet", comp_val: "Diminazene aceturate + Phenazone", pack: "20 ml vial", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Pyrexia in protozoal diseases", co: "Square", type: "c", str: "70mg/ml", mgkg: "1ml/20kg"},
    {sl: 585, name: "Inj. Imidox Vet", comp_val: "Imidocarb Dipropionate", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Babesiosis & Anaplasmosis", co: "Acme", type: "c", str: "120mg/ml", mgkg: "1ml/40kg"},

    // --- Antihistamines & Vitamins ---
    {sl: 586, name: "Inj. Histacin-V", comp_val: "Chlorpheniramine Maleate", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "General allergic conditions", co: "ACI", type: "c", str: "10mg/ml", mgkg: "1ml/25kg"},
    {sl: 587, name: "Inj. Vitade-V", comp_val: "Vit A + D3 + E", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Immunity and fertility boost", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 588, name: "Inj. Phosphorus-Aid", comp_val: "Phosphorus Solution", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Pica, Downer cow syndrome", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Misc Bolus & Tablets ---
    {sl: 589, name: "Bol. Bio-Gut", comp_val: "Probiotics + Enzymes", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Ruminal flora restoration", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 590, name: "Bol. Rumen-Vet", comp_val: "Herbal Rumenotorics", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Loss of appetite in cattle", co: "ACI", type: "c", str: "Combined", mgkg: "1-2 bolus"},
    {sl: 591, name: "Bol. Para-Vet Plus", comp_val: "Paracetamol + Diclofenac", pack: "Bolus", safe: "Unsafe", pet: "Unsafe", base: 1, unit: "bolus", ind: "Severe pain and fever", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 592, name: "Bol. Ace-Vet 500", comp_val: "Paracetamol", pack: "Bolus", safe: "Safe", pet: "Unsafe", base: 1, unit: "bolus", ind: "Mild fever and pain reduction", co: "Square", type: "c", str: "500mg", mgkg: "N/A"},
    {sl: 593, name: "Oint. Burn-Care", comp_val: "Silver Sulphadiazine", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Burn wounds dressing", co: "Square", type: "f", str: "1%", mgkg: "N/A"},
    {sl: 594, name: "Inj. Dexazone-S", comp_val: "Dexamethasone", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anti-inflammatory and stress relief", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 595, name: "Inj. Oxytocin-A", comp_val: "Oxytocin Synthetic", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 1, unit: "ml", ind: "Milk ejection stimulant", co: "ACI", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 596, name: "Inj. Lidocaine-Z", comp_val: "Lidocaine HCl 2%", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Local nerve block", co: "Generic", type: "c", str: "2%", mgkg: "N/A"},
    {sl: 597, name: "Bol. Digesta-V", comp_val: "Digestive Enzymes", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Appetite boost for calves", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 598, name: "Inj. Neuro-B Plus", comp_val: "Vit B1+B6+B12", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Treatment for nerve disorders", co: "Incepta", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 599, name: "Inj. Gentax-V", comp_val: "Gentamicin Sulphate", pack: "Vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.08, unit: "ml", ind: "Broad spectrum bacterial infections", co: "Acme", type: "c", str: "50mg/ml", mgkg: "4mg/kg"},
    {sl: 600, name: "Inj. Enrocin-Vet", comp_val: "Enrofloxacin 10%", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.05, unit: "ml", ind: "Digestive & Respiratory control", co: "Incepta", type: "c", str: "100mg/ml", mgkg: "5mg/kg"},



  
    
      
    // --- Fluoroquinolones (উন্নত অ্যান্টিবায়োটিক) ---
    {sl: 601, name: "Inj. Marbo-Vet", comp_val: "Marbofloxacin 100 mg/ml", pack: "10/30 ml vial", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "ml", ind: "Acute mastitis, Severe respiratory infections", co: "SK+F", type: "c", str: "100mg/ml", mgkg: "2mg/kg"},
    {sl: 602, name: "Inj. Marbores 10%", comp_val: "Marbofloxacin", pack: "20 ml vial", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "ml", ind: "Pneumonia, Gastroenteritis in calves", co: "ACI", type: "c", str: "100mg/ml", mgkg: "2mg/kg"},
    {sl: 603, name: "Inj. Danoflox-V", comp_val: "Danofloxacin Mesylate", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Bovine respiratory disease, Enteritis", co: "Generic", type: "c", str: "25mg/ml", mgkg: "1.25mg/kg"},
    {sl: 604, name: "Inj. DFN Vet", comp_val: "Danofloxacin 2.5%", pack: "10 ml", safe: "Unsafe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Severe respiratory & enteric infections", co: "SK+F", type: "c", str: "25mg/ml", mgkg: "1.25mg/kg"},

    // --- Oral Anthelmintics (তরল ও পাউডার কৃমিনাশক) ---
    {sl: 605, name: "Liq. Helmex Vet", comp_val: "Pyrantel Pamoate", pack: "60 ml bottle", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Roundworms, Hookworms, Pinworms", co: "Popular", type: "c", str: "50mg/ml", mgkg: "N/A"},
    {sl: 606, name: "Pulv. Piperazine", comp_val: "Piperazine Citrate 100%", pack: "100 gm sachet", safe: "Safe", pet: "Safe", base: 10, unit: "gm", ind: "Large roundworms in poultry & livestock", co: "Generic", type: "c", str: "WSP", mgkg: "N/A"},
    {sl: 607, name: "Liq. Levon-V", comp_val: "Levamisole Hydrochloride", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Gastrointestinal & Lungworms", co: "Renata", type: "c", str: "Tonic", mgkg: "7.5mg/kg"},
    {sl: 608, name: "Liq. Alzol Vet", comp_val: "Albendazole 2.5%", pack: "100 ml bottle", safe: "Unsafe", pet: "Safe", base: 1, unit: "ml", ind: "Liver fluke & roundworm oral suspension", co: "ACI", type: "c", str: "25mg/ml", mgkg: "7.5-10mg/kg"},

    // --- Vitamin & Mineral Tonic (পুষ্টি ও বর্ধক) ---
    {sl: 609, name: "Liq. Rena-Vit ADE", comp_val: "Vitamin A + D3 + E", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Growth boost, Immunity, Stress relief", co: "Renata", type: "c", str: "Combined", mgkg: "5-10 ml daily"},
    {sl: 610, name: "Liq. AD3E Gold", comp_val: "Vit A, D3, E Enriched", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Reproduction & skeletal maintenance", co: "Popular", type: "c", str: "Oral Soln", mgkg: "N/A"},
    {sl: 611, name: "Pulv. Rena-C", comp_val: "Ascorbic Acid (Vitamin C)", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Heat stroke, Anti-stress, Immunity", co: "Renata", type: "c", str: "100% WSP", mgkg: "1g/2L water"},
    {sl: 612, name: "Liq. Vit-E Plus Selenium", comp_val: "Vitamin E + Selenium", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Encephalomalacia, Muscular dystrophy", co: "Square", type: "c", str: "Combined", mgkg: "1ml/2L water"},

    // --- Digestive & Rumen Buffer (হজম ও পেট ফাঁপা) ---
    {sl: 613, name: "Powder Acid-Fix", comp_val: "Rumen Buffer Salts", pack: "100 gm", safe: "Safe", pet: "Safe", base: 2.5, unit: "gm", ind: "Prevention of ruminal acidosis", co: "Agro-Vet", type: "c", str: "Buffer", mgkg: "2.5gm/kg"},
    {sl: 614, name: "Bol. Rumicare", comp_val: "Herbal Rumenotorics", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Anorexia, Indigestion, Impaction", co: "Popular", type: "c", str: "Herbal", mgkg: "1-2 bolus"},
    {sl: 615, name: "Liq. Digex", comp_val: "Digestive Enzyme Soln", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Indigestion and calf scours", co: "Acme", type: "c", str: "Liquid", mgkg: "N/A"},

    // --- Liver Support & Hepatoprotective (লিভারের ওষুধ) ---
    {sl: 616, name: "Liq. Hepa-Clear", comp_val: "Herbal Liver Support", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Detoxification, Liver conditioning", co: "ACI", type: "c", str: "Herbal", mgkg: "N/A"},
    {sl: 617, name: "Liq. Hepatotonic", comp_val: "Methionine + Choline + Biotin", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic stimulant, Fatty liver", co: "Popular", type: "c", str: "Combined", mgkg: "20-50 ml"},
    {sl: 618, name: "Liq. Eliver Vet", comp_val: "Vit B12 + Methionine + Lysine", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Enhances hepatic functions", co: "Chemist", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Advanced Antibiotics (Injectables) ---
    {sl: 619, name: "Inj. Cefaprin", comp_val: "Ceftriaxone Sodium", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Acute respiratory & urinary infections", co: "Incepta", type: "c", str: "1g", mgkg: "10-20mg/kg"},
    {sl: 620, name: "Inj. Cefquinome-V", comp_val: "Cefquinome Sulfate", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Mastitis, MMA, Foot rot", co: "Popular", type: "c", str: "25mg/ml", mgkg: "1mg/kg"},

    // --- Hormones (প্রজনন ও অন্যান্য) ---
    {sl: 621, name: "Inj. Chorulon", comp_val: "hCG 1500 IU", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "vial", ind: "Infertility, Follicular cysts", co: "MSD", type: "c", str: "1500 IU", mgkg: "N/A"},
    {sl: 622, name: "Inj. Folligon", comp_val: "PMSG 1000 IU", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "vial", ind: "Superovulation, Estrus induction", co: "Intervet", type: "c", str: "1000 IU", mgkg: "N/A"},
    {sl: 623, name: "Inj. Estrumate", comp_val: "Cloprostenol Sodium", pack: "Vial", safe: "Unsafe", pet: "Unsafe", base: 1, unit: "ml", ind: "Luteolysis, Synchronization", co: "MSD", type: "c", str: "250mcg/ml", mgkg: "2ml/cow"},

    // --- Iron & Blood Boosters (রক্তবর্ধক) ---
    {sl: 624, name: "Inj. Iron-DS Vet", comp_val: "Iron Dextran + B12", pack: "10/50 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Iron deficiency anemia, Piglet recovery", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 625, name: "Inj. Hemovet-V", comp_val: "Iron + Vitamin B12 + Folic Acid", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Post-infection weakness booster", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Miscellaneous & Disinfectants ---
    {sl: 626, name: "Liq. TH4 Plus", comp_val: "Quat + Glutaraldehyde", pack: "1L bottle", safe: "Safe", pet: "Safe", inst: "2-4 ml/L water", ind: "Farm premise disinfectant", co: "Sodexo (Renata)", type: "f", str: "Liquid", mgkg: "N/A"},
    {sl: 627, name: "Spray Oxytetra", comp_val: "Oxytetracycline HCl", pack: "Aerosol", safe: "Safe", pet: "Safe", base: 1, unit: "spray", ind: "Foot rot, Topical wound care", co: "Generic", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 628, name: "Liq. Virocid", comp_val: "Combined Disinfectant", pack: "1L", safe: "Safe", pet: "Safe", inst: "Farm biosecurity", ind: "Antiviral & antibacterial spray", co: "Ceva", type: "f", str: "Liquid", mgkg: "N/A"},

    // --- Continuing with top market brands (629-650) ---
    {sl: 629, name: "Inj. Neuro-B Plus", comp_val: "Vit B1 + B6 + B12", pack: "Ampoule", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Nerve weakness, Paralysis", co: "Incepta", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 630, name: "Bol. Bio-Gut", comp_val: "Probiotics + Enzymes", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Ruminal pH balance", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 631, name: "Inj. Tolfenamic-V", comp_val: "Tolfenamic Acid", pack: "50 ml", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Inflammation control", co: "Square", type: "c", str: "40mg/ml", mgkg: "2mg/kg"},
    {sl: 632, name: "Inj. Dexazone-Z", comp_val: "Dexamethasone", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anaphylactic shock treatment", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 633, name: "Liq. Aminovet-Plus", comp_val: "Amino Acids + B-Vit", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Growth booster tonic", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 634, name: "Inj. Babcop-Vet", comp_val: "Diminazene Aceturate", pack: "20 ml", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Tick fever treatment", co: "Square", type: "c", str: "Combined", mgkg: "1ml/20kg"},
    {sl: 635, name: "Bol. Metro-A 2g", comp_val: "Metronidazole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Enteritis, Giardiasis", co: "Acme", type: "c", str: "2g", mgkg: "N/A"},
    {sl: 636, name: "Oint. Burn-Care", comp_val: "Silver Sulphadiazine", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Topical burn healing", co: "Square", type: "f", str: "1%", mgkg: "N/A"},
    {sl: 637, name: "Inj. Lidocaine HCl", comp_val: "Lidocaine 2%", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Local anesthesia", co: "Generic", type: "c", str: "2%", mgkg: "N/A"},
    {sl: 638, name: "Bol. Ace-Vet 500", comp_val: "Paracetamol", pack: "Bolus", safe: "Safe", pet: "Unsafe", base: 1, unit: "bolus", ind: "Fever and mild pain", co: "Square", type: "c", str: "500mg", mgkg: "N/A"},
    {sl: 639, name: "Inj. Mely-V", comp_val: "Meloxicam", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anti-inflammatory support", co: "Acme", type: "c", str: "Combined", mgkg: "0.5mg/kg"},
    {sl: 640, name: "Inj. Gentren-10", comp_val: "Gentamicin Sulphate", pack: "100 ml", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "Septicemia control", co: "Renata", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    {sl: 641, name: "Inj. Enrocin-Vet", comp_val: "Enrofloxacin", pack: "100 ml", safe: "Unsafe", pet: "Safe(Caution)", base: 0.05, unit: "ml", ind: "Pneumonia, Scours", co: "Incepta", type: "c", str: "100mg/ml", mgkg: "5mg/kg"},
    {sl: 642, name: "Pulv. Electromin", comp_val: "Electrolytes + Minerals", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Heat stress prevention", co: "Square", type: "c", str: "WSP", mgkg: "N/A"},
    {sl: 643, name: "Liq. Hepa-Sol", comp_val: "Sorbitol + Methionine", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Hepatic tonic", co: "Incepta", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 644, name: "Inj. Oxytocin-A", comp_val: "Oxytocin Synthetic", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 1, unit: "ml", ind: "Uterine stimulant", co: "ACI", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 645, name: "Inj. B1+B6+B12-Z", comp_val: "Neurotropic Vitamins", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Nerve tone booster", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 646, name: "Bol. Digesta-V", comp_val: "Digestive Enzymes", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Appetite booster", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 647, name: "Inj. Melofen-DS", comp_val: "Meloxicam + Paracetamol", pack: "100 ml", safe: "Safe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Severe fever & swelling", co: "Techno", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 648, name: "Oint. Nitrofur-V Plus", comp_val: "Nitrofurazone", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Bacterial surface wounds", co: "Popular", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 649, name: "Inj. Cal-Bor Plus", comp_val: "Calcium Borogluconate", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Milk fever emergency", co: "Techno", type: "c", str: "25%", mgkg: "N/A"},
    {sl: 650, name: "Liq. Liver-G Plus", comp_val: "Herbal liver protector", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Liver conditioning", co: "Gonoshasthaya", type: "c", str: "Herbal", mgkg: "N/A"},
    
    
    
    

    // --- Digestive & Rumen Buffer (পরিপাক ও রুমানোটোরিক) ---
    {sl: 651, name: "Pulv. Acid-Fix", comp_val: "Sodium Bicarbonate + Buffer Salts", pack: "100 gm sachet", safe: "Safe", pet: "Safe", base: 2.5, unit: "gm", ind: "Acute ruminal acidosis, Indigestion", co: "Agro-Vet", type: "c", str: "Buffer", mgkg: "2.5gm/kg"},
    {sl: 652, name: "Bol. Rumicid-Plus", comp_val: "Ammonium Bicarbonate + Nuxvomica + Ginger", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Digestive stimulant, Ruminal atony", co: "Renata", type: "c", str: "Combined", mgkg: "1-2 bolus/animal"},
    {sl: 653, name: "Bol. Digevet-DS", comp_val: "Digestive Enzymes + Probiotics", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Loss of appetite, Rumen dysfunction", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 654, name: "Pulv. Anorexon", comp_val: "Appetizer powder", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Restores appetite in large animals", co: "ACI", type: "c", str: "Herbal", mgkg: "N/A"},
    {sl: 655, name: "Bol. Bio-Zyme", comp_val: "Multienzyme + Yeast", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Improves digestion and feed intake", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Advanced Antibiotics (উন্নত অ্যান্টিবায়োটিক) ---
    {sl: 656, name: "Inj. Cefaprin 1g", comp_val: "Ceftriaxone Sodium", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Urogenital and respiratory tract infections", co: "Incepta", type: "c", str: "1g/vial", mgkg: "10-20mg/kg"},
    {sl: 657, name: "Inj. Cefquinome-V 2.5%", comp_val: "Cefquinome Sulfate", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Acute Mastitis, Foot rot, MMA syndrome", co: "Popular", type: "c", str: "25mg/ml", mgkg: "1mg/kg"},
    {sl: 658, name: "Inj. Cobactan", comp_val: "Cefquinome Sulfate", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Severe respiratory diseases in cattle", co: "MSD", type: "c", str: "25mg/ml", mgkg: "1mg/kg"},
    {sl: 659, name: "Inj. Marbores 10%", comp_val: "Marbofloxacin", pack: "20 ml vial", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "ml", ind: "Gastroenteritis, Pneumonia", co: "ACI", type: "c", str: "100mg/ml", mgkg: "2mg/kg"},
    {sl: 660, name: "Inj. Danoflox-V", comp_val: "Danofloxacin Mesylate", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Bovine respiratory disease (BRD)", co: "Generic", type: "c", str: "25mg/ml", mgkg: "1.25mg/kg"},

    // --- Antiprotozoal & Tick Fever (পরজীবী জ্বর নিরোধক) ---
    {sl: 661, name: "Inj. Babesin-Vet", comp_val: "Diminazene Aceturate", pack: "2.36g Sachet", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Babesiosis, Trypanosomiasis", co: "Square", type: "c", str: "Combined", mgkg: "3.5mg/kg"},
    {sl: 662, name: "Inj. Ectorid", comp_val: "Imidocarb Dipropionate", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Tick fever prevention, Anaplasmosis", co: "Renata", type: "c", str: "133.26mg/ml", mgkg: "1ml/31kg"},
    {sl: 663, name: "Inj. Butalex", comp_val: "Buparvaquone", pack: "20 ml vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Theileriosis (East Coast Fever)", co: "MSD", type: "c", str: "50mg/ml", mgkg: "1ml/20kg"},
    {sl: 664, name: "Inj. Babcop-Vet", comp_val: "Diminazene + Phenazone", pack: "20 ml vial", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Fever and Babesia control", co: "Square", type: "c", str: "Combined", mgkg: "1ml/20kg"},

    // --- Liver & Metabolism Stimulants (লিভার ও বিপাকীয় উদ্দীপক) ---
    {sl: 665, name: "Liq. Hepa-Clear", comp_val: "Herbal Liver Conditioner", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Liver conditioning, Detoxification", co: "ACI", type: "c", str: "Herbal", mgkg: "N/A"},
    {sl: 666, name: "Inj. Catophos", comp_val: "Butafosfan + Vitamin B12", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic disorders, Stress recovery", co: "Bayer (ACI)", type: "c", str: "Combined", mgkg: "1ml/10-20kg"},
    {sl: 667, name: "Liq. Restoliv", comp_val: "Choline + Carnitine + Methionine", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Fatty liver prevention, Tonic", co: "Opsonin", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 668, name: "Liq. Hepaguard Vet", comp_val: "Silymarin + Choline", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Protects liver from mycotoxins", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Minerals & Vitamins (খনিজ ও ভিটামিন) ---
    {sl: 669, name: "Inj. Cal-Bor Plus", comp_val: "Calcium Borogluconate 25%", pack: "500 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Acute milk fever emergency", co: "Techno", type: "c", str: "25%", mgkg: "N/A"},
    {sl: 670, name: "Soln. Zis-Vet", comp_val: "Zinc Methionine Hydroxy Analogue", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Skin health, Zinc deficiency", co: "Renata", type: "c", str: "85mg/ml", mgkg: "50-100ml"},
    {sl: 671, name: "Liq. Z-Complex", comp_val: "Zinc + B-Vitamins", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Immunity and growth enhancer", co: "ACI", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 672, name: "Inj. Neuro-B Plus", comp_val: "Vitamin B1 + B6 + B12", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Nerve inflammation, Weakness", co: "Incepta", type: "c", str: "Combined", mgkg: "N/A"},

    // --- NSAIDs & Steroids (ব্যথানাশক ও স্টেরয়েড) ---
    {sl: 673, name: "Inj. Melofen-DS", comp_val: "Meloxicam + Paracetamol", pack: "100 ml vial", safe: "Safe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Severe fever and body pain", co: "Techno", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 674, name: "Inj. Dexazone-S", comp_val: "Dexamethasone Sodium Phosphate", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Ketosis, Anti-inflammatory", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 675, name: "Inj. Mely-Z", comp_val: "Meloxicam", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "NSAID, Lameness control", co: "Square", type: "c", str: "Combined", mgkg: "0.5mg/kg"},
    {sl: 676, name: "Bol. Para-Vet Plus", comp_val: "Paracetamol + Diclofenac", pack: "Bolus", safe: "Unsafe", pet: "Unsafe", base: 1, unit: "bolus", ind: "High fever in cattle", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Antibiotics (Sulfa & Trimethoprim DS) ---
    {sl: 677, name: "Inj. Sulprim-Z 480", comp_val: "Sulfadiazine + Trimethoprim", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 0.05, unit: "ml", ind: "Severe systemic bacterial infection", co: "Renata", type: "c", str: "480mg/ml", mgkg: "15mg/kg"},
    {sl: 678, name: "Inj. Aditrim-DS", comp_val: "Sulfadiazine + Trimethoprim", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 0.05, unit: "ml", ind: "Acute respiratory pneumonia", co: "Acme", type: "c", str: "480mg/ml", mgkg: "15mg/kg"},
    {sl: 679, name: "Inj. Trimevet-DS", comp_val: "Sulfamethoxazole + Trimethoprim", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 0.05, unit: "ml", ind: "Systemic broad spectrum control", co: "Techno", type: "c", str: "480mg/ml", mgkg: "15mg/kg"},

    // --- Hormones & Antiseptics ---
    {sl: 680, name: "Inj. Oxytocin-A", comp_val: "Oxytocin Synthetic", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 1, unit: "ml", ind: "Milk ejection, Uterine stimulant", co: "ACI", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 681, name: "Inj. Receptal", comp_val: "Buserelin Acetate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Delayed ovulation treatment", co: "MSD", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 682, name: "Oint. Burn-Care", comp_val: "Silver Sulphadiazine", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Burn wounds dressing", co: "Square", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 683, name: "Liq. Povisep Vet", comp_val: "Povidone Iodine 10%", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Antiseptic for surgery/wounds", co: "JMI", type: "f", str: "10%", mgkg: "N/A"},

    // --- Anthelmintics (കൃমিনাশক) ---
    {sl: 684, name: "Bol. Almex-Vet", comp_val: "Albendazole 600 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Roundworms, Flukes therapy", co: "Renata", type: "c", str: "600mg", mgkg: "7.5mg/kg"},
    {sl: 685, name: "Inj. Vermic-10", comp_val: "Ivermectin 1%", pack: "Vial", safe: "Safe", pet: "Safe(Caution)", base: 0.02, unit: "ml", ind: "Tick, Lice and Mange control", co: "Renata", type: "c", str: "10mg/ml", mgkg: "1ml/50kg"},
    {sl: 686, name: "Bol. LT-Vet", comp_val: "Triclabendazole + Levamisole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Broad spectrum fascioliasis control", co: "Square", type: "c", str: "Combined", mgkg: "1bolus/75kg"},

    // --- Additional Items ---
    {sl: 687, name: "Inj. Gentren-10", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "Septicemia and scour control", co: "Renata", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    {sl: 688, name: "Inj. Enrocin-Vet", comp_val: "Enrofloxacin 10%", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.05, unit: "ml", ind: "Respiratory tract infections", co: "Incepta", type: "c", str: "100mg/ml", mgkg: "5mg/kg"},
    {sl: 689, name: "Pulv. Electromin", comp_val: "Electrolytes + Minerals", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Heat stress relief", co: "Square", type: "c", str: "WSP", mgkg: "N/A"},
    {sl: 690, name: "Bol. Metro-A 2g", comp_val: "Metronidazole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Dysentery control in large animals", co: "Acme", type: "c", str: "2g", mgkg: "N/A"},
    {sl: 691, name: "Inj. Dexon-S", comp_val: "Dexamethasone", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Shock and stress relief", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 692, name: "Bol. Rumivet-Z", comp_val: "Rumenotoric stimulant", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Indigestion and impaction", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 693, name: "Inj. Melovet-V", comp_val: "Meloxicam", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Acute anti-inflammatory support", co: "Acme", type: "c", str: "Combined", mgkg: "0.5mg/kg"},
    {sl: 694, name: "Liq. Amino-Acid Plus", comp_val: "Essential Amino Acids", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Growth booster, Tonic", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 695, name: "Inj. Avil Vet-Z", comp_val: "Pheniramine Maleate", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Allergic reaction relief", co: "Sanofi", type: "c", str: "22.7mg/ml", mgkg: "1ml/25kg"},
    {sl: 696, name: "Bol. Digesta-V", comp_val: "Digestive Salts", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Appetite booster for cattle", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 697, name: "Inj. Lidocaine 2%-Z", comp_val: "Lidocaine HCl", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Local nerve block", co: "Generic", type: "c", str: "2%", mgkg: "N/A"},
    {sl: 698, name: "Inj. B1+B6+B12-A", comp_val: "Neurotropic Vit", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Nerve tone booster", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 699, name: "Liq. Liver-G Plus", comp_val: "Herbal liver protector", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Liver conditioning", co: "Gonoshasthaya", type: "c", str: "Herbal", mgkg: "N/A"},
    {sl: 700, name: "Inj. Oxytocin-A", comp_val: "Oxytocin Synthetic", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 1, unit: "ml", ind: "Uterine stimulant", co: "ACI", type: "c", str: "Combined", mgkg: "N/A"},
    
       
  
          
                  
                          

    // --- Anthelmintics: Advanced Drenches (উন্নত কৃমিনাশক লিকুইড) ---
    {sl: 701, name: "Liq. LT-Vet", comp_val: "Triclabendazole + Levamisole", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Fascioliasis and mixed nematode infections", co: "Square", type: "c", str: "Combined", mgkg: "1ml/10kg"},
    {sl: 702, name: "Liq. Renadex", comp_val: "Triclabendazole + Levamisole", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Broad spectrum deworming for ruminants", co: "Renata", type: "c", str: "Combined", mgkg: "1ml/10kg"},
    {sl: 703, name: "Liq. Trilavet", comp_val: "Triclabendazole + Levamisole", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Combined action against flukes and worms", co: "Acme", type: "c", str: "Combined", mgkg: "1ml/10kg"},
    {sl: 704, name: "Liq. Alzol DS", comp_val: "Albendazole 12.5%", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 1, unit: "ml", ind: "High potency liver fluke & roundworm control", co: "ACI", type: "c", str: "125mg/ml", mgkg: "1ml/12.5kg"},

    // --- Ectoparasiticides: Pour-on & Wash (বহিঃপরজীবী নাশক) ---
    {sl: 705, name: "Soln. Cythion-Vet", comp_val: "Cypermethrin 10%", pack: "100 ml", safe: "Safe", pet: "Safe(Caution)", inst: "1 ml/Liter water", ind: "Ticks, Lice, Mites and Flies control", co: "Acme", type: "f", str: "10%", mgkg: "N/A"},
    {sl: 706, name: "Soln. Deltamethrin Vet", comp_val: "Deltamethrin 1.25%", pack: "100 ml", safe: "Safe", pet: "Safe(Caution)", inst: "2 ml/Liter water", ind: "External parasite wash", co: "Popular", type: "f", str: "1.25%", mgkg: "N/A"},
    {sl: 707, name: "Soln. Renegade", comp_val: "Deltamethrin", pack: "100 ml", safe: "Safe", pet: "Safe(Caution)", inst: "Spray or Wash", ind: "Effective against pyrethroid resistant ticks", co: "Renata", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 708, name: "Soln. A-Mectin Pour-on", comp_val: "Ivermectin Pour-on", pack: "100 ml", safe: "Safe", pet: "Safe", inst: "Apply on backline", ind: "Internal and external parasite control", co: "Acme", type: "f", str: "0.5%", mgkg: "1ml/10kg"},

    // --- Modern Antibiotics: Macrolides & Others (উন্নত অ্যান্টিবায়োটিক) ---
    {sl: 709, name: "Inj. Zuprevo", comp_val: "Tildipirosin", pack: "Vial", safe: "Safe", pet: "Unsafe", base: 0.04, unit: "ml", ind: "Bovine respiratory disease (Single dose)", co: "MSD", type: "c", str: "180mg/ml", mgkg: "4mg/kg"},
    {sl: 710, name: "Inj. Draxin", comp_val: "Tulathromycin", pack: "50 ml", safe: "Safe", pet: "Safe", base: 0.025, unit: "ml", ind: "Treatment of BRD and Foot rot", co: "Zoetis", type: "c", str: "100mg/ml", mgkg: "2.5mg/kg"},
    {sl: 711, name: "Inj. Gamithromycin-V", comp_val: "Gamithromycin", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Advanced macrolide for pneumonia", co: "Generic", type: "c", str: "150mg/ml", mgkg: "6mg/kg"},

    // --- Mastitis Special: Intramammary Infusions (ওলান পাকা রোগের টিউব) ---
    {sl: 712, name: "Tube. Mastijet Forte", comp_val: "Tetracycline + Neomycin + Bacitracin + Prednisolone", pack: "8 gm tube", safe: "Safe", pet: "N/A", inst: "1 tube per quarter", ind: "Acute and chronic mastitis", co: "MSD", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 713, name: "Tube. Curamast", comp_val: "Cefuroxime", pack: "Tube", safe: "Safe", pet: "N/A", inst: "Intramammary use", ind: "Bovine mastitis treatment", co: "Renata", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 714, name: "Tube. Cobactan LC", comp_val: "Cefquinome Sulfate", pack: "8 gm tube", safe: "Safe", pet: "N/A", inst: "1 tube/12 hours", ind: "Lactating cow mastitis", co: "Intervet", type: "f", str: "75mg", mgkg: "N/A"},

    // --- Antiprotozoal (Advanced) ---
    {sl: 715, name: "Inj. Trypamidium", comp_val: "Isometamidium Chloride", pack: "1 gm", safe: "Safe", pet: "Unsafe", base: 1, unit: "vial", ind: "Trypanosomiasis prophylactic treatment", co: "Merial", type: "c", str: "1g/vial", mgkg: "1mg/kg"},
    {sl: 716, name: "Inj. Buparvet-Z Plus", comp_val: "Buparvaquone + Vitamin", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Theileriosis with recovery support", co: "Popular", type: "c", str: "50mg/ml", mgkg: "1ml/20kg"},

    // --- Liver and Metabolic Stimulants ---
    {sl: 717, name: "Liq. Liver-On", comp_val: "Vitamin B-Complex + Amino Acids", pack: "1L Bottle", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Improve appetite and liver function", co: "Advent", type: "c", str: "Tonic", mgkg: "5-10 ml daily"},
    {sl: 718, name: "Inj. Butasyl-V", comp_val: "Butafosfan + B12", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic boost during stress", co: "Ceva", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 719, name: "Liq. Hepa-Protec", comp_val: "Silymarin + L-Carnitine", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Liver regeneration stimulant", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Hormones & Reproductive Support ---
    {sl: 720, name: "Inj. Gestagen", comp_val: "Hydroxyprogesterone Caproate", pack: "3 ml ampoule", safe: "Safe", pet: "Safe", base: 1, unit: "vial", ind: "Prevention of threatened abortion", co: "Renata", type: "c", str: "250mg/ml", mgkg: "N/A"},
    {sl: 721, name: "Inj. Pragma", comp_val: "Cloprostenol", pack: "2 ml vial", safe: "Unsafe", pet: "Unsafe", base: 1, unit: "ml", ind: "Estrus induction and synchronization", co: "Acme", type: "c", str: "250mcg/ml", mgkg: "2ml/cow"},
    {sl: 722, name: "Inj. GnRH-Vet", comp_val: "Gonadorelin", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Cystic ovaries and infertility", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},

    // --- NSAIDs & Pain Relief (ব্যথানাশক) ---
    {sl: 723, name: "Inj. Melovet-Plus", comp_val: "Meloxicam + Paracetamol", pack: "100 ml", safe: "Safe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Severe pain and fever in livestock", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 724, name: "Inj. Ketovet-Z", comp_val: "Ketoprofen", pack: "50 ml", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "NSAID for chronic inflammation", co: "Incepta", type: "c", str: "100mg/ml", mgkg: "3mg/kg"},
    {sl: 725, name: "Inj. Diclo-Z", comp_val: "Diclofenac Sodium", pack: "30 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Acute pain and swelling", co: "Generic", type: "c", str: "25mg/ml", mgkg: "1mg/kg"},

    // --- Calcium & Vitamin Supplements ---
    {sl: 726, name: "Inj. Cal-D-Mag Plus", comp_val: "Calcium + Mag + Phos + D3", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Milk fever emergency infusion", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 727, name: "Inj. B-Com Gold", comp_val: "Vitamin B-Complex Enriched", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Anorexia and metabolic weakness", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 728, name: "Liq. ADE-V", comp_val: "Vitamin A + D3 + E", pack: "500 ml bottle", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Oral vitamin supplement for production", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Anthelmintics: Bolus (কৃমিনাশক বোলাস) ---
    {sl: 729, name: "Bol. Albendol DS", comp_val: "Albendazole 600 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Effective against roundworms and flukes", co: "ACI", type: "c", str: "600mg", mgkg: "7.5mg/kg"},
    {sl: 730, name: "Bol. Fenvet 1.5g", comp_val: "Fenbendazole 1500 mg", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Broad spectrum oral anthelmintic", co: "Techno", type: "c", str: "1.5g", mgkg: "5-7.5mg/kg"},
    {sl: 731, name: "Bol. Ivermectin-Z", comp_val: "Ivermectin 100 mg", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Oral internal parasite control", co: "Generic", type: "c", str: "100mg", mgkg: "N/A"},

    // --- Rumenotorics & Digestives ---
    {sl: 732, name: "Bol. Bio-Yeast Plus", comp_val: "Live Yeast + B-Complex", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Digestive stimulant for ruminants", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 733, name: "Bol. Digevet-V", comp_val: "Enzymes + Rumen salts", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Corrects indigestion and impaction", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 734, name: "Pulv. Anorexon-V", comp_val: "Herbal appetizer powder", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Loss of appetite treatment", co: "ACI", type: "c", str: "Herbal", mgkg: "N/A"},

    // --- Antiseptics & Misc ---
    {sl: 735, name: "Liq. Povisep-V", comp_val: "Povidone Iodine 10%", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Antiseptic for surgery and wounds", co: "JMI", type: "f", str: "10%", mgkg: "N/A"},
    {sl: 736, name: "Spray Iodo-Z", comp_val: "Povidone Iodine Spray", pack: "Aerosol", safe: "Safe", pet: "Safe", base: 1, unit: "spray", ind: "Antiseptic topical spray", co: "Popular", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 737, name: "Oint. Zinc-V", comp_val: "Zinc Oxide Ointment", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Protective ointment for skin lesions", co: "Square", type: "f", str: "Combined", mgkg: "N/A"},

    // --- Advanced Antibiotics (Injectables) ---
    {sl: 738, name: "Inj. Gentren-10", comp_val: "Gentamicin Sulphate", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.04, unit: "ml", ind: "Broad spectrum bacterial infection control", co: "Renata", type: "c", str: "100mg/ml", mgkg: "4mg/kg"},
    {sl: 739, name: "Inj. Enrocin-V", comp_val: "Enrofloxacin 10%", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.05, unit: "ml", ind: "Respiratory and GI tract infections", co: "Incepta", type: "c", str: "100mg/ml", mgkg: "5mg/kg"},
    {sl: 740, name: "Inj. Ceftio-Z 1g", comp_val: "Ceftiofur Sodium", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Acute respiratory disease, Foot rot", co: "Popular", type: "c", str: "50mg/ml", mgkg: "1.1-2.2mg/kg"},

    // --- Vitamins & Tonics ---
    {sl: 741, name: "Inj. Neuro-B-V", comp_val: "Neurotropic Vitamins", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Treatment for nerve disorders and paralysis", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 742, name: "Inj. Cal-Bor-Z", comp_val: "Calcium Borogluconate 25%", pack: "500 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Acute milk fever emergency treatment", co: "Techno", type: "c", str: "25%", mgkg: "N/A"},
    {sl: 743, name: "Liq. Aminovet-Plus-Z", comp_val: "Amino Acids + B-Complex", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "General tonic and growth promoter", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Digestive & Laxative ---
    {sl: 744, name: "Bol. Lax-Vet Plus", comp_val: "Laxative Salts + Enzymes", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Constipation and impaction relief", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 745, name: "Liq. Paraffin-Z", comp_val: "Liquid Paraffin", pack: "500 ml bottle", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Medicinal laxative for ruminants", co: "Generic", type: "c", str: "100%", mgkg: "N/A"},
    {sl: 746, name: "Inj. Atropen-V", comp_val: "Atropine Sulphate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Antidote for organophosphate poisoning", co: "Popular", type: "c", str: "Combined", mgkg: "0.04mg/kg"},

    // --- External Applications ---
    {sl: 747, name: "Oint. Nitrofur-Z Plus", comp_val: "Nitrofurazone", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Infected surface wounds dressing", co: "Popular", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 748, name: "Inj. Dexasone-V", comp_val: "Dexamethasone", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anti-inflammatory and shock relief", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 749, name: "Bol. Digesta-V Plus", comp_val: "Digestive Enzymes + Ginger", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Appetite booster for calves", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 750, name: "Inj. Oxytocin-S Plus", comp_val: "Oxytocin Synthetic", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 1, unit: "ml", ind: "Milk letdown stimulant", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    
    
    
    // --- Advanced Antibiotics: Cephalosporins (উন্নত অ্যান্টিবায়োটিক) ---
    {sl: 751, name: "Inj. Cefaprin 1g", comp_val: "Ceftriaxone Sodium", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Severe respiratory & urogenital infections", co: "Incepta", type: "c", str: "1g/vial", mgkg: "10-20mg/kg"},
    {sl: 752, name: "Inj. Cefquinome-V 2.5%", comp_val: "Cefquinome Sulfate", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Acute Mastitis, Foot rot, MMA syndrome", co: "Popular", type: "c", str: "25mg/ml", mgkg: "1mg/kg"},
    {sl: 753, name: "Inj. Cobactan", comp_val: "Cefquinome Sulfate", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Severe respiratory diseases in cattle", co: "MSD", type: "c", str: "25mg/ml", mgkg: "1mg/kg"},
    {sl: 754, name: "Inj. Marbores 10%", comp_val: "Marbofloxacin", pack: "20 ml vial", safe: "Unsafe", pet: "Safe", base: 0.02, unit: "ml", ind: "Gastroenteritis, Pneumonia", co: "ACI", type: "c", str: "100mg/ml", mgkg: "2mg/kg"},
    {sl: 755, name: "Inj. Danoflox-V", comp_val: "Danofloxacin Mesylate", pack: "10 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Bovine respiratory disease (BRD)", co: "Generic", type: "c", str: "25mg/ml", mgkg: "1.25mg/kg"},

    // --- Antiprotozoal & Tick Fever (পরজীবী জ্বর নিরোধক) ---
    {sl: 756, name: "Inj. Babesin-Vet", comp_val: "Diminazene Aceturate", pack: "2.36g Sachet", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Babesiosis, Trypanosomiasis", co: "Square", type: "c", str: "Combined", mgkg: "3.5mg/kg"},
    {sl: 757, name: "Inj. Ectorid", comp_val: "Imidocarb Dipropionate", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Tick fever prevention, Anaplasmosis", co: "Renata", type: "c", str: "133.26mg/ml", mgkg: "1ml/31kg"},
    {sl: 758, name: "Inj. Butalex", comp_val: "Buparvaquone", pack: "20 ml vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Theileriosis (East Coast Fever)", co: "MSD", type: "c", str: "50mg/ml", mgkg: "1ml/20kg"},
    {sl: 759, name: "Inj. Babcop-Vet", comp_val: "Diminazene + Phenazone", pack: "20 ml vial", safe: "Safe", pet: "Unsafe", base: 0.05, unit: "ml", ind: "Fever and Babesia control", co: "Square", type: "c", str: "Combined", mgkg: "1ml/20kg"},

    // --- Liver & Metabolism Stimulants (লিভার ও বিপাকীয় উদ্দীপক) ---
    {sl: 760, name: "Liq. Hepa-Clear", comp_val: "Herbal Liver Conditioner", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Liver conditioning, Detoxification", co: "ACI", type: "c", str: "Herbal", mgkg: "N/A"},
    {sl: 761, name: "Inj. Catophos", comp_val: "Butafosfan + Vitamin B12", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic disorders, Stress recovery", co: "Bayer (ACI)", type: "c", str: "Combined", mgkg: "1ml/10-20kg"},
    {sl: 762, name: "Liq. Restoliv", comp_val: "Choline + Carnitine + Methionine", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Fatty liver prevention, Tonic", co: "Opsonin", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 763, name: "Liq. Hepaguard Vet", comp_val: "Silymarin + Choline", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Protects liver from mycotoxins", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Digestive Support (পরিপাক ও রুমানোটোরিক) ---
    {sl: 764, name: "Pulv. Acid-Fix", comp_val: "Sodium Bicarbonate + Buffer Salts", pack: "100 gm sachet", safe: "Safe", pet: "Safe", base: 2.5, unit: "gm", ind: "Acute ruminal acidosis, Indigestion", co: "Agro-Vet", type: "c", str: "Buffer", mgkg: "2.5gm/kg"},
    {sl: 765, name: "Bol. Rumicid-Plus", comp_val: "Ammonium Bicarbonate + Nuxvomica + Ginger", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Digestive stimulant, Ruminal atony", co: "Renata", type: "c", str: "Combined", mgkg: "1-2 bolus/animal"},
    {sl: 766, name: "Bol. Digevet-DS", comp_val: "Digestive Enzymes + Probiotics", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Loss of appetite, Rumen dysfunction", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 767, name: "Pulv. Anorexon", comp_val: "Appetizer powder", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Restores appetite in large animals", co: "ACI", type: "c", str: "Herbal", mgkg: "N/A"},
    {sl: 768, name: "Bol. Bio-Zyme", comp_val: "Multienzyme + Yeast", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Improves digestion and feed intake", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Anthelmintics: Advanced Drenches (উন্নত কৃমিনাশক লিকুইড) ---
    {sl: 769, name: "Liq. LT-Vet", comp_val: "Triclabendazole + Levamisole", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Fascioliasis and mixed nematode infections", co: "Square", type: "c", str: "Combined", mgkg: "1ml/10kg"},
    {sl: 770, name: "Liq. Renadex", comp_val: "Triclabendazole + Levamisole", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Broad spectrum deworming for ruminants", co: "Renata", type: "c", str: "Combined", mgkg: "1ml/10kg"},
    {sl: 771, name: "Liq. Trilavet", comp_val: "Triclabendazole + Levamisole", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Combined action against flukes and worms", co: "Acme", type: "c", str: "Combined", mgkg: "1ml/10kg"},
    {sl: 772, name: "Liq. Alzol DS", comp_val: "Albendazole 12.5%", pack: "100 ml", safe: "Unsafe", pet: "Safe", base: 1, unit: "ml", ind: "High potency liver fluke & roundworm control", co: "ACI", type: "c", str: "125mg/ml", mgkg: "1ml/12.5kg"},

    // --- Ectoparasiticides: Pour-on & Wash (বহিঃপরজীবী নাশক) ---
    {sl: 773, name: "Soln. Cythion-Vet", comp_val: "Cypermethrin 10%", pack: "100 ml", safe: "Safe", pet: "Safe(Caution)", inst: "1 ml/Liter water", ind: "Ticks, Lice, Mites and Flies control", co: "Acme", type: "f", str: "10%", mgkg: "N/A"},
    {sl: 774, name: "Soln. Deltamethrin Vet", comp_val: "Deltamethrin 1.25%", pack: "100 ml", safe: "Safe", pet: "Safe(Caution)", inst: "2 ml/Liter water", ind: "External parasite wash", co: "Popular", type: "f", str: "1.25%", mgkg: "N/A"},
    {sl: 775, name: "Soln. Renegade", comp_val: "Deltamethrin", pack: "100 ml", safe: "Safe", pet: "Safe(Caution)", inst: "Spray or Wash", ind: "Effective against pyrethroid resistant ticks", co: "Renata", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 776, name: "Soln. A-Mectin Pour-on", comp_val: "Ivermectin Pour-on", pack: "100 ml", safe: "Safe", pet: "Safe", inst: "Apply on backline", ind: "Internal and external parasite control", co: "Acme", type: "f", str: "0.5%", mgkg: "1ml/10kg"},

    // --- Antiprotozoal (Advanced) ---
    {sl: 777, name: "Inj. Trypamidium", comp_val: "Isometamidium Chloride", pack: "1 gm", safe: "Safe", pet: "Unsafe", base: 1, unit: "vial", ind: "Trypanosomiasis prophylactic treatment", co: "Merial", type: "c", str: "1g/vial", mgkg: "1mg/kg"},
    {sl: 778, name: "Inj. Buparvet-Z Plus", comp_val: "Buparvaquone + Vitamin", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Theileriosis with recovery support", co: "Popular", type: "c", str: "50mg/ml", mgkg: "1ml/20kg"},

    // --- Liver and Metabolic Stimulants ---
    {sl: 779, name: "Liq. Liver-On", comp_val: "Vitamin B-Complex + Amino Acids", pack: "1L Bottle", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Improve appetite and liver function", co: "Advent", type: "c", str: "Tonic", mgkg: "5-10 ml daily"},
    {sl: 780, name: "Inj. Butasyl-V", comp_val: "Butafosfan + B12", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic boost during stress", co: "Ceva", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 781, name: "Liq. Hepa-Protec", comp_val: "Silymarin + L-Carnitine", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Liver regeneration stimulant", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Hormones & Reproductive Support ---
    {sl: 782, name: "Inj. Gestagen", comp_val: "Hydroxyprogesterone Caproate", pack: "3 ml ampoule", safe: "Safe", pet: "Safe", base: 1, unit: "vial", ind: "Prevention of threatened abortion", co: "Renata", type: "c", str: "250mg/ml", mgkg: "N/A"},
    {sl: 783, name: "Inj. Pragma", comp_val: "Cloprostenol", pack: "2 ml vial", safe: "Unsafe", pet: "Unsafe", base: 1, unit: "ml", ind: "Estrus induction and synchronization", co: "Acme", type: "c", str: "250mcg/ml", mgkg: "2ml/cow"},
    {sl: 784, name: "Inj. GnRH-Vet", comp_val: "Gonadorelin", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Cystic ovaries and infertility", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},

    // --- NSAIDs & Pain Relief (ব্যথানাশক) ---
    {sl: 785, name: "Inj. Melovet-Plus", comp_val: "Meloxicam + Paracetamol", pack: "100 ml", safe: "Safe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Severe pain and fever in livestock", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 786, name: "Inj. Ketovet-Z", comp_val: "Ketoprofen", pack: "50 ml", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "NSAID for chronic inflammation", co: "Incepta", type: "c", str: "100mg/ml", mgkg: "3mg/kg"},
    {sl: 787, name: "Inj. Diclo-Z", comp_val: "Diclofenac Sodium", pack: "30 ml vial", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Acute pain and swelling", co: "Generic", type: "c", str: "25mg/ml", mgkg: "1mg/kg"},

    // --- Calcium & Vitamin Supplements ---
    {sl: 788, name: "Inj. Cal-D-Mag Plus", comp_val: "Calcium + Mag + Phos + D3", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Milk fever emergency infusion", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 789, name: "Inj. B-Com Gold", comp_val: "Vitamin B-Complex Enriched", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Anorexia and metabolic weakness", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 790, name: "Liq. ADE-V", comp_val: "Vitamin A + D3 + E", pack: "500 ml bottle", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Oral vitamin supplement for production", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Anthelmintics: Bolus (কৃমিনাশক বোলাস) ---
    {sl: 791, name: "Bol. Albendol DS", comp_val: "Albendazole 600 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Effective against roundworms and flukes", co: "ACI", type: "c", str: "600mg", mgkg: "7.5mg/kg"},
    {sl: 792, name: "Bol. Fenvet 1.5g", comp_val: "Fenbendazole 1500 mg", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Broad spectrum oral anthelmintic", co: "Techno", type: "c", str: "1.5g", mgkg: "5-7.5mg/kg"},
    {sl: 793, name: "Bol. Ivermectin-Z", comp_val: "Ivermectin 100 mg", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Oral internal parasite control", co: "Generic", type: "c", str: "100mg", mgkg: "N/A"},

    // --- Rumenotorics & Digestives ---
    {sl: 794, name: "Bol. Bio-Yeast Plus", comp_val: "Live Yeast + B-Complex", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Digestive stimulant for ruminants", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 795, name: "Bol. Digevet-V", comp_val: "Enzymes + Rumen salts", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Corrects indigestion and impaction", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 796, name: "Pulv. Anorexon-V", comp_val: "Herbal appetizer powder", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Loss of appetite treatment", co: "ACI", type: "c", str: "Herbal", mgkg: "N/A"},

    // --- Antiseptics & Misc ---
    {sl: 797, name: "Liq. Povisep-V", comp_val: "Povidone Iodine 10%", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Antiseptic for surgery and wounds", co: "JMI", type: "f", str: "10%", mgkg: "N/A"},
    {sl: 798, name: "Spray Iodo-Z", comp_val: "Povidone Iodine Spray", pack: "Aerosol", safe: "Safe", pet: "Safe", base: 1, unit: "spray", ind: "Antiseptic topical spray", co: "Popular", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 799, name: "Oint. Zinc-V", comp_val: "Zinc Oxide Ointment", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Protective ointment for skin lesions", co: "Square", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 800, name: "Inj. Gentax-V", comp_val: "Gentamicin Sulphate", pack: "Vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.08, unit: "ml", ind: "Broad spectrum bacterial infections", co: "Acme", type: "c", str: "50mg/ml", mgkg: "4mg/kg"},


                
    

    // --- Antiprotozoal: Diminazene & Imidocarb (পরজীবী নাশক) ---
    {sl: 801, name: "Inj. Renazene-Vet", comp_val: "Diminazene Aceturate 1.05g + Phenazone", pack: "2.36g Sachet", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Babesiosis, Trypanosomiasis in cattle", co: "Renata", type: "c", str: "Combined", mgkg: "3.5mg/kg"},
    {sl: 802, name: "Inj. Trypazene Vet", comp_val: "Diminazene Aceturate", pack: "2.36g Sachet", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Protozoal infections with high fever", co: "Popular", type: "c", str: "Combined", mgkg: "3.5mg/kg"},
    {sl: 803, name: "Inj. Babecure", comp_val: "Imidocarb Dipropionate 120 mg/ml", pack: "2 ml ampoule", safe: "Safe", pet: "Safe", base: 0.025, unit: "ml", ind: "Severe Babesiosis treatment", co: "Acme", type: "c", str: "120mg/ml", mgkg: "1ml/40kg"},
    {sl: 804, name: "Inj. Imidocarb-Vet", comp_val: "Imidocarb Dipropionate", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Tick fever and Anaplasmosis", co: "Popular", type: "c", str: "133mg/ml", mgkg: "1ml/31kg"},

    // --- Vitamin ADE & B-Complex (ভিটামিন ও শক্তি বর্ধক) ---
    {sl: 805, name: "Inj. Hyvit ADE-Vet", comp_val: "Vitamin A + D3 + E", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic boost, Stress and Night blindness", co: "Popular", type: "c", str: "Combined", mgkg: "5-12ml (Large)"},
    {sl: 806, name: "Inj. Es-ADE", comp_val: "Vitamin A + D3 + E", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Immunity and skeletal development", co: "SK+F", type: "c", str: "Combined", mgkg: "5-10ml (Cattle)"},
    {sl: 807, name: "Inj. Thiamin-Vet", comp_val: "Vitamin B1 (Thiamine HCl) 100mg/ml", pack: "10/100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Polioencephalomalacia, Anorexia", co: "Acme", type: "c", str: "100mg/ml", mgkg: "1ml/10-20kg"},
    {sl: 808, name: "Inj. Becovet", comp_val: "Vitamin B-Complex (B1, B2, B6, Nicotinamide)", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic tonic, Appetite stimulant", co: "Popular", type: "c", str: "Combined", mgkg: "5-10ml (Large)"},

    // --- Liver Support & Amino Acids (লিভার ও এমিনো এসিড) ---
    {sl: 809, name: "Liq. Hepatonic Liq.", comp_val: "Methionine + Choline + Biotin", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Liver regeneration and detoxification", co: "Popular", type: "c", str: "Combined", mgkg: "20-50ml (Cattle)"},
    {sl: 810, name: "Liq. Superliv", comp_val: "Herbal Liver Tonic", pack: "500 ml bottle", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Natural hepatic protection", co: "Ayurvet (ACI)", type: "c", str: "Herbal", mgkg: "N/A"},
    {sl: 811, name: "Liq. Amino-V", comp_val: "Essential Amino Acids + Vitamins", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Protein supplement for growth", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 812, name: "Liq. Aminovet-Plus", comp_val: "Amino Acids + Vit B-Complex", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Recovery from illness, Tonic", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Digestive & Rumenotorics (হজম ও জাবর কাটা) ---
    {sl: 813, name: "Bol. Rumicid-Plus", comp_val: "Ammonium Bicarbonate + Nuxvomica", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Corrects ruminal stasis and indigestion", co: "Renata", type: "c", str: "Combined", mgkg: "1-2 bolus"},
    {sl: 814, name: "Bol. Digevet-DS", comp_val: "Enzymes + Probiotics", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Digestive dysfunction in large animals", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 815, name: "Pulv. Zyme-Vet WSP", comp_val: "Multienzyme complex", pack: "100 gm sachet", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Improves feed conversion ratio", co: "Popular", type: "c", str: "WSP", mgkg: "N/A"},

    // --- Minerals & Electrolytes (খনিজ ও ইলেকট্রোলাইট) ---
    {sl: 816, name: "Inj. Phosphorus-Vet", comp_val: "Sodium Acid Phosphate", pack: "30/100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Pica, Infertility, Post-parturient hemoglobinuria", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 817, name: "Bol. Calvet-DB", comp_val: "Calcium + Phos + D3 + B12", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Mineral deficiency, Bone health", co: "ACI", type: "c", str: "Combined", mgkg: "1 bolus daily"},
    {sl: 818, name: "Gel. Cal-Boost", comp_val: "Calcium 43.5g + Magnesium 2.5g", pack: "300 ml bottle", safe: "Safe", pet: "Safe", base: 1, unit: "bottle", ind: "Instant oral calcium after delivery", co: "Renata", type: "c", str: "Combined", mgkg: "1 bottle"},

    // --- Pain & Allergy (ব্যথা ও এলার্জি) ---
    {sl: 819, name: "Inj. Phenavet", comp_val: "Chlorpheniramine Maleate", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Allergic conditions, Insect bites", co: "Techno", type: "c", str: "10mg/ml", mgkg: "1ml/25kg"},
    {sl: 820, name: "Inj. Melovet-Plus", comp_val: "Meloxicam + Paracetamol", pack: "100 ml", safe: "Safe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Severe pain and body fever", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 821, name: "Inj. Ketovet", comp_val: "Ketoprofen 100 mg/ml", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "NSAID for chronic pain management", co: "Techno", type: "c", str: "100mg/ml", mgkg: "3mg/kg"},

    // --- Antiseptics & External (বাহ্যিক ব্যবহার) ---
    {sl: 822, name: "Oint. Burn-Free", comp_val: "Silver Sulphadiazine", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Wound and burn topical treatment", co: "Popular", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 823, name: "Spray Iodo-Z", comp_val: "Povidone Iodine Spray", pack: "Aerosol", safe: "Safe", pet: "Safe", base: 1, unit: "spray", ind: "Surface antiseptic for cattle", co: "Popular", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 824, name: "Soln. Deltamethrin Vet", comp_val: "Deltamethrin 1.25%", pack: "100 ml", safe: "Safe", pet: "Safe(Caution)", inst: "2 ml/Liter water", ind: "External parasite wash", co: "Popular", type: "f", str: "1.25%", mgkg: "N/A"},

    // --- Antibiotics & Others (অ্যান্টিবায়োটিক ও অন্যান্য) ---
    {sl: 825, name: "Inj. Ceftio-Z", comp_val: "Ceftiofur Sodium 1g", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Acute respiratory disease, Foot rot", co: "Popular", type: "c", str: "50mg/ml", mgkg: "1.1-2.2mg/kg"},
    {sl: 826, name: "Inj. Atropen-V", comp_val: "Atropine Sulphate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Antidote for poisoning", co: "Popular", type: "c", str: "Combined", mgkg: "0.04mg/kg"},
    {sl: 827, name: "Bol. Metro-Vet Plus", comp_val: "Metronidazole + Furazolidone", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Mixed intestinal infection control", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 828, name: "Liq. Eliver vet", comp_val: "Vit B12 + Methionine + Choline", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Liver conditioning, Metabolic disorders", co: "Chemist", type: "c", str: "Combined", mgkg: "20-40ml"},

    // --- Homeopathic/Herbal (হোমিও ও হারবাল) ---
    {sl: 829, name: "Liq. Thuja occi 200", comp_val: "Thuja Occidentalis 200", pack: "Bottle", safe: "Safe", pet: "Safe", base: 1, unit: "drop", ind: "Warts/Papilloma treatment", co: "Homeo", type: "f", str: "200 CH", mgkg: "10 drops"},
    {sl: 830, name: "Liq. Croton tig 200", comp_val: "Croton Tiglium 200", pack: "Bottle", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Skin irritation and eczema", co: "Homeo", type: "f", str: "200 CH", mgkg: "1ml"},
    {sl: 831, name: "Ficus religiosa leaf", comp_val: "Ficus Leaf Extract", pack: "Natural", safe: "Safe", pet: "Safe", base: 1, unit: "piece", ind: "Traditional aid for Babesiosis", co: "Natural", type: "f", str: "Leaf", mgkg: "Daily"},
    {sl: 832, name: "Liq. Abies Canadensis", comp_val: "Abies Canadensis", pack: "Bottle", safe: "Safe", pet: "Safe", base: 2, unit: "tsp", ind: "Indigestion and gastric relief", co: "Homeo", type: "f", str: "Combined", mgkg: "2-4 tsp"},

    // --- Additional Market Items (৮৩৩ - ৮৫০) ---
    {sl: 833, name: "Inj. Oxytocin-A", comp_val: "Oxytocin Synthetic", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 1, unit: "ml", ind: "Milk ejection stimulant", co: "ACI", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 834, name: "Bol. Digesta-V Plus", comp_val: "Digestive Enzymes + Ginger", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Corrects loss of appetite in cattle", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 835, name: "Inj. Dexazone-S", comp_val: "Dexamethasone", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Shock, Acute inflammation relief", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 836, name: "Oint. Zinc-V", comp_val: "Zinc Oxide", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Protective ointment for skin", co: "Square", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 837, name: "Liq. Aminovet-Plus-Z", comp_val: "Amino Acids + B-Complex", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "General tonic and growth promoter", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 838, name: "Inj. Lidocaine 2%-Z", comp_val: "Lidocaine HCl", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Local nerve block anesthesia", co: "Generic", type: "c", str: "2%", mgkg: "N/A"},
    {sl: 839, name: "Bol. Lax-Vet Plus", comp_val: "Laxative Salts + Enzymes", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Constipation and impaction relief", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 840, name: "Inj. Gentax-V", comp_val: "Gentamicin Sulphate", pack: "Vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.08, unit: "ml", ind: "Broad spectrum bacterial infections", co: "Acme", type: "c", str: "50mg/ml", mgkg: "4mg/kg"},
    {sl: 841, name: "Inj. Melofen-DS", comp_val: "Meloxicam + Paracetamol", pack: "100 ml vial", safe: "Safe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Severe fever and body pain", co: "Techno", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 842, name: "Inj. Cal-Bor Plus", comp_val: "Calcium Borogluconate 25%", pack: "500 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Acute milk fever treatment", co: "Techno", type: "c", str: "25%", mgkg: "N/A"},
    {sl: 843, name: "Liq. Liver-G Plus", comp_val: "Herbal liver protector", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Liver conditioning naturally", co: "Gonoshasthaya", type: "c", str: "Herbal", mgkg: "N/A"},
    {sl: 844, name: "Bol. Rumivet-Z", comp_val: "Rumenotoric stimulant", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Indigestion and ruminal stasis", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 845, name: "Inj. Neuro-B-V", comp_val: "Neurotropic Vitamins", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Nerve disorder treatment", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 846, name: "Inj. Frusemide-10", comp_val: "Furosemide", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Post-calving udder edema", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 847, name: "Liq. Povisep Vet", comp_val: "Povidone Iodine 10%", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Antiseptic for surgery & wounds", co: "JMI", type: "f", str: "10%", mgkg: "N/A"},
    {sl: 848, name: "Inj. Enrocin-Vet", comp_val: "Enrofloxacin 10%", pack: "100 ml vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.05, unit: "ml", ind: "Respiratory & GI tract infections", co: "Incepta", type: "c", str: "100mg/ml", mgkg: "5mg/kg"},
    {sl: 849, name: "Bol. LT-Vet Plus", comp_val: "Triclabendazole + Levamisole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Broad spectrum fascioliasis control", co: "Square", type: "c", str: "Combined", mgkg: "1bolus/75kg"},
    {sl: 850, name: "Inj. B1+B6+B12-A", comp_val: "Neurotropic Vit", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Nerve tone booster", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},

    
    
    
    
    

    // --- NSAIDs: Pain & Fever (ব্যথানাশক ও জ্বর নিরোধক) ---
    {sl: 851, name: "Inj. Tolfedin 4%", comp_val: "Tolfenamic Acid", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Acute mastitis and respiratory disease pain", co: "Vetoquinol (Renata)", type: "c", str: "40mg/ml", mgkg: "2mg/kg"},
    {sl: 852, name: "Inj. Flunixin-V", comp_val: "Flunixin Meglumine 50 mg/ml", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Colic pain, Endotoxic shock, Fever", co: "Square", type: "c", str: "50mg/ml", mgkg: "2.2mg/kg"},
    {sl: 853, name: "Inj. Melofen-DS", comp_val: "Meloxicam + Paracetamol", pack: "100 ml vial", safe: "Safe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Severe fever and body swelling", co: "Techno", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 854, name: "Inj. Diclo-Z", comp_val: "Diclofenac Sodium", pack: "30/100 ml", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Acute musculoskeletal pain and swelling", co: "Popular", type: "c", str: "25mg/ml", mgkg: "1mg/kg"},
    {sl: 855, name: "Bol. Para-Vet Plus", comp_val: "Paracetamol + Diclofenac Sodium", pack: "Bolus", safe: "Unsafe", pet: "Unsafe", base: 1, unit: "bolus", ind: "Chronic pain and high fever in cattle", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Steroids & Anti-inflammatory (স্টেরয়েড) ---
    {sl: 856, name: "Inj. Prednisolone-V", comp_val: "Prednisolone Acetate", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Ketosis, Allergic dermatitis, Shock", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 857, name: "Inj. Dexasone-S", comp_val: "Dexamethasone Sodium Phosphate", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anaphylaxis relief, Anti-inflammatory", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 858, name: "Inj. Dexon", comp_val: "Dexamethasone", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Stress and acute inflammation treatment", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Powder Antibiotics: WSP (পাউডার অ্যান্টিবায়োটিক) ---
    {sl: 859, name: "Pulv. Doxy-Vet", comp_val: "Doxycycline Hydrochloride", pack: "100 gm", safe: "Unsafe", pet: "Safe", base: 1, unit: "gm", ind: "CRD, Calf pneumonia, Salmonellosis", co: "Acme", type: "c", str: "WSP", mgkg: "10-20mg/kg"},
    {sl: 860, name: "Pulv. Renamycin Soluble", comp_val: "Oxytetracycline HCl", pack: "100 gm", safe: "Unsafe", pet: "Unsafe", base: 1, unit: "gm", ind: "Broad spectrum bacterial infection control", co: "Renata", type: "c", str: "WSP", mgkg: "N/A"},
    {sl: 861, name: "Pulv. Ciprocin-V WSP", comp_val: "Ciprofloxacin", pack: "100 gm", safe: "Unsafe", pet: "Safe", base: 1, unit: "gm", ind: "E. coli and Salmonella infections", co: "Square", type: "c", str: "10% WSP", mgkg: "N/A"},
    {sl: 862, name: "Pulv. Erythro-Vet", comp_val: "Erythromycin Thiocyanate", pack: "100 gm", safe: "Safe", pet: "Unsafe", base: 1, unit: "gm", ind: "Infectious Coryza, Mycoplasmosis", co: "SK+F", type: "c", str: "WSP", mgkg: "N/A"},
    {sl: 863, name: "Pulv. Amprol-Vet", comp_val: "Amprolium Hydrochloride", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Coccidiosis in poultry and calves", co: "Acme", type: "c", str: "WSP", mgkg: "N/A"},

    // --- Liver & Metabolism Support (লিভার ও মেটাবলিক সাপোর্ট) ---
    {sl: 864, name: "Liq. Hepa-Sol", comp_val: "Sorbitol + Methionine + Choline", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Fatty liver, Jaundice, Detoxification", co: "Incepta", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 865, name: "Liq. Hepaguard Vet", comp_val: "Silymarin + Choline + Carnitine", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Hepatic cirrhosis and toxin clearance", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 866, name: "Inj. Coforta 10%", comp_val: "Butafosfan", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic boost and stress prevention", co: "Bayer", type: "c", str: "100mg/ml", mgkg: "N/A"},
    {sl: 867, name: "Inj. Catophos", comp_val: "Butafosfan + Vitamin B12", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic stimulant, Infertility aid", co: "ACI", type: "c", str: "Combined", mgkg: "1ml/10-20kg"},

    // --- Vitamins & Tonics (ভিটামিন ও টনিক) ---
    {sl: 868, name: "Inj. Vit-ADE Vet", comp_val: "Vitamin A + D3 + E", pack: "10/100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Growth, Immunity and reproductive health", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 869, name: "Inj. Neuro-B", comp_val: "Vitamin B1 + B6 + B12", pack: "Ampoule", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Nerve weakness, Paralysis support", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 870, name: "Liq. Aminovet-Plus", comp_val: "Essential Amino Acids + Vitamins", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Growth promoter and recovery tonic", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Digestive & Rumen Support (হজম ও রুমান সাপোর্ট) ---
    {sl: 871, name: "Bol. Rumicid Vet", comp_val: "Ammonium Bicarbonate + Nuxvomica", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Indigestion and loss of appetite", co: "Renata", type: "c", str: "Combined", mgkg: "1-2 bolus"},
    {sl: 872, name: "Bol. Bio-Gut", comp_val: "Probiotics + Saccharomyces cerevisiae", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Rumen pH balancer and bloat control", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 873, name: "Pulv. Zyme-Vet", comp_val: "Multi-enzyme mixture", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Digestive aid and feed utilization", co: "Popular", type: "c", str: "WSP", mgkg: "N/A"},

    // --- Reproductive Hormones (প্রজনন হরমোন) ---
    {sl: 874, name: "Inj. Receptal", comp_val: "Buserelin Acetate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Ovarian cysts, Infertility treatment", co: "MSD", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 875, name: "Inj. Ovurelin", comp_val: "Gonadorelin", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Delayed ovulation and heat sync", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 876, name: "Inj. Oxytocin-V", comp_val: "Oxytocin (Synthetic)", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Milk letdown, Uterine stimulation", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Anthelmintics (কৃমিনাশক) ---
    {sl: 877, name: "Bol. LT-Vet", comp_val: "Triclabendazole + Levamisole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Mixed parasitic infection control", co: "Square", type: "c", str: "Combined", mgkg: "1bol/75kg"},
    {sl: 878, name: "Inj. Vermic-10", comp_val: "Ivermectin 1%", pack: "Vial", safe: "Safe", pet: "Safe(Caution)", base: 0.02, unit: "ml", ind: "Tick, lice and internal parasite control", co: "Renata", type: "c", str: "10mg/ml", mgkg: "1ml/50kg"},
    {sl: 879, name: "Bol. Almex Vet", comp_val: "Albendazole 600 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Broad spectrum dewormer", co: "Renata", type: "c", str: "600mg", mgkg: "7.5mg/kg"},

    // --- Antiprotozoal (পরজীবী জ্বর নিরোধক) ---
    {sl: 880, name: "Inj. Babesin-Vet", comp_val: "Diminazene Aceturate", pack: "2.36g Sachet", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Babesiosis and Trypanosomiasis control", co: "Square", type: "c", str: "Combined", mgkg: "3.5mg/kg"},
    {sl: 881, name: "Inj. Ectorid", comp_val: "Imidocarb Dipropionate", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Anaplasmosis and Tick fever prevention", co: "Renata", type: "c", str: "133mg/ml", mgkg: "1ml/31kg"},

    // --- Topical & External (বাহ্যিক ব্যবহার) ---
    {sl: 882, name: "Oint. Burn-Care", comp_val: "Silver Sulphadiazine", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Topical burn healing dressing", co: "Square", type: "f", str: "1%", mgkg: "N/A"},
    {sl: 883, name: "Liq. Povisep Vet", comp_val: "Povidone Iodine 10%", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Antiseptic for surgery and wounds", co: "JMI", type: "f", str: "10%", mgkg: "N/A"},
    {sl: 884, name: "Oint. Scabic-Vet", comp_val: "Benzyl Benzoate", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Scabies and mange treatment", co: "ACI", type: "f", str: "Combined", mgkg: "N/A"},

    // --- Hematinics & Iron (রক্তবর্ধক) ---
    {sl: 885, name: "Inj. Iron-DS", comp_val: "Iron Dextran + Vitamin B12", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Piglet anemia prevention", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 886, name: "Inj. Hemovet", comp_val: "Iron + Vitamin B12 + Folic Acid", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Weakness during recovery", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Electrolytes & Misc (ইলেক্ট্রোলাইট ও অন্যান্য) ---
    {sl: 887, name: "Pulv. Electromin", comp_val: "Electrolytes + Minerals", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Heat stress and dehydration relief", co: "Square", type: "c", str: "WSP", mgkg: "N/A"},
    {sl: 888, name: "Inj. Lidocaine HCl", comp_val: "Lidocaine 2%", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Local and nerve block anesthesia", co: "Generic", type: "c", str: "2%", mgkg: "N/A"},
    {sl: 889, name: "Bol. Metro-A 2g", comp_val: "Metronidazole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Amoebiasis and Giardiasis control", co: "Acme", type: "c", str: "2g", mgkg: "N/A"},
    {sl: 890, name: "Inj. Atropen", comp_val: "Atropine Sulphate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Organophosphate poisoning antidote", co: "Popular", type: "c", str: "Combined", mgkg: "0.04mg/kg"},

    // --- Additional Market Data (৮৯১ - ৯০০) ---
    {sl: 891, name: "Inj. Ceftio-V 1g", comp_val: "Ceftiofur Sodium", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Acute respiratory disease, Foot rot", co: "Popular", type: "c", str: "50mg/ml", mgkg: "1.1-2.2mg/kg"},
    {sl: 892, name: "Inj. Gentax-V", comp_val: "Gentamicin Sulphate", pack: "Vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.08, unit: "ml", ind: "Severe bacterial infections", co: "Acme", type: "c", str: "50mg/ml", mgkg: "4mg/kg"},
    {sl: 893, name: "Liq. Liver-G Plus", comp_val: "Herbal liver protector", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Natural liver conditioning", co: "Gonoshasthaya", type: "c", str: "Herbal", mgkg: "N/A"},
    {sl: 894, name: "Bol. Digesta-V", comp_val: "Digestive Enzymes", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Appetite booster for calves", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 895, name: "Inj. Neuro-B Plus", comp_val: "Vit B1+B6+B12", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Nerve tone maintenance", co: "Incepta", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 896, name: "Inj. Cal-Bor Plus", comp_val: "Calcium Borogluconate 25%", pack: "500 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Milk fever emergency treatment", co: "Techno", type: "c", str: "25%", mgkg: "N/A"},
    {sl: 897, name: "Inj. Frusemide-10", comp_val: "Furosemide", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Post-parturient udder edema", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 898, name: "Bol. Lax-Vet Plus", comp_val: "Laxative Salts", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Constipation relief", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 899, name: "Inj. Phenamil", comp_val: "Pheniramine Maleate", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Allergic reaction control", co: "Techno", type: "c", str: "22.7mg/ml", mgkg: "1ml/25kg"},
    {sl: 900, name: "Inj. Mely-Z", comp_val: "Meloxicam", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anti-inflammatory support", co: "Square", type: "c", str: "Combined", mgkg: "0.5mg/kg"},
    
    
    

    // --- Advanced Cephalosporins (উন্নত সেফালোস্পোরিন) ---
    {sl: 901, name: "Inj. Cefepime-V 1g", comp_val: "Cefepime Hydrochloride", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Severe respiratory & skin infections", co: "Popular", type: "c", str: "1g/vial", mgkg: "11mg/kg"},
    {sl: 902, name: "Inj. Ceftiofur-LA", comp_val: "Ceftiofur Crystalline Free Acid", pack: "100 ml", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Long acting - Single dose treatment for BRD", co: "Zoetis", type: "c", str: "100mg/ml", mgkg: "6.6mg/kg"},
    {sl: 903, name: "Inj. Cefquinome Vet", comp_val: "Cefquinome Sulfate", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Acute mastitis, Foot rot, MMA syndrome", co: "Intervet", type: "c", str: "25mg/ml", mgkg: "1mg/kg"},
    {sl: 904, name: "Inj. Excede", comp_val: "Ceftiofur Crystalline Free Acid", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Bovine respiratory disease treatment", co: "Zoetis", type: "c", str: "200mg/ml", mgkg: "6.6mg/kg"},

    // --- Antihistamines & Allergy (এলার্জি ও শক নিরোধক) ---
    {sl: 905, name: "Inj. Avil-V", comp_val: "Pheniramine Maleate 22.7 mg/ml", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Urticaria, Anaphylactic shock, Hay fever", co: "Sanofi", type: "c", str: "22.7mg/ml", mgkg: "1ml/25kg"},
    {sl: 906, name: "Inj. Antihist-V", comp_val: "Chlorpheniramine Maleate 10 mg/ml", pack: "10/100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Allergic rhinitis, Photosensitization", co: "Square", type: "c", str: "10mg/ml", mgkg: "1ml/25kg"},
    {sl: 907, name: "Inj. Phenergan Vet", comp_val: "Promethazine Hydrochloride", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Potent anti-allergic with sedation", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Pain & Fever Management (NSAIDs) ---
    {sl: 908, name: "Inj. Flunixin-V", comp_val: "Flunixin Meglumine 50 mg/ml", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Endotoxic shock, Colic pain in horses", co: "Square", type: "c", str: "50mg/ml", mgkg: "2.2mg/kg"},
    {sl: 909, name: "Inj. Melocam-V", comp_val: "Meloxicam 5 mg/ml", pack: "10/50 ml vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Pain, Inflammation, Mastitis support", co: "Popular", type: "c", str: "5mg/ml", mgkg: "0.5mg/kg"},
    {sl: 910, name: "Inj. Ketovet-100", comp_val: "Ketoprofen 100 mg/ml", pack: "10/50 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Chronic musculoskeletal pain control", co: "Techno", type: "c", str: "100mg/ml", mgkg: "3mg/kg"},

    // --- Vitamins & Metabolic Stimulants (ভিটামিন ও উদ্দীপক) ---
    {sl: 911, name: "Inj. Catophos", comp_val: "Butafosfan + Vitamin B12", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic boost, Infertility recovery", co: "Bayer (ACI)", type: "c", str: "Combined", mgkg: "1ml/10-20kg"},
    {sl: 912, name: "Inj. Vitade-V", comp_val: "Vitamin A + D3 + E", pack: "10/100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Reproduction health, Immunity boost", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 913, name: "Inj. Neuro-B", comp_val: "Vit B1 + B6 + B12", pack: "Ampoule", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Nerve inflammation, Weakness, Paralysis", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Liver & Digestive Support (লিভার ও হজম) ---
    {sl: 914, name: "Liq. Hepaguard Vet", comp_val: "Silymarin + Choline + L-Carnitine", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Jaundice, Liver cirrhosis treatment", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 915, name: "Liq. Livo-C", comp_val: "Liver extract + Vitamin B12 + C", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Hepatic tonic and appetite stimulant", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 916, name: "Bol. Rumicid Vet", comp_val: "Ammonium Bicarbonate + Ginger", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Anorexia, Indigestion, Rumen atony", co: "Renata", type: "c", str: "Combined", mgkg: "1-2 bolus"},

    // --- Reproductive Hormones (প্রজনন হরমোন) ---
    {sl: 917, name: "Inj. Receptal", comp_val: "Buserelin Acetate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Delayed ovulation, Follicular cysts", co: "MSD", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 918, name: "Inj. Ovurelin", comp_val: "Gonadorelin", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Infertility, Oestrus induction", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 919, name: "Inj. Oxytocin-V", comp_val: "Oxytocin (Synthetic)", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Uterine inertia, Milk letdown", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},

    // --- External Applications & Antiseptics (বাহ্যিক ব্যবহার) ---
    {sl: 920, name: "Oint. Burn-Care", comp_val: "Silver Sulphadiazine 1%", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Topical burn dressing, Skin wounds", co: "Square", type: "f", str: "1%", mgkg: "N/A"},
    {sl: 921, name: "Liq. Povisep Vet", comp_val: "Povidone Iodine 10%", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Surgical site preparation, Antiseptic", co: "JMI", type: "f", str: "10%", mgkg: "N/A"},
    {sl: 922, name: "Oint. Nitrofur-V", comp_val: "Nitrofurazone 0.2%", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Surface wound bacterial infections", co: "Popular", type: "f", str: "0.2%", mgkg: "N/A"},

    // --- Anthelmintics (কৃমিনাশক) ---
    {sl: 923, name: "Bol. LT-Vet", comp_val: "Triclabendazole + Levamisole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Mixed parasitic infection control", co: "Square", type: "c", str: "Combined", mgkg: "1bol/75kg"},
    {sl: 924, name: "Inj. Vermic-10", comp_val: "Ivermectin 1%", pack: "Vial", safe: "Safe", pet: "Safe(Caution)", base: 0.02, unit: "ml", ind: "Internal and external parasite control", co: "Renata", type: "c", str: "10mg/ml", mgkg: "1ml/50kg"},
    {sl: 925, name: "Bol. Almex Vet", comp_val: "Albendazole 600 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Broad spectrum deworming therapy", co: "Renata", type: "c", str: "600mg", mgkg: "7.5mg/kg"},

    // --- Antiprotozoal (পরজীবী জ্বর) ---
    {sl: 926, name: "Inj. Babesin-Vet", comp_val: "Diminazene Aceturate", pack: "2.36g sachet", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Babesiosis and Trypanosomiasis control", co: "Square", type: "c", str: "Combined", mgkg: "3.5mg/kg"},
    {sl: 927, name: "Inj. Ectorid", comp_val: "Imidocarb Dipropionate", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Tick fever prevention, Anaplasmosis", co: "Renata", type: "c", str: "133mg/ml", mgkg: "1ml/31kg"},

    // --- Specific Antiseptics & Sprays ---
    {sl: 928, name: "Spray Oxytetra", comp_val: "Oxytetracycline HCl", pack: "Aerosol", safe: "Safe", pet: "Safe", base: 1, unit: "spray", ind: "Topical wound treatment, Foot rot", co: "Generic", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 929, name: "Spray Iodo-V", comp_val: "Povidone Iodine Spray", pack: "Aerosol", safe: "Safe", pet: "Safe", base: 1, unit: "spray", ind: "Antiseptic spray for wounds", co: "Popular", type: "f", str: "Combined", mgkg: "N/A"},

    // --- Miscellaneous Market Data (৯৩০ - ৯৫০) ---
    {sl: 930, name: "Inj. Ceftio-V 1g", comp_val: "Ceftiofur Sodium", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Acute respiratory disease treatment", co: "Popular", type: "c", str: "50mg/ml", mgkg: "1.1-2.2mg/kg"},
    {sl: 931, name: "Inj. Gentax-V", comp_val: "Gentamicin Sulphate", pack: "Vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.08, unit: "ml", ind: "Severe bacterial infection control", co: "Acme", type: "c", str: "50mg/ml", mgkg: "4mg/kg"},
    {sl: 932, name: "Liq. Liver-G", comp_val: "Herbal liver protector", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Liver conditioning naturally", co: "Gonoshasthaya", type: "c", str: "Herbal", mgkg: "N/A"},
    {sl: 933, name: "Bol. Digesta-V", comp_val: "Digestive Enzymes", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Appetite booster for large animals", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 934, name: "Inj. Neuro-B Plus", comp_val: "Vit B1+B6+B12", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Nerve tone booster, Paralysis support", co: "Incepta", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 935, name: "Inj. Cal-Bor Plus", comp_val: "Calcium Borogluconate 25%", pack: "500 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Milk fever emergency infusion", co: "Techno", type: "c", str: "25%", mgkg: "N/A"},
    {sl: 936, name: "Inj. Frusemide-10", comp_val: "Furosemide", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Post-parturient udder edema relief", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 937, name: "Bol. Lax-Vet Plus", comp_val: "Laxative Salts + Ginger", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Constipation relief for ruminants", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 938, name: "Inj. Phenamil", comp_val: "Pheniramine Maleate", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Allergic reaction control", co: "Techno", type: "c", str: "22.7mg/ml", mgkg: "1ml/25kg"},
    {sl: 939, name: "Inj. Mely-Z", comp_val: "Meloxicam", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anti-inflammatory and lameness control", co: "Square", type: "c", str: "Combined", mgkg: "0.5mg/kg"},
    {sl: 940, name: "Inj. Atropen", comp_val: "Atropine Sulphate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Antidote for organophosphate poisoning", co: "Popular", type: "c", str: "Combined", mgkg: "0.04mg/kg"},
    {sl: 941, name: "Liq. Z-Complex", comp_val: "Zinc + Vit B-Complex", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Growth booster and immune support", co: "ACI", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 942, name: "Inj. B1+B6+B12-A", comp_val: "Neurotropic Vitamins", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Supportive treatment for paralysis", co: "Generic", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 943, name: "Bol. Metro-A 2g", comp_val: "Metronidazole 2000mg", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Enteric infections, Amoebiasis", co: "Acme", type: "c", str: "2g", mgkg: "N/A"},
    {sl: 944, name: "Inj. Enrocin-V", comp_val: "Enrofloxacin 10%", pack: "100 ml", safe: "Unsafe", pet: "Safe(Caution)", base: 0.05, unit: "ml", ind: "Digestive and respiratory infections", co: "Incepta", type: "c", str: "100mg/ml", mgkg: "5mg/kg"},
    {sl: 945, name: "Liq. Hepa-Sol", comp_val: "Sorbitol + Methionine", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic liver stimulant tonic", co: "Incepta", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 946, name: "Inj. Oxytocin-A", comp_val: "Oxytocin Synthetic", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 1, unit: "ml", ind: "Uterine contraction and milk letdown", co: "ACI", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 947, name: "Bol. Digevet-Z", comp_val: "Rumenotoric stimulant", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Corrects ruminal stasis and appetite", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 948, name: "Oint. Nitrofur-Z Plus", comp_val: "Nitrofurazone", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Wound infection dressing", co: "Popular", type: "f", str: "Combined", mgkg: "N/A"},
    {sl: 949, name: "Inj. Lidocaine-Z", comp_val: "Lidocaine HCl 2%", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Local nerve block anesthesia", co: "Generic", type: "c", str: "2%", mgkg: "N/A"},
    {sl: 950, name: "Bol. Para-Vet-Z", comp_val: "Paracetamol", pack: "Bolus", safe: "Safe", pet: "Unsafe", base: 1, unit: "bolus", ind: "Pain and fever reduction in cattle", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},

    
    

    // --- NSAIDs: Pain & Inflammation (ব্যথানাশক ও প্রদাহ নিরোধক) ---
    {sl: 951, name: "Inj. Tolfenamic-V 4%", comp_val: "Tolfenamic Acid", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.05, unit: "ml", ind: "Acute mastitis and bovine respiratory disease", co: "Square", type: "c", str: "40mg/ml", mgkg: "2mg/kg"},
    {sl: 952, name: "Inj. Diclo-Vet", comp_val: "Diclofenac Sodium", pack: "30/100 ml", safe: "Unsafe", pet: "Unsafe", base: 0.1, unit: "ml", ind: "Severe pain and inflammatory conditions", co: "Acme", type: "c", str: "25mg/ml", mgkg: "1mg/kg"},
    {sl: 953, name: "Inj. Melocam-DS", comp_val: "Meloxicam High Potency", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Chronic pain, Arthritis and Lameness", co: "Popular", type: "c", str: "20mg/ml", mgkg: "0.5mg/kg"},
    {sl: 954, name: "Inj. Ketovet Plus", comp_val: "Ketoprofen", pack: "50 ml vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Fever, Pain and Musculoskeletal disorders", co: "Techno", type: "c", str: "100mg/ml", mgkg: "3mg/kg"},
    {sl: 955, name: "Bol. Para-Vet Plus", comp_val: "Paracetamol + Diclofenac Sodium", pack: "Bolus", safe: "Unsafe", pet: "Unsafe", base: 1, unit: "bolus", ind: "Chronic pain and fever in livestock", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Steroids (স্টেরয়েড ইনজেকশন) ---
    {sl: 956, name: "Inj. Dexazone", comp_val: "Dexamethasone Sodium Phosphate", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anaphylactic shock, Acute allergy, Ketosis", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 957, name: "Inj. Pred-Vet", comp_val: "Prednisolone Acetate", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Anti-inflammatory and supportive therapy", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 958, name: "Inj. Dexa-S Vet", comp_val: "Dexamethasone", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Stress and acute inflammatory relief", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Powder Antibiotics & Coccidiostats (পাউডার ওষুধ) ---
    {sl: 959, name: "Pulv. Doxy-Vet WSP", comp_val: "Doxycycline Hydrochloride", pack: "100 gm", safe: "Unsafe", pet: "Safe", base: 1, unit: "gm", ind: "CRD, Mycoplasmosis, Calf pneumonia", co: "Acme", type: "c", str: "WSP", mgkg: "10-20mg/kg"},
    {sl: 960, name: "Pulv. Renamycin Soluble", comp_val: "Oxytetracycline HCl", pack: "100 gm", safe: "Unsafe", pet: "Unsafe", base: 1, unit: "gm", ind: "Broad spectrum bacterial control", co: "Renata", type: "c", str: "WSP", mgkg: "N/A"},
    {sl: 961, name: "Pulv. Ciprocin-V", comp_val: "Ciprofloxacin", pack: "100 gm", safe: "Unsafe", pet: "Safe", base: 1, unit: "gm", ind: "Colibacillosis, Salmonellosis control", co: "Square", type: "c", str: "10% WSP", mgkg: "N/A"},
    {sl: 962, name: "Pulv. Erythro-Vet", comp_val: "Erythromycin Thiocyanate", pack: "100 gm", safe: "Safe", pet: "Unsafe", base: 1, unit: "gm", ind: "Infectious Coryza and Mycoplasmosis", co: "SK+F", type: "c", str: "WSP", mgkg: "N/A"},
    {sl: 963, name: "Pulv. Amprol-Vet", comp_val: "Amprolium Hydrochloride", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Coccidiosis in poultry and calves", co: "Acme", type: "c", str: "WSP", mgkg: "N/A"},

    // --- Liver & Metabolic Stimulants (লিভার ও মেটাবলিক উদ্দীপক) ---
    {sl: 964, name: "Liq. Hepa-Sol Plus", comp_val: "Sorbitol + Methionine + Choline", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Jaundice, Liver cirrhosis, Detoxification", co: "Incepta", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 965, name: "Liq. Hepaguard Vet", comp_val: "Silymarin + Choline + Carnitine", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Protects liver from toxins and fatty changes", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 966, name: "Inj. Coforta 10%", comp_val: "Butafosfan", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic and tonic therapy, Stress relief", co: "Bayer", type: "c", str: "100mg/ml", mgkg: "N/A"},
    {sl: 967, name: "Inj. Catophos-V", comp_val: "Butafosfan + Vitamin B12", pack: "100 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Metabolic stimulant, Phosphorus deficiency", co: "ACI", type: "c", str: "Combined", mgkg: "1ml/10-20kg"},

    // --- Vitamins & Health Tonics (ভিটামিন ও টনিক) ---
    {sl: 968, name: "Inj. Vitade Vet", comp_val: "Vitamin A + D3 + E", pack: "10/100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Immunity booster and reproductive health", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 969, name: "Inj. Neuro-B-V", comp_val: "Vitamin B1 + B6 + B12", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Supportive treatment for nerve disorders", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 970, name: "Liq. Aminovet-Plus", comp_val: "Essential Amino Acids + Vitamins", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Health tonic and growth promotion", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Digestive Support (হজম ও রুমান সাপোর্ট) ---
    {sl: 971, name: "Bol. Rumicid-Plus", comp_val: "Ammonium Bicarbonate + Nuxvomica", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Corrects indigestion and ruminal stasis", co: "Renata", type: "c", str: "Combined", mgkg: "1-2 bolus"},
    {sl: 972, name: "Bol. Bio-Gut", comp_val: "Probiotics + Saccharomyces cerevisiae", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Digestive improvement and bloat control", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 973, name: "Pulv. Zyme-Vet WSP", comp_val: "Multi-enzyme mixture", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Feed conversion improvement, Digestive aid", co: "Popular", type: "c", str: "WSP", mgkg: "N/A"},

    // --- Hormones & Reproductive (প্রজনন হরমোন) ---
    {sl: 974, name: "Inj. Receptal Vet", comp_val: "Buserelin Acetate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Follicular cysts, Delayed ovulation treatment", co: "MSD", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 975, name: "Inj. Ovurelin-Z", comp_val: "Gonadorelin", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Heat synchronization and infertility treatment", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 976, name: "Inj. Oxytocin-A", comp_val: "Oxytocin Synthetic", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Uterine inertia and milk ejection stimulant", co: "ACI", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Anthelmintics: Modern (উন্নত কৃমিনাশক) ---
    {sl: 977, name: "Bol. LT-Vet", comp_val: "Triclabendazole + Levamisole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Broad spectrum oral fascioliasis control", co: "Square", type: "c", str: "Combined", mgkg: "1bol/75kg"},
    {sl: 978, name: "Inj. Vermic-10", comp_val: "Ivermectin 1%", pack: "Vial", safe: "Safe", pet: "Safe(Caution)", base: 0.02, unit: "ml", ind: "Lice, Mange, and Internal parasite control", co: "Renata", type: "c", str: "10mg/ml", mgkg: "1ml/50kg"},
    {sl: 979, name: "Bol. Almex Vet", comp_val: "Albendazole 600 mg", pack: "Bolus", safe: "Unsafe", pet: "Safe", base: 1, unit: "bolus", ind: "Oral broad spectrum deworming therapy", co: "Renata", type: "c", str: "600mg", mgkg: "7.5mg/kg"},

    // --- Antiprotozoal: Babesiosis & Tick Fever (পরজীবী জ্বর) ---
    {sl: 980, name: "Inj. Babesin-Vet", comp_val: "Diminazene Aceturate", pack: "2.36g Sachet", safe: "Safe", pet: "Unsafe", base: 0.08, unit: "ml", ind: "Babesiosis and Trypanosomiasis control", co: "Square", type: "c", str: "Combined", mgkg: "3.5mg/kg"},
    {sl: 981, name: "Inj. Ectorid", comp_val: "Imidocarb Dipropionate", pack: "10 ml vial", safe: "Safe", pet: "Safe", base: 0.03, unit: "ml", ind: "Tick fever and Anaplasmosis prevention", co: "Renata", type: "c", str: "133mg/ml", mgkg: "1ml/31kg"},

    // --- Topical & External (বাহ্যিক ব্যবহার) ---
    {sl: 982, name: "Oint. Burn-Care", comp_val: "Silver Sulphadiazine 1%", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Topical burn healing and wound dressing", co: "Square", type: "f", str: "1%", mgkg: "N/A"},
    {sl: 983, name: "Liq. Povisep Vet", comp_val: "Povidone Iodine 10%", pack: "100/500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Antiseptic for surgical site and wounds", co: "JMI", type: "f", str: "10%", mgkg: "N/A"},
    {sl: 984, name: "Oint. Scabic-Vet", comp_val: "Benzyl Benzoate", pack: "Tube", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Scabies and mange treatment in animals", co: "ACI", type: "f", str: "Combined", mgkg: "N/A"},

    // --- Hematinics & Iron (রক্তবর্ধক) ---
    {sl: 985, name: "Inj. Iron-DS", comp_val: "Iron Dextran + Vitamin B12", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Iron deficiency anemia prevention", co: "Square", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 986, name: "Inj. Hemovet-V", comp_val: "Iron + Vitamin B12 + Folic Acid", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "General weakness during recovery booster", co: "Renata", type: "c", str: "Combined", mgkg: "N/A"},

    // --- Electrolytes & Antidotes (ইলেক্ট্রোলাইট ও বিষ নিরোধক) ---
    {sl: 887, name: "Pulv. Electromin-V", comp_val: "Electrolytes + Minerals", pack: "100 gm", safe: "Safe", pet: "Safe", base: 1, unit: "gm", ind: "Dehydration and heat stress relief", co: "Square", type: "c", str: "WSP", mgkg: "N/A"},
    {sl: 988, name: "Inj. Lidocaine HCl 2%", comp_val: "Lidocaine Hydrochloride", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Local and nerve block anesthesia", co: "Generic", type: "c", str: "2%", mgkg: "N/A"},
    {sl: 989, name: "Bol. Metro-A 2g", comp_val: "Metronidazole", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Enteric amoebiasis and giardiasis", co: "Acme", type: "c", str: "2g", mgkg: "N/A"},
    {sl: 990, name: "Inj. Atropen-V", comp_val: "Atropine Sulphate", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Organophosphate poisoning antidote", co: "Popular", type: "c", str: "Combined", mgkg: "0.04mg/kg"},

    // --- Additional Market Data (৯৯১ - ১০০০) ---
    {sl: 991, name: "Inj. Ceftio-V 1g", comp_val: "Ceftiofur Sodium", pack: "1 gm vial", safe: "Safe", pet: "Safe", base: 0.04, unit: "ml", ind: "Acute respiratory disease treatment", co: "Popular", type: "c", str: "50mg/ml", mgkg: "1.1-2.2mg/kg"},
    {sl: 992, name: "Inj. Gentax-V", comp_val: "Gentamicin Sulphate", pack: "Vial", safe: "Unsafe", pet: "Safe(Caution)", base: 0.08, unit: "ml", ind: "Severe systemic bacterial infections", co: "Acme", type: "c", str: "50mg/ml", mgkg: "4mg/kg"},
    {sl: 993, name: "Liq. Liver-G Plus", comp_val: "Herbal liver protector", pack: "500 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Natural liver conditioning and health", co: "Gonoshasthaya", type: "c", str: "Herbal", mgkg: "N/A"},
    {sl: 994, name: "Bol. Digesta-V", comp_val: "Digestive Enzymes", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Appetite booster for livestock", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 995, name: "Inj. Neuro-B Plus", comp_val: "Vit B1+B6+B12", pack: "Vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Nerve inflammation and paralysis maintenance", co: "Incepta", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 996, name: "Inj. Cal-Bor Plus", comp_val: "Calcium Borogluconate 25%", pack: "500 ml vial", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Milk fever emergency treatment", co: "Techno", type: "c", str: "25%", mgkg: "N/A"},
    {sl: 997, name: "Inj. Frusemide-10", comp_val: "Furosemide", pack: "Vial", safe: "Unsafe", pet: "Safe", base: 0.1, unit: "ml", ind: "Post-parturient udder edema relief", co: "Popular", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 998, name: "Bol. Lax-Vet Plus", comp_val: "Laxative Salts", pack: "Bolus", safe: "Safe", pet: "Safe", base: 1, unit: "bolus", ind: "Constipation relief and impaction", co: "Acme", type: "c", str: "Combined", mgkg: "N/A"},
    {sl: 999, name: "Inj. Phenamil", comp_val: "Pheniramine Maleate", pack: "100 ml", safe: "Safe", pet: "Safe", base: 1, unit: "ml", ind: "Allergic reaction and shock control", co: "Techno", type: "c", str: "22.7mg/ml", mgkg: "1ml/25kg"},
    {sl: 1000, name: "Inj. Mely-Z", comp_val: "Meloxicam", pack: "Vial", safe: "Safe", pet: "Safe", base: 0.1, unit: "ml", ind: "Acute anti-inflammatory support", co: "Square", type: "c", str: "Combined", mgkg: "0.5mg/kg"}
];


    