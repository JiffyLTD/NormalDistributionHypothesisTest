namespace NDHTAPI.Models
{
    public class PopulationOfData
    {
        /// <summary>
        /// Список старта интервалов
        /// </summary>
        public double[] StartIntervals { get; set; }

        /// <summary>
        /// Список средних интервалов(xi)
        /// </summary>
        public double[] MiddleIntervals { get; set; }

        /// <summary>
        /// Список конца интервалов
        /// </summary>
        public double[] EndIntervals { get; set; } 

        /// <summary>
        /// Список частот интервалов(ni)
        /// </summary>
        public double[] IntervalsFrequency { get; set; }
        /// <summary>
        /// Объем выборки(n)
        /// </summary>
        public double IntervalsFrequencySum { get; set; }

        /// <summary>
        /// Длина частичного интервала
        /// </summary>
        public double PartialIntervalLength { get; set; }

        /// <summary>
        /// Список выборочных средних(xini)
        /// </summary>
        public double[] SampleMeans { get; set; }

        /// <summary>
        /// Выборочное среднее(xe)
        /// </summary>
        public double SampleMean { get; set; }

        /// <summary>
        /// Список выборочных средних квадратических отклонений(x2ini)
        /// </summary>
        public double[] StandartDeviations { get; set; }

        /// <summary>
        /// Выборочное среднее квадратическое отклонение(e)
        /// </summary>
        public double StandartDeviation { get; set; }

        /// <summary>
        /// Список стандартизированных значений(zi)
        /// </summary>
        public double[] StandartizeValues { get; set; }

        /// <summary>
        /// Значение функции плнотности стандартного нормального распределения (f(zi))
        /// </summary>
        public double[] StandartNormalDestribution { get; set; }

        /// <summary>
        /// Теоритические частоты (ni)
        /// </summary>
        public double[] TheoreticalFrequencies { get; set; }

        /// <summary>
        /// Критерий Пирсона для каждого интервала
        /// </summary>
        public double[] PirsonsValues { get; set; }

        /// <summary>
        /// Общий наблюдаемый критерий Пирсона
        /// </summary>
        public double PirsonsValuesSum { get; set; }

        /// <summary>
        /// Критическое значение
        /// </summary>
        public double PirsonsMean { get; set; }
    }
}
