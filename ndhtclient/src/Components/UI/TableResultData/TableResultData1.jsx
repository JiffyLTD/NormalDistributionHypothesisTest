import React, { useEffect } from "react";

const TableResultData1 = ({ resultData1 }) => {
  useEffect(() => {
    if (resultData1) {
      tableCreate();
    }
  }, []);

  const tableCreate = () => {
    let table = document.getElementById("resultData-1");

    for (let i = 0; i < resultData1.middleIntervals.length; i++) {
      let row = document.createElement("tr");

      let temp = 0;
      for (let j = temp; j < 7; j++) {
        let cell = document.createElement("td");
        cell.className = "border border-primary text-center";

        try{
        switch (j) {
          case 0:
            cell.innerText = resultData1.middleIntervals[i];
            break;
          case 1:
            cell.innerText = resultData1.sampleMeans[i];
            break;
          case 2:
            cell.innerText = resultData1.standartDeviations[i];
            break;
          case 3:
            cell.innerText = resultData1.standartizeValues[i].toFixed(2);
            break;
          case 4:
            cell.innerText = resultData1.standartNormalDestribution[i].toFixed(2);
            break;
          case 5:
            cell.innerText = resultData1.theoreticalFrequencies[i].toFixed(2);
            break;
          case 6:
            cell.innerText = resultData1.pirsonsValues[i].toFixed(2);
            break;
        }
      }catch{
        cell.innerText = "NaN";
      }

        row.appendChild(cell);
      }

      table.appendChild(row);
    }
  };
  return (
    <table>
      <caption>Вычисляемые данные &uarr;</caption>
      <tbody id="resultData-1">
        <tr>
          <td className="border border-primary text-center" width="70pt">
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
              <semantics>
                <mrow>
                  <msub>
                    <mi>x</mi>
                    <mi>i</mi>
                  </msub>
                </mrow>
                <annotation encoding="application/x-tex">x_i</annotation>
              </semantics>
            </math>
          </td>
          <td className="border border-primary text-center" width="70pt">
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
              <semantics>
                <mrow>
                  <msub>
                    <mi>x</mi>
                    <mi>i</mi>
                  </msub>
                  <msub>
                    <mi>n</mi>
                    <mi>i</mi>
                  </msub>
                </mrow>
                <annotation encoding="application/x-tex">x_i n_i</annotation>
              </semantics>
            </math>
          </td>
          <td className="border border-primary text-center" width="70pt">
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
              <semantics>
                <mrow>
                  <msubsup>
                    <mi>x</mi>
                    <mi>i</mi>
                    <mn>2</mn>
                  </msubsup>
                  <msub>
                    <mi>n</mi>
                    <mi>i</mi>
                  </msub>
                </mrow>
                <annotation encoding="application/x-tex">x_i^2 n_i</annotation>
              </semantics>
            </math>
          </td>
          <td className="border border-primary text-center" width="70pt">
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
              <semantics>
                <mrow>
                  <msub>
                    <mi>z</mi>
                    <mi>i</mi>
                  </msub>
                </mrow>
                <annotation encoding="application/x-tex">z_i</annotation>
              </semantics>
            </math>
          </td>
          <td className="border border-primary text-center" width="70pt">
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
              <semantics>
                <mrow>
                  <msub>
                    <mi>f</mi>
                    <msub>
                      <mi>z</mi>
                      <mi>i</mi>
                    </msub>
                  </msub>
                </mrow>
                <annotation encoding="application/x-tex">f_(z_i)</annotation>
              </semantics>
            </math>
          </td>
          <td className="border border-primary text-center" width="70pt">
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
              <semantics>
                <mrow>
                  <msubsup>
                    <mi>n</mi>
                    <mi>i</mi>
                    <mi>t</mi>
                  </msubsup>
                </mrow>
                <annotation encoding="application/x-tex">n_i^t</annotation>
              </semantics>
            </math>
          </td>
          <td className="border border-primary text-center" width="100pt">
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
              <semantics>
                <mrow>
                  <mfrac>
                    <mrow>
                      <mo stretchy="false">(</mo>
                      <msub>
                        <mi>n</mi>
                        <mi>i</mi>
                      </msub>
                      <mo>−</mo>
                      <msubsup>
                        <mi>n</mi>
                        <mi>i</mi>
                        <mi>t</mi>
                      </msubsup>
                      <msup>
                        <mo stretchy="false">)</mo>
                        <mn>2</mn>
                      </msup>
                    </mrow>
                    <msubsup>
                      <mi>n</mi>
                      <mi>i</mi>
                      <mi>t</mi>
                    </msubsup>
                  </mfrac>
                </mrow>
                <annotation encoding="application/x-tex">
                  \frac(n_i - n_i^t)^2n_i^t
                </annotation>
              </semantics>
            </math>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableResultData1;
