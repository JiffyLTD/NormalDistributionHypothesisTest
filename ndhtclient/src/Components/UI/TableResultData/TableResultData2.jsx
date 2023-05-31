import React, { useEffect } from 'react'

const TableResultData2 = ({resultData2}) => {
  return (
    <table>
    <caption>Вычисляемые данные 	&uarr;</caption>
      <tbody id="resultData-2">
        <tr>
        <td className="border border-primary text-center" width="100pt">
          <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
          <semantics>
            <mrow>
              <msubsup>
                <mi>n</mi>
              </msubsup>
            </mrow>
            <annotation encoding="application/x-tex">
              n
            </annotation>
          </semantics>
        </math>
          </td>
          <td className="border border-primary text-center" width="200pt">
          <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
          <semantics>
            <mrow>
              <mover accent="true">
                <mi>x</mi>
                <mo>ˉ</mo>
              </mover>
              <mo>=</mo>
              <mfrac>
                <mrow>
                  <mo>∑</mo>
                  <msub>
                    <mi>x</mi>
                    <mi>i</mi>
                  </msub>
                  <msub>
                    <mi>n</mi>
                    <mi>i</mi>
                  </msub>
                </mrow>
                <mi>n</mi>
              </mfrac>
            </mrow>
            <annotation encoding="application/x-tex">
              \barx = \frac\sum x_i n_in
            </annotation>
          </semantics>
        </math>
          </td>
          <td className="border border-primary text-center" width="200pt">
          <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
          <semantics>
            <mrow>
              <msub>
                <mi>σ</mi>
                <mi>e</mi>
              </msub>
              <mo>=</mo>
              <msqrt>
                <mrow>
                  <mfrac>
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
                    <mi>n</mi>
                  </mfrac>
                  <mo>−</mo>
                  <mo stretchy="false">(</mo>
                  <mover accent="true">
                    <mi>x</mi>
                    <mo>ˉ</mo>
                  </mover>
                  <msup>
                    <mo stretchy="false">)</mo>
                    <mn>2</mn>
                  </msup>
                </mrow>
              </msqrt>
            </mrow>
            <annotation encoding="application/x-tex">
              \sigma_e = \sqrt\fracx_i^2 n_in - (\barx)^2
            </annotation>
          </semantics>
        </math>
          </td>
          <td className="border border-primary text-center" width="100pt">
          <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
          <semantics>
            <mrow>
              <mi>k</mi>
            </mrow>
            <annotation encoding="application/x-tex">k</annotation>
          </semantics>
        </math>
          </td>
          <td className="border border-primary text-center" width="100pt">
          <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
          <semantics>
            <mrow>
              <msubsup>
                <mi>x</mi>
                <mtext>крит</mtext>
                <mn>2</mn>
              </msubsup>
            </mrow>
            <annotation encoding="application/x-tex">
              x^2_\textкрит
            </annotation>
          </semantics>
        </math>
          </td>
          <td className="border border-primary text-center" width="100pt">
          <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
          <semantics>
            <mrow>
              <msubsup>
                <mi>x</mi>
                <mtext>набл</mtext>
                <mn>2</mn>
              </msubsup>
            </mrow>
            <annotation encoding="application/x-tex">
              x^2_\textкрит
            </annotation>
          </semantics>
        </math>
          </td>
        </tr>
        <tr>
          <td className="border border-primary text-center" width="100pt">
            {resultData2.intervalsFrequencySum}
          </td>
          <td className="border border-primary text-center" width="100pt">
           {resultData2.sampleMean.toFixed(2)}
          </td>
          <td className="border border-primary text-center" width="100pt">
          {resultData2.standartDeviation.toFixed(2)}
          </td>
          <td className="border border-primary text-center" width="100pt">
          {resultData2.degreesOfFreedom}
          </td>
          <td className="border border-primary text-center" width="100pt">
          {resultData2.pirsonsMean.toFixed(2)}
          </td>
          <td className="border border-primary text-center" width="100pt">
          {resultData2.pirsonsValuesSum.toFixed(2)}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default TableResultData2