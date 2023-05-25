using Microsoft.AspNetCore.Mvc;
using NDHTAPI.Models;
using System.Text.Json.Serialization;
using System.Text.Json;
using NDHTAPI.DocFiles;

namespace NDHTAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NormalDestributionController : ControllerBase
    {
        [HttpGet]
        public async Task<IResult> Get()
        {
            var start = new double[9] { 7.5, 10.5, 13.5, 16.5, 19.5, 22.5, 25.5, 28.5, 31.5 };
            var end = new double[9] { 10.5, 13.5, 16.5, 19.5, 22.5, 25.5, 28.5, 31.5, 34.5 };
            var intervalsFrequency = new double[9] { 2, 6, 10, 17, 22, 11, 9, 7, 5 };
            var probability = 0.05;

            var populationOfTheData = await PopulationOfData.CreatePopulationOfData(start, end, intervalsFrequency, probability);

            var result = await NormalDestribution.ValidationNormalDestribution.PopulationOfTheDataIsValid(populationOfTheData.PirsonsValuesSum, populationOfTheData.PirsonsMean);

            Doc doc = new();

            doc.CreateNewDoc(populationOfTheData);

            return Results.Ok(new Response(populationOfTheData, result));
        }
    }
}
