
export type Sex = "male" | "female";

export interface HealthData {
  age?: number; // years
  sex?: Sex;
  sbp?: number; // systolic mmHg
  dbp?: number; // diastolic mmHg
  heartRate?: number; // bpm
  smoker?: boolean;
  diabetes?: boolean; // known diabetes diagnosis
  totalCholesterol?: number; // mg/dL (optional)
  bmi?: number; // kg/m^2 (optional if weight/height not provided)
  weightKg?: number;
  heightCm?: number;
  priorCVD?: boolean; // prior MI/stroke/angina/revascularization
  onAntihypertensives?: boolean;
}

export type BPCategory =
  | "normal"
  | "elevated"
  | "hta-grado-1"
  | "hta-grado-2"
  | "crisis-hipertensiva";

export function computeBMI(weightKg?: number, heightCm?: number): number | undefined {
  if (!weightKg || !heightCm) return undefined;
  const h = heightCm / 100;
  if (h <= 0) return undefined;
  return +(weightKg / (h * h)).toFixed(1);
}

export function classifyBMI(bmi?: number):
  | "bajo-peso"
  | "normal"
  | "sobrepeso"
  | "obesidad"
  | undefined {
  if (bmi == null) return undefined;
  if (bmi < 18.5) return "bajo-peso";
  if (bmi < 25) return "normal";
  if (bmi < 30) return "sobrepeso";
  return "obesidad";
}

export function classifyBloodPressure(sbp?: number, dbp?: number): BPCategory | undefined {
  if (sbp == null || dbp == null) return undefined;
  if (sbp >= 180 || dbp >= 120) return "crisis-hipertensiva";
  if (sbp >= 160 || dbp >= 100) return "hta-grado-2";
  if (sbp >= 140 || dbp >= 90) return "hta-grado-1";
  if (sbp >= 120 && dbp < 80) return "elevated";
  return "normal";
}

export type RiskBand = "bajo" | "moderado" | "alto" | "muy-alto";

export interface RiskResult {
  riskBand: RiskBand;
  reasons: string[];
  bpCategory?: BPCategory;
  bmiCategory?: ReturnType<typeof classifyBMI>;
}

export function estimateColombiaRisk(input: HealthData): RiskResult | undefined {
  const reasons: string[] = [];
  const sbp = input.sbp;
  const dbp = input.dbp;
  const age = input.age;
  const smoker = !!input.smoker;
  const diabetes = !!input.diabetes;
  const priorCVD = !!input.priorCVD;

  const bpCat = classifyBloodPressure(sbp, dbp);

  const bmi = input.bmi ?? computeBMI(input.weightKg, input.heightCm);
  const bmiCat = classifyBMI(bmi);

  if (sbp == null || dbp == null || age == null) {
    return undefined;
  }

  if (priorCVD) {
    reasons.push("Antecedente de enfermedad cardiovascular establecida");
    return { riskBand: "muy-alto", reasons, bpCategory: bpCat, bmiCategory: bmiCat };
  }
  if (bpCat === "crisis-hipertensiva") {
    reasons.push("Presión arterial en rango de crisis (>=180/120 mmHg)");
    return { riskBand: "muy-alto", reasons, bpCategory: bpCat, bmiCategory: bmiCat };
  }

  let score = 0;
  if (age >= 60) score += 2;
  else if (age >= 50) score += 1;
  if (sbp >= 160 || dbp >= 100) score += 2; // HTA grado 2
  else if (sbp >= 140 || dbp >= 90) score += 1; // HTA grado 1
  if (diabetes) score += 2;
  if (smoker) score += 1;
  if (bmiCat === "obesidad") score += 1;

  if (score >= 5) {
    reasons.push("Edad/factores + HTA/diabetes indican riesgo muy alto");
    return { riskBand: "muy-alto", reasons, bpCategory: bpCat, bmiCategory: bmiCat };
  }
  if (score === 4) {
    reasons.push("Múltiples factores de riesgo (HTA/diabetes/tabaquismo/edad)");
    return { riskBand: "alto", reasons, bpCategory: bpCat, bmiCategory: bmiCat };
  }
  if (score === 3) {
    reasons.push("Combinación de 2-3 factores de riesgo");
    return { riskBand: "moderado", reasons, bpCategory: bpCat, bmiCategory: bmiCat };
  }

  // Default
  if (bpCat === "elevated") reasons.push("Presión arterial elevada");
  return { riskBand: "bajo", reasons, bpCategory: bpCat, bmiCategory: bmiCat };
}

export function missingFieldsForRisk(input: HealthData): (keyof HealthData)[] {
  const needed: (keyof HealthData)[] = [];
  if (input.age == null) needed.push("age");
  if (input.sex == null) needed.push("sex");
  if (input.sbp == null) needed.push("sbp");
  if (input.dbp == null) needed.push("dbp");
  // At least one of: bmi or weight+height
  if (input.bmi == null && (input.weightKg == null || input.heightCm == null)) {
    needed.push("bmi");
  }
  if (input.smoker == null) needed.push("smoker");
  if (input.diabetes == null) needed.push("diabetes");
  return needed;
}
