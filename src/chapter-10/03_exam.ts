function kClosest(points: number[][], k: number): number[][] {
  const distance = (point: number[]) => point[0] * point[0] + point[1] * point[1];

  const partition = (left: number, right: number, pivotIndex: number): number => {
    const pivotDistance = distance(points[pivotIndex]);
    [points[pivotIndex], points[right]] = [points[right], points[pivotIndex]];
    let storeIndex = left;
    for (let i = left; i < right; i++) {
      if (distance(points[i]) < pivotDistance) {
        [points[storeIndex], points[i]] = [points[i], points[storeIndex]];
        storeIndex++;
      }
    }
    [points[right], points[storeIndex]] = [points[storeIndex], points[right]];
    return storeIndex;
  };

  const quickSelect = (left: number, right: number, k: number) => {
    if (left >= right) return;

    const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
    const finalPivotIndex = partition(left, right, pivotIndex);

    if (finalPivotIndex === k) return;
    else if (finalPivotIndex < k) quickSelect(finalPivotIndex + 1, right, k);
    else quickSelect(left, finalPivotIndex - 1, k);
  };

  quickSelect(0, points.length - 1, k);

  return points.slice(0, k);
}
