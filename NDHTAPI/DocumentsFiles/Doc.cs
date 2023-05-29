using Aspose.Cells;
using Aspose.Cells.Charts;
using Aspose.Words;
using NDHTAPI.DocumentsFiles;
using NDHTAPI.Models;
using System.Drawing;

namespace NDHTAPI.DocFiles
{
    public class Doc
    {
        public static void CreateNewDoc(PopulationOfData data, double probability, string result)
        {
            Document doc = new();

            DocumentBuilder builder = new(doc);

            builder.Font.Size = 16;
            builder.Bold = true;
            builder.Write("Результаты проверки гипотезы о нормальном распределении");
            builder.Bold = false;
            builder.Font.Size = 14;

            CreateEnter(builder, 2);

            CreateEnterDataTable(builder, data, probability);// создаем таблицу входных данных
            CreateEnter(builder, 1);
            CreateResult1DataTable(builder, data); // создаем первую таблицу вычисляемых данных
            CreateEnter(builder, 1);
            CreateResult2DataTable(builder, data); // создаем вторую таблицу вычисляемых данных
            CreateEnter(builder, 1);
            CreateChart(builder, data);
            CreateEnter(builder, 2);

            builder.Write("По результатам вычислений и по графику мы можем сделать вывод что - " + result);

            doc.Save("ResultDocuments\\NDHT.docx");
            doc.Save("ResultDocuments\\NDHT.pdf");
        }

        private static void CreateEnter(DocumentBuilder builder, int count)
        {
            for (int i = 0; i < count; i++)
            {
                builder.InsertParagraph();
            }
        }

        private static void CreateEnterDataTable(DocumentBuilder builder, PopulationOfData data, double probability)
        {
            builder.Write("Таблица 1 - Входные данные");
            builder.StartTable();

            // шапка
            for (int i = 0; i < 4; i++)
            {
                builder.InsertCell();
                builder.InsertHtml(TableHeaderData.TableHeaderEnterData[i]);
            }

            builder.EndRow();

            for (int i = 0; i < data.StartIntervals.Length; i++)
            {
                builder.InsertCell();
                builder.Write(data.StartIntervals[i].ToString());
                builder.InsertCell();
                builder.Write(data.EndIntervals[i].ToString());
                builder.InsertCell();
                builder.Write(data.IntervalsFrequency[i].ToString());
                if (i == 0)
                {
                    builder.InsertCell();
                    builder.Write(probability.ToString());
                }
                builder.EndRow();
            }

            builder.EndTable();
        }

        private static void CreateResult1DataTable(DocumentBuilder builder, PopulationOfData data)
        {
            builder.Write("Таблица 2 - Вычисляемые данные");
            builder.StartTable();

            // шапка
            for (int i = 0; i < 7; i++)
            {
                builder.InsertCell();
                builder.InsertHtml(TableHeaderData.TableHeaderResult1Data[i]);
            }

            builder.EndRow();

            for (int i = 0; i < data.MiddleIntervals.Length; i++)
            {
                builder.InsertCell();
                builder.Write(data.MiddleIntervals[i].ToString());
                builder.InsertCell();
                builder.Write(data.SampleMeans[i].ToString());
                builder.InsertCell();
                builder.Write(data.StandartDeviations[i].ToString());
                builder.InsertCell();
                builder.Write(Math.Round(data.StandartizeValues[i], 2).ToString());
                builder.InsertCell();
                builder.Write(Math.Round(data.StandartNormalDestribution[i], 2).ToString());
                builder.InsertCell();
                builder.Write(Math.Round(data.TheoreticalFrequencies[i], 2).ToString());
                builder.InsertCell();
                builder.Write(Math.Round(data.PirsonsValues[i], 2).ToString());
                builder.EndRow();
            }

            builder.EndTable();
        }

        private static void CreateResult2DataTable(DocumentBuilder builder, PopulationOfData data)
        {
            builder.Write("Таблица 3 - Вычисляемые данные");
            builder.StartTable();

            // шапка
            for (int i = 0; i < 7; i++)
            {
                builder.InsertCell();
                builder.InsertHtml(TableHeaderData.TableHeaderResult2Data[i]);
            }

            builder.EndRow();


            builder.InsertCell();
            builder.Write(data.IntervalsFrequencySum.ToString());
            builder.InsertCell();
            builder.Write(data.PartialIntervalLength.ToString());
            builder.InsertCell();
            builder.Write(Math.Round(data.StandartDeviation, 2).ToString());
            builder.InsertCell();
            builder.Write(Math.Round(data.StandartDeviation, 2).ToString());
            builder.InsertCell();
            builder.Write(data.DegreesOfFreedom.ToString());
            builder.InsertCell();
            builder.Write(Math.Round(data.PirsonsMean, 2).ToString());
            builder.InsertCell();
            builder.Write(Math.Round(data.PirsonsValuesSum, 2).ToString());
            builder.EndRow();


            builder.EndTable();
        }

        private static void CreateChart(DocumentBuilder builder, PopulationOfData data)
        {
            // Создаем новый документ Excel
            Workbook workbook = new Workbook();

            // Получаем ссылку на первый лист
            Worksheet worksheet = workbook.Worksheets[0];

            // Добавляем некоторые данные в ячейки
            for(int i = 0; i < data.IntervalsFrequency.Length; i++)
            {
                worksheet.Cells[$"A{i + 1}"].PutValue(data.IntervalsFrequency[i]);
            }

            for (int i = 0; i < data.TheoreticalFrequencies.Length; i++)
            {
                worksheet.Cells[$"B{i + 1}"].PutValue(data.TheoreticalFrequencies[i]);
            }

            for (int i = 0; i < data.MiddleIntervals.Length; i++)
            {
                worksheet.Cells[$"C{i + 1}"].PutValue($"{data.StartIntervals[i]} - {data.EndIntervals[i]}");
            }

            // Добавляем диаграмму на лист
            int chartIndex = worksheet.Charts.Add(ChartType.Column, 5, 0, 15, 5);
            Chart chart = worksheet.Charts[chartIndex];

            // Задаем ширину диаграммы
            chart.ChartObject.Width = 1000;

            // Задаем высоту диаграммы
            chart.ChartObject.Height = 500;

            chart.Title.Text = "График";

            // Добавляем NSeries (источник данных диаграммы) к диаграмме
            chart.NSeries.Add($"A1:B{data.TheoreticalFrequencies.Length + 1}", true);
            // задаем значения по оси Х
            chart.NSeries.CategoryData = $"C1:C{data.MiddleIntervals.Length + 1}";

            // Устанавливаем тип диаграммы 2-й NSeries для отображения в виде линейной диаграммы
            chart.NSeries[1].Type = ChartType.Line;

            // Задаем цвет первой серии диаграммы
            chart.NSeries[0].Area.ForegroundColor = Color.MediumPurple;
            // Задаем цвет второй серии диаграммы
            chart.NSeries[1].Border.Color = Color.Indigo;

            // Получить ссылку на ось X
            Axis xAxis = chart.CategoryAxis;

            // Получить ссылку на ось Y
            Axis yAxis = chart.ValueAxis;

            // Установить подпись для оси X
            xAxis.Title.Text = "Интервалы выборки, гр.";

            // Установить подпись для оси Y
            yAxis.Title.Text = "Количество, шт.";

            chart.NSeries[0].Name = "Гистограмма распределения генеральной совокупности";
            chart.NSeries[1].Name = "График нормального распределения";

            // Сохраняем диаграмму как изображение
            chart.ToImage("ChartPNG\\chart.png");

            builder.InsertImage("ChartPNG\\chart.png");
        }
    }
}
