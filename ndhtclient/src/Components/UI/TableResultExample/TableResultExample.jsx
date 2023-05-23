import React from "react";

const TableResultExample = () => {
  return (
    <table className="border border-primary mt-2">
    <tr>
      <td className="border border-primary text-center" width="100pt">Начало интервала</td>
      <td className="border border-primary text-center" width="100pt">Конец интервала</td>
      <td className="border border-primary text-center" width="100pt">
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
      <td className="border border-primary text-center " width="100pt">
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
      <td className="border border-primary text-center" width="100pt">
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
      <td className="border border-primary text-center" width="100pt">
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
      <td className="border border-primary text-center" width="100pt">
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
      <td className="border border-primary text-center" width="100pt">
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
      <td className="border border-primary text-center" width="100pt">
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
      <td className="border border-primary text-center" width="100pt">
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
              <mi>k</mi>
            </mrow>
            <annotation encoding="application/x-tex">k</annotation>
          </semantics>
        </math>
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
      <td className="border border-primary text-center">data</td>
      <td className="border border-primary text-center">data</td>
      <td className="border border-primary text-center">data</td>
      <td className="border border-primary text-center">data</td>
      <td className="border border-primary text-center">data</td>
    </tr>
    <tr>
      <td className="border border-primary text-center">h=</td>
      <td className="border border-primary text-center">data</td>
      <td className="border border-primary text-center">n=</td>
      <td className="border border-primary text-center">data</td>
      <td className="border border-primary text-center"></td>
      <td className="border border-primary text-center"></td>
      <td className="border border-primary text-center"></td>
      <td className="border border-primary text-center"></td>
      <td className="border border-primary text-center">
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
          <semantics>
            <mrow>
              <msubsup>
                <mi>x</mi>
                <mtext>набл</mtext>
                <mn>2</mn>
                <mn>=</mn>
              </msubsup>
            </mrow>
            <annotation encoding="application/x-tex">
              x^2_\textкрит
            </annotation>
          </semantics>
        </math>
      </td>
      <td className="border border-primary text-center">data</td>
      <td className="border border-primary text-center"></td>
      <td className="border border-primary text-center"></td>
      <td className="border border-primary text-center"></td>
      <td className="border border-primary text-center"></td>
      <td className="border border-primary text-center"></td>
    </tr>
    <caption>data - вычисленные значения</caption>
  </table>
  );
};

export default TableResultExample;
