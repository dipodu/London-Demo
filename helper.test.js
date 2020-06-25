const {
  isUserInLondonRaduis,
  getDistanceFromLatLonInKm,
  londonLongitude,
  londonLatitude,
} = require("./helper");

test("should acuratley get the distance between two points in km ", () => {
  let testLatitude = 34.003135;
  let testLongitude = -117.7228641;

  let result = getDistanceFromLatLonInKm(
    londonLatitude,
    londonLongitude,
    testLatitude,
    testLongitude
  );

  expect(result).toBe(8733.49944729055);
});
test("should confirm location is within 50 miles of London ", () => {
  let testLatitude = 51.410868;
  let testLongitude = 0.25397;

  expect(isUserInLondonRaduis(testLatitude, testLongitude)).toBe(true);
});
test("should confirm location is 50 miles beyond London ", () => {
  let testLatitude = 52.594387;
  let testLongitude = 0.133115;

  expect(isUserInLondonRaduis(testLatitude, testLongitude)).toBe(false);
});
