// Large-animal legacy protocols annotated for clinical review — checked 2026-08-21
const RX_LARGE = [
  {
    "family": "Cowpox/ Pseudo Cowpox",
    "animal": "Cow",
    "refWeightKg": 200,
    "pregnantOnly": false,
    "sourceTitle": "Cowpox/ Pseudo Cowpox: Cow-200kg",
    "meds": [
      {
        "name": "Inj.Acimec 1%",
        "dosage": "5 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "চামড়ার নিচে ইঞ্জেকশন দিবেন (Inject Subcutaneously)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Virux",
        "dosage": "1 unit",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "ক্ষতস্থানে লাগাবেন (Apply Locally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "14.9 ml",
        "interval": "Once Daily",
        "duration": "4 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. Sodium bi carbonate solution (2-4%)",
        "dosage": "1 unit",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "ক্ষতস্থানে লাগাবেন (Apply Locally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "interval_schedule_mismatch"
    ]
  },
  {
    "family": "Cutaneous Emphysema (Subcutaneous Emphysema)",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Cutaneous Emphysema (Subcutaneous Emphysema)- Cattle 300Kg",
    "meds": [
      {
        "name": "Inj. Acicef-4, 0.5g (10ml), 1gm (20ml)",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Inj. F-NIL Vet / Tufnil - 40 mg/ml, \nBol. Tufnil 200mg/Bol",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "3 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "dosage_form_unit_mismatch",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Dermatophilosis/ Common pustular/crusting disease/ Dermatophilus congolensis; gram-positive",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Dermatophilosis/ Common pustular/crusting disease/ Dermatophilus congolensis; gram-positive, Cattle: 300Kg",
    "meds": [
      {
        "name": "Bipen-Vet® Injection",
        "dosage": "30 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Action 3 (0.5%) Vet",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj.Acimec 1%",
        "dosage": "6 ml",
        "interval": "Weekly",
        "duration": "14 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Copper Sulfate",
        "dosage": "20 g",
        "interval": "Twice Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Povin/ viodin Solution",
        "dosage": "5 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "interval_schedule_mismatch",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Dermatophytosis (Ringworm / Fungal Dermatitis)",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Dermatophytosis (Ringworm / Fungal Dermatitis) Cattle:300Kg",
    "meds": [
      {
        "name": "Bipen-Vet® Injection",
        "dosage": "30 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Action 3 (0.5%) Vet",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj.Acimec 1%",
        "dosage": "6 ml",
        "interval": "Weekly",
        "duration": "14 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Copper Sulfate",
        "dosage": "20 g",
        "interval": "Twice Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Povin/ viodin Solution",
        "dosage": "5 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "interval_schedule_mismatch",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Diarrhea with Fever/ Salmonellosis/ E.Coli-Water/ Food Born Diarrhea",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Diarrhea with Fever/ Salmonellosis/ E.Coli-Water/ Food Born Diarrhea, Cattle 300 Kg",
    "meds": [
      {
        "name": "Inj. DIMI Vet",
        "dosage": "90 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Action 3 (0.5%) Vet",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder Diakur",
        "dosage": "150 g",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": []
  },
  {
    "family": "Dry Cow Therapy",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Dry Cow Therapy",
    "meds": [
      {
        "name": "Mastijet Fort",
        "dosage": "8 g",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder Mastimix-H",
        "dosage": "100 g",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": []
  },
  {
    "family": "Endometritis / Pyometra",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Endometritis / Pyometra- Cattle: 300Kg",
    "meds": [
      {
        "name": "Inj. Reprolyse",
        "dosage": "4 ml",
        "interval": "Once Daily",
        "duration": "14 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Longosona",
        "dosage": "60 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Uni-Oxytocin",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "3 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hartsol/ NS",
        "dosage": "100 ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Otetra Vet LA",
        "dosage": "20 ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Enterotoximea/ Pulpy Kidney Diseases",
    "animal": "Cow",
    "refWeightKg": 100,
    "pregnantOnly": false,
    "sourceTitle": "Enterotoximea/ Pulpy Kidney Diseases : Cattle-100kg",
    "meds": [
      {
        "name": "Inj. Normal saline",
        "dosage": "1000 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab. Diadin",
        "dosage": "2 tablet",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "5 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Pronapen -40L",
        "dosage": "10 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Nephrocare/ Nephroflush Liquid",
        "dosage": "50 ml",
        "interval": "Once Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "interval_schedule_mismatch",
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Enzootic Ataxia/ Copper Deficiency/ Swayback/ Vitiligo",
    "animal": "Cow",
    "refWeightKg": 100,
    "pregnantOnly": false,
    "sourceTitle": "Enzootic Ataxia/ Copper Deficiency/ Swayback/ Vitiligo: Cattle- 100kg.",
    "meds": [
      {
        "name": "Copper Sulfate",
        "dosage": "20 g",
        "interval": "Once Daily",
        "duration": "30 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Sedil – 10mg/ 2ml, Tab. Sedil – 5mg",
        "dosage": "2 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup D-Iron",
        "dosage": "50 ml",
        "interval": "Once Daily",
        "duration": "30 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. GainFast Vet",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "30 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup Arocal-Vet",
        "dosage": "100 ml",
        "interval": "Once Daily",
        "duration": "30 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "dosage_form_unit_mismatch",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Epilepsy/ Convulsion/ Seizures",
    "animal": "Cow",
    "refWeightKg": 100,
    "pregnantOnly": false,
    "sourceTitle": "Epilepsy/ Convulsion/ Seizures: Cattle- 100kg",
    "meds": [
      {
        "name": "Inj. Sedil – 10mg/ 2ml, Tab. Sedil – 5mg",
        "dosage": "2 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Barbit/G-Phenobarbitone – 200mg/ml, Syp-20mg/5ml",
        "dosage": "2 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. Magsulfate",
        "dosage": "100 g",
        "interval": "Twice Daily",
        "duration": "1 months",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "dosage_form_unit_mismatch",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Fatty Liver Syndrom",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Fatty Liver Syndrom: Cow: 300kg",
    "meds": [
      {
        "name": "Inj. Dextrose - 10%",
        "dosage": "1 L",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "শিরায় ইঞ্জেকশন দিবেন (Inject Intra Venously)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Energy Feed Premix",
        "dosage": "100 g",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup Liv- Forte",
        "dosage": "100 ml",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup Arocal-Vet",
        "dosage": "100 ml",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": []
  },
  {
    "family": "Floppy Kid Syndrome",
    "animal": "Calf",
    "refWeightKg": 50,
    "pregnantOnly": false,
    "sourceTitle": "Floppy Kid Syndrome: Calf- 50kgs",
    "meds": [
      {
        "name": "Inj. Hartsol/ NS",
        "dosage": "500 ml",
        "interval": "Twice Daily",
        "duration": "until_recovery",
        "route": "শিরায় ইঞ্জেকশন দিবেন (Inject Intra Venously)",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Sodi bi Carb/ Sodib/ \nSb Nate",
        "dosage": "50 ml",
        "interval": "Twice Daily",
        "duration": "until_recovery",
        "route": "শিরায় ইঞ্জেকশন দিবেন (Inject Intra Venously)",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder Herbo Top",
        "dosage": "40 g",
        "interval": "Twice Daily",
        "duration": "5 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab. Diadin",
        "dosage": "2 tablet",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. Bicarb",
        "dosage": "50 g",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Foot Rot / Interdigital Phlegmon/ Fusobacterium necrophorum/ Prevotella levii",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Foot Rot / Interdigital Phlegmon/ Fusobacterium necrophorum/ Prevotella levii - Cattle: 300Kg",
    "meds": [
      {
        "name": "Bipen-Vet® Injection",
        "dosage": "30 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj.Acimec 1%",
        "dosage": "6 ml",
        "interval": "Weekly",
        "duration": "14 days",
        "route": "চামড়ার নিচে ইঞ্জেকশন দিবেন (Inject Subcutaneously)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Action 3 (0.5%) Vet",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "চামড়ার নিচে ইঞ্জেকশন দিবেন (Inject Subcutaneously)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Copper Sulfate",
        "dosage": "20 g",
        "interval": "Twice Daily",
        "duration": "5 days",
        "route": "ক্ষতস্থানে লাগাবেন (Apply Locally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Povin/ viodin Solution",
        "dosage": "5 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "ক্ষতস্থানে লাগাবেন (Apply Locally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Foot and Mouth Disease",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Foot and Mouth Disease-Cattle: 300Kg",
    "meds": [
      {
        "name": "Injection Eagle Long PS",
        "dosage": "30 tablet",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Action 3 (0.5%) Vet",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. Sodium bi carbonate solution (2-4%)",
        "dosage": "40 g",
        "interval": "Twice Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Povin/ viodin Solution",
        "dosage": "10 ml",
        "interval": "Thrice Daily",
        "duration": "7 until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder NO-FMD",
        "dosage": "30 g",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Hemorrhagic Septicemia/ Pasteurellosis/Shipping Fever",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Hemorrhagic Septicemia/ Pasteurellosis/Shipping Fever",
    "meds": [
      {
        "name": "Inj. DIMI Vet",
        "dosage": "90 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "শিরায় ইঞ্জেকশন দিবেন (Inject Intra Venously)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Action 3 (0.5%) Vet",
        "dosage": "10 tablet",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder Herbo-Top",
        "dosage": "100 g",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "interval_schedule_mismatch"
    ]
  },
  {
    "family": "Hypercalcemia",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Hypercalcemia: Cow: 300 Kg",
    "meds": [
      {
        "name": "Inj. Renasol ADE",
        "dosage": "20 ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Dextrose - 10%",
        "dosage": "2 L",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "শিরায় ইঞ্জেকশন দিবেন (Inject Intra Venously)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Dexavet (0.2%, 2mg/ml)",
        "dosage": "20 ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Nervin/ Neuro- B",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Vita-D-PLus",
        "dosage": "100 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. Magsulfate",
        "dosage": "50 g",
        "interval": "Twice Daily",
        "duration": "until_recovery",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "interval_schedule_mismatch",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Hyperkalemia",
    "animal": "Cow",
    "refWeightKg": 100,
    "pregnantOnly": false,
    "sourceTitle": "Hyperkalemia: Cattle-100 kg",
    "meds": [
      {
        "name": "Inj. Dextrose - 10%",
        "dosage": "3 l",
        "interval": "Once Daily",
        "duration": "1 until_recovery",
        "route": "শিরায় ইঞ্জেকশন দিবেন (Inject Intra Venously)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Magical-28",
        "dosage": "500 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "শিরায় ইঞ্জেকশন দিবেন (Inject Intra Venously)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. Bi-carb",
        "dosage": "100 g",
        "interval": "Hourly",
        "duration": "until_recovery",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": []
  },
  {
    "family": "Hypocalcemia/ Milk Fever/ Parturient Paresis/ Milk Lameness (Milk Fever - Hypocalcemia)",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Hypocalcemia/ Milk Fever/ Parturient Paresis/ Milk Lameness (Milk Fever - Hypocalcemia): Cow: 300 Kg",
    "meds": [
      {
        "name": "Inj. Renasol ADE",
        "dosage": "20 tablet",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Dextrose - 10%",
        "dosage": "2 লিটার (L)",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "",
        "schedule": [
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Magical-28",
        "dosage": "500 tablet",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Nervin/ Neuro- B",
        "dosage": "5 বোতল (Bottle/Ample)",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Dexavet (0.2%, 2mg/ml)",
        "dosage": "30 tablet",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. GainFast Vet",
        "dosage": "40 tablet",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup Arocal-Vet",
        "dosage": "100 tablet",
        "interval": "Once Daily",
        "duration": "15 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "dosage_form_unit_mismatch",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Hypomagnesemic Tetany/ Grass Tetany",
    "animal": "Calf",
    "refWeightKg": 40,
    "pregnantOnly": false,
    "sourceTitle": "Hypomagnesemic Tetany/ Grass Tetany: Calf-40kg",
    "meds": [
      {
        "name": "Inj. Magsum- IM/IV",
        "dosage": "5 ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "শিরায় ইঞ্জেকশন দিবেন (Inject Intra Venously)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Barbit/G-Phenobarbitone – 200mg/ml, Syp-20mg/5ml",
        "dosage": "2 tablet",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. Magsulfate",
        "dosage": "10 g",
        "interval": "Once Daily",
        "duration": "until_recovery",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "dosage_form_unit_mismatch",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Hypovitaminosis A/ Night Blindness/ Vitamin -A deficiency",
    "animal": "Cow",
    "refWeightKg": 50,
    "pregnantOnly": false,
    "sourceTitle": "Hypovitaminosis A/ Night Blindness/ Vitamin -A deficiency: Cow: 50Kg",
    "meds": [
      {
        "name": "Inj. Renasol ADE",
        "dosage": "20 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Vita-D-PLus",
        "dosage": "100 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Cap. Retinol Fort",
        "dosage": "2 capsule",
        "interval": "Once Daily",
        "duration": "15 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "interval_schedule_mismatch",
      "missing_route"
    ]
  },
  {
    "family": "Induction of Parturition / Uterine Inertia / Delayed Parturition",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Induction of Parturition / Uterine Inertia / Delayed Parturition- Cattle:300Kg",
    "meds": [
      {
        "name": "Inj. Reprolyse",
        "dosage": "2 ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Longosona",
        "dosage": "60 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Dextrose - 10%",
        "dosage": "3000 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "শিরায় ইঞ্জেকশন দিবেন (Inject Intra Venously)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Renasol ADE",
        "dosage": "30 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": []
  },
  {
    "family": "Joint Ill",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Joint Ill, Cattle-300Kg",
    "meds": [
      {
        "name": "Bipen-Vet® Injection",
        "dosage": "30 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Action 3 (0.5%) Vet",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Povin/ viodin Solution",
        "dosage": "5 ml",
        "interval": "Twice Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Ketosis (Acetonemia)",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Ketosis (Acetonemia) : Cow: 300kg",
    "meds": [
      {
        "name": "Inj. Dextrose - 10%",
        "dosage": "1 L",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "শিরায় ইঞ্জেকশন দিবেন (Inject Intra Venously)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Energy Feed Premix",
        "dosage": "100 g",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder X-Zelit",
        "dosage": "100 g",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup Arocal-Vet",
        "dosage": "100 ml",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": []
  },
  {
    "family": "Leptospirosis/ Weils Diseases Blood in Urine/ Hematuria",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Leptospirosis/ Weils Diseases Blood in Urine/ Hematuria-Cattle 300Kg",
    "meds": [
      {
        "name": "Inj. DIMI Vet",
        "dosage": "90 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "শিরায় ইঞ্জেকশন দিবেন (Inject Intra Venously)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Action 3 (0.5%) Vet",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. Ammonium Chloride",
        "dosage": "20 g",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup Liv- Forte",
        "dosage": "100 ml",
        "interval": "Once Daily",
        "duration": "15 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup D-Iron",
        "dosage": "30 ml",
        "interval": "Once Daily",
        "duration": "15 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "interval_schedule_mismatch"
    ]
  },
  {
    "family": "Listeriosis / Circling Disease",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Listeriosis / Circling Disease: Cattle-300 Kg",
    "meds": [
      {
        "name": "Bipen-Vet® Injection",
        "dosage": "30 ml",
        "interval": "Twice Daily",
        "duration": "5 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Nervin/ Neuro- B",
        "dosage": "6 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Longosona",
        "dosage": "30 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Lumpy Skin Disease (LSD)",
    "animal": "Cow",
    "refWeightKg": 100,
    "pregnantOnly": false,
    "sourceTitle": "Lumpy Skin Disease (LSD): Cow 100Kg",
    "meds": [
      {
        "name": "Virux",
        "dosage": "1 tablet",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Parasitin/ Acimec/ Amectin – 1%",
        "dosage": "2 ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "চামড়ার নিচে ইঞ্জেকশন দিবেন (Inject Subcutaneously)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Action 3 (0.5%) Vet",
        "dosage": "3.5 ml",
        "interval": "Once Daily",
        "duration": "3 days",
        "route": "চামড়ার নিচে ইঞ্জেকশন দিবেন (Inject Subcutaneously)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "4 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Sodi bi Carb/ Sodib/ \nSb Nate",
        "dosage": "50 g",
        "interval": "Once Daily",
        "duration": "4 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hartsol/ Hartman Plus Saline",
        "dosage": "100 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "শিরায় ইঞ্জেকশন দিবেন (Inject Intra Venously)",
        "schedule": [],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "interval_schedule_mismatch",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Malignant edema",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Malignant edema- Cattle:300Kg",
    "meds": [
      {
        "name": "Bipen-Vet® Injection",
        "dosage": "30 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Action 3 (0.5%) Vet",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Fusid, Lasix - Inj 20mg/2ml, Tab.40mg, 250mg",
        "dosage": "6 tablet",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Myiasis/ Maggot/ Cutenous Sore/ Chronic Open Wound / Abscess/ Fresh/ Old Lacerated/ Septic Wound",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Myiasis/ Maggot/ Cutenous Sore/ Chronic Open Wound / Abscess/ Fresh/ Old Lacerated/ Septic Wound, Cattle-300Kg",
    "meds": [
      {
        "name": "Bipen-Vet® Injection",
        "dosage": "30 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj.Acimec 1%",
        "dosage": "6 ml",
        "interval": "Weekly",
        "duration": "7 days",
        "route": "চামড়ার নিচে ইঞ্জেকশন দিবেন (Inject Subcutaneously)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Action 3 (0.5%) Vet",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "শিরায় ইঞ্জেকশন দিবেন (Inject Intra Venously)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Hyperoxi/ Hydrogen Per Oxide – 100ml",
        "dosage": "5 ml",
        "interval": "Twice Daily",
        "duration": "3 days",
        "route": "ক্ষতস্থানে লাগাবেন (Apply Locally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Povin/ viodin Solution",
        "dosage": "5 ml",
        "interval": "Twice Daily",
        "duration": "5 days",
        "route": "ক্ষতস্থানে লাগাবেন (Apply Locally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Naval ill",
    "animal": "Cow",
    "refWeightKg": 50,
    "pregnantOnly": false,
    "sourceTitle": "Naval ill, Cattle-50Kg",
    "meds": [
      {
        "name": "Bipen-Vet® Injection",
        "dosage": "10 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Action 3 (0.5%) Vet",
        "dosage": "2 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "2.5 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Povin/ viodin Solution",
        "dosage": "5 ml",
        "interval": "Twice Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Peste des Petits Ruminants (PPR)",
    "animal": "Goat",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Peste des Petits Ruminants (PPR): Goat-10Kg",
    "meds": [
      {
        "name": "Inj. Cholera Saline",
        "dosage": "10 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "শিরায় ইঞ্জেকশন দিবেন (Inject Intra Venously)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Action 3 (0.5%) Vet",
        "dosage": ".3 ml",
        "interval": "Once Daily",
        "duration": "2 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "1 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder DD-Nil (Vet)",
        "dosage": "50 g",
        "interval": "Thrice Daily",
        "duration": "5 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Afternoon",
          "Night"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": []
  },
  {
    "family": "Phosphorus Deficiency/ Pica, Osteomalacia",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Phosphorus Deficiency/ Pica, Osteomalacia: Cow: 300 Kg",
    "meds": [
      {
        "name": "Syrup Arocal-Vet",
        "dosage": "100 ml",
        "interval": "Once Daily",
        "duration": "30 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Renasol ADE",
        "dosage": "20 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Vita-D-PLus",
        "dosage": "100 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Dexavet (0.2%, 2mg/ml)",
        "dosage": "10 tablet",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. E-Vet Plus",
        "dosage": "30 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Pink Eye (Infectious Keratoconjunctivitis)",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Pink Eye (Infectious Keratoconjunctivitis) Cattle:300 Kg",
    "meds": [
      {
        "name": "Eye Drop Civodex Vet",
        "dosage": "4 drop",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "চোখে ফোটা দিবেন (Drop in Eye)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Tylo PC Gold",
        "dosage": "30 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Longosona",
        "dosage": "30 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": []
  },
  {
    "family": "Pink Eye/Infectious Keratoconjunctivitis (Moraxella Bovis: Gm-ve/ Mycoplasma/Chlamydia: Gm-ve/ Listeria: Gm +ve",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Pink Eye/Infectious Keratoconjunctivitis (Moraxella Bovis: Gm-ve/ Mycoplasma/Chlamydia: Gm-ve/ Listeria: Gm +ve, Cattle: 300Kg",
    "meds": [
      {
        "name": "Eye Drop Freshtear",
        "dosage": "4 drop",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "চোখে ফোটা দিবেন (Drop in Eye)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Tylo PC Gold",
        "dosage": "30 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Longosona",
        "dosage": "30 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": []
  },
  {
    "family": "Pneumonia / Calf Pneumonia (Bovine Respiratory Disease Complex — BRD)",
    "animal": "Calf",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Pneumonia / Calf Pneumonia (Bovine Respiratory Disease Complex — BRD) Cattle 300Kg",
    "meds": [
      {
        "name": "Inj. Acicef-4, 0.5g (10ml), 1gm (20ml)",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Inj. F-NIL Vet / Tufnil - 40 mg/ml, \nBol. Tufnil 200mg/Bol",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "3 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Filin/ Aminophylline: 125mg/5ml, \nTab. Filin/ Aminophylline: 100mg",
        "dosage": "30 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Windel Plus Nebulizer Solution – 3ml ample (1mg/ml)",
        "dosage": "3 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "dosage_form_unit_mismatch",
      "interval_schedule_mismatch",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Polioencephalomalacia",
    "animal": "Calf",
    "refWeightKg": 50,
    "pregnantOnly": false,
    "sourceTitle": "Polioencephalomalacia: Calf- 50 kgs",
    "meds": [
      {
        "name": "Inj. Thiason",
        "dosage": "20 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. PA zinc",
        "dosage": "20 ml",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup Arocal-Vet",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. Magsulfate",
        "dosage": "10 g",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "interval_schedule_mismatch"
    ]
  },
  {
    "family": "Post Parturient Hemoglobinuria/ Hypophosphatemia/ Phosphorus Deficiency",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Post Parturient Hemoglobinuria/ Hypophosphatemia/ Phosphorus Deficiency: Cow - 300kgs",
    "meds": [
      {
        "name": "Powder DCP Plus",
        "dosage": "100 g",
        "interval": "Once Daily",
        "duration": "30 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup D-Iron",
        "dosage": "1 tablet",
        "interval": "Once Daily",
        "duration": "30 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. GainFast Vet",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "30 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup Arocal-Vet",
        "dosage": "100 ml",
        "interval": "Once Daily",
        "duration": "30 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "dosage_form_unit_mismatch",
      "interval_schedule_mismatch",
      "missing_route"
    ]
  },
  {
    "family": "Pulmonary Emphysema (Interstitial/Alveolar overdistension)",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Pulmonary Emphysema (Interstitial/Alveolar overdistension) Cattle 300Kg",
    "meds": [
      {
        "name": "Inj. Acicef-4, 0.5g (10ml), 1gm (20ml)",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Inj. F-NIL Vet / Tufnil - 40 mg/ml, \nBol. Tufnil 200mg/Bol",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "3 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Filin/ Aminophylline: 125mg/5ml, \nTab. Filin/ Aminophylline: 100mg",
        "dosage": "30 tablet",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Windel Plus Nebulizer Solution – 3ml ample (1mg/ml)",
        "dosage": "3 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "dosage_form_unit_mismatch",
      "interval_schedule_mismatch",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Pyelonephritis / UTI / Pyuria",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Pyelonephritis / UTI / Pyuria- Cattle:300Kg",
    "meds": [
      {
        "name": "Salidone Vet",
        "dosage": "90 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Inj. F-NIL Vet / Tufnil - 40 mg/ml, \nBol. Tufnil 200mg/Bol",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "3 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. Ammonium Chloride",
        "dosage": "10 g",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "dosage_form_unit_mismatch",
      "interval_schedule_mismatch",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Pyelonephritis/ UTI/ pyuria/ Corynebacterium/ Contagious Bovine Pyelonephritis (Gm+ve)",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Pyelonephritis/ UTI/ pyuria/ Corynebacterium/ Contagious Bovine Pyelonephritis (Gm+ve)- Cattle: 300 Kg",
    "meds": [
      {
        "name": "Salidone Vet",
        "dosage": "90 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Inj. F-NIL Vet / Tufnil - 40 mg/ml, \nBol. Tufnil 200mg/Bol",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "3 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. Ammonium Chloride",
        "dosage": "10 g",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "dosage_form_unit_mismatch",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Rabies",
    "animal": "Cow",
    "refWeightKg": 100,
    "pregnantOnly": false,
    "sourceTitle": "Rabies (Dog/Fox/Cat Bite): Cattle-100Kg",
    "meds": [
      {
        "name": "Inj. Action 3 (0.5%) Vet",
        "dosage": "3 ml",
        "interval": "Once Daily",
        "duration": "3 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "5 ml",
        "interval": "Twice Daily",
        "duration": "3 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Parasitin/ Acimec/ Amectin – 1%",
        "dosage": "1 tablet",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [],
        "active": true,
        "qualityFlags": [
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Pow. Ectonil Vet",
        "dosage": "1.5 g",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Phenadryl Vet",
        "dosage": "5 ml",
        "interval": "Once Daily",
        "duration": "3 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Ointment Neocin",
        "dosage": "1 tablet",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Povin/ viodin Solution",
        "dosage": "5 ml",
        "interval": "Twice Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Repeat Breeder/Conception Failure",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Repeat Breeder/Conception Failure- Cattle:300Kg",
    "meds": [
      {
        "name": "Syp. Iverzol",
        "dosage": "30 ml",
        "interval": "Once Daily",
        "duration": "10 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Renasol ADE",
        "dosage": "30 ml",
        "interval": "Once Daily",
        "duration": "12 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. GainFast Vet",
        "dosage": "30 ml",
        "interval": "Once Daily",
        "duration": "12 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder Kemtrace Optimax",
        "dosage": "100 g",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder Bergafat",
        "dosage": "100 g",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder Boost-3",
        "dosage": "50 g",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup Sure AI",
        "dosage": "50 ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": []
  },
  {
    "family": "Retention of Placenta (ROP)",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Retention of Placenta (ROP)- Cattle: 300Kg",
    "meds": [
      {
        "name": "Inj. Metherspan",
        "dosage": "6 ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Uni-Oxytocin",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "3 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Dextrose - 10%",
        "dosage": "3000 ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "শিরায় ইঞ্জেকশন দিবেন (Inject Intra Venously)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Renasol ADE",
        "dosage": "30 ml",
        "interval": "Thrice Daily",
        "duration": "3 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning",
          "Afternoon",
          "Night"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": []
  },
  {
    "family": "Rhinitis/ Common Cold/ Allergic Couging (২০০কেজি)",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Rhinitis/ Common Cold/ Allergic Couging (২০০কেজি)",
    "meds": [
      {
        "name": "N/D Rynex",
        "dosage": "1 tablet",
        "interval": "দৈনিক তিনবার (Thrice Daily)",
        "duration": "7 days",
        "route": "নাকে ফোটা দিবেন (Drop in Nose)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "20 tablet",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Action 3 (0.5%) Vet",
        "dosage": "9.9 tablet",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "চামড়ার নিচে ইঞ্জেকশন দিবেন (Inject Subcutaneously)",
        "schedule": [],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Acimox/ Moxacil-1g (10ml)",
        "dosage": "19.8 tablet",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Rickets/ Osteomalacia",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Rickets/ Osteomalacia: Cow: 300 Kg",
    "meds": [
      {
        "name": "Syrup Arocal-Vet",
        "dosage": "100 ml",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Renasol ADE",
        "dosage": "20 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Vita-D-PLus",
        "dosage": "100 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Dexavet (0.2%, 2mg/ml)",
        "dosage": "20 ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. E-Vet Plus",
        "dosage": "30 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. Magsulfate",
        "dosage": "10 g",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "ক্ষতস্থানে লাগাবেন (Apply Locally)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "interval_schedule_mismatch",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Selenium/Vitamin E Deficiency/ White Muscle Disease",
    "animal": "Cow",
    "refWeightKg": 100,
    "pregnantOnly": false,
    "sourceTitle": "Selenium/Vitamin E Deficiency/ White Muscle Disease: Cattle - 100kgs.",
    "meds": [
      {
        "name": "Inj. E-Vet Plus",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "7 continuous",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab. Anox D",
        "dosage": "2 tablet",
        "interval": "Once Daily",
        "duration": "29 days",
        "route": "",
        "schedule": [],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. E Sel",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "30 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_route"
    ]
  },
  {
    "family": "Septic / Chronic Metritis / Septic Pyometra (with Fever)",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Septic / Chronic Metritis / Septic Pyometra (with Fever)- Cattle: 300Kg",
    "meds": [
      {
        "name": "Inj. Acicef-3/ Bovixon, 250mg (2.5ml), 500mg (5ml), 1gm (10ml)",
        "dosage": "30 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Reprolyse",
        "dosage": "4 ml",
        "interval": "Once Daily",
        "duration": "14 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Longosona",
        "dosage": "60 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Uni-Oxytocin",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "3 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hartsol/ NS",
        "dosage": "100 ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "ক্ষতস্থানে লাগাবেন (Apply Locally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Otetra Vet LA",
        "dosage": "20 ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "প্রস্রাবের রাস্তায় দিবেন (Apply Per Vaginally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Strangles (Streptococcus Equi)",
    "animal": "Horse",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Strangles (Streptococcus Equi), Horse-300Kg",
    "meds": [
      {
        "name": "Bipen-Vet® Injection",
        "dosage": "30 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Action 3 (0.5%) Vet",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_route"
    ]
  },
  {
    "family": "Surgical Wound (Cesarian Section, Hernia, Gid Disease, Castration, Amputation, Fracture, Rumenotomy, Tumer etc)",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Surgical Wound (Cesarian Section, Hernia, Gid Disease, Castration, Amputation, Fracture, Rumenotomy, Tumer etc) Cattle:300 kg",
    "meds": [
      {
        "name": "Inj. Acicef-4, 0.5g (10ml), 1gm (20ml)",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Action 3 (0.5%) Vet",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "15 ml",
        "interval": "Twice Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Tetanus",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Tetanus- Cattle: 300Kg",
    "meds": [
      {
        "name": "Inj. Vaxitet-IG",
        "dosage": "1 ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Bipen-Vet® Injection",
        "dosage": "30 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": []
  },
  {
    "family": "Vaginitis / Cervicitis",
    "animal": "Cow",
    "refWeightKg": 300,
    "pregnantOnly": false,
    "sourceTitle": "Vaginitis / Cervicitis: Cattle-300Kg",
    "meds": [
      {
        "name": "Inj. Hartsol/ NS",
        "dosage": "50 ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "ক্ষতস্থানে লাগাবেন (Apply Locally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Otetra Vet LA",
        "dosage": "20 ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "প্রস্রাবের রাস্তায় দিবেন (Apply Per Vaginally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Vitamin C-responsive Dermatitis/ Scurvy",
    "animal": "Calf",
    "refWeightKg": 50,
    "pregnantOnly": false,
    "sourceTitle": "Vitamin C-responsive Dermatitis/ Scurvy: Calf- 50 kgs.",
    "meds": [
      {
        "name": "Inj. Ascoson -500mg/5ml",
        "dosage": "5 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. PA zinc",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "7 months",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Pow. Cevit",
        "dosage": "10 g",
        "interval": "Once Daily",
        "duration": "7 months",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Weak Calf Syndrome",
    "animal": "Calf",
    "refWeightKg": 40,
    "pregnantOnly": false,
    "sourceTitle": "Weak Calf Syndrome: Cattle- 40kg.",
    "meds": [
      {
        "name": "Syrup D-Iron",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. GainFast Vet",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup Arocal-Vet",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "মুখে খাওয়াবেন (Fed Orally)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Renasol ADE",
        "dosage": "2 ml",
        "interval": "Once Daily",
        "duration": "10 days",
        "route": "মাংসে ইঞ্জেকশন দিবেন (Inject Intramuscularly)",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": []
  }
];
