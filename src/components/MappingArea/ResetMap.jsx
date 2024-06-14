const ResetMap = ({ mapRef }) => {
  const resetMap = () => {
    if (mapRef.current) {
      mapRef.current.flyTo([-6.905977, 107.613144], 12);
    }
  };

  return (
    <button
      onClick={resetMap}
      className="mt-4 bg-blue-500 text-white px-4 rounded"
    >
      Reset Peta
    </button>
  );
};

export default ResetMap;
