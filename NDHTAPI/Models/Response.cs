namespace NDHTAPI.Models
{
    public class Response
    {
        public Response(PopulationOfData populationOfData, string message)
        {
            PopulationOfData = populationOfData;
            Message = message;
        }

        public PopulationOfData PopulationOfData { get; set; }
        public string Message { get; set; }
    }
}
