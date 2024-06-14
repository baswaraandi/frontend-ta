import vehicleIcons from "./MappingArea/IconVehicle";

const Carousel = () => {
    const vehicleImages = [
      vehicleIcons.AGYA.options.iconUrl,
      vehicleIcons.AVANZA.options.iconUrl,
      vehicleIcons.AYLA.options.iconUrl,
      vehicleIcons.BRIO.options.iconUrl,
      vehicleIcons.MOBILIO.options.iconUrl,
      vehicleIcons.CALYA.options.iconUrl,
      vehicleIcons.ERTIGA.options.iconUrl,
      vehicleIcons.FORTUNER.options.iconUrl,
      vehicleIcons.GRANDMAX.options.iconUrl,
      vehicleIcons.INNOVA.options.iconUrl,
      vehicleIcons.RAIZE.options.iconUrl,
      vehicleIcons.ROCKY.options.iconUrl,
      vehicleIcons.SIGRA.options.iconUrl,
      vehicleIcons.STARGAZER.options.iconUrl,
      vehicleIcons.TERIOS.options.iconUrl,
      vehicleIcons.VELOZ.options.iconUrl,
      vehicleIcons.XENIA.options.iconUrl,
      vehicleIcons.XPANDER.options.iconUrl,
      vehicleIcons["YARIS CROSS"].options.iconUrl,
      vehicleIcons.ZENIX.options.iconUrl,
    ];
  
    return (
        <div className="w-full carousel rounded-box">
          {vehicleImages.map((imageUrl, index) => (
            <div key={index} className="carousel-item w-fit h-fit place-content-center">
              <img
                src={imageUrl}
                className="w-fit h-auto aspect-w-16 aspect-h-9"
                alt={`Vehicle ${index + 1}`}
              />
            </div>
          ))}
        </div>
    );
  };
  
  export default Carousel;
  