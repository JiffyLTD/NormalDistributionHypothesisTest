namespace NDHTAPI.Models
{
    using NDHTAPI.NormalDestribution;
    public class PopulationOfData
    {
        private PopulationOfData(double[] startIntervals, double[] endIntervals, double[] intervalsFrequency)
        {
            Id = Guid.NewGuid();
            StartIntervals = startIntervals;
            EndIntervals = endIntervals;
            IntervalsFrequency = intervalsFrequency;
        }

        /// <summary>
        /// Метод создания объекта PopulationOfData
        /// </summary>
        /// <param name="startIntervals">Список старта интервалов</param>
        /// <param name="endIntervals">Список конца интервалов</param>
        /// <param name="intervalsFrequency">Список частот интервалов(ni)</param>
        /// <param name="probability">Уровень значимости</param>
        /// <returns></returns>
        public static async Task<PopulationOfData> CreatePopulationOfData(double[] startIntervals, double[] endIntervals, double[] intervalsFrequency, double probability)
        {
            var pop = new PopulationOfData(startIntervals, endIntervals, intervalsFrequency);

            var middleIntervals = await NormalDestribution.GetMiddleIntervals(startIntervals, endIntervals);
            pop.MiddleIntervals = middleIntervals;

            var partialIntervalLength = await NormalDestribution.GetPartialIntervalLength(startIntervals, endIntervals);
            pop.PartialIntervalLength = partialIntervalLength;

            var sampleSize = await NormalDestribution.GetSum(intervalsFrequency);
            pop.IntervalsFrequencySum = sampleSize;

            var sample = await NormalDestribution.GetSampleMean(intervalsFrequency, middleIntervals, sampleSize);
            pop.SampleMeans = sample.sampleMeans;
            pop.SampleMean = sample.sampleMean;

            var stdDev = await NormalDestribution.GetStandartDeviation(intervalsFrequency, middleIntervals, sampleSize, sample.sampleMean);
            pop.StandartDeviations = stdDev.stdDeviations;
            pop.StandartDeviation = stdDev.stdDeviation;

            var stdValues = await NormalDestribution.GetStandartizeValues(middleIntervals, sample.sampleMean, stdDev.stdDeviation);
            pop.StandartizeValues = stdValues;

            var stdNormalDestribution = await NormalDestribution.GetStandartNormalDestribution(stdValues);
            pop.StandartNormalDestribution = stdNormalDestribution;

            var theoreticalFrequencies = await NormalDestribution.GetTheoreticalFrequencies(partialIntervalLength, sampleSize, stdDev.stdDeviation, stdNormalDestribution);
            pop.TheoreticalFrequencies = theoreticalFrequencies;

            var pirsonsValues = await Goodness.PearsonObservable(intervalsFrequency, theoreticalFrequencies);
            pop.PirsonsValues = pirsonsValues.pearsonValues;
            pop.PirsonsValuesSum = pirsonsValues.pearsonValue;

            var degreesOfFreedom = theoreticalFrequencies.Length - 2 - 1;
            var pirsonMean = await Goodness.ChiInv(probability, degreesOfFreedom);
            pop.PirsonsMean = pirsonMean;

            pop.DegreesOfFreedom = degreesOfFreedom;

            return pop;
        }

        /// <summary>
        /// Id вычислений
        /// </summary>
        public Guid Id { get; private set; }

        /// <summary>
        /// Список старта интервалов
        /// </summary>
        public double[] StartIntervals { get; private set; }

        /// <summary>
        /// Список средних интервалов(xi)
        /// </summary>
        public double[] MiddleIntervals { get; private set; }

        /// <summary>
        /// Список конца интервалов
        /// </summary>
        public double[] EndIntervals { get; private set; } 

        /// <summary>
        /// Список частот интервалов(ni)
        /// </summary>
        public double[] IntervalsFrequency { get; private set; }
        /// <summary>
        /// Объем выборки(n)
        /// </summary>
        public double IntervalsFrequencySum { get; private set; }

        /// <summary>
        /// Длина частичного интервала
        /// </summary>
        public double PartialIntervalLength { get; private set; }

        /// <summary>
        /// Список выборочных средних(xini)
        /// </summary>
        public double[] SampleMeans { get; private set; }

        /// <summary>
        /// Выборочное среднее(xe)
        /// </summary>
        public double SampleMean { get; private set; }
         
        /// <summary>
        /// Список выборочных средних квадратических отклонений(x2ini)
        /// </summary>
        public double[] StandartDeviations { get; private set; }

        /// <summary>
        /// Выборочное среднее квадратическое отклонение(e)
        /// </summary>
        public double StandartDeviation { get; private set; }

        /// <summary>
        /// Список стандартизированных значений(zi)
        /// </summary>
        public double[] StandartizeValues { get; private set; }

        /// <summary>
        /// Значение функции плнотности стандартного нормального распределения (f(zi))
        /// </summary>
        public double[] StandartNormalDestribution { get; private set; }

        /// <summary>
        /// Теоритические частоты (ni)
        /// </summary>
        public double[] TheoreticalFrequencies { get; private set; }

        /// <summary>
        /// Критерий Пирсона для каждого интервала
        /// </summary>
        public double[] PirsonsValues { get; private set; }

        /// <summary>
        /// Общий наблюдаемый критерий Пирсона
        /// </summary>
        public double PirsonsValuesSum { get; private set; }

        /// <summary>
        /// Критическое значение
        /// </summary>
        public double PirsonsMean { get; private set; }

        /// <summary>
        /// Число степеней свободы
        /// </summary>
        public int DegreesOfFreedom { get; private set; }
    }
}
