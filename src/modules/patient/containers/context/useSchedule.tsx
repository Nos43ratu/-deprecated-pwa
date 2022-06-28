import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useUser } from "../../../../shared/context/useUser";
import { useQuery } from "react-query";
import { getCalendar } from "../../../../shared/api/getCalendar";

type DateType = {
  d: Date;
  iso: string;
  date: number;
  day: string;
};

interface ScheduleContextType {
  activeDate: DateType | null;
  setActiveDate: (d: DateType) => void;
  dates: DateType[];
  receptId: string;
  setReceptId: (r: string) => void;
  data?:
    | void
    | {
        days: string[];
        times: string[];
        _id: string;
        frequency: string;
        startDate: string;
        endDate: string;
        receptId: string;
        userId: string;
        createdAt: string;
        updatedAt: string;
      }[];
  isLoading: boolean;
  refetch: () => void;
}

const ScheduleContext = createContext<ScheduleContextType>(
  {} as ScheduleContextType
);

interface ScheduleContextProviderPropsType {
  children: ReactNode;
}

export const ScheduleContextProvider: FC<ScheduleContextProviderPropsType> = ({
  children,
}) => {
  const [activeDate, setActiveDate] = useState<DateType | null>(null);
  const [receptId, setReceptId] = useState("");

  const { id } = useUser();

  const { data, isLoading, refetch } = useQuery(
    "calendar",
    () => getCalendar({ id }),
    { enabled: !!id }
  );

  useEffect(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    setActiveDate({
      d: date,
      day: new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date),
      date: date.getDate(),
      iso: date.toISOString(),
    });
  }, []);

  const dates = useMemo(() => {
    const currentDate = new Date().getDate();

    const dates = [];

    for (let i = 0; i < 30; i++) {
      let day = new Date();
      day.setDate(currentDate + i);
      day.setHours(0, 0, 0, 0);
      dates.push(day);
    }

    return dates.map((d) => ({
      d,
      iso: d.toISOString(),
      date: d.getDate(),
      day: new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(d),
    }));
  }, []);

  const { Provider } = ScheduleContext;

  return (
    <Provider
      value={{
        activeDate,
        setActiveDate,
        dates,
        receptId,
        setReceptId,
        data,
        isLoading,
        refetch,
      }}
    >
      {children}
    </Provider>
  );
};

export const useSchedule = () => useContext(ScheduleContext);
