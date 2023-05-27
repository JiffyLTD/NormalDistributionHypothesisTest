using Microsoft.AspNetCore.Mvc;
using NDHTAPI.Data;
using NDHTAPI.DobuleParseHand;
using NDHTAPI.DocFiles;
using NDHTAPI.Models;
using NDHTAPI.NormalDestribution;

namespace NDHTAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NormalDestributionController : ControllerBase
    {
        [HttpPost]
        public async Task<IResult> Post()
        {
            var httpRequest = Request.Form;
            var file = httpRequest.Files[0];
            var probabilityFromFront = httpRequest["probability"];
            var startFromFront = httpRequest["start"];
            var endFromFront = httpRequest["end"];
            var stepFromFront = httpRequest["step"];

            var valuesFromFront = DoubleParse.DoubleParseValues(probabilityFromFront, startFromFront, endFromFront, stepFromFront);

            var intervals = Intervals.GetIntervals(valuesFromFront.start, valuesFromFront.end, valuesFromFront.step);

            var weightFromFile = await FromCsvFile.Read(file);

            if (!weightFromFile.result)
                return Results.BadRequest("Ошибка чтения файла, проверьте его содержимое.");

            var intervalsFrequencyFiltred = Intervals.GetIntervalsFrequency(weightFromFile.weight, intervals.startIntervals, intervals.endIntervals);

            var populationOfTheData = await PopulationOfData.CreatePopulationOfData(intervals.startIntervals, intervals.endIntervals, intervalsFrequencyFiltred, valuesFromFront.probability);

            var result = await ValidationNormalDestribution.PopulationOfTheDataIsValid(populationOfTheData.PirsonsValuesSum, populationOfTheData.PirsonsMean);

            Doc.CreateNewDoc(populationOfTheData, valuesFromFront.probability, result);

            return Results.Ok(new Response(populationOfTheData, result));
        }
    }
}
