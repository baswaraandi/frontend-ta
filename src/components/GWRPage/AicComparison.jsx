const modelData = [
  {
    model: "Fixed GWR",
    AIC: 299.89,
    R2: 0.9034563,
  },
  {
    model: "Adaptive GWR",
    AIC: 306.1,
    R2: 0.8799864,
  },
];

const AICTable = () => {
  return (
    <table className="table text-white">
      <thead className="text-white">
        <tr>
          <th>Pemodelan</th>
          <th>AIC</th>
          <th>R^2</th>
        </tr>
      </thead>
      <tbody>
        {modelData.map((item, index) => (
          <tr key={index}>
            <td>{item.model}</td>
            <td>{item.AIC}</td>
            <td>{item.R2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AICTable;
