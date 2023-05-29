﻿namespace NDHTAPI.DocumentsFiles
{
    public class TableHeaderData
    {
        /// <summary>
        /// Формулы входных данных для шапки таблицы
        /// </summary>
        public static List<string> TableHeaderEnterData = new()
        {
            "Начало интервала",
            "Конец интервала",
            "<math style=\"font-size: 10pt\"  xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\">\r\n            <semantics>\r\n              <mrow>\r\n                <msub>\r\n                  <mi>n</mi>\r\n                  <mi>i</mi>\r\n                </msub>\r\n              </mrow>\r\n              <annotation encoding=\"application/x-tex\">n_i</annotation>\r\n            </semantics>\r\n          </math>",
            "<math style=\"font-size: 10pt\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\">\r\n            <semantics>\r\n              <mrow>\r\n                <mi>α</mi>\r\n              </mrow>\r\n              <annotation encoding=\"application/x-tex\">\\alpha</annotation>\r\n            </semantics>\r\n          </math>",
            "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\">\r\n          <semantics>\r\n            <mrow>\r\n              <msubsup>\r\n                <mi>h</mi>\r\n              </msubsup>\r\n            </mrow>\r\n            <annotation encoding=\"application/x-tex\">\r\n              h\r\n            </annotation>\r\n          </semantics>\r\n        </math>",
        };

        /// <summary>
        /// Формулы вычисляемых данных для шапки таблицы №1
        /// </summary>
        public static List<string> TableHeaderResult1Data = new()
        {
            "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\">\r\n              <semantics>\r\n                <mrow>\r\n                  <msub>\r\n                    <mi>x</mi>\r\n                    <mi>i</mi>\r\n                  </msub>\r\n                </mrow>\r\n                <annotation encoding=\"application/x-tex\">x_i</annotation>\r\n              </semantics>\r\n            </math>",
            "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\">\r\n              <semantics>\r\n                <mrow>\r\n                  <msub>\r\n                    <mi>x</mi>\r\n                    <mi>i</mi>\r\n                  </msub>\r\n                  <msub>\r\n                    <mi>n</mi>\r\n                    <mi>i</mi>\r\n                  </msub>\r\n                </mrow>\r\n                <annotation encoding=\"application/x-tex\">x_i n_i</annotation>\r\n              </semantics>\r\n            </math>",
            "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\">\r\n              <semantics>\r\n                <mrow>\r\n                  <msubsup>\r\n                    <mi>x</mi>\r\n                    <mi>i</mi>\r\n                    <mn>2</mn>\r\n                  </msubsup>\r\n                  <msub>\r\n                    <mi>n</mi>\r\n                    <mi>i</mi>\r\n                  </msub>\r\n                </mrow>\r\n                <annotation encoding=\"application/x-tex\">x_i^2 n_i</annotation>\r\n              </semantics>\r\n            </math>",
            "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\">\r\n              <semantics>\r\n                <mrow>\r\n                  <msub>\r\n                    <mi>z</mi>\r\n                    <mi>i</mi>\r\n                  </msub>\r\n                </mrow>\r\n                <annotation encoding=\"application/x-tex\">z_i</annotation>\r\n              </semantics>\r\n            </math>",
            "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\">\r\n              <semantics>\r\n                <mrow>\r\n                  <msub>\r\n                    <mi>f</mi>\r\n                    <msub>\r\n                      <mi>z</mi>\r\n                      <mi>i</mi>\r\n                    </msub>\r\n                  </msub>\r\n                </mrow>\r\n                <annotation encoding=\"application/x-tex\">f_(z_i)</annotation>\r\n              </semantics>\r\n            </math>",
            "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\">\r\n              <semantics>\r\n                <mrow>\r\n                  <msubsup>\r\n                    <mi>n</mi>\r\n                    <mi>i</mi>\r\n                    <mi>t</mi>\r\n                  </msubsup>\r\n                </mrow>\r\n                <annotation encoding=\"application/x-tex\">n_i^t</annotation>\r\n              </semantics>\r\n            </math>",
            "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\">\r\n              <semantics>\r\n                <mrow>\r\n                  <mfrac>\r\n                    <mrow>\r\n                      <mo stretchy=\"false\">(</mo>\r\n                      <msub>\r\n                        <mi>n</mi>\r\n                        <mi>i</mi>\r\n                      </msub>\r\n                      <mo>−</mo>\r\n                      <msubsup>\r\n                        <mi>n</mi>\r\n                        <mi>i</mi>\r\n                        <mi>t</mi>\r\n                      </msubsup>\r\n                      <msup>\r\n                        <mo stretchy=\"false\">)</mo>\r\n                        <mn>2</mn>\r\n                      </msup>\r\n                    </mrow>\r\n                    <msubsup>\r\n                      <mi>n</mi>\r\n                      <mi>i</mi>\r\n                      <mi>t</mi>\r\n                    </msubsup>\r\n                  </mfrac>\r\n                </mrow>\r\n                <annotation encoding=\"application/x-tex\">\r\n                  \\frac(n_i - n_i^t)^2n_i^t\r\n                </annotation>\r\n              </semantics>\r\n            </math>",
        };

        /// <summary>
        /// Формулы вычисляемых данных для шапки таблицы №2
        /// </summary>
        public static List<string> TableHeaderResult2Data = new()
        {
            "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\">\r\n          <semantics>\r\n            <mrow>\r\n              <msubsup>\r\n                <mi>n</mi>\r\n              </msubsup>\r\n            </mrow>\r\n            <annotation encoding=\"application/x-tex\">\r\n              n\r\n            </annotation>\r\n          </semantics>\r\n        </math>",
            "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\">\r\n          <semantics>\r\n            <mrow>\r\n              <mover accent=\"true\">\r\n                <mi>x</mi>\r\n                <mo>ˉ</mo>\r\n              </mover>\r\n              <mo>=</mo>\r\n              <mfrac>\r\n                <mrow>\r\n                  <mo>∑</mo>\r\n                  <msub>\r\n                    <mi>x</mi>\r\n                    <mi>i</mi>\r\n                  </msub>\r\n                  <msub>\r\n                    <mi>n</mi>\r\n                    <mi>i</mi>\r\n                  </msub>\r\n                </mrow>\r\n                <mi>n</mi>\r\n              </mfrac>\r\n            </mrow>\r\n            <annotation encoding=\"application/x-tex\">\r\n              \\barx = \\frac\\sum x_i n_in\r\n            </annotation>\r\n          </semantics>\r\n        </math>",
            "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\">\r\n          <semantics>\r\n            <mrow>\r\n              <msub>\r\n                <mi>σ</mi>\r\n                <mi>e</mi>\r\n              </msub>\r\n              <mo>=</mo>\r\n              <msqrt>\r\n                <mrow>\r\n                  <mfrac>\r\n                    <mrow>\r\n                      <msubsup>\r\n                        <mi>x</mi>\r\n                        <mi>i</mi>\r\n                        <mn>2</mn>\r\n                      </msubsup>\r\n                      <msub>\r\n                        <mi>n</mi>\r\n                        <mi>i</mi>\r\n                      </msub>\r\n                    </mrow>\r\n                    <mi>n</mi>\r\n                  </mfrac>\r\n                  <mo>−</mo>\r\n                  <mo stretchy=\"false\">(</mo>\r\n                  <mover accent=\"true\">\r\n                    <mi>x</mi>\r\n                    <mo>ˉ</mo>\r\n                  </mover>\r\n                  <msup>\r\n                    <mo stretchy=\"false\">)</mo>\r\n                    <mn>2</mn>\r\n                  </msup>\r\n                </mrow>\r\n              </msqrt>\r\n            </mrow>\r\n            <annotation encoding=\"application/x-tex\">\r\n              \\sigma_e = \\sqrt\\fracx_i^2 n_in - (\\barx)^2\r\n            </annotation>\r\n          </semantics>\r\n        </math>",
            "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\">\r\n          <semantics>\r\n            <mrow>\r\n              <mi>k</mi>\r\n            </mrow>\r\n            <annotation encoding=\"application/x-tex\">k</annotation>\r\n          </semantics>\r\n        </math>",
            "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\">\r\n          <semantics>\r\n            <mrow>\r\n              <msubsup>\r\n                <mi>x</mi>\r\n                <mtext>крит</mtext>\r\n                <mn>2</mn>\r\n              </msubsup>\r\n            </mrow>\r\n            <annotation encoding=\"application/x-tex\">\r\n              x^2_\\textкрит\r\n            </annotation>\r\n          </semantics>\r\n        </math>",
            "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\">\r\n          <semantics>\r\n            <mrow>\r\n              <msubsup>\r\n                <mi>x</mi>\r\n                <mtext>набл</mtext>\r\n                <mn>2</mn>\r\n              </msubsup>\r\n            </mrow>\r\n            <annotation encoding=\"application/x-tex\">\r\n              x^2_\\textкрит\r\n            </annotation>\r\n          </semantics>\r\n        </math>"
        };
    }
}
