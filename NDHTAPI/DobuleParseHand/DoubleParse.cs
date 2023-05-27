using Microsoft.Extensions.Primitives;
using System.Globalization;

namespace NDHTAPI.DobuleParseHand
{
    public class DoubleParse
    {
        public static (double probability, double start, double end, double step) DoubleParseValues(StringValues probabilityFromFront, StringValues startFromFront, StringValues endFromFront, StringValues stepFromFront)
        {
            double probability;
            double.TryParse(probabilityFromFront, NumberStyles.Any, CultureInfo.InvariantCulture, out probability);
            double start;
            double.TryParse(startFromFront, NumberStyles.Any, CultureInfo.InvariantCulture, out start);
            double end;
            double.TryParse(endFromFront, NumberStyles.Any, CultureInfo.InvariantCulture, out end);
            double step;
            double.TryParse(stepFromFront, NumberStyles.Any, CultureInfo.InvariantCulture, out step);

            return (probability, start, end, step);
        }
    }
}
