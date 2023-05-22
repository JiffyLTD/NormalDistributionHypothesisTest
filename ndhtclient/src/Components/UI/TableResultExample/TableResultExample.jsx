import React from "react";

const TableResultExample = () => {
  return (
    <table className="border border-primary mt-2">
      <caption>Пример таблицы результатов</caption>
      <tr>
        <td className="border border-primary text-center">Начало интервала</td>
        <td className="border border-primary text-center">Конец интервала</td>
        <td className="border border-primary text-center">
          x<sub>i</sub>
        </td>
        <td className="border border-primary text-center">
          n<sub>i</sub>
        </td>
        <td className="border border-primary text-center">
          x<sub>i</sub>n<sub>i</sub>
        </td>
        <td className="border border-primary text-center">
          x<sub>i</sub>
          <sup>2</sup> n<sub>i</sub>
        </td>
        <td className="border border-primary text-center">
          z<sub>i</sub>
        </td>
        <td className="border border-primary text-center">
          f(
          <sub>
            z<sub>i</sub>
          </sub>
          )
        </td>
        <td className="border border-primary text-center">
          n<sub>i</sub>
          <sup>t</sup>
        </td>
        <td className="border border-primary text-center">
          <table cellPadding='0' cellSpacing='0' className="p-0">
            <tr className="p-0">
                <td>(n<sub>i</sub> - n<sub>i</sub><sup>t</sup>)<sup>2</sup> <hr className="border-bottom border-dark"/></td>
            </tr>
            <tr>
                <td>n<sub>i</sub><sup>t</sup></td>
            </tr>
          </table>
        </td>
        <td className="border-bottom border-primary text-center">
            x̅ =
        </td>
        <td className="border-bottom border-primary text-center"> 
          <table cellPadding='0' cellSpacing='0' className="p-0">
            <tr className="p-0">
                <td>&#8721;x<sub>i</sub>n<sub>i</sub> <hr className="border-bottom border-dark"/></td>
            </tr>
            <tr>
                <td>n</td>
            </tr>
          </table>
        </td>
        <td className="border-bottom border-start border-primary text-center">
            &#x3C3; <sub>e</sub> = &#8730;
        </td>
        <td className="border-bottom border-primary text-center"> 
          <table cellPadding='0' cellSpacing='0' className="p-0">
            <tr className="p-0">
                <td>x<sub>i</sub><sup>2</sup> n<sub>i</sub> <hr className="border-bottom border-dark"/></td>
            </tr>
            <tr>
                <td>n</td>
            </tr>
          </table>
        </td>
        <td className="border-bottom  border-primary text-center">
            - (x̅)<sup>2</sup>
        </td>
        <td className="border border-primary text-center">
          x <sup>2</sup> <sub>крит</sub>
        </td>
        <td className="border border-primary text-center">
             &#x3B1;
        </td>
        <td className="border border-primary text-center">
          k
        </td>
      </tr>
      <tr>
        <td className="border border-primary text-center">data</td> 
        <td className="border border-primary text-center">data</td>
        <td className="border border-primary text-center">data</td>
        <td className="border border-primary text-center">data</td>
        <td className="border border-primary text-center">data</td>
        <td className="border border-primary text-center">data</td>
        <td className="border border-primary text-center">data</td>
        <td className="border border-primary text-center">data</td>
        <td className="border border-primary text-center">data</td>
        <td className="border border-primary text-center">data</td>

        <td className="border-bottom border-primary text-center"></td>
        <td className="border-bottom border-primary text-center">data</td>

        <td className="border-bottom border-start border-primary text-center"></td>
        <td className="border-bottom border-primary text-center">data</td>
        <td className="border-bottom border-primary text-center"></td>

        <td className="border border-primary text-center">data</td>
        <td className="border border-primary text-center">data</td>
        <td className="border border-primary text-center">data</td>

      </tr>
      <tr>
        <td className="border border-primary text-center">h =</td>
        <td className="border border-primary text-center">data</td>
        <td className="border border-primary text-center">n =</td>
        <td className="border border-primary text-center">data</td>
        <td className="border-bottom border-primary text-center"></td>
        <td className="border-bottom border-primary text-center"></td>
        <td className="border-bottom border-primary text-center"></td>
        <td className="border-bottom border-primary text-center"></td>
        <td className="border-start border-primary text-center">x <sup>2</sup> <sub>набл</sub> = </td>
        <td className="border-end border-primary text-center">data</td>
      </tr>
    </table>
  );
};

export default TableResultExample;
