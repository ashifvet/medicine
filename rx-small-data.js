// Small-animal legacy protocols annotated for clinical review — checked 2026-08-21
const RX_SMALL = [
  {
    "family": "Acidosis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Acidosis: Cat-3kgs",
    "meds": [
      {
        "name": "Flacol/ Flatulex Pediatric Drops (Antiflatulent, Antiulcerant, Antacid, laxative )",
        "dosage": "2 pills",
        "interval": "Once Daily",
        "duration": "3 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup Famotid-40mg/5ml (Gastroprotectants)",
        "dosage": "1 pills",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup. Gavilac / Gaviscon (Antiflatulent, Antiulcerant, Antacid, laxative )",
        "dosage": "1 pills",
        "interval": "Once Daily",
        "duration": "3 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
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
    "family": "Acidosis",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Acidosis: Dog - 10kgs",
    "meds": [
      {
        "name": "Flacol/ Flatulex Pediatric Drops (Antiflatulent, Antiulcerant, Antacid, laxative )",
        "dosage": "2 spoon",
        "interval": "Once Daily",
        "duration": "3 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup Famotid-40mg/5ml (Gastroprotectants)",
        "dosage": "2 spoon",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup. Gavilac / Gaviscon (Antiflatulent, Antiulcerant, Antacid, laxative )",
        "dosage": "2 spoon",
        "interval": "Once Daily",
        "duration": "3 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
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
    "family": "Allergic Dermatitis/ Chronic Pyoderma",
    "animal": "Dog",
    "refWeightKg": 20,
    "pregnantOnly": false,
    "sourceTitle": "Allergic Dermatitis/ Chronic Pyoderma (Dog, 20 Kg, 3 Months)",
    "meds": [
      {
        "name": "Inj. Ampicin Vet (Antibiotics)",
        "dosage": "2 ml",
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
        "name": "Inj. Hista vet -10ml (Antihistamine)",
        "dosage": "2 ml",
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
        "name": "Oint Dermasim (Topical Solution) (Antibiotics)",
        "dosage": "1 ml",
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
        "name": "Syp. PA-Zinc C (Vitamine/ Zinc)",
        "dosage": "1 spoon",
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
        "name": "Inj. Mpain/ Inj. Mel-Vet- 0.5% (Antibiotics)",
        "dosage": "1 ml",
        "interval": "Once Daily",
        "duration": "1 alternative days",
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
        "name": "Povin/ viodin Solution (Antiseptic Solution)",
        "dosage": "1 spoon",
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
      },
      {
        "name": "Inj.Acimec 1% (Anti Parasitic)",
        "dosage": "1 ml",
        "interval": "Once Daily",
        "duration": "7 alternative days",
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
      "interval_schedule_mismatch",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Alopecia – Cat",
    "animal": "Cat",
    "refWeightKg": 2.5,
    "pregnantOnly": false,
    "sourceTitle": "Alopecia – Cat, 2.5 kg",
    "meds": [
      {
        "name": "Tab. Ivera/Alice/Scabo- 6mg/12mg (Anthelmintics )",
        "dosage": "0.25 pills",
        "interval": "Once Daily",
        "duration": "2 weeks",
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
        "name": "Syrup D-Zinc (Nutritional)",
        "dosage": "1 pills",
        "interval": "Once Daily",
        "duration": "7 days",
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
        "name": "Dr. PETZ Ultivite Gel (Multivitamin)",
        "dosage": "1 pills",
        "interval": "Once Daily",
        "duration": "15 days",
        "route": "",
        "schedule": [
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "PetHex Shampoo (Antifungal\nShampoo)",
        "dosage": "10 pills",
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
    "family": "Anemia",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Anemia (Cat:3Kg)",
    "meds": [
      {
        "name": "Dr. PETZ Ultivite Gel",
        "dosage": "9 g",
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
      },
      {
        "name": "Tab. Dr. Petz Iromin",
        "dosage": "0.3 tablet",
        "interval": "Twice Daily",
        "duration": "30 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. PA Cal-Meat",
        "dosage": "50 g",
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
    "family": "Anemia",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Anemia (Dog:10Kg)",
    "meds": [
      {
        "name": "Dr. PETZ Ultivite Gel",
        "dosage": "30 g",
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
      },
      {
        "name": "Tab. Dr. Petz Iromin",
        "dosage": "1 tablet",
        "interval": "Twice Daily",
        "duration": "30 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. PA Cal-Meat",
        "dosage": "450 g",
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
    "family": "Benign Prostatic Hyperplasia: Dog",
    "animal": "Dog",
    "refWeightKg": 30,
    "pregnantOnly": false,
    "sourceTitle": "Benign Prostatic Hyperplasia: Dog, 30kgs",
    "meds": [
      {
        "name": "Inj. Criston 2 – 2mg",
        "dosage": "1 ml",
        "interval": "Weekly",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Roxadex (5mg/ml, 1ml ample)",
        "dosage": "2 ml",
        "interval": "Monthly",
        "duration": "0 until_recovery",
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
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "2 ml",
        "interval": "Once Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Acicef-4, 0.5g (10ml), 1gm (20ml)",
        "dosage": "2 ml",
        "interval": "Once Daily",
        "duration": "15 days",
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
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Bite Wound",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Bite Wound : Cat - 3kgs (Dog/ Cat/ Fox Bite)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen (Antibiotics)",
        "dosage": "0.3 ml",
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
      },
      {
        "name": "Inj. Mpain/ Inj. Mel-Vet- 0.5% (Antibiotics)",
        "dosage": "0.15 ml",
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
        "name": "Inj. Rabisin (Vaccines)",
        "dosage": "1 ml",
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
        "name": "Povin/ viodin Solution (Antiseptic Solution)",
        "dosage": "2 spoon",
        "interval": "Once Daily",
        "duration": "5 days",
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
        "name": "Inj. Vaxitet / TT Vax (Vaccines)",
        "dosage": "0.5 ml",
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
    "family": "Blepharitis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Blepharitis (Cat: 3kgs)",
    "meds": [
      {
        "name": "Eye Drop Teargel/\nHypro Tears Gel",
        "dosage": "ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_or_non_numeric_dosage",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "E/D Moxiflox",
        "dosage": "2 ml",
        "interval": "Thrice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Mpain/ Inj. Mel-Vet- 0.5%",
        "dosage": "0.15 ml",
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
      },
      {
        "name": "Syp. Cefixime- 100mg/5ml, 200mg/5ml",
        "dosage": "1.25 ml",
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
      },
      {
        "name": "Syp. Alatrol-5mg/5ml",
        "dosage": "0.5 ml",
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
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_or_invalid_duration",
      "missing_or_non_numeric_dosage",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Blepharitis",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Blepharitis (Dog: 10kgs)",
    "meds": [
      {
        "name": "Eye Drop Teargel/\nHypro Tears Gel",
        "dosage": "4 drop",
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
        "name": "E/D Moxiflox",
        "dosage": "3 drop",
        "interval": "Thrice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
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
        "name": "Inj. Mpain/ Inj. Mel-Vet- 0.5%",
        "dosage": "0.5 ml",
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
      },
      {
        "name": "Syp. Cefixime- 100mg/5ml, 200mg/5ml",
        "dosage": "1.5 ml",
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
      },
      {
        "name": "Syp. Alatrol-5mg/5ml",
        "dosage": "1 ml",
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
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Blood Dysentry",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Blood Dysentry: Cat-3kgs",
    "meds": [
      {
        "name": "Syp. Amodis -200mg/5ml (Antibiotics)",
        "dosage": "1.5 pills",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab. PA D-CON (Antidiarrhoeal )",
        "dosage": "1 pills",
        "interval": "Once Daily",
        "duration": "3 days",
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
        "name": "Syp. PA-Zinc C (Vitamine/ Zinc)",
        "dosage": "2 ml",
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
      },
      {
        "name": "Pow. PA lyte (Electrolyte)",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Tracid Vet, Tab. Tracid (Coagulant)",
        "dosage": "2 pills",
        "interval": "Once Daily",
        "duration": "5 days",
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
      },
      {
        "name": "Inj. K MM, K- One (Coagulant)",
        "dosage": "0.2 ml",
        "interval": "Once Daily",
        "duration": "5 days",
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
    "family": "Blood Dysentry: Dog",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Blood Dysentry: Dog (10kgs)",
    "meds": [
      {
        "name": "Syp. Amodis -200mg/5ml (Antibiotics)",
        "dosage": "1.5 spoon",
        "interval": "Once Daily",
        "duration": "5 days",
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
      },
      {
        "name": "Tab. PA D-CON (Antidiarrhoeal )",
        "dosage": "2 pills",
        "interval": "Once Daily",
        "duration": "3 days",
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
        "name": "Syp. PA-Zinc C (Vitamine/ Zinc)",
        "dosage": "2 spoon",
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
      },
      {
        "name": "Pow. PA lyte (Electrolyte)",
        "dosage": "99.9 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Tracid Vet, Tab. Tracid (Coagulant)",
        "dosage": "2 pills",
        "interval": "Once Daily",
        "duration": "5 days",
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
      },
      {
        "name": "Inj. K MM, K- One (Coagulant)",
        "dosage": "1 ml",
        "interval": "Once Daily",
        "duration": "5 days",
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
    "family": "Bloody Diarrhea/Dysentry",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Bloody Diarrhea/Dysentry: Cat-3kgs",
    "meds": [
      {
        "name": "Tab. PA D-CON (Antidiarrhoeal )",
        "dosage": "1 pills",
        "interval": "Once Daily",
        "duration": "3 days",
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
        "name": "Syp. PA-Zinc C (Vitamine/ Zinc)",
        "dosage": "2 ml",
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
      },
      {
        "name": "Pow. PA lyte (Electrolyte)",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Tracid Vet, Tab. Tracid (Coagulant)",
        "dosage": "2 pills",
        "interval": "Once Daily",
        "duration": "5 days",
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
      },
      {
        "name": "Inj. K MM, K- One (Coagulant)",
        "dosage": "0.2 ml",
        "interval": "Once Daily",
        "duration": "5 days",
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
      },
      {
        "name": "Syp. Zimax - 200mg/5ml (Antibiotics)",
        "dosage": "0.5 ml",
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
    "family": "Bloody Diarrhea/Dysentry",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Bloody Diarrhea/Dysentry: Dog - 10kgs",
    "meds": [
      {
        "name": "Tab. PA D-CON (Antidiarrhoeal )",
        "dosage": "2 pills",
        "interval": "Once Daily",
        "duration": "3 days",
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
        "name": "Syp. PA-Zinc C (Vitamine/ Zinc)",
        "dosage": "2 spoon",
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
      },
      {
        "name": "Pow. PA lyte (Electrolyte)",
        "dosage": "100 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Tracid Vet, Tab. Tracid (Coagulant)",
        "dosage": "2 ml",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. K MM, K- One (Coagulant)",
        "dosage": "1 ml",
        "interval": "Once Daily",
        "duration": "5 days",
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
      },
      {
        "name": "Syp. Zimax - 200mg/5ml (Antibiotics)",
        "dosage": "2 ml",
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
    "family": "Canine Babesiosis",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Canine Babesiosis (Dog, 10kgs)",
    "meds": [
      {
        "name": "Inj. Babecure 120mg",
        "dosage": "0.25 ml",
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
        "name": "Syp. Zimax - 200mg/5ml",
        "dosage": "1.5 ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Liv-52",
        "dosage": "10 ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hartsol/ Hartman Plus Saline",
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
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Canine Distemper (CDV)",
    "animal": "Dog",
    "refWeightKg": 20,
    "pregnantOnly": false,
    "sourceTitle": "Canine Distemper (CDV) : 20kgs",
    "meds": [
      {
        "name": "Inj. Acicef-4, 0.5g (10ml), 1gm (20ml) (Antibiotics)",
        "dosage": "1 pills",
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
        "name": "Inj. Seclo/ Omep/ Omeprazole -40mg/ 10ml (Gastroprotectants)",
        "dosage": "3 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. GainFast Vet (Growth Promoter )",
        "dosage": "4 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Ascoson -500mg/5ml (Vitamin C)",
        "dosage": "5 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hartsol/ Hartman Plus Saline (Fluid Therapy)",
        "dosage": "40 ml",
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
        "name": "Inj. Nervin/ Neuro- B (Vitamin B Complex)",
        "dosage": "3 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Barbit/G-Phenobarbitone – 200mg/ml, Syp-20mg/5ml (Anticonvulsant/ barbiturate)",
        "dosage": "2 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
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
    "family": "Canine Gastro-Enteritis",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Canine Gastro-Enteritis, Dog: 10kg (Copy)",
    "meds": [
      {
        "name": "Inj. Acicef-4, 0.5g (10ml), 1gm (20ml) (Antibiotics)",
        "dosage": "0.5 ml",
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
        "name": "Inj. Zofra, Anset, Emistat – 8mg/4ml, \nTab. Zofra – 4mg, 8mg (Antivomiting )",
        "dosage": "1 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Seclo/ Omep/ Omeprazole -40mg/ 10ml (Gastroprotectants)",
        "dosage": "2 ml",
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
      },
      {
        "name": "Inj. Aminovit Plus Vet -20ml (Growth Promoter )",
        "dosage": "2 ml",
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
        "name": "Inj. Hartsol/ Hartman Plus Saline (Fluid Therapy)",
        "dosage": "20 ml",
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
    "family": "Canine Parvo",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Canine Parvo, Dog: 10kg",
    "meds": [
      {
        "name": "Inj. Acicef-4, 0.5g (10ml), 1gm (20ml) (Antibiotics)",
        "dosage": "0.5 ml",
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
        "name": "Inj. Zofra, Anset, Emistat – 8mg/4ml, \nTab. Zofra – 4mg, 8mg (Antivomiting )",
        "dosage": "1 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Seclo/ Omep/ Omeprazole -40mg/ 10ml (Gastroprotectants)",
        "dosage": "2 ml",
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
      },
      {
        "name": "Inj. Aminovit Plus Vet -20ml (Growth Promoter )",
        "dosage": "2 ml",
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
        "name": "Inj. Hartsol/ Hartman Plus Saline (Fluid Therapy)",
        "dosage": "20 ml",
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
    "family": "Canine Transmissible Benign Tumer (CTVT): Dog",
    "animal": "Dog",
    "refWeightKg": 30,
    "pregnantOnly": false,
    "sourceTitle": "Canine Transmissible Benign Tumer (CTVT): Dog, 30kgs",
    "meds": [
      {
        "name": "Inj. Criston 2 – 2mg",
        "dosage": "1 ml",
        "interval": "Weekly",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Roxadex (5mg/ml, 1ml ample)",
        "dosage": "2 ml",
        "interval": "Monthly",
        "duration": "0 until_recovery",
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
      },
      {
        "name": "Inj. Hista vet -10ml",
        "dosage": "2 ml",
        "interval": "Once Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Acicef-4, 0.5g (10ml), 1gm (20ml)",
        "dosage": "2 ml",
        "interval": "Once Daily",
        "duration": "15 days",
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
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Chronic Wound/Chronic or Fresh Traumatic Wound/ Complicated Surgical wound/ Myiasis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Chronic Wound/Chronic or Fresh Traumatic Wound/ Complicated Surgical wound/ Myiasis (Cat, 3kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen (Antibiotics)",
        "dosage": "0.3 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Mpain/ Inj. Mel-Vet- 0.5% (Antibiotics)",
        "dosage": "0.15 ml",
        "interval": "Once Daily",
        "duration": "2 days",
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
        "name": "Inj. Parasitin/ Acimec/ Amectin – 1% (Anthelmintics )",
        "dosage": "0.15 ml",
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
        "name": "Syp. Alatrol-5mg/5ml (Antihistamine)",
        "dosage": "3 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Hyperoxi/ Hydrogen Per Oxide – 100ml (Vomiting )",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "2 days",
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
      },
      {
        "name": "Inj. Ascoson -500mg/5ml (Vitamin C)",
        "dosage": "0.5 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
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
    "family": "Colic",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Colic: Cat-3kg",
    "meds": [
      {
        "name": "Flacol/ Flatulex Pediatric Drops (Antiflatulent, Antiulcerant, Antacid, laxative )",
        "dosage": "1 pills",
        "interval": "Once Daily",
        "duration": "3 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup Famotid-40mg/5ml (Gastroprotectants)",
        "dosage": "1 pills",
        "interval": "Once Daily",
        "duration": "3 days",
        "route": "",
        "schedule": [],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Avolac (Antiflatulent, Antiulcerant, Antacid, laxative )",
        "dosage": "1 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
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
    "family": "Complicated Wound/ Secondary Bacterial infection",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Complicated Wound/ Secondary Bacterial infection (Cat: 3kgs)",
    "meds": [
      {
        "name": "Inj. Fixin Vet",
        "dosage": "0.15 ml",
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
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "0.5 ml",
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
        "name": "Inj. Phenadryl Vet",
        "dosage": "0.5 ml",
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
        "name": "Inj.Acimec 1%",
        "dosage": "0.15 ml",
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
        "dosage": "1 unit",
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
        "name": "Fly Repellent- Ectonil Vet",
        "dosage": "1.5 g",
        "interval": "Once Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Cream Dermasol N",
        "dosage": "1 unit",
        "interval": "Twice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Cornal Ulcer",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Cornal Ulcer: Cat-3kgs",
    "meds": [
      {
        "name": "Eye Drop Tearfresh/ Aquafresh Liquigel (Eye Drop- Lubricant)",
        "dosage": "2 drop",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Eye Drop Moxigen (Antibiotics)",
        "dosage": "2 drop",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Cefixime- 100mg/5ml, 200mg/5ml (Antibiotics)",
        "dosage": "1.5 ml",
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
      },
      {
        "name": "Syp. Fexo-30mg/5ml, Tab.60/120/180mg (Antihistamine)",
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
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab. Cortisol, Cortan – 2mg/5mg/10mg, \nSyp. Cortisol, Cortan – 5mg/5ml (Antibiotics)",
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
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup Famotid-40mg/5ml (Gastroprotectants)",
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
    "family": "Cystitis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Cystitis (Cat: 3kgs)",
    "meds": [
      {
        "name": "Inj. Acicef-3/ Bovixon, 250mg (2.5ml), 500mg (5ml), 1gm (10ml)",
        "dosage": "0.2 ml",
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
      },
      {
        "name": "Syp. Urokit Plus",
        "dosage": "3 ml",
        "interval": "Twice Daily",
        "duration": "15 days",
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
        "name": "Inj. Tracid Vet, Tab. Tracid",
        "dosage": "0.35 ml",
        "interval": "Twice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Normal saline",
        "dosage": "70 ml",
        "interval": "Hourly",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Sedil – 10mg/ 2ml, Tab. Sedil – 5mg",
        "dosage": "0.15 ml",
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
        "name": "Powder. Ammonium Chloride",
        "dosage": "5 g",
        "interval": "Once Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
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
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Cystitis",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Cystitis (Dog: 10kgs)",
    "meds": [
      {
        "name": "Inj. Acicef-3/ Bovixon, 250mg (2.5ml), 500mg (5ml), 1gm (10ml)",
        "dosage": "1.5 ml",
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
      },
      {
        "name": "Syp. Urokit Plus",
        "dosage": "5 ml",
        "interval": "Twice Daily",
        "duration": "15 days",
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
        "name": "Inj. Tracid Vet, Tab. Tracid",
        "dosage": "1 ml",
        "interval": "Twice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Normal saline",
        "dosage": "250 ml",
        "interval": "Hourly",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Sedil – 10mg/ 2ml, Tab. Sedil – 5mg",
        "dosage": "0.5 ml",
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
        "name": "Powder. Ammonium Chloride",
        "dosage": "10 g",
        "interval": "Once Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
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
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Diabetes",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Diabetes (Cat:3Kg)",
    "meds": [
      {
        "name": "Tab. Atova-10mg",
        "dosage": "0.3 tablet",
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
    "family": "Diabetes",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Diabetes (Dog:10Kg)",
    "meds": [
      {
        "name": "Tab. Atova-10mg",
        "dosage": "0.9 tablet",
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
    "family": "Drug Poisoning",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Drug Poisoning (Cat:3kg)",
    "meds": [
      {
        "name": "Resurge",
        "dosage": ".30 ml",
        "interval": "Hourly",
        "duration": "2 until_recovery",
        "route": "",
        "schedule": [],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Barbit/G-Phenobarbitone – 200mg/ml, Syp-20mg/5ml",
        "dosage": ".3 ml",
        "interval": "Twice Daily",
        "duration": "until_recovery",
        "route": "",
        "schedule": [
          "Morning",
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
        "name": "Inj. Hartsol/ NS",
        "dosage": "30 ml",
        "interval": "Thrice Daily",
        "duration": "until_recovery",
        "route": "",
        "schedule": [],
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
    "family": "Drug Poisoning",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Drug Poisoning (Dog, 10Kgs)",
    "meds": [
      {
        "name": "Inj. Barbit/G-Phenobarbitone – 200mg/ml, Syp-20mg/5ml",
        "dosage": "1 ml",
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
      },
      {
        "name": "Inj. Hartsol/ Hartman Plus Saline",
        "dosage": "0.1 ml",
        "interval": "Twice Daily",
        "duration": "0 days",
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
    "family": "Dry Eye",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Dry Eye: Cat-3kgs",
    "meds": [
      {
        "name": "Eye Drop Tearfresh/ Aquafresh Liquigel (Eye Drop- Lubricant)",
        "dosage": "2 drops",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Eye Drop Teargel/\nHypro Tears Gel (Eye Drop- Vitamins)",
        "dosage": "2 drops",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
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
    "family": "Dysentry",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Dysentry: Cat-3kgs",
    "meds": [
      {
        "name": "Syp. Amodis -200mg/5ml (Antibiotics)",
        "dosage": "1.5 pills",
        "interval": "Once Daily",
        "duration": "5 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab. PA D-CON (Antidiarrhoeal )",
        "dosage": "1 pills",
        "interval": "Once Daily",
        "duration": "3 days",
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
        "name": "Syp. PA-Zinc C (Vitamine/ Zinc)",
        "dosage": "2 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Pow. PA lyte (Electrolyte)",
        "dosage": "10 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
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
    "family": "Dysentry",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Dysentry: Dog- 10kgs",
    "meds": [
      {
        "name": "Syp. Amodis -200mg/5ml (Antibiotics)",
        "dosage": "2 spoon",
        "interval": "Once Daily",
        "duration": "5 days",
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
      },
      {
        "name": "Tab. PA D-CON (Antidiarrhoeal )",
        "dosage": "1.9 pills",
        "interval": "Once Daily",
        "duration": "3 days",
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
        "name": "Syp. PA-Zinc C (Vitamine/ Zinc)",
        "dosage": "2 spoon",
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
      },
      {
        "name": "Pow. PA lyte (Electrolyte)",
        "dosage": "100 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
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
      "interval_schedule_mismatch",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Ear Hematoma",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Ear Hematoma: Cat-3kgs (Copy) (Copy)",
    "meds": [
      {
        "name": "Eye Drop Moxidex Vet (Antibiotics)",
        "dosage": "3 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Cefixime- 100mg/5ml, 200mg/5ml (Antibiotics)",
        "dosage": "1.5 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Alatrol-5mg/5ml (Antihistamine)",
        "dosage": "3 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Parasitin/ Acimec/ Amectin – 1% (Anthelmintics )",
        "dosage": "1 pills",
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
        "name": "Inj. Mpain/ Inj. Mel-Vet- 0.5% (Antibiotics)",
        "dosage": "0.15 pills",
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
    "family": "Ear Mites ;",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Ear Mites ; Cat-3kgs",
    "meds": [
      {
        "name": "​Ear Cleaner OTI Pure liquid (Ear Cleaner)",
        "dosage": "5 pills",
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
        "name": "Eye Drop Moxidex Vet (Antibiotics)",
        "dosage": "3 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Alatrol-5mg/5ml (Antihistamine)",
        "dosage": "3 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Parasitin/ Acimec/ Amectin – 1% (Anthelmintics )",
        "dosage": "0.2 pills",
        "interval": "Once Daily",
        "duration": "2 weeks",
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
    "family": "Ear Swelling",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Ear Swelling: Cat-3kgs (Copy)",
    "meds": [
      {
        "name": "​Ear Cleaner OTI Pure liquid (Ear Cleaner)",
        "dosage": "5 pills",
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
        "name": "Eye Drop Moxidex Vet (Antibiotics)",
        "dosage": "3 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Cefixime- 100mg/5ml, 200mg/5ml (Antibiotics)",
        "dosage": "1.5 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Alatrol-5mg/5ml (Antihistamine)",
        "dosage": "3 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Parasitin/ Acimec/ Amectin – 1% (Anthelmintics )",
        "dosage": "1 pills",
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
        "name": "Inj. Mpain/ Inj. Mel-Vet- 0.5% (Antibiotics)",
        "dosage": "0.15 pills",
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
    "family": "Ectoparasite in",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Ectoparasite in (Cat, 3kg)",
    "meds": [
      {
        "name": "Inj. Parasitin/ Acimec/ Amectin – 1% (Anthelmintics )",
        "dosage": "0.15 ml",
        "interval": "Once Daily",
        "duration": "2 days",
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
        "name": "Syp. PA-Zinc C (Vitamine/ Zinc)",
        "dosage": "2.5 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. PB-TONIC (Multivitamin)",
        "dosage": "2.5 ml",
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
        "name": "Powder Ectonil (Antiparasitic)",
        "dosage": "1.5 ml",
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
      "interval_schedule_mismatch",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Epilepsy/ Convulsion/ Seizures",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Epilepsy/ Convulsion/ Seizures: Cat - 3Kg",
    "meds": [
      {
        "name": "Inj. Barbit/G-Phenobarbitone – 200mg/ml, Syp-20mg/5ml",
        "dosage": "0.2 ml",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Magsum- IM/IV",
        "dosage": "0.3 ml",
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
      },
      {
        "name": "Inj. Nervin/ Neuro- B",
        "dosage": "0.3 ml",
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
    "family": "Feline Gastro Enteritis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Feline Gastro Enteritis, Cat- 3kg (Copy)",
    "meds": [
      {
        "name": "Inj. Acicef-4, 0.5g (10ml), 1gm (20ml) (Antibiotics)",
        "dosage": "0.3 ml",
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
        "name": "Inj. Zofra, Anset, Emistat – 8mg/4ml, \nTab. Zofra – 4mg, 8mg (Antivomiting )",
        "dosage": "0.3 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Seclo/ Omep/ Omeprazole -40mg/ 10ml (Gastroprotectants)",
        "dosage": "0.75 ml",
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
      },
      {
        "name": "Inj. Aminovit Plus Vet -20ml (Growth Promoter )",
        "dosage": "0.5 ml",
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
        "name": "Inj. Hartsol/ Hartman Plus Saline (Fluid Therapy)",
        "dosage": "20 ml",
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
    "family": "Feline Infectious Peritonitis (FIP)",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Feline Infectious Peritonitis (FIP) : Cat - 3 kgs",
    "meds": [
      {
        "name": "Inj. GS - 441524 (Anti Viral)",
        "dosage": "1 pills",
        "interval": "Once Daily",
        "duration": "90 days",
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
        "name": "Cap. Doxicap-100mg (Antibiotic)",
        "dosage": "0.3 ক্যাপসুল (Capsule)",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Dr. PETZ Ultivite Gel (Multivitamin)",
        "dosage": "5 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Liv-52 (Liver Tonic)",
        "dosage": "1 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab. Cortisol, Cortan – 2mg/5mg/10mg, \nSyp. Cortisol, Cortan – 5mg/5ml (Antibiotics)",
        "dosage": "2 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup Famotid-40mg/5ml (Gastroprotectants)",
        "dosage": "3 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
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
    "family": "Feline Lower Urinary Tract Disease - FLUTD",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Feline Lower Urinary Tract Disease - FLUTD: (Cat:3kgs)",
    "meds": [
      {
        "name": "Inj. Acicef-3/ Bovixon, 250mg (2.5ml), 500mg (5ml), 1gm (10ml)",
        "dosage": "0.2 ml",
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
      },
      {
        "name": "Syp. Urokit Plus",
        "dosage": "3 ml",
        "interval": "Twice Daily",
        "duration": "15 days",
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
        "name": "Inj. Tracid Vet, Tab. Tracid",
        "dosage": "0.35 ml",
        "interval": "Twice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Normal saline",
        "dosage": "70 ml",
        "interval": "Hourly",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Sedil – 10mg/ 2ml, Tab. Sedil – 5mg",
        "dosage": "0.15 ml",
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
        "name": "Powder. Ammonium Chloride",
        "dosage": "5 g",
        "interval": "Once Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
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
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Feline Lower Urinary Tract Disease - FLUTD",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Feline Lower Urinary Tract Disease - FLUTD (Dog: 10kgs)",
    "meds": [
      {
        "name": "Inj. Acicef-3/ Bovixon, 250mg (2.5ml), 500mg (5ml), 1gm (10ml)",
        "dosage": "1.5 ml",
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
      },
      {
        "name": "Syp. Urokit Plus",
        "dosage": "5 ml",
        "interval": "Twice Daily",
        "duration": "15 days",
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
        "name": "Inj. Tracid Vet, Tab. Tracid",
        "dosage": "1 ml",
        "interval": "Twice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Normal saline",
        "dosage": "250 ml",
        "interval": "Hourly",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Sedil – 10mg/ 2ml, Tab. Sedil – 5mg",
        "dosage": "0.5 ml",
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
        "name": "Powder. Ammonium Chloride",
        "dosage": "10 g",
        "interval": "Once Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
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
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Feline Penleukopenia",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Feline Penleukopenia, Cat- 3kg",
    "meds": [
      {
        "name": "Inj. Acicef-4, 0.5g (10ml), 1gm (20ml) (Antibiotics)",
        "dosage": "0.3 ml",
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
        "name": "Inj. Zofra, Anset, Emistat – 8mg/4ml, \nTab. Zofra – 4mg, 8mg (Antivomiting )",
        "dosage": "0.3 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Seclo/ Omep/ Omeprazole -40mg/ 10ml (Gastroprotectants)",
        "dosage": "0.5 ml",
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
      },
      {
        "name": "Inj. Aminovit Plus Vet -20ml (Growth Promoter )",
        "dosage": "0.5 ml",
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
        "name": "Inj. Hartsol/ Hartman Plus Saline (Fluid Therapy)",
        "dosage": "20 ml",
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
    "family": "Fluke Infestation/ Trematode Infestation",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Fluke Infestation/ Trematode Infestation (Cat, 3kgs)",
    "meds": [
      {
        "name": "Syp. PA-Zinc C",
        "dosage": "1.5 ml",
        "interval": "Once Daily",
        "duration": "1 months",
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
        "name": "Tab. Dr. Petz Iromin",
        "dosage": "0.5 tablet",
        "interval": "Once Daily",
        "duration": "1 months",
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
        "name": "Liv-52",
        "dosage": "1.5 ml",
        "interval": "Once Daily",
        "duration": "1 months",
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
        "name": "Syp. Iverzol",
        "dosage": "0.5 ml",
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
    "family": "Fluke Infestation/ Trematode Infestation",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Fluke Infestation/ Trematode Infestation (Dog, 10kgs)",
    "meds": [
      {
        "name": "Syp. Iverzol",
        "dosage": "1 ml",
        "interval": "Once Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. PA-Zinc C",
        "dosage": "ml",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_non_numeric_dosage",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab. Dr. Petz Iromin",
        "dosage": "1 tablet",
        "interval": "Once Daily",
        "duration": "1 months",
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
        "name": "Liv-52",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "1 months",
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
      "missing_or_invalid_duration",
      "missing_or_non_numeric_dosage",
      "missing_route"
    ]
  },
  {
    "family": "Food Poisoning",
    "animal": "Dog",
    "refWeightKg": 15,
    "pregnantOnly": false,
    "sourceTitle": "Food Poisoning (Dog: 15kgs )",
    "meds": [
      {
        "name": "Syp. Oxecone-MS \nSyp. Avlocid MS",
        "dosage": "3 spoon",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab. Amodis",
        "dosage": "0.8 tablet",
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
        "name": "Cap. Maxpro 20mg",
        "dosage": "1 tablet",
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
      "missing_or_invalid_duration",
      "missing_route"
    ]
  },
  {
    "family": "Fracture",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Fracture (Cat, 3kgs)",
    "meds": [
      {
        "name": "Inj. Acicef-4, 0.5g (10ml), 1gm (20ml)",
        "dosage": "0.16 ml",
        "interval": "Once Daily",
        "duration": "4 days",
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
        "name": "Tab/Syp. Amantril/Influ/Mantadin",
        "dosage": "0.16 tablet",
        "interval": "Twice Daily",
        "duration": "1 days",
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
        "name": "Inj. Sedil – 10mg/ 2ml, Tab. Sedil – 5mg",
        "dosage": "0.3 ml",
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
        "name": "Inj. Aminovit Plus Vet -20ml",
        "dosage": "0.5 ml",
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
        "name": "Inj. Roxadex (5mg/ml, 1ml ample)",
        "dosage": "0.3 ml",
        "interval": "Once Daily",
        "duration": "3 days",
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
    "family": "Fungal Dermatitis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Fungal Dermatitis (Cat, 3 kg)",
    "meds": [
      {
        "name": "Syp. Cefixime- 100mg/5ml, 200mg/5ml (Antibiotics)",
        "dosage": "1.5 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hista vet -10ml (Antihistamine)",
        "dosage": "0.3 pills",
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
        "name": "Tab Nystat, \nSyp Nystat (Antifungal)",
        "dosage": "2.5 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. PA-Zinc C (Vitamine/ Zinc)",
        "dosage": "1 pills",
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
        "name": "Copper Sulfate (Antifungal wash)",
        "dosage": "2 spoon",
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
        "name": "Oint Dermasim (Topical Solution) (Antibiotics)",
        "dosage": "5 mg",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
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
    "family": "Fungal Dermatitis",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Fungal Dermatitis (Dog - 10kgs)",
    "meds": [
      {
        "name": "Syp. Cefixime- 100mg/5ml, 200mg/5ml (Antibiotics)",
        "dosage": "1 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Fexo-30mg/5ml, Tab.60/120/180mg (Antihistamine)",
        "dosage": "1 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab Nystat, \nSyp Nystat (Antifungal)",
        "dosage": "2 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Cream Dermasol N (Antibiotics, Antifungal with Steroid)",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
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
    "family": "Gingivitis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Gingivitis (Cat: 3kgs)",
    "meds": [
      {
        "name": "Mouth Wash- Povin",
        "dosage": "1 unit",
        "interval": "Twice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab. Ribosina",
        "dosage": "1 tablet",
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
        "name": "Micoral Oral Gel",
        "dosage": "1 unit",
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
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_or_invalid_duration",
      "missing_route"
    ]
  },
  {
    "family": "Gingivitis",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Gingivitis (Dog: 10kgs)",
    "meds": [
      {
        "name": "Mouth Wash- Povin",
        "dosage": "1 unit",
        "interval": "Twice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab. Ribosina",
        "dosage": "1 tablet",
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
        "name": "Micoral Oral Gel",
        "dosage": "1 unit",
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
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_or_invalid_duration",
      "missing_route"
    ]
  },
  {
    "family": "Heavy Metal Poisoning",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Heavy Metal Poisoning (Cat, 3kgs)",
    "meds": [
      {
        "name": "Syrup Rok-Old",
        "dosage": "15 ml",
        "interval": "Hourly",
        "duration": "0 days",
        "route": "",
        "schedule": [],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Normal saline",
        "dosage": "ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_or_non_numeric_dosage",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Avolac",
        "dosage": "spoon",
        "interval": "Hourly",
        "duration": "0 days",
        "route": "",
        "schedule": [],
        "active": true,
        "qualityFlags": [
          "missing_or_non_numeric_dosage",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Liv-52",
        "dosage": "ml",
        "interval": "Twice Daily",
        "duration": "2 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_non_numeric_dosage",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Urokit Plus",
        "dosage": "ml",
        "interval": "Twice Daily",
        "duration": "3 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_non_numeric_dosage",
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
      "missing_or_non_numeric_dosage",
      "missing_route"
    ]
  },
  {
    "family": "Hyperlipidemia",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Hyperlipidemia (Cat:3Kg)",
    "meds": [
      {
        "name": "Tab. Atova-10mg",
        "dosage": "0.3 tablet",
        "interval": "Once Daily",
        "duration": "continuous",
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
        "name": "Capsule NoFat/ Olistat/ Slimfast",
        "dosage": "7.5 mg",
        "interval": "Twice Daily",
        "duration": "1 until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
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
    "family": "Hyperlipidemia",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Hyperlipidemia (Dog:10Kg)",
    "meds": [
      {
        "name": "Tab. Atova-10mg",
        "dosage": "1 tablet",
        "interval": "Once Daily",
        "duration": "continuous",
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
        "name": "Capsule NoFat/ Olistat/ Slimfast",
        "dosage": "25 mg",
        "interval": "Twice Daily",
        "duration": "until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
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
    "family": "Infectious Canine Hepatitis (ICH)",
    "animal": "Dog",
    "refWeightKg": 20,
    "pregnantOnly": false,
    "sourceTitle": "Infectious Canine Hepatitis (ICH): Dog-20kg",
    "meds": [
      {
        "name": "Capsule Silybin  (Liver Tonic)",
        "dosage": "1 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Pepto care – 87.5 mg/5 ml (Antidiarrheal/ Inflammatory Bowel Syndrome)",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "10 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab. Cortisol, Cortan – 2mg/5mg/10mg, \nSyp. Cortisol, Cortan – 5mg/5ml (Antibiotics)",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Hartsol/ Hartman Plus Saline (Fluid Therapy)",
        "dosage": "400 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup Famotid-40mg/5ml (Gastroprotectants)",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
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
    "family": "Ivermectin Poisoning",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Ivermectin Poisoning (Cat, 3kgs)",
    "meds": [
      {
        "name": "Inj. Stigmin/Prostig",
        "dosage": "1 ml",
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
        "name": "Inj. Normal saline",
        "dosage": "ml",
        "interval": "Once Daily",
        "duration": "1 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_non_numeric_dosage",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Roxadex (5mg/ml, 1ml ample)",
        "dosage": "0.3 ml",
        "interval": "Twice Daily",
        "duration": "1 days",
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
        "name": "Inj. Sedil – 10mg/ 2ml, Tab. Sedil – 5mg",
        "dosage": "0.3 ml",
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
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "dosage_form_unit_mismatch",
      "missing_or_non_numeric_dosage",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Keratoconjunctivitis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Keratoconjunctivitis: Cat-3kgs",
    "meds": [
      {
        "name": "Eye Drop Tearfresh/ Aquafresh Liquigel (Eye Drop- Lubricant)",
        "dosage": "2 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Eye Drop Moxigen (Antibiotics)",
        "dosage": "2 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Cefixime- 100mg/5ml, 200mg/5ml (Antibiotics)",
        "dosage": "1.5 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Fexo-30mg/5ml, Tab.60/120/180mg (Antihistamine)",
        "dosage": "3 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
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
    "family": "Laptospirosis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Laptospirosis (Cat: 3kgs) (Dog: 10kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
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
    "family": "Leishmaniasis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Leishmaniasis ( Cat, 3kgs)",
    "meds": [
      {
        "name": "Inj. Amphoject 10ml",
        "dosage": "3 ml",
        "interval": "Weekly",
        "duration": "2 weeks",
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
        "name": "Cap. Miltefos 50mg",
        "dosage": "1 tablet",
        "interval": "Once Daily",
        "duration": "4 weeks",
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
        "dosage": "0.15 ml",
        "interval": "Once Daily",
        "duration": "weeks",
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
        "name": "Oint Dermasim (Topical Solution)",
        "dosage": "1 unit",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_or_invalid_duration",
      "missing_route"
    ]
  },
  {
    "family": "Leishmaniasis",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Leishmaniasis ( Dog, 10kgs)",
    "meds": [
      {
        "name": "Inj. Amphoject 10ml",
        "dosage": "10 ml",
        "interval": "Weekly",
        "duration": "1 weeks",
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
        "name": "Cap. Miltefos 50mg",
        "dosage": "1 tablet",
        "interval": "Once Daily",
        "duration": "4 weeks",
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
        "dosage": "0.5 ml",
        "interval": "Once Daily",
        "duration": "1 weeks",
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
        "name": "Oint Dermasim (Topical Solution)",
        "dosage": "1 unit",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_or_invalid_duration",
      "missing_route"
    ]
  },
  {
    "family": "Leptospirosis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Leptospirosis (Cat: 3kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "0.25 ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab. Dr. Petz Iromin",
        "dosage": "0.5 tablet",
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
      },
      {
        "name": "Liv-52",
        "dosage": "5 ml",
        "interval": "Once Daily",
        "duration": "1 months",
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
        "name": "Syp.UTKid",
        "dosage": "0.25 ml",
        "interval": "Twice Daily",
        "duration": "15 days",
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
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Leptospirosis",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Leptospirosis (Dog: 10kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "1 ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab. Dr. Petz Iromin",
        "dosage": "tablet",
        "interval": "Once Daily",
        "duration": "15 days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_non_numeric_dosage",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Liv-52",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "1 months",
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
        "name": "Syp.UTKid",
        "dosage": "1 ml",
        "interval": "Twice Daily",
        "duration": "15 days",
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
      "missing_or_invalid_duration",
      "missing_or_non_numeric_dosage",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Listeriosis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Listeriosis (Cat: 3Kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "0.3 ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Nervin/ Neuro- B",
        "dosage": "0.2 ml",
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
      },
      {
        "name": "Inj. Roxadex (5mg/ml, 1ml ample)",
        "dosage": "0.3 ml",
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
      },
      {
        "name": "Inj. Barbit/G-Phenobarbitone – 200mg/ml, Syp-20mg/5ml",
        "dosage": "0.3 ml",
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
      },
      {
        "name": "Inj. Hartsol/ Hartman Plus Saline",
        "dosage": "ml",
        "interval": "Twice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_or_non_numeric_dosage",
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
      "missing_or_invalid_duration",
      "missing_or_non_numeric_dosage",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Listeriosis",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Listeriosis (Dog: 10Kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "1 ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Nervin/ Neuro- B",
        "dosage": "2 ml",
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
      },
      {
        "name": "Inj. Roxadex (5mg/ml, 1ml ample)",
        "dosage": "1 ml",
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
      },
      {
        "name": "Inj. Barbit/G-Phenobarbitone – 200mg/ml, Syp-20mg/5ml",
        "dosage": "1 ml",
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
      },
      {
        "name": "Inj. Hartsol/ Hartman Plus Saline",
        "dosage": "ml",
        "interval": "Twice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_or_non_numeric_dosage",
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
      "missing_or_invalid_duration",
      "missing_or_non_numeric_dosage",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Metritis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Metritis (Cat: 3kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "0.3 ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Prostenol 2ml",
        "dosage": "0.25 ml",
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
        "dosage": "0.3 ml",
        "interval": "Once Daily",
        "duration": "3 days",
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
        "name": "Inj. Metharspan",
        "dosage": "0.25 ml",
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
        "name": "Inj. Normal saline",
        "dosage": "70 ml",
        "interval": "Thrice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_or_invalid_duration",
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
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Metritis",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Metritis (Dog: 10kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "1 ml",
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
        "name": "Inj. Prostenol 2ml",
        "dosage": "1 ml",
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
        "dosage": "1 ml",
        "interval": "Once Daily",
        "duration": "3 days",
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
        "name": "Inj. Metharspan",
        "dosage": "1 ml",
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
        "name": "Inj. Normal saline",
        "dosage": "ml",
        "interval": "Thrice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_or_invalid_duration",
          "missing_or_non_numeric_dosage",
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
      "missing_or_invalid_duration",
      "missing_or_non_numeric_dosage",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "NSAID/SAID Poisoning",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "NSAID/SAID Poisoning (Cat, 3kgs)",
    "meds": [
      {
        "name": "Syrup Rok-Old",
        "dosage": "15 ml",
        "interval": "Hourly",
        "duration": "7 days",
        "route": "",
        "schedule": [],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Normal saline",
        "dosage": "1 ml",
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
        "name": "Syp. Avolac",
        "dosage": "1 spoon",
        "interval": "Hourly",
        "duration": "0 days",
        "route": "",
        "schedule": [],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Liv-52",
        "dosage": "1 ml",
        "interval": "Twice Daily",
        "duration": "2 days",
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
        "name": "Syp. Urokit Plus",
        "dosage": "1 ml",
        "interval": "Twice Daily",
        "duration": "1 days",
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
      "missing_route"
    ]
  },
  {
    "family": "Neuter",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Neuter (Cat, 3kgs)",
    "meds": [
      {
        "name": "Inj. Acicef-4, 0.5g (10ml), 1gm (20ml)",
        "dosage": "0.16 ml",
        "interval": "Once Daily",
        "duration": "4 days",
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
        "name": "Tab/Syp. Amantril/Influ/Mantadin",
        "dosage": "0.16 tablet",
        "interval": "Twice Daily",
        "duration": "3 days",
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
        "name": "Inj. Sedil – 10mg/ 2ml, Tab. Sedil – 5mg",
        "dosage": "0.1 ml",
        "interval": "Once Daily",
        "duration": "1 days",
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
        "name": "Inj. Aminovit Plus Vet -20ml",
        "dosage": "0.1 ml",
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
      "dosage_form_unit_mismatch",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Orchitis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Orchitis (Cat: 3kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "0.3 ml",
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
      },
      {
        "name": "Syp. Urokit Plus",
        "dosage": "3 ml",
        "interval": "Twice Daily",
        "duration": "15 days",
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
        "name": "Inj. Mpain/ Inj. Mel-Vet- 0.5%",
        "dosage": "0.25 ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
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
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Orchitis",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Orchitis (Dog: 10kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "1 ml",
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
      },
      {
        "name": "Syp. Urokit Plus",
        "dosage": "10 ml",
        "interval": "Twice Daily",
        "duration": "15 days",
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
        "name": "Inj. Mpain/ Inj. Mel-Vet- 0.5%",
        "dosage": "0.5 ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
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
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Organophosphorus Poisoning",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Organophosphorus Poisoning (Cat 3kgs)",
    "meds": [
      {
        "name": "Inj. Atrovet/ Tropin vet",
        "dosage": "1 ml",
        "interval": "Hourly",
        "duration": "2 days",
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
        "name": "Syrup Rok-Old",
        "dosage": "15 ml",
        "interval": "Every Three Hourly",
        "duration": "7 days",
        "route": "",
        "schedule": [],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Normal saline",
        "dosage": "1 ml",
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
    "family": "Osteomalacia",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Osteomalacia (Cat:3Kg)",
    "meds": [
      {
        "name": "Tab D Rise- 1000 IU",
        "dosage": "0.30 tablet",
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
        "name": "Tablet CALFOS PET",
        "dosage": "0.35 tablet",
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
    "family": "Osteomalacia",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Osteomalacia (Dog:10Kg)",
    "meds": [
      {
        "name": "Tab D Rise- 1000 IU",
        "dosage": "1 tablet",
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
        "name": "Tablet CALFOS PET",
        "dosage": "1 tablet",
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
    "family": "Otitis Externa/ Media",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Otitis Externa/ Media: Cat-3kgs",
    "meds": [
      {
        "name": "​Ear Cleaner OTI Pure liquid (Ear Cleaner)",
        "dosage": "5 pills",
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
        "name": "Eye Drop Moxidex Vet (Antibiotics)",
        "dosage": "3 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Cefixime- 100mg/5ml, 200mg/5ml (Antibiotics)",
        "dosage": "1.5 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Alatrol-5mg/5ml (Antihistamine)",
        "dosage": "3 pills",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "interval_schedule_mismatch",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Parasitin/ Acimec/ Amectin – 1% (Anthelmintics )",
        "dosage": "1 pills",
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
        "name": "Inj. Mpain/ Inj. Mel-Vet- 0.5% (Antibiotics)",
        "dosage": "0.15 pills",
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
    "family": "Paracetamol/Acetaminophen Poisoning",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Paracetamol/Acetaminophen Poisoning (Cat, 3kgs)",
    "meds": [
      {
        "name": "Tab. Tylace /Mucomist DT 600 mg",
        "dosage": "0.042 tablet",
        "interval": "Hourly",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Capsule Silybin",
        "dosage": "1 bolus",
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
        "name": "Inj. Ascoson -500mg/5ml",
        "dosage": "0.2 ml",
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
        "name": "Inj. Hartsol/ Hartman Plus Saline",
        "dosage": "ml",
        "interval": "Twice Daily",
        "duration": "2 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_non_numeric_dosage",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syrup Rok-Old",
        "dosage": "15 ml",
        "interval": "Every Three Hourly",
        "duration": "days",
        "route": "",
        "schedule": [],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Avolac",
        "dosage": "spoon",
        "interval": "Hourly",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_or_non_numeric_dosage",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_or_invalid_duration",
      "missing_or_non_numeric_dosage",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Phimosis/Paraphimosis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Phimosis/Paraphimosis (Cat: 3kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "0.3 ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Ointment Neocin",
        "dosage": "1 unit",
        "interval": "Twice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Phimosis/Paraphimosis",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Phimosis/Paraphimosis (Dog: 10kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "1 ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Ointment Neocin",
        "dosage": "1 unit",
        "interval": "Twice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Pneumonia in Cat",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Pneumonia in Cat (3kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "0.3 ml",
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
        "name": "Inj. Hista vet -10ml",
        "dosage": "0.3 ml",
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
        "name": "Tab. Brodil/ Sulbutamol – 2mg, 4mg, \nSyp. Brodil/ Sulbutamol – 2mg/ 5ml, \nInhaler Azmasol – 5mg/ml",
        "dosage": "3 ml",
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
        "name": "Tab. MKast - 4",
        "dosage": "0.5 tablet",
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
    "family": "Pneumonia in Dog",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Pneumonia in Dog (10kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "1 ml",
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
        "name": "Inj. Hista vet -10ml",
        "dosage": "0.9 ml",
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
        "name": "Tab. Brodil/ Sulbutamol – 2mg, 4mg, \nSyp. Brodil/ Sulbutamol – 2mg/ 5ml, \nInhaler Azmasol – 5mg/ml",
        "dosage": "2 spoon",
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
        "name": "Tab. MKast - 4",
        "dosage": "2 tablet",
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
    "family": "Pus in Ear/ Otorrhea",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Pus in Ear/ Otorrhea: Cat-3kgs",
    "meds": [
      {
        "name": "Eye Drop Moxidex Vet (Antibiotics)",
        "dosage": "3 drops",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. Alatrol-5mg/5ml (Antihistamine)",
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
      },
      {
        "name": "Inj. Parasitin/ Acimec/ Amectin – 1% (Anthelmintics )",
        "dosage": "0.15 ml",
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
        "name": "Inj. Mpain/ Inj. Mel-Vet- 0.5% (Antibiotics)",
        "dosage": "0.15 ml",
        "interval": "Once Daily",
        "duration": "3 days",
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
        "name": "​Ear Cleaner OTI Pure liquid (Ear Cleaner)",
        "dosage": "5 ml",
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
        "name": "Inj. Strepcin G/ Streptopen (Antibiotics)",
        "dosage": "0.3 ml",
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
    "family": "Pyometra",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Pyometra (Dog: 10kgs)",
    "meds": [
      {
        "name": "Inj. Prostenol 2ml",
        "dosage": "2.5 ml",
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
        "name": "Inj. Metharspan",
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
        "name": "Inj. Acicef-3/ Bovixon, 250mg (2.5ml), 500mg (5ml), 1gm (10ml)",
        "dosage": "2 ml",
        "interval": "Once Daily",
        "duration": "5 days",
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
        "name": "Syp. ES Plus",
        "dosage": "3 ml",
        "interval": "Once Daily",
        "duration": "1 months",
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
        "name": "Inj. Hartsol/ Hartman Plus Saline",
        "dosage": "ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_or_non_numeric_dosage",
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
      "missing_or_invalid_duration",
      "missing_or_non_numeric_dosage",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Retained Placenta",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Retained Placenta (Cat: 3kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "0.3 ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Prostenol 2ml",
        "dosage": "0.25 ml",
        "interval": "Weekly",
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
        "dosage": "0.3 ml",
        "interval": "Once Daily",
        "duration": "3 days",
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
        "name": "Inj. Metharspan",
        "dosage": "0.25 ml",
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
        "name": "Inj. Normal saline",
        "dosage": "70 ml",
        "interval": "Every 12 Days",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. PA Cal-Meat",
        "dosage": "50 g",
        "interval": "Once Daily",
        "duration": "1 months",
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
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Retained Placenta",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Retained Placenta (Dog: 10kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "1 ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Prostenol 2ml",
        "dosage": "1 ml",
        "interval": "Weekly",
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
        "dosage": "1 ml",
        "interval": "Once Daily",
        "duration": "3 days",
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
        "name": "Inj. Metharspan",
        "dosage": "1 ml",
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
        "name": "Inj. Normal saline",
        "dosage": "ml",
        "interval": "Twice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
          "missing_or_invalid_duration",
          "missing_or_non_numeric_dosage",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. PA Cal-Meat",
        "dosage": "g",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_non_numeric_dosage",
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
      "missing_or_invalid_duration",
      "missing_or_non_numeric_dosage",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Rickets",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Rickets (Cat:3kg)",
    "meds": [
      {
        "name": "Tab D Rise- 1000 IU",
        "dosage": "0.2 tablet",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "",
        "schedule": [],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tablet CALFOS PET",
        "dosage": "0.35 tablet",
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
    "family": "Rickets",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Rickets (Dog:10kg)",
    "meds": [
      {
        "name": "Tab D Rise- 1000 IU",
        "dosage": "1 tablet",
        "interval": "Once Daily",
        "duration": "1 months",
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
        "name": "Tablet CALFOS PET",
        "dosage": "1 tablet",
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
    "family": "Roundworm Infestation",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Roundworm Infestation (Cat, 3kgs)",
    "meds": [
      {
        "name": "Tab. Helminthicide L",
        "dosage": "0.1 tablet",
        "interval": "Weekly",
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
        "name": "Syp. PA-Zinc C",
        "dosage": "3 ml",
        "interval": "Twice Daily",
        "duration": "1 months",
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
        "name": "Tab. Dr. Petz Iromin",
        "dosage": "0.5 tablet",
        "interval": "Once Daily",
        "duration": "1 months",
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
    "family": "Roundworm Infestation",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Roundworm Infestation (Dog, 10kgs)",
    "meds": [
      {
        "name": "Tab. Helminthicide L",
        "dosage": "1 tablet",
        "interval": "Weekly",
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
        "name": "Syp. PA-Zinc C",
        "dosage": "4.7 ml",
        "interval": "Twice Daily",
        "duration": "1 months",
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
        "name": "Tab. Dr. Petz Iromin",
        "dosage": "0.9 tablet",
        "interval": "Once Daily",
        "duration": "1 months",
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
    "family": "Scabies, Cat",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Scabies, Cat (3kgs)",
    "meds": [
      {
        "name": "Inj. Parasitin/ Acimec/ Amectin – 1% (Anthelmintics )",
        "dosage": "0.15 ml",
        "interval": "Once Daily",
        "duration": "2 weeks",
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
        "name": "Lotion Delice/Lorix/Scabex (5%) (Anthelmintics )",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "2 weeks",
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
        "name": "Syp. Cefixime- 100mg/5ml, 200mg/5ml (Antibiotics)",
        "dosage": "1.5 ml",
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
      },
      {
        "name": "Syp. PA-Zinc C (Vitamine/ Zinc)",
        "dosage": "5 ml",
        "interval": "Once Daily",
        "duration": "15 days",
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
        "name": "Povin/ viodin Solution (Antiseptic Solution)",
        "dosage": "10 ml",
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
    "family": "Scabies, Dog",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Scabies, Dog (10kgs)",
    "meds": [
      {
        "name": "Inj. Parasitin/ Acimec/ Amectin – 1% (Anthelmintics )",
        "dosage": "0.5 ml",
        "interval": "Once Daily",
        "duration": "2 weeks",
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
        "name": "Lotion Delice/Lorix/Scabex (5%) (Anthelmintics )",
        "dosage": "10 pills",
        "interval": "Once Daily",
        "duration": "2 weeks",
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
        "name": "Syp. Cefixime- 100mg/5ml, 200mg/5ml (Antibiotics)",
        "dosage": "2 spoon",
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
      },
      {
        "name": "Syp. PA-Zinc C (Vitamine/ Zinc)",
        "dosage": "2 spoon",
        "interval": "Once Daily",
        "duration": "15 days",
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
    "family": "Skin Infection/ Allergic Dermatitis/ Pyoderma",
    "animal": "Cat",
    "refWeightKg": 2,
    "pregnantOnly": true,
    "sourceTitle": "Skin Infection/ Allergic Dermatitis/ Pyoderma ( Cat- 2kg- Pregnant)",
    "meds": [
      {
        "name": "Inj. Ampicin Vet (Antibiotics)",
        "dosage": "0.3 ml",
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
        "name": "Inj. Parasitin/ Acimec/ Amectin – 1%,\nTab. Ivera/Alice/Scabo- 6mg/12mg (Anthelmintics )",
        "dosage": "0.15 ml",
        "interval": "Once Daily",
        "duration": "7 alternative days",
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
        "name": "Syp. Alatrol-5mg/5ml (Antihistamine)",
        "dosage": "1 spoon",
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
        "name": "Syp. PA-Zinc C (Vitamine/ Zinc)",
        "dosage": "1 spoon",
        "interval": "Once Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
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
      "dosage_form_unit_mismatch",
      "interval_schedule_mismatch",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Spaying/ General Surgery/ Surgical Wound",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Spaying/ General Surgery/ Surgical Wound (Cat, 3kgs)",
    "meds": [
      {
        "name": "Inj. Acicef-4, 0.5g (10ml), 1gm (20ml)",
        "dosage": "0.16 ml",
        "interval": "Once Daily",
        "duration": "4 days",
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
        "name": "Tab/Syp. Amantril/Influ/Mantadin",
        "dosage": "0.16 tablet",
        "interval": "Twice Daily",
        "duration": "1 days",
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
        "name": "Inj. Sedil – 10mg/ 2ml, Tab. Sedil – 5mg",
        "dosage": "0.3 ml",
        "interval": "Twice Daily",
        "duration": "1 days",
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
        "name": "Inj. Aminovit Plus Vet -20ml",
        "dosage": "0.5 ml",
        "interval": "Twice Daily",
        "duration": "1 days",
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
      "dosage_form_unit_mismatch",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Stunting Growth",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Stunting Growth (Cat: 3Kg)",
    "meds": [
      {
        "name": "Dr. PETZ Ultivite Gel",
        "dosage": "8 g",
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
      },
      {
        "name": "Tab. Dr. Petz Iromin",
        "dosage": "0.35 tablet",
        "interval": "Twice Daily",
        "duration": "30 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. PA Cal-Meat",
        "dosage": "50 g",
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
    "family": "Stunting Growth",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Stunting Growth (Dog: 10Kg)",
    "meds": [
      {
        "name": "Dr. PETZ Ultivite Gel",
        "dosage": "30 g",
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
      },
      {
        "name": "Tab. Dr. Petz Iromin",
        "dosage": "1 tablet",
        "interval": "Twice Daily",
        "duration": "30 days",
        "route": "",
        "schedule": [
          "Morning",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Powder. PA Cal-Meat",
        "dosage": "450 g",
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
    "family": "Tapeworm Infestation",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Tapeworm Infestation (Cat, 3kgs)",
    "meds": [
      {
        "name": "Tab. Helminthicide L",
        "dosage": "0.5 tablet",
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
        "name": "Syp. PA-Zinc C",
        "dosage": "1.6 ml",
        "interval": "Once Daily",
        "duration": "1 months",
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
        "name": "Tab. Dr. Petz Iromin",
        "dosage": "0.5 tablet",
        "interval": "Once Daily",
        "duration": "1 months",
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
    "family": "Tapeworm Infestation",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Tapeworm Infestation (Dog, 10kgs)",
    "meds": [
      {
        "name": "Tab. Helminthicide L",
        "dosage": "1 tablet",
        "interval": "Once Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. PA-Zinc C",
        "dosage": "ml",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_non_numeric_dosage",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab. Dr. Petz Iromin",
        "dosage": "1 tablet",
        "interval": "Once Daily",
        "duration": "1 months",
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
      "missing_or_invalid_duration",
      "missing_or_non_numeric_dosage",
      "missing_route"
    ]
  },
  {
    "family": "Tetanus",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Tetanus (Dog, 10kgs)",
    "meds": [
      {
        "name": "Inj. Vaxitet / TT Vax",
        "dosage": "0.5 ml",
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
        "name": "Inj. Pronapen/Combipen - 40Lac (10ml)",
        "dosage": "1 ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Amodis - 500mg/100ml",
        "dosage": "50 ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Sedil – 10mg/ 2ml, Tab. Sedil – 5mg",
        "dosage": "1 ml",
        "interval": "Once Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Normal saline",
        "dosage": "ml",
        "interval": "Every 12 Hours",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_or_non_numeric_dosage",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. KT",
        "dosage": "2 ml",
        "interval": "Once Daily",
        "duration": "24 hours",
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
      "missing_or_invalid_duration",
      "missing_or_non_numeric_dosage",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Toxoplasmosis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Toxoplasmosis (Cat, 3kgs)",
    "meds": [
      {
        "name": "Liv-52",
        "dosage": "3 ml",
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
        "name": "Inj. Clindacin 300mg",
        "dosage": "0.5 ml",
        "interval": "Twice Daily",
        "duration": "7 weeks",
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
        "name": "Tab. Con",
        "dosage": "0.5 tablet",
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
        "name": "Inj. Emiset",
        "dosage": "0.3 ml",
        "interval": "Twice Daily",
        "duration": "1 days",
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
        "name": "E/D Moxiflox",
        "dosage": "2 drop",
        "interval": "Four Times Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
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
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Toxoplasmosis",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Toxoplasmosis (Dog, 10kgs)",
    "meds": [
      {
        "name": "Liv-52",
        "dosage": "15 ml",
        "interval": "Once Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Clindacin 300mg",
        "dosage": "1 ml",
        "interval": "Twice Daily",
        "duration": "1 weeks",
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
        "name": "Tab. Con",
        "dosage": "1 tablet",
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
        "name": "Inj. Emiset",
        "dosage": "1 ml",
        "interval": "Twice Daily",
        "duration": "1 days",
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
        "name": "E/D Moxiflox",
        "dosage": "4 drop",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "active": true,
        "qualityFlags": [
          "interval_schedule_mismatch",
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
    "family": "Traumatic Injury/ Wound/ Myiasis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Traumatic Injury/ Wound/ Myiasis (Cat, 3kgs)",
    "meds": [
      {
        "name": "Inj. Acicef-4, 0.5g (10ml), 1gm (20ml)",
        "dosage": "0.16 ml",
        "interval": "Once Daily",
        "duration": "3 days",
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
        "name": "Tab/Syp. Amantril/Influ/Mantadin",
        "dosage": "0.1 tablet",
        "interval": "Twice Daily",
        "duration": "2 days",
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
        "name": "Inj. Sedil – 10mg/ 2ml, Tab. Sedil – 5mg",
        "dosage": "0.3 ml",
        "interval": "Twice Daily",
        "duration": "1 days",
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
        "name": "Inj. Aminovit Plus Vet -20ml",
        "dosage": "0.5 ml",
        "interval": "Twice Daily",
        "duration": "1 days",
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
        "name": "Inj.Acimec 1%",
        "dosage": "0.15 ml",
        "interval": "Seven Days Interval",
        "duration": "2 weeks",
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
    "family": "Urinary Tract Infection (UTI): Cat",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Urinary Tract Infection (UTI): Cat, 3kgs",
    "meds": [
      {
        "name": "Inj. Acicef-3/ Bovixon, 250mg (2.5ml), 500mg (5ml), 1gm (10ml)",
        "dosage": "0.2 ml",
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
      },
      {
        "name": "Syp. Urokit Plus",
        "dosage": "3 ml",
        "interval": "Twice Daily",
        "duration": "15 days",
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
        "name": "Inj. Tracid Vet, Tab. Tracid",
        "dosage": "0.35 ml",
        "interval": "Twice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Normal saline",
        "dosage": "70 ml",
        "interval": "Hourly",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Sedil – 10mg/ 2ml, Tab. Sedil – 5mg",
        "dosage": "0.15 ml",
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
        "name": "Powder. Ammonium Chloride",
        "dosage": "5 g",
        "interval": "Once Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
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
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Urinary Tract Infection (UTI): Dog",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Urinary Tract Infection (UTI): Dog, 10kgs",
    "meds": [
      {
        "name": "Inj. Acicef-3/ Bovixon, 250mg (2.5ml), 500mg (5ml), 1gm (10ml)",
        "dosage": "1.5 ml",
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
      },
      {
        "name": "Syp. Urokit Plus",
        "dosage": "5 ml",
        "interval": "Twice Daily",
        "duration": "15 days",
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
        "name": "Inj. Tracid Vet, Tab. Tracid",
        "dosage": "1 ml",
        "interval": "Twice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Normal saline",
        "dosage": "250 ml",
        "interval": "Hourly",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Sedil – 10mg/ 2ml, Tab. Sedil – 5mg",
        "dosage": "0.5 ml",
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
        "name": "Powder. Ammonium Chloride",
        "dosage": "10 g",
        "interval": "Once Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
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
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Urolithiasis: Cat",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Urolithiasis: Cat, 3kgs",
    "meds": [
      {
        "name": "Inj. Acicef-3/ Bovixon, 250mg (2.5ml), 500mg (5ml), 1gm (10ml)",
        "dosage": "0.2 ml",
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
      },
      {
        "name": "Syp. Urokit Plus",
        "dosage": "3 ml",
        "interval": "Twice Daily",
        "duration": "15 days",
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
        "name": "Inj. Tracid Vet, Tab. Tracid",
        "dosage": "0.35 ml",
        "interval": "Twice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Normal saline",
        "dosage": "70 ml",
        "interval": "Hourly",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Sedil – 10mg/ 2ml, Tab. Sedil – 5mg",
        "dosage": "0.15 ml",
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
        "name": "Powder. Ammonium Chloride",
        "dosage": "5 g",
        "interval": "Once Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
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
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Urolithiasis: Dog",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Urolithiasis: Dog, 10kgs",
    "meds": [
      {
        "name": "Inj. Acicef-3/ Bovixon, 250mg (2.5ml), 500mg (5ml), 1gm (10ml)",
        "dosage": "1.5 ml",
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
      },
      {
        "name": "Syp. Urokit Plus",
        "dosage": "5 ml",
        "interval": "Twice Daily",
        "duration": "15 days",
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
        "name": "Inj. Tracid Vet, Tab. Tracid",
        "dosage": "1 ml",
        "interval": "Twice Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "dosage_form_unit_mismatch",
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Normal saline",
        "dosage": "250 ml",
        "interval": "Hourly",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Sedil – 10mg/ 2ml, Tab. Sedil – 5mg",
        "dosage": "0.5 ml",
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
        "name": "Powder. Ammonium Chloride",
        "dosage": "10 g",
        "interval": "Once Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
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
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Uterine Prolapse",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Uterine Prolapse (Cat:3kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "0.3 ml",
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
      },
      {
        "name": "Powder. PA Cal-Meat",
        "dosage": "50 g",
        "interval": "Once Daily",
        "duration": "1 months",
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
        "name": "Syp. PB E-Se",
        "dosage": "ml",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_non_numeric_dosage",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_or_invalid_duration",
      "missing_or_non_numeric_dosage",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Uterine Prolapse",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Uterine Prolapse (Dog:10kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "1 ml",
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
      },
      {
        "name": "Powder. PA Cal-Meat",
        "dosage": "g",
        "interval": "Once Daily",
        "duration": "1 months",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_non_numeric_dosage",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Syp. PB E-Se",
        "dosage": "10 ml",
        "interval": "Once Daily",
        "duration": "1 months",
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
      "missing_or_invalid_duration",
      "missing_or_non_numeric_dosage",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Uveitis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Uveitis (Cat: 3kgs)",
    "meds": [
      {
        "name": "UNRESOLVED MEDICINE (source contained \"?\")",
        "dosage": "drop",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "legacy_name": "?",
        "active": false,
        "qualityFlags": [
          "missing_or_non_numeric_dosage",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "E/D Moxiflox",
        "dosage": "2 drop",
        "interval": "Thrice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
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
        "name": "Inj. Mpain/ Inj. Mel-Vet- 0.5%",
        "dosage": "0.15 ml",
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
        "name": "Syp. Cefixime- 100mg/5ml, 200mg/5ml",
        "dosage": "1.25 ml",
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
        "name": "Syp. Alatrol-5mg/5ml",
        "dosage": "0.5 ml",
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
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "missing_or_non_numeric_dosage",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Uveitis",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Uveitis (Dog: 10kgs)",
    "meds": [
      {
        "name": "UNRESOLVED MEDICINE (source contained \"?\")",
        "dosage": "drop",
        "interval": "Twice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "legacy_name": "?",
        "active": false,
        "qualityFlags": [
          "missing_or_non_numeric_dosage",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "E/D Moxiflox",
        "dosage": "2 drop",
        "interval": "Thrice Daily",
        "duration": "7 days",
        "route": "",
        "schedule": [
          "Morning",
          "Afternoon",
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
        "name": "Inj. Mpain/ Inj. Mel-Vet- 0.5%",
        "dosage": "0.5 ml",
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
        "name": "Syp. Cefixime- 100mg/5ml, 200mg/5ml",
        "dosage": "1.5 tablet",
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
        "name": "Syp. Alatrol-5mg/5ml",
        "dosage": "1 ml",
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
      }
    ],
    "clinicalReviewRequired": true,
    "validationStatus": "legacy_protocol_not_clinically_validated",
    "reviewNote": "Do not deploy as prescribing guidance until a Bangladesh-licensed veterinarian verifies diagnosis, dose, route, interval, duration, withdrawal period, contraindications, and antimicrobial stewardship.",
    "qualityFlags": [
      "dosage_form_unit_mismatch",
      "missing_or_non_numeric_dosage",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Vaginitis",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "Vaginitis (Cat: 3Kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "0.3 ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Metharspan",
        "dosage": "0.25 ml",
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
        "name": "Inj. Normal saline",
        "dosage": "70 ml",
        "interval": "Once Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab. Neosten VT Vaginal Tablet",
        "dosage": "0.25 tablet",
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
      "missing_or_invalid_duration",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "Vaginitis",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "Vaginitis (Dog: 10Kgs)",
    "meds": [
      {
        "name": "Inj. Strepcin G/ Streptopen",
        "dosage": "1 ml",
        "interval": "Twice Daily",
        "duration": "days",
        "route": "",
        "schedule": [
          "Morning",
          "Evening"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_route",
          "multiple_products_or_forms_in_one_name"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Inj. Metharspan",
        "dosage": "1 ml",
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
        "name": "Inj. Normal saline",
        "dosage": "ml",
        "interval": "Once Daily",
        "duration": "0 until_recovery",
        "route": "",
        "schedule": [
          "Morning"
        ],
        "active": true,
        "qualityFlags": [
          "missing_or_invalid_duration",
          "missing_or_non_numeric_dosage",
          "missing_route"
        ],
        "clinicalReviewRequired": true
      },
      {
        "name": "Tab. Neosten VT Vaginal Tablet",
        "dosage": "0.5 tablet",
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
      "missing_or_invalid_duration",
      "missing_or_non_numeric_dosage",
      "missing_route",
      "multiple_products_or_forms_in_one_name"
    ]
  },
  {
    "family": "White Muscle Disease/ Metabolic Muscle Diseases/ Nutritional myodegeneration or Selenium-Vitamin E deficiency",
    "animal": "Cat",
    "refWeightKg": 3,
    "pregnantOnly": false,
    "sourceTitle": "White Muscle Disease/ Metabolic Muscle Diseases/ Nutritional myodegeneration or Selenium-Vitamin E deficiency (Cat:3Kg)",
    "meds": [
      {
        "name": "Syp. ES Plus",
        "dosage": "1 ml",
        "interval": "Once Daily",
        "duration": "1 months",
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
        "name": "Powder. PA Cal-Meat",
        "dosage": "50 g",
        "interval": "Once Daily",
        "duration": "2 months",
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
      "missing_route"
    ]
  },
  {
    "family": "White Muscle Disease/ Metabolic Muscle Diseases/ Nutritional myodegeneration or Selenium-Vitamin E deficiency",
    "animal": "Dog",
    "refWeightKg": 10,
    "pregnantOnly": false,
    "sourceTitle": "White Muscle Disease/ Metabolic Muscle Diseases/ Nutritional myodegeneration or Selenium-Vitamin E deficiency (Dog:10Kg)",
    "meds": [
      {
        "name": "Syp. ES Plus",
        "dosage": "3 ml",
        "interval": "Once Daily",
        "duration": "1 months",
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
        "name": "Powder. PA Cal-Meat",
        "dosage": "450 g",
        "interval": "Once Daily",
        "duration": "2 months",
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
      "missing_route"
    ]
  }
];
