import React, { useEffect } from "react";

const TableEnterData = ({ enterData }) => {

    useEffect(() => {
        if (enterData) { 
            tableCreate();
          }
    },[])

    const tableCreate = () => {
        let table = document.getElementById('enterData');

        for(let i = 0; i < enterData.startIntervals.length; i++){
            let row = document.createElement("tr");

            let temp = 0;
            for(let j = temp; j < 3; j++){
                let cell = document.createElement("td");
                cell.className = "border border-primary text-center";

                switch(j){
                    case 0: 
                        cell.innerText = enterData.startIntervals[i];
                        break;
                    case 1:
                        cell.innerText = enterData.endIntervals[i];
                        break; 
                    case 2:
                        cell.innerText = enterData.frequencyIntervals[i];
                        break; 
                }

                row.appendChild(cell);
            }
            
            if(i === 0){
              let cell = document.createElement("td");
              cell.className = "border border-primary text-center";
              cell.innerText = enterData.probability;
              row.appendChild(cell);

              let cell2 = document.createElement("td");
              cell2.className = "border border-primary text-center";
              cell2.innerText = enterData.partialIntervalLength;
              row.appendChild(cell2);
            }

            table.appendChild(row);
        }
    }

  return (
    <table>
    <caption>Входные данные &uarr;</caption>
      <tbody id="enterData">
        <tr>
          <td className="border border-primary text-center" width="200pt">
            Начало интервала
          </td>
          <td className="border border-primary text-center" width="200pt">
            Конец интервала
          </td>
          <td className="border border-primary text-center" width="100pt">
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
              <semantics>
                <mrow>
                  <msub>
                    <mi>n</mi>
                    <mi>i</mi>
                  </msub>
                </mrow>
                <annotation encoding="application/x-tex">n_i</annotation>
              </semantics>
            </math>
          </td>
          <td className="border border-primary text-center" width="100pt">
          <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
          <semantics>
            <mrow>
              <mi>α</mi>
            </mrow>
            <annotation encoding="application/x-tex">\alpha</annotation>
          </semantics>
        </math>
          </td>
          <td className="border border-primary text-center" width="100pt">
          <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
          <semantics>
            <mrow>
              <msubsup>
                <mi>h</mi>
              </msubsup>
            </mrow>
            <annotation encoding="application/x-tex">
              h
            </annotation>
          </semantics>
        </math>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableEnterData;
