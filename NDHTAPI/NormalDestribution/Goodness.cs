using MathNet.Numerics;

namespace NDHTAPI.NormalDestribution
{
    public class Goodness
    {
        /// <summary>
        /// Метод нахождения x^2(хи) наблюдаемое значение критерия Пирсона
        /// </summary>
        /// <param name="empiricalFrequency">Эмпирические частоты (ni)</param>
        /// <param name="theoreticalFrequency">Теоретические частоты (n^ti)</param>
        /// <returns>Критерий Пирсона для каждого интервала и общий наблюдаемый критерий Пирсона</returns>
        public static (double[] pearsonValues, double pearsonValue) PearsonObservable(double[] empiricalFrequency, double[] theoreticalFrequency)
        {
            double[] pearsonValues = new double[empiricalFrequency.Length];

            for(int i = 0; i < empiricalFrequency.Length; i++)
            {
                pearsonValues[i] = Math.Pow(empiricalFrequency[i] - theoreticalFrequency[i], 2) / theoreticalFrequency[i];
            }

            var pearsonValue = NormalDestribution.GetSum(pearsonValues);

            return (pearsonValues, pearsonValue);
        }

        /// <summary>
        /// Критическое значение по критерию Пирсона
        /// </summary>
        /// <param name="probability">Вероятность(Уровень значимости)</param>
        /// <param name="degreesOfFreedom">Число степеней свободы</param>
        /// <returns>Критическое значение</returns>
        public static double ChiInv(double probability, int degreesOfFreedom)
        {
            // Вычисление обратной функции ошибки erf^-1(x) из класса Math
            double inverseErf = Math.Sqrt(2) * SpecialFunctions.ErfInv(2 * probability - 1);

            // Вычисление обратной функции распределения хи-квадрат
            double chiInv = degreesOfFreedom * Math.Pow(1 - 2 / (9 * degreesOfFreedom) + inverseErf * Math.Sqrt(2 / (9 * degreesOfFreedom)), 3);

            // Возвращаем значение хи-квадрат
            return chiInv;
        }
    }
}
