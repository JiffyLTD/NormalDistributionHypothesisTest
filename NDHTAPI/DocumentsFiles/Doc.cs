using Aspose.Words;
using Aspose.Words.Tables;
using NDHTAPI.DocumentsFiles;

namespace NDHTAPI.DocFiles
{
    public class Doc
    {
        public async void CreateNewDoc()
        {
            Document doc = new();

            DocumentBuilder builder = new(doc);

            builder.Font.Size = 16;
            builder.Bold = true;
            builder.Write("Результаты проверки гипотезы о нормальном распределении");
            builder.Bold = false;
            builder.Font.Size = 14;

            builder.InsertParagraph();

            CreateRows(builder);

            doc.Save("ResultDocuments\\ПроверкаГипотезыНормальногоРаспределения.docx");
        }

        public async void CreateEnter(DocumentBuilder builder, int count)
        {
            for (int i = 0; i < count; i++)
            {

            }
        }

        public async void CreateRows(DocumentBuilder builder)
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
            }

            builder.EndRow();
            builder.EndTable();

            builder.InsertParagraph();

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
