namespace NDHTAPI.NormalDestribution
{
    public class Intervals
    {
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
