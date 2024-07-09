interface Props {
  age: number;
  height: number;
  hairlength?: string | null;
  eyecolor?: string | null;
  boobsize?: string | null;
  beardlength?: string | null;
  bodysize?: string | null;
}

export function calculateValue({
  age,
  height,
  hairlength,
  eyecolor,
  boobsize,
  bodysize,
  beardlength,
}: Props): number {
  const baseIncome = 300000000; // 3億円
  const chickenValue = 2380; // ニワトリ一羽の価値

  let hairFactor: number;
  let eyecolorFactor: number;
  let boobFactor: number;
  let heightFactor: number;
  let beardFactor: number;
  let bodyFactor: number;

  switch (hairlength) {
    case "short":
      hairFactor = -0.1;
      break;
    case "medium":
      hairFactor = 0;
      break;
    case "long":
      hairFactor = 0.1;
      break;
    default:
      hairFactor = 0;
  }

  switch (eyecolor) {
    case "black":
      eyecolorFactor = 0;
      break;
    case "brown":
      eyecolorFactor = 0;
      break;
    case "other":
      eyecolorFactor = 0.1;
      break;
    default:
      eyecolorFactor = 0.03;
  }

  switch (boobsize) {
    case "small":
      boobFactor = -0.1;
      break;
    case "normal":
      boobFactor = 0;
      break;
    case "big":
      boobFactor = 0.1;
      break;
    case "huge":
      boobFactor = -0.1;
      break;
    default:
      boobFactor = 0;
  }

  // 身長による調整
  if (height < 150) {
    heightFactor = -0.1;
  } else if (height < 180) {
    heightFactor = 0.1;
  } else if (height < 200) {
    heightFactor = 0.2;
  } else {
    heightFactor = -0.05;
  }

  switch (beardlength) {
    case "short":
      beardFactor = 0;
      break;
    case "medium":
      beardFactor = -0.1;
      break;
    case "long":
      beardFactor = -0.1;
      break;
    default:
      beardFactor = 0;
  }

  switch (bodysize) {
    case "small":
      bodyFactor = -0.1;
      break;
    case "athe":
      bodyFactor = 0.1;
      break;
    case "normal":
      bodyFactor = 0;
      break;
    case "big":
      bodyFactor = 0.1;
      break;
    case "huge":
      bodyFactor = -0.1;
      break;
    default:
      bodyFactor = 0;
  }

  // 年齢による調整
  const ageFactor = (65 - age) / 65;

  // 自分の価値を計算
  const value =
    baseIncome *
    (1 + hairFactor) *
    (1 + eyecolorFactor) *
    (1 + boobFactor) *
    (1 + heightFactor) *
    (1 + bodyFactor) *
    (1 + beardFactor) *
    ageFactor;

  return value / chickenValue;
}
