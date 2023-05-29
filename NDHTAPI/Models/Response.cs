namespace NDHTAPI.Models
{
    public class Response
    {
        /// <summary>
        /// Конструктор создания объекта ответа вычислений 
        /// </summary>
        /// <param name="populationOfData">Объект вычислений</param>
        /// <param name="message">Результат проверки</param>
        public Response(PopulationOfData populationOfData, string message)
        {
            PopulationOfData = populationOfData;
            Message = message;
        }

        /// <summary>
        /// Объект вычислений
        /// </summary>
        public PopulationOfData PopulationOfData { get; set; }

        /// <summary>
        /// Результат проверки
        /// </summary>
        public string Message { get; set; }
    }
}
