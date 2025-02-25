import {
  DatePickerProvider,
  useDatePickerContext,
} from "@rehookify/datepicker";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Years } from "./components/years";
import { Months } from "./components/months";
import { Button } from "./components/button";
import { Calendar } from "./components/callendar";

function Root() {
  const {
    data: { calendars, formattedDates },
    propGetters: { addOffset, subtractOffset },
  } = useDatePickerContext();

  return (
    <div className="block p-4 border border-slate-300 rounded shadow-xs shadow shadow-slate-300">
      <h1 className="text-2xl w-full text-center mb-6">{formattedDates[0]}</h1>
      <main className="grid grid-cols-2 gap-x-6 gap-y-6">
        <Calendar
          prevButton={
            <Button className="w-8" {...subtractOffset({ months: 1 })}>
              <ChevronLeft />
            </Button>
          }
          calendar={calendars[1]}
        />
        <Calendar
          nextButton={
            <Button className="w-8" {...addOffset({ months: 1 })}>
              <ChevronRight />
            </Button>
          }
          calendar={calendars[0]}
        />
        <Months />
        <Years />
      </main>
    </div>
  );
}

export const Main = () => {
  const [selectedDates, onDatesChange] = useState<Date[]>([]);
  return (
    <DatePickerProvider
      config={{
        selectedDates,
        onDatesChange,
        dates: {
          mode: "multiple",
          toggle: true,
        },
        calendar: {
          startDay: 1,
          offsets: [-1],
        },
      }}
    >
      <Root />
    </DatePickerProvider>
  );
};
