using Microsoft.AspNetCore.Http;

namespace NDHTAPI.Data
{
    public class FromCsvFile
    {
        /// <summary>
        /// Метод чтения .csv файла 
        /// </summary>
        /// <param name="file">.csv файл с фронта</param>
        /// <returns>Возвращает массив веса упаковок и результат удачности чтения файла</returns>
        public static async Task<(double[] weight,string errorType, List<string> errors, bool result)> Read(IFormFile file)
        {
            List<double> weight = new();
            List<string> errors = new();
            bool flag = true;

            using (var stream = file.OpenReadStream())
            using (var reader = new StreamReader(stream))
            {
                var line = await reader.ReadToEndAsync();
                var rows = line.Split(new[] { Environment.NewLine }, StringSplitOptions.RemoveEmptyEntries);
                for (int i = 1; i < rows.Length; i++)
                {
                    var values = rows[i].Split(';');

                    try
                    {
                        weight.Add(double.Parse(values[1]));
                    }
                    catch 
                    {
                        flag = false;
                        errors.Add("Строка " + i + " значение '" + values[1] + "'");
                    }
                }
            }

            return (weight.ToArray(), "Ошибка чтения файла.", errors, flag);
        }
    }
}
