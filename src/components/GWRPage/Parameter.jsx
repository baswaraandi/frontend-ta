const parameters = [
  { name: "X1", estimate: -7.745407 },
  { name: "X2", estimate: 0.537971 },
  { name: "X3", estimate: -2.005138 },
  { name: "X4", estimate: 6.623611 },
  { name: "X5", estimate: -0.6794115 },
  { name: "X6", estimate: 5.649543 },
  { name: "X7", estimate: -2.620565 },
  { name: "X8", estimate: -14.61171 },
  { name: "X9", estimate: -8.868246 },
  { name: "X10", estimate: 4.479863 },
  { name: "X11", estimate: -4.356137 },
  { name: "X12", estimate: 2.1012984 },
  { name: "X13", estimate: 10.46673 },
  { name: "X14", estimate: 7.015239 },
  { name: "X15", estimate: 23.43488 },
  { name: "X16", estimate: -11.241191 },
  { name: "X17", estimate: 2.1018 },
  { name: "X18", estimate: -6.844006 },
  { name: "X19", estimate: 18.88545 },
  { name: "X20", estimate: -7.759418 },
  { name: "X21", estimate: -1.455156 },
  { name: "X22", estimate: 7.571786 },
  { name: "X23", estimate: 3.092506 },
  { name: "X24", estimate: -15.97848 },
  { name: "X25", estimate: 4.089731 },
];

const ParameterTable = () => {
  return (
    <div className="overflow-y-scroll">
      <table className="table">
        <thead>
          <tr>
            <th className="">Parameter</th>
            <th className="">Estimate</th>
          </tr>
        </thead>
        <tbody>
          {parameters.map((param) => (
            <tr key={param.name}>
              <td className="">{param.name}</td>
              <td className="">{param.estimate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParameterTable;
