const modelData = [
  {
    header: "Model",
    fixed: "Fixed",
    adaptive: "Adaptive",
  },
  {
    header: "F-statistic",
    fixed: 1.2514,
    adaptive: 1.0067,
  },
  {
    header: "df1",
    fixed: 4.0,
    adaptive: 4.0,
  },
  {
    header: "df2",
    fixed: 3.3746,
    adaptive: 3.9796,
  },
  {
    header: "p-value",
    fixed: 0.4327,
    adaptive: 0.4979,
  },
  {
    header: "SS OLS Residuals",
    fixed: 20060.58,
    adaptive: 20060.58,
  },
  {
    header: "SS GWR Residuals",
    fixed: 16030.77,
    adaptive: 19927.86,
  },
];

const ModelTable = () => {
  return (
    <table className="table">
      <tbody>
        {modelData.map((row, index) => (
          <tr key={index}>
            <th>{row.header}</th>
            <td>{row.fixed}</td>
            <td>{row.adaptive}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ModelTable;
