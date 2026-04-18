interface MeasureFatProps {
    isMale: boolean;
    height: number;
    neck: number;
    waist: number;
    hip: number;
}

const measureFat = ({
    isMale,
    height,
    neck,
    waist,
    hip,
}: MeasureFatProps) => {
    if (isMale) {
        const fat =
            495 /
                (1.0324 -
                    0.19077 * Math.log10(waist - neck) +
                    0.15456 * Math.log10(height)) -
            450;
        return fat;
    } else {
        const fat =
            495 /
                (1.29579 -
                    0.35004 * Math.log10(waist + hip - neck) +
                    0.221 * Math.log10(height)) -
            450;
        return fat;
    }
};

interface MeasureMuscleProps {
    isMale: boolean;
    height: number;
    weight: number;
    age: number;
    neck: number;
    waist: number;
    hip: number;
}

const measureMuscle = ({isMale, weight, waist, hip, age, height }:MeasureMuscleProps) => {
    if (isMale) {
        const muscle =
            39.5 + 0.665 * weight - 0.185 * waist - 0.418 * hip - 0.08 * age;
        return muscle;
    } else {
        const muscle =
            2.98 + 0.255 * weight - 0.175 * hip - 0.038 * age + 0.118 * height;
        return muscle;
    }
};

export { measureFat, measureMuscle };
