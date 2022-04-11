import { GoogleMap, useLoadScript, Marker, InfoWindow, LoadScript } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "600px",
  height: "300px",
};
const center = {
  lat: 25.0461565,
  lng: 121.5588992,
};

const ResturantMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDqAQOotj_Jggy2FV4TGrwwJwFPDITTVaQ",
    libraries,
  });

  return (
    <>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} center={center}></GoogleMap>
    </>
  );
};

export default ResturantMap;
