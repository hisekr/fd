export async function getRegionAndSubRegion() {
  try {
    const url = "https://restcountries.com/v3.1/all";
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Error");
    }
    const data = await res.json();

    const result = data.reduce((accumulator, currentValue) => {
      const region = currentValue.region;
      const subRegion = currentValue.subregion;

      if (!accumulator[region]) {
        accumulator[region] = [];
      }

      if (!accumulator[region].includes(subRegion)) {
        accumulator[region].push(subRegion);
      }

      return accumulator;
    }, {});

    return result;
  } catch (error) {
    throw new Error("Error");
  }
}
