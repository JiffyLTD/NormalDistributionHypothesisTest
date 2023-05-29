namespace NDHTAPI.Data
{
    public class FromCsvFile
    {
        /// <summary>
        /// Метод чтения .csv файла 
        /// </summary>
        /// <param name="file">.csv файл с фронта</param>
        /// <returns>Возвращает массив веса упаковок и результат удачности чтения файла</returns>
        public static async Task<(double[] weight, bool result)>  Read(IFormFile file)
        {
            List<double> weight = new();

            try
            {
                using (var stream = file.OpenReadStream())
                using (var reader = new StreamReader(stream))
                {
                    var line = await reader.ReadToEndAsync();
                    var rows = line.Split(new[] { Environment.NewLine }, StringSplitOptions.RemoveEmptyEntries);
                    for (int i = 1; i < rows.Length; i++) 
                    {
                        var values = rows[i].Split(';');
                        weight.Add(double.Parse(values[1]));
                    }
                }

                return (weight.ToArray(), true);
            }
            catch (Exception)
            {
                return (weight.ToArray(), false);
            }
        }
    }
}
