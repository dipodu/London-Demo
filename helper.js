const londonLatitude = 51.509865;
const londonLongitude = -0.118092;

const isUserInLondonRaduis = (userLat, userLong) => {
  const maximumDistanceFromLondon = 80.4672; //in km

  const distance = getDistanceFromLatLonInKm(
    londonLatitude,
    londonLongitude,
    userLat,
    userLong
  );
  return distance < maximumDistanceFromLondon ? true : false;
};

const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  var earthRadius = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distance = earthRadius * c; // Distance in km
  return distance;
};

const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};

exports.isUserInLondonRaduis = isUserInLondonRaduis;
exports.getDistanceFromLatLonInKm = getDistanceFromLatLonInKm;
exports.deg2rad = deg2rad;
exports.londonLatitude = londonLatitude;
exports.londonLongitude = londonLongitude;
