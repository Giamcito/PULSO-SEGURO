# PULSO-SEGURO
Proyecto sobre enfermedades cardiovasculares

## Chat IA con parámetros de Colombia 🇨🇴

El endpoint `app/api/chat/route.ts` ahora está orientado al contexto colombiano y utiliza un motor de ayuda de riesgo (`lib/colombia-risk.ts`) con:

- Clasificación de presión arterial alineada con HEARTS/OPS: sospecha de HTA con ≥140/90 mmHg y crisis hipertensiva con ≥180/120 mmHg.
- Cálculo de IMC y categorías OMS (bajo peso, normal, sobrepeso, obesidad).
- Triage de banda de riesgo (bajo/moderado/alto/muy alto) basado en una regla simplificada (edad, HTA, diabetes, tabaquismo, IMC) para fines educativos.

Flujo:
1. Si el cliente envía `healthData` (edad, sexo, PA, FC, tabaquismo, diabetes, peso/talla o IMC, colesterol si hay), el servidor hace una evaluación preliminar y la incluye en el contexto del modelo.
2. Si faltan datos, el chat pedirá específicamente los campos faltantes en unidades estándar.
3. El asistente devuelve orientación y recomendaciones generales para Colombia. No reemplaza una valoración clínica.

Campos aceptados en `healthData`:

```ts
{
	age: number,
	sex: 'male' | 'female',
	sbp: number, // mmHg
	dbp: number, // mmHg
	heartRate?: number, // lpm
	smoker?: boolean,
	diabetes?: boolean,
	totalCholesterol?: number, // mg/dL
	bmi?: number,
	weightKg?: number,
	heightCm?: number,
	priorCVD?: boolean,
	onAntihypertensives?: boolean
}
```

### Fuentes y siguientes pasos

- OPS/OMS – Programa HEARTS en las Américas y HEARTS Colombia (clasificación y manejo de HTA).
- OMS – Tablas de riesgo cardiovascular 2019 por región (pendiente integrar versión específica AMR para cálculo de riesgo a 10 años).

Mejoras futuras:
- Integrar un cálculo validado de riesgo a 10 años (OMS 2019 – región AMR; Globorisk específico por país) para reemplazar la regla simplificada.
- Añadir pruebas unitarias para escenarios de riesgo (feliz y bordes) y textos de recomendaciones.

## Configurar OpenRouter (clave API)

El endpoint usa `process.env.OPENROUTER_API_KEY`. Para correr localmente:

1. Crea un archivo `.env.local` en la raíz del proyecto (está ignorado por git):

```
OPENROUTER_API_KEY=sk-or-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

2. Reinicia el servidor de desarrollo.

En Windows PowerShell también puedes establecerla temporalmente para la sesión:

```powershell
$env:OPENROUTER_API_KEY = "sk-or-xxxxxxxx..."; npm run dev
```

En despliegues (por ejemplo, Vercel):
- Ve a Project Settings → Environment Variables y agrega `OPENROUTER_API_KEY`.
- Redeploy para que tome efecto.

Seguridad: nunca comitees tu clave. Si se comparte públicamente, rota la clave en el panel de OpenRouter antes de usarla de nuevo.
