using Aspose.Words;
using Aspose.Words.Tables;
using NDHTAPI.DocumentsFiles;
using NDHTAPI.Models;

namespace NDHTAPI.DocFiles
{
    public class Doc
    {
        public async void CreateNewDoc(PopulationOfData data)
        {
            Document doc = new();

            DocumentBuilder builder = new(doc);

            builder.Font.Size = 16;
            builder.Bold = true;
            builder.Write("Результаты проверки гипотезы о нормальном распределении");
            builder.Bold = false;
            builder.Font.Size = 14;

            CreateEnter(builder, 2);

            CreateEnterDataTable(builder, data);// создаем таблицу входных данных
            CreateEnter(builder, 1);
            CreateResultDataTable(builder, data);// создаем таблицу вычисляемых данных

            doc.Save("ResultDocuments\\ПроверкаГипотезыНормальногоРаспределения.docx");
        }

        private static void CreateEnter(DocumentBuilder builder, int count)
        {
            for (int i = 0; i < count; i++)
            {
                builder.InsertParagraph();
            }
        }

        private static void CreateEnterDataTable(DocumentBuilder builder, PopulationOfData data)
        {
            builder.Write("Таблица 1 - Входные данные");
            builder.StartTable();

            // шапка
            for (int i = 0; i < 6; i++)
            {
                builder.InsertCell();
                builder.InsertHtml(TableHeaderData.TableHeaderEnterData[i]);
            }

            builder.EndRow();

            for (int i = 0; i < 6; i++)
            {
                builder.InsertCell();
                builder.Write(data.StartIntervals[i].ToString());
            }

            builder.EndRow();
            builder.EndTable();
        }

        private static void CreateResultDataTable(DocumentBuilder builder, PopulationOfData data)
        {
            builder.Write("Таблица 2 - Вычисляемые данные");
            builder.StartTable();
            
            // шапка
            for (int i = 0; i < 9; i++)
            {
                builder.InsertCell();
                builder.InsertHtml(TableHeaderData.TableHeaderResultData[i]);
            }

            builder.EndRow();

            for (int i = 0; i < 9; i++)
            {
                builder.InsertCell();
            }

            builder.EndRow();
            builder.EndTable();
        }
    }
}
