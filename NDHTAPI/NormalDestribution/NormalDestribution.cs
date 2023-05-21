namespace NDHTAPI.NormalDestribution
{
    public class NormalDestribution
    {
        /// <summary>
        /// Метод подсчета суммы массива
        /// </summary>
        /// <param name="arr">Массив сумма элементов которого нам нужна</param>
        /// <returns>Сумма</returns>
        public static  Task<double> GetSum(double[] arr)
        {
            return Task.FromResult(arr.Sum(x => x));
        }

        /// <summary>
        /// Метод получения длины частичного интервала (h)
        /// </summary>
        /// <param name="startInterval">Список старта интервалов</param>
        /// <param name="endInterval">Список конца интервалов</param>
        /// <returns>Длина частичного интервала(h)</returns>
        public static Task<double> GetPartialIntervalLength(double[] startInterval, double[] endInterval)
        {
            return Task.FromResult(Math.Abs(startInterval[0] - endInterval[0]));
        }

        /// <summary>
        /// Метод получения середины интервалов (xi)
        /// </summary>
        /// <param name="startInterval">Список старта интервалов</param>
        /// <param name="endInterval">Список конца интервалов</param>
        /// <returns>Список середин интервалов(xi)</returns>
        public static Task<double[]> GetMiddleIntervals(double[] startInterval, double[] endInterval)
        {
            double[] middleInterval = new double[startInterval.Length];

            for (int i = 0; i < startInterval.Length; i++)
            {
                middleInterval[i] = (startInterval[i] + endInterval[i]) / 2;
            }

            return Task.FromResult(middleInterval);
        }

        /// <summary>
        /// Метод получения выборочного среднего (xini, xe)
        /// </summary>
        /// <param name="intervalFrequency">Список частот интервалов</param>
        /// <param name="middleIntervals">Список середин интервалов</param>
        /// <param name="sampleSize">Объем выборки</param>
        /// <returns>Выборочное среднее(xini, xe)</returns>
        public static async Task<(double[] sampleMeans, double sampleMean)> GetSampleMean(double[] intervalFrequency, double[] middleIntervals, double sampleSize)
        {
            double[] sampleMeans = new double[intervalFrequency.Length];

            for (int i = 0; i < intervalFrequency.Length; i++)
            {
                sampleMeans[i] = intervalFrequency[i] * middleIntervals[i];
            }

            var sampleMean = await GetSum(sampleMeans) / sampleSize;

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
        public static async Task<(double[] stdDeviations, double stdDeviation)> GetStandartDeviation(double[] intervalFrequency, double[] middleIntervals, double sampleSize, double sampleMean)
        {
            double[] sampleMeans = new double[intervalFrequency.Length];

            for (int i = 0; i < intervalFrequency.Length; i++)
            {
                sampleMeans[i] = Math.Pow(middleIntervals[i], 2) * intervalFrequency[i];
            }

            var stdDeviation = Math.Sqrt((await GetSum(sampleMeans) / sampleSize) - Math.Pow(sampleMean, 2));

            return (sampleMeans, stdDeviation);
        }

        /// <summary>
        /// Метод получения (zi) стандартизированных значений (xi)
        /// </summary>
        /// <param name="middleIntervals">Список середин интервалов</param>
        /// <param name="sampleMean">Выборочное среднее отклонение</param>
        /// <param name="stdDeviation">Выборочное среднее квадратическое отклонение</param>
        /// <returns>Стандартизированные значения(zi)</returns>
        public static Task<double[]> GetStandartizeValues(double[] middleIntervals, double sampleMean, double stdDeviation)
        {
            double[] stdValues = new double[middleIntervals.Length];

            for(int i = 0;i < middleIntervals.Length; i++)
            {
                stdValues[i] = (middleIntervals[i] - sampleMean) / stdDeviation;
            }

            return Task.FromResult(stdValues);
        }

        /// <summary>
        /// Метод получения начение функции плнотности стандартного нормального распределения (f(zi))
        /// </summary>
        /// <param name="stdValues">Стандартизированные значения(zi)</param>
        /// <returns>Значение функции плнотности стандартного нормального распределения (f(zi))</returns>
        public static Task<double[]> GetStandartNormalDestribution(double[] stdValues)
        {
            double[] stdNormalDestribution = new double[stdValues.Length];
            double k = 1 / (Math.Sqrt(2 * Math.PI));

            for (int i = 0; i < stdValues.Length; i++)
            {
                stdNormalDestribution[i] = Math.Exp(-0.5 * Math.Pow(stdValues[i], 2)) * k;
            }

            return Task.FromResult(stdNormalDestribution);
        }

        /// <summary>
        /// Метод получения теоретических частот (n^ti)
        /// </summary>
        /// <param name="partialIntervalLength">Длина частотного интервала</param>
        /// <param name="sampleSize">Объем выборки</param>
        /// <param name="stdDeviation">Выборочное среднее квадратическое отклонение</param>
        /// <param name="stdNormalDestribution">Значение функции плнотности стандартного нормального распределения</param>
        /// <returns>Теоритические частоты (ni)</returns>
        public static Task<double[]> GetTheoreticalFrequencies(double partialIntervalLength, double sampleSize, double stdDeviation, double[] stdNormalDestribution)
        {
            double[] theoreticalFrequenices = new double[stdNormalDestribution.Length];

            for(int i = 0; i < theoreticalFrequenices.Length; i++)
            {
                theoreticalFrequenices[i] = (partialIntervalLength * sampleSize / stdDeviation) * stdNormalDestribution[i];
            }

            return Task.FromResult(theoreticalFrequenices);
        }
    }
}
