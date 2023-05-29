using Microsoft.Extensions.Primitives;
using System.Globalization;

namespace NDHTAPI.DobuleParseHand
{
    public class DoubleParse
    {
        /// <summary>
        /// Метод преобразования данных с фронта в double
        /// </summary>
        /// <param name="probabilityFromFront">Уровень значимости с фронта</param>
        /// <param name="startFromFront">Начало интервалов с фронта</param>
        /// <param name="endFromFront">Конец интервалов с фронта</param>
        /// <param name="stepFromFront">Шаг интервала с фронта</param>
        /// <returns>Double значения всех данных с фронта</returns>
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
