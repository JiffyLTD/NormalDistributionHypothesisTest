namespace NDHTAPI.NormalDestribution
{
    public class NormalDestribution
    {
        /// <summary>
        /// Метод подсчета суммы массива
        /// </summary>
        /// <param name="arr">Массив сумма элементов которого нам нужна</param>
        /// <returns>Сумма</returns>
        public static double GetSum(double[] arr)
        {
            return arr.Sum(x => x);
        }

        /// <summary>
        /// Метод получения длины частичного интервала (h)
        /// </summary>
        /// <param name="startInterval">Список старта интервалов</param>
        /// <param name="endInterval">Список конца интервалов</param>
        /// <returns>Длина частичного интервала(h)</returns>
        public static double GetPartialIntervalLength(double[] startInterval, double[] endInterval)
        {
            return startInterval[0] - endInterval[0];
        }

        /// <summary>
        /// Метод получения середины интервалов (xi)
        /// </summary>
        /// <param name="startInterval">Список старта интервалов</param>
        /// <param name="endInterval">Список конца интервалов</param>
        /// <returns>Список середин интервалов(xi)</returns>
        public static double[] GetMiddleIntervals(double[] startInterval, double[] endInterval)
        {
            double[] middleInterval = new double[startInterval.Length];

            for (int i = 0; i < startInterval.Length; i++)
            {
                middleInterval[i] = (startInterval[i] + endInterval[i]) / 2;
            }

            return middleInterval;
        }

        /// <summary>
        /// Метод получения выборочного среднего (xini, xe)
        /// </summary>
        /// <param name="intervalFrequency">Список частот интервалов</param>
        /// <param name="middleIntervals">Список середин интервалов</param>
        /// <param name="sampleSize">Объем выборки</param>
        /// <returns>Выборочное среднее(xini, xe)</returns>
        public static (double[] sampleMeans, double sampleMean) GetSampleMean(double[] intervalFrequency, double[] middleIntervals, double sampleSize)
        {
            double[] sampleMeans = new double[intervalFrequency.Length];

            for (int i = 0; i < intervalFrequency.Length; i++)
            {
                sampleMeans[i] = intervalFrequency[i] * middleIntervals[i];
            }

            var sampleMean = GetSum(sampleMeans) / sampleSize;

            return (sampleMeans, sampleMean);
        }

        /// <summary>
        /// Метод получения выборочного среднего квадратичного отклонения (x2ini, e)
        /// </summary>
        /// <param name="intervalFrequency">Список частот интервалов</param>
        /// <param name="middleIntervals">Список середин интервалов</param>
        /// <param name="sampleSize">Объем выборки</param>
        /// <param name="sampleMean">Выборочное среднее</param>
        /// <returns>Выборочное среднее квадратическое отклонение(x2ini, e)</returns>
        public static (double[], double stdDeviation) GetStandartDeviation(double[] intervalFrequency, double[] middleIntervals, double sampleSize, double sampleMean)
        {
            double[] sampleMeans = new double[intervalFrequency.Length];

            for (int i = 0; i < intervalFrequency.Length; i++)
            {
                sampleMeans[i] = Math.Pow(intervalFrequency[i], 2) * middleIntervals[i];
            }

            var stdDeviation = Math.Sqrt((GetSum(sampleMeans) / sampleSize) - Math.Pow(sampleMean, 2));

            return (sampleMeans, stdDeviation);
        }

        /// <summary>
        /// Метод получения (zi) стандартизированных значений (xi)
        /// </summary>
        /// <param name="middleIntervals">Список середин интервалов</param>
        /// <param name="sampleMean">Выборочное среднее отклонение</param>
        /// <param name="stdDeviation">Выборочное среднее квадратическое отклонение</param>
        /// <returns>Стандартизированные значения(zi)</returns>
        public static double[] StandartizeValues(double[] middleIntervals, double sampleMean, double stdDeviation)
        {
            double[] stdValues = new double[middleIntervals.Length];

            for(int i = 0;i < middleIntervals.Length; i++)
            {
                stdValues[i] = (middleIntervals[i] - sampleMean) / stdDeviation;
            }

            return stdValues;
        }

        /// <summary>
        /// Метод получения начение функции плнотности стандартного нормального распределения (f(zi))
        /// </summary>
        /// <param name="stdValues">Стандартизированные значения(zi)</param>
        /// <returns>Значение функции плнотности стандартного нормального распределения (f(zi))</returns>
        public static double[] GetStandartNormalDestribution(double[] stdValues)
        {
            double[] stdNormalDestribution = new double[stdValues.Length];
            double k = 1 / (Math.Sqrt(2 * Math.PI));

            for (int i = 0; i < stdValues.Length; i++)
            {
                stdNormalDestribution[i] = Math.Exp(-0.5 * Math.Pow(stdValues[i], 2)) * k;
            }

            return stdNormalDestribution;
        }

        /// <summary>
        /// Метод получения теоретических частот (n^ti)
        /// </summary>
        /// <param name="partialIntervalLength">Длина частотного интервала</param>
        /// <param name="sampleSize">Объем выборки</param>
        /// <param name="stdDeviation">Выборочное среднее квадратическое отклонение</param>
        /// <param name="stdNormalDestribution">Значение функции плнотности стандартного нормального распределения</param>
        /// <returns>Теоритические частоты (ni)</returns>
        public static double[] GetTheoreticalFrequencies(double partialIntervalLength, double sampleSize, double stdDeviation, double[] stdNormalDestribution)
        {
            double[] theoreticalFrequenices = new double[stdNormalDestribution.Length];

            for(int i = 0; i < theoreticalFrequenices.Length; i++)
            {
                theoreticalFrequenices[i] = (partialIntervalLength * sampleSize / stdDeviation) * stdNormalDestribution[i];
            }

            return theoreticalFrequenices;
        }
    }
}
