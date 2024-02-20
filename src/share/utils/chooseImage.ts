export const chooseImage = (
  urls: string[],
  width: number[],
  height: number[],
  targetWidth?: number,
  targetHeight?: number
) => {
  let bestIdx = 0;
  let bestValue = Infinity;

  const max = urls.length;
  for (let i = 0; i < max; i++) {
    let currentValue = 0;
    if (targetWidth) {
      currentValue += Math.abs(width[i] - targetWidth);
    }
    if (targetHeight) {
      currentValue += Math.abs(height[i] - targetHeight);
    }
    if (currentValue < bestValue) {
      bestIdx = i;
      bestValue = currentValue;
    }
  }

  return urls[bestIdx];
};
