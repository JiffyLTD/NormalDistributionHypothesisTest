namespace NDHTAPI.NormalDestribution
{
    public class Intervals
    {
        /// <summary>
        /// Метод получения всех интервалов начала и конца
        /// </summary>
        /// <param name="start">Нижний предел интервалов</param>
        /// <param name="end">Верхний предел интервалов</param>
        /// <param name="step">Шаг интервала</param>
        /// <returns>Массивы началов и концов интервалов</returns>
        public static (double[] startIntervals, double[] endIntervals) GetIntervals(double start, double end, double step)
        {
            List<double> startIntervals = new();
            List<double> endIntervals = new();

            for (double i = start; i < end;)
            {
                startIntervals.Add(i);
                i += step;
            }

            for (double i = start; i <= end;)
            {
                i += step;
                endIntervals.Add(i);
            }

            return (startIntervals.ToArray(), endIntervals.ToArray());
        }

        /// <summary>
        /// Метод получения частот интервалов
        /// </summary>
        /// <param name="weigth">Вес упаковок</param>
        /// <param name="startIntervals">Начало интервалов</param>
        /// <param name="endIntervals">Конец интервалов</param>
        /// <returns>Массив частот интервалов</returns>
        public static double[] GetIntervalsFrequency(double[] weigth, double[] startIntervals, double[] endIntervals)
        {
            List<double> intervalsFrequency = new();

            for (int i = 0; i < startIntervals.Length; i++)
            {
                int count = 0;

                for (int j = 0; j < weigth.Length; j++)
                {
                    if (i == startIntervals.Length - 1)
                    {
                        if (startIntervals[i] <= weigth[j] && weigth[j] <= endIntervals[i]) 
                            count++;
                    }
                    else
                    {
                        if (startIntervals[i] <= weigth[j] && weigth[j] < endIntervals[i]) 
                            count++;
                    }
                }

                intervalsFrequency.Add(count);
            }

            return intervalsFrequency.ToArray();
        }
    }
}
