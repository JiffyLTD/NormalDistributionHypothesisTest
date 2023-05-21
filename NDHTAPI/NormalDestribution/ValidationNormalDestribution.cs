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
        public static Task<string> PopulationOfTheDataIsValid(double observablePirson, double critPirson)
        {
            return observablePirson < critPirson ? Task.FromResult("Генеральная совокупность распределена нормально") : Task.FromResult("Генеральная совокупность распределена не нормально");
        }
    }
}
