namespace NDHTAPI.NormalDestribution
{
    public class ValidationNormalDestribution
    {
        /// <summary>
        /// Метод принятия или отвержения гипотезы о нормальном распределении
        /// </summary>
        /// <param name="observablePirson">Наблюдаемое значение критерия Пирсона</param>
        /// <param name="critPirson">Критическое значение критерия Пирсона</param>
        /// <returns>Принятия или отвержения гипотезы о нормальном распределении</returns>
        public static string PopulationOfTheDataIsValid(double observablePirson, double critPirson)
        {
            if (observablePirson < critPirson)
                return "Генеральная совокупность распределена нормально";
            else
                return "Генеральная совокупность распределена не нормально";
        }
    }
}
